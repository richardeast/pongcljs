(ns pongcljs.puck
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

;; Should be in a Score ns
(defn player-scored?
  "They score if they have gone over the horizon"
  [y]
  (< y (game-world/horizon-height)))

;; Should be in a Score ns
(defn opponent-scored?
  "They score if they have gone over the bottom of screen"
  [y]
  false)

(defn speed
  ""
  [state]
  -0.7
  )


(defn update-y [state]
  (let [{{x :x y :y} :puck} state]
    (cond
      (player-scored? y) (:y (game-world/centre))
      :else
      (+ y (speed state)))))

(defn update-x [state]
  (let [{{x :x y :y} :puck} state]
    (cond
      (< y (game-world/horizon-height)) (:x (game-world/centre))
      :else
      (+ x (speed state)))))

(defn update-puck [state]
  (let [{{start-x :x start-y :y} :puck} state
        x (update-x state)
        y (update-y state)]
    (assoc state :puck {:x x
                        :y y})))

(defn draw-puck [state]
  (let [{{:keys [x y]} :puck} state]
    (hex/fill styles/color-b)
    (q/ellipse x y 50 25)
    (q/ellipse x (- y 5) 50 25)))
