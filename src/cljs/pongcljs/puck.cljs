(ns pongcljs.puck
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

(def away -)    ;; away from the player
(def towards +) ;; towards the player

(def change-direction #(assoc-in %1 [:puck :direction] %2))

(defn repulse-puck
  "send puck away from the player's side of the board"
  [state] (change-direction state away))

(defn attract-puck
  "send puck towards the player's side of the board"
  [state] (change-direction state towards))

(defn toggle-direction
  "Update the direction of the puck. If it's going away, flip towards and visa-versa"
  [state]
  (let [d (get-in state [:puck :direction])
        toggle (if (= d away) towards
                              away)]
    (change-direction state toggle)))

(defn speed
  ""
  [state]
  ;;TODO need to add some friction to slow speedy pucks down over time,
  ;; but never to zero. It still needs some base speed otherwise game would be dull
  (let [d (get-in state [:puck :direction])]
    (d 1)))

(defn update-y [state]
  (let [y (get-in state [:puck :pos :y])]
    (+ y -0.07)
    (+ y (speed state))))

(defn update-x [state]
  (let [x (get-in state [:puck :pos :x])]
    (+ x -0.07)))

;;TODO this is too subtle
(defn perspective-multiplier
  "Make the puck smaller as it goes away"
  [y]
  (* 15
     (/ y (q/height))))

;;TODO update the width height here.
;; so it's easier to monitor.
(defn update [state]
  (let [x (update-x state)
        y (update-y state)]
    (assoc-in state [:puck :pos] {:x x
                                  :y y})))

(defn reset-in-centre
  "Puts the puck state in the centre of the board. This function is called outside of this namespace, such as when a player scores."
  [state]
  (assoc-in state [:puck :pos] (game-world/centre)))

;;TODO remove perspective-multiplier when it's used in update-puck
(defn draw [state]
  (let [puck (:puck state)
        {{:keys [x y]} :pos} puck
         {h :height w :width d :depth} puck]
    (hex/fill (styles/color-b state))
    (q/ellipse x
               y
               (+ w (perspective-multiplier y))
               (+ h (perspective-multiplier y))
               )
    (q/ellipse x (- y d)
               (+ w (perspective-multiplier y))
               (+ h (perspective-multiplier y))

               )))
