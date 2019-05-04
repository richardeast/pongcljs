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

(defn update-player
  [state]
  (assoc-in state [:player :pos] {:x (mouse-x-pos)
                                  :y (mouse-y-pos)}))

(defn draw-player
  "The player is a pong bat, but could be a character like Mario or Space Harrier"
  [state]
  ;; (q/fill 10 200 4 90)
  (hex/fill styles/color-a 200)
  (let [{x :x y :y} (get-in state [:player :pos])
        {w :width h :height} (get-in state [:paddle])]
    (q/rect x y w h)))
