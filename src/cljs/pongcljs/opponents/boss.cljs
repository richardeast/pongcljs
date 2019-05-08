(ns pongcljs.opponents.boss
  (:require [quil.core :as q :include-macros true]
            [pongcljs.styles :as styles]
            [pongcljs.hex-rgb :as hex]))

(defn update-boss [state]
  (let [w (q/width)
        {{boss-angle :angle} :boss} state
        paddle-width (get-in state [:paddle :width])
        scalar (* w 0.2) ;; size up the paddle so it can run across the board
        speed 20

        x (-> boss-angle
              q/radians
              (/ 10)                 ;; this affects the number of oscillations it makes
              q/sin
              (* scalar)             ;; size up the paddle so it can run across the board
              (+ (/ w 2))            ;; moves it across so it can play in the centre of the board
              (- (/ paddle-width 2)) ;; a slight offset to centre the paddle
              )

        y (-> boss-angle
              q/radians
              (/ 2)      ;; this affects the number of oscillations it makes
              q/sin
              (/ 5.5)    ;; the smaller the number the bigger the up and down movement
              (* scalar) ;; size up the paddle so it can run across the board
              (+ 110)    ;; move it down
              )]
    (assoc state :boss {:pos {:x x
                              :y y}
                  :angle (+ boss-angle speed)})))

(defn draw-boss
  "The opponent"
  [state]
  (hex/fill styles/color-b)
  (let [{x :x y :y} (get-in state [:boss :pos])
        {w :width h :height} (get-in state [:paddle])]
    (q/rect x y w h)))
