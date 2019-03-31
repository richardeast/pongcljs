(ns pongcljs.player
  (:require [quil.core :as q :include-macros true]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

(defn mouse-x-pos []
  (let [m (q/mouse-x)
        w (q/width)]
    (cond
      (< m 10) 10
      (> m w) w
      :else m)))

(defn mouse-y-pos []
  (let [m (q/mouse-y)
        h (q/height)
        ;; restrict player to a playing area they cannot go out of
        playing-area-max-height (* h (/ 2 3))]
    (cond
      (< m 10) 10
      (> m playing-area-max-height) m
      :else playing-area-max-height)))

(defn draw-player
  "The player is a pong bat, but could be a character like Mario or Space Harrier"
  [state]
  ;; (q/fill 10 200 4 90)
  (hex/fill styles/color-a 200)
  (let [x (mouse-x-pos)
        y (mouse-y-pos)
        w (:paddle-width state)
        h (:paddle-height state)]
    (q/rect x y w h)))
