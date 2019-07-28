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
  [state]
  (let [yspeed (get-in state [:universe :puck :speed :y])
        new-direction (cond
                        (neg? yspeed) yspeed
                        :else (* -1 yspeed))]
    (-> state
        (change-direction :away) ; TODO delete
        (assoc-in [:universe :puck :speed :y] new-direction))))

(defn attract-puck
  "send puck towards the player's side of the board"
  [state]
  (let [yspeed (get-in state [:universe :puck :speed :y])
        new-direction (cond
                        (neg? yspeed) (* -1 yspeed)
                        :else yspeed)]
    (-> state
        (change-direction :towwards) ; TODO delete
        (assoc-in [:universe :puck :speed :y] new-direction))))

(defn toggle-direction
  "Update the direction of the puck. If it's going away, flip towards and visa-versa"
  [state]
  (let [direction (get-in state [:universe :puck :functions :direction])
        yspeed (get-in state [:universe :puck :speed :y])
        toggle (if (= direction :away) :towards
                   :away)
        new-direction (* -1 yspeed)]
    (-> state
        (change-direction toggle)
        (assoc-in [:universe :puck :speed :y] new-direction))))

(defn yspeedx
  ""
  [state]
  ;;TODO need to add some friction to slow speedy pucks down over time,
  ;; but never to zero. It still needs some base speed otherwise game would be dull
;;  (log/info (get-in state [:universe :puck :functions ])  )
  (let [d (get-in state [:universe :puck :functions :direction])
        yspeed (get-in state [:universe :puck :speed :y])
        f (d directions)]
     ;;(f yspeed)
    yspeed))

;; but never to zero. It still needs some base speed otherwise game would be dull
;;  (log/info (get-in state [:universe :puck :functions ])  )

(defn update-y [state]
  (let [y (get-in state [:universe :puck :pos :y])
        yspeed (get-in state [:universe :puck :speed :y])]
    (+ y yspeed)))

(defn update-x [state]
  (let [x (get-in state [:universe :puck :pos :x])
        xspeed (get-in state [:universe :puck :speed :x])]
    (+ x xspeed)))

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
  (let [angle (if (zero? (rand-int 1))  ;; A little bit magic numbers. Re-work
                (rand (/ Math/PI 2))
                (- 0 (rand (/ Math/PI 2))))
        {xspeed :x yspeed :y} (get-in state [:universe :puck :speed])]
    (-> state
        (assoc-in [:universe :puck :pos] (game-world/centre state))
        (assoc-in [:universe :puck :angle] angle)
        (assoc-in [:universe :puck :speed] {:x (* xspeed (Math/cos angle))
                                            :y (* yspeed (Math/sin angle))}))))

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

