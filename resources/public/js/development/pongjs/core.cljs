(ns pongjs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongjs.hex-rgb :as hex]))

;; https://www.shutterstock.com/blog/neon-color-palettes
;; 13. Luminous Lines 19. Bright Bokeh 24. Beach Vibes
(def color-palettes {:geometric-glow ["#08F7FE" "#09FBD3" "#FE53BB" "#F5D300"]
                     :neon-lights ["#FFACFC" "#F148FB" "#7122FA" "#560A86"]
                     :psychedelic-pattern ["#75D5FD" "#B76CFD" "#FF2281" "#011FFD"]
                     :vivid-ferns ["#FDC7D7" "#FF9DE6" "#A5D8F3" "#E8E500"]
                     :luminous-lines ["#01FFC3" "#01FFFF" "#FFB3FD" "#9D72FF"]
                     :bright-bokeh ["#FCF340" "#7FFF00" "#FB33DB" "#0310EA"]})
(def color-palette (:bright-bokeh color-palettes))
(def color-a (first color-palette))
(def color-b (second color-palette))
(def color-c (nth color-palette 2))
(def color-d (last color-palette))

(defn update-boss [state]
  (let [w (q/width)
        boss (:boss state)
        boss-x (:x boss)
        boss-y (:y boss)
        paddle-width (:paddle-width state)
        boss-angle (:angle boss)
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
              )
        ]
    {:paddle-width paddle-width
     :paddle-height (:paddle-height state)
     :boss {:x x
            :y y
            :angle (+ boss-angle speed)
            }
     :dots (:dots state)}))

(defn update-game [state]
  (update-boss state))

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

(defn draw-ground [ ]
  (hex/fill color-c)
  (q/rect 0
          (/ (q/height) 6)
          (- (q/width) 0)
          (- (q/height) 0)))

(defn draw-tennis-court [ ]
  (let [h (q/height)
        w (q/width)
        centre-x (/ w 2)
        centre-y (/ h 2)
        court-top (/ h 6)]
    (q/fill 0)
    (hex/stroke color-a)
    (q/stroke-weight 3)
    (q/quad 200 court-top ;;x1, y1,
            650 court-top ;;x2, y2,
            w h ;;x3, y3,
            0 h ;;x4, y4
            )
    (q/line 172 (/ h 3.5) 677 (/ h 3.5))
    (q/ellipse centre-x centre-y 200 75)
    (q/line 55 (/ h 1.3) 794 (/ h 1.3))
    (q/stroke 0)
    (q/stroke-weight 1))
  )

(defn draw-player
  "The player is a pong bat, but could be a character like Mario or Space Harrier"
  [state]
  ;; (q/fill 10 200 4 90)
  (hex/fill color-a 200)
  (let [x (mouse-x-pos)
        y (mouse-y-pos)
        w (:paddle-width state)
        h (:paddle-height state)]
    (q/rect x y w h)))

(defn draw-boss
  "The opponent"
  [state]
  (hex/fill color-b)
  (let [boss (:boss state)
        x (:x boss)
        y (:y boss)
        w (:paddle-width state)
        h (:paddle-height state)]
    (q/rect x y w h)))

(defn draw-game-world []
  (draw-ground)
  (draw-tennis-court)
  )

(defn draw [state]
  (hex/background color-d)  ;;outline
  (draw-game-world)
  (draw-boss state)
  (draw-player state))

(defn setup []
  (q/frame-rate 60)
  (q/smooth)
  ;; The initial state
  {:paddle-width 100
   :paddle-height 30
   :boss {:x 0
          :y 0
          :angle 0.0
          :flip 4}
   :dots (list)})

(q/sketch
  :host "pongjs"
  :size [850 600]
  :setup setup
  :update update-game
  :draw draw
  :middleware [quil.middleware/fun-mode])
