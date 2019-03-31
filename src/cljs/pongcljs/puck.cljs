(ns pongcljs.puck
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

(defn update-puck [state]
  (let [{{start-x :x start-y :y} :puck} state
        x (- start-x 0.1)
        y (- start-y 0.1)]
    (assoc state :puck {:x x
                        :y y
                        :angle 0.0})))

(defn draw-puck [state]
  (let [{{:keys [x y]} :puck} state]
    (hex/fill styles/color-b)
    (q/ellipse x y 50 25)
    (q/ellipse x (- y 5) 50 25)))
