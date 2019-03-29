(ns pongcljs.opponents.boss
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.hex-rgb :as hex]))

(defn color-a [palette] (first palette))
(defn color-b [palette] (second palette))
(defn color-c [palette] (nth palette 2))
(defn color-d [palette] (last palette))

(defn update-boss [state]
  (let [w (q/width)
        {{boss-angle :angle} :boss} state
        {:keys [paddle-width]} state
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
    (assoc state :boss {:x x
                  :y y
                  :angle (+ boss-angle speed)})))

(defn draw-boss
  "The opponent"
  [state palette]
  (hex/fill (color-b palette))
  (let [boss (:boss state)
        x (:x boss)
        y (:y boss)
        w (:paddle-width state)
        h (:paddle-height state)]
    (q/rect x y w h)))
