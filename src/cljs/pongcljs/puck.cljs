(ns pongcljs.puck
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

(def away -)    ;; away from the player
(def towards +) ;; towards the player

(defn toggle-direction
  "Update the direction of the puck. If it's going away, flip towards and visa-versa"
  [state]
  (let [d (get-in state [:puck :direction])
        toggle (if (= d away) towards
                              away)]
   (assoc-in state [:puck :direction] toggle)))

(defn speed
  ""
  [state]
  (let [d (get-in state [:puck :direction])]
    (d 0.7)))

(defn update-y [state]
  (let [y (get-in state [:puck :pos :y])]
    (+ y -0.07)
    (+ y (speed state))
    ))

(defn update-x [state]
  (let [x (get-in state [:puck :pos :x])]
    (+ x -0.07)))

(defn update-puck [state]
  (let [x (update-x state)
        y (update-y state)]
    (assoc-in state [:puck :pos] {:x x
                                  :y y})))

(defn reset-in-centre
  "Puts the puck state in the centre of the board. This function is called outside of this namespace, such as when a player scores."
  [state]
  (let [d (:direction (:puck state)) ]
    (assoc state :puck {:pos (game-world/centre)
                        :direction d})))

(defn draw-puck [state]
  (let [puck (:puck state)
        {{:keys [x y]} :pos} puck]
    (hex/fill (styles/color-b state))
    (q/ellipse x y 50 25)
    (q/ellipse x (- y 5) 50 25)))
