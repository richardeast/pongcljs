(ns pongcljs.universe.puck
  (:refer-clojure :exclude [update])
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.logging :as log]
            [pongcljs.universe.game-world :as game-world]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

(def directions {:away -      ; away from the player
                 :towards +}) ; towards the player

(def change-direction #(assoc-in %1 [:universe :puck :functions :direction] %2))

(defn repulse-puck
  "send puck away from the player's side of the board"
  [state] (change-direction state :away))

(defn attract-puck
  "send puck towards the player's side of the board"
  [state] (change-direction state :towards))

(defn toggle-direction
  "Update the direction of the puck. If it's going away, flip towards and visa-versa"
  [state]
  (let [direction (get-in state [:universe :puck :functions :direction])
        toggle (if (= direction :away) :towards
                                       :away)]
    (change-direction state toggle)))

(defn speed
  ""
  [state]
  ;;TODO need to add some friction to slow speedy pucks down over time,
  ;; but never to zero. It still needs some base speed otherwise game would be dull
;;  (log/info (get-in state [:universe :puck :functions ])  )
  (let [d (get-in state [:universe :puck :functions :direction])
        speed (get-in state [:universe :puck :speed])
        f (d directions)]
    (f speed)))

(defn update-y [state]
  (let [y (get-in state [:universe :puck :pos :y])]
    (+ y (speed state))))

(defn update-x [state]
  (let [x (get-in state [:universe :puck :pos :x])]
    (+ x -0.07)))

;;TODO this is too subtle
(defn perspective-multiplier
  "Make the puck smaller as it goes away"
  [y]
  (* 15
     (/ y (q/height))))

(defn change-colors
  [state]
  (let [[col1 col2] (map #(styles/n->color state %) [1 4])]
    (-> state
        (assoc-in [:universe :puck :colors :fill-color] col1)
        (assoc-in [:universe :puck :colors :stroke-color] col2))))

;;TODO update the width height here.
;; so it's easier to monitor.
(defn update [state]
  (let [x (update-x state)
        y (update-y state)]
    (assoc-in state [:universe :puck :pos] {:x x
                                            :y y})))

(defn reset-in-centre
  "Puts the puck state in the centre of the board. This function is called outside of this namespace, such as when a player scores."
  [state]
  (assoc-in state [:universe :puck :pos] (game-world/centre)))

;;TODO remove perspective-multiplier when it's used in update-puck
(defn draw [state]
  (let [puck (get-in state [:universe :puck])
        {:keys [fill-color fill-transparency stroke-color stroke-weight]} (:colors puck)
        {{:keys [x y]} :pos} puck
        {diameter :diameter depth :depth} puck
        ;; Camera angles
        {{:keys [angle max-angle min-angle]} :camera} state
        h (if (< min-angle angle max-angle)
            (* diameter
               (/ (- 100 angle)
                  100))
            ;else
            diameter)
        d (if (< min-angle angle max-angle)
            (* depth
               (/ (- 100 angle)
                  100))
            ;else
            depth)]
    (hex/fill fill-color fill-transparency)
    (hex/stroke stroke-color)
    (q/stroke-weight stroke-weight)
    (q/ellipse x
               y
               (+ diameter (perspective-multiplier y))
               (+ h (perspective-multiplier y)))
    (q/ellipse x
               (- y d)
               (+ diameter (perspective-multiplier y))
               (+ h (perspective-multiplier y)))))

