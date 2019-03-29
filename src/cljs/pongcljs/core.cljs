(ns pongcljs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.game-world :as game-word]))

;; https://www.shutterstock.com/blog/neon-color-palettes
;; 25 Eye-Catching Neon Color Palettes to Wow Your Viewers by Alex Clem February 6, 2019
;; "Discover a neon color palette for every occasion, from bold party invitations to dramatic website designs. Get these hex color codes for the best neon hues."
;; TODO - move to an edn file and read in.
;; I'm lining up the css-hex codes to help identify typos.
(def color-palettes {:geometric-glow      ["#08F7FE" "#09FBD3" "#FE53BB" "#F5D300"]
                     :neon-lights         ["#FFACFC" "#F148FB" "#7122FA" "#560A86"]
                     :psychedelic-pattern ["#75D5FD" "#B76CFD" "#FF2281" "#011FFD"]
                     :vivid-ferns         ["#FDC7D7" "#FF9DE6" "#A5D8F3" "#E8E500"]
                     :abstract-wall       ["#00FECA" "#FDF200" "#FF85EA" "#7B61F8"]
                     :colorful-cottage    ["#FFD300" "#DE38C8" "#652EC7" "#33135C"]
                     :cosmic-burst        ["#3B27BA" "#E847AE" "#13CA91" "#FF9472"]
                     :pops-of-pink        ["#FFDEF3" "#FF61BE" "#3B55CE" "#35212A"]
                     :algave-glitch       ["#FDD400" "#FDB232" "#02B8A2" "#01535F"]
                     :fluorescent-fish    ["#FEC763" "#EA55B1" "#A992FA" "#00207F"]
                     :luminous-lines      ["#01FFC3" "#01FFFF" "#FFB3FD" "#9D72FF"]
                     :bright-bokeh        ["#FCF340" "#7FFF00" "#FB33DB" "#0310EA"]})
(def palette (:bright-bokeh color-palettes))
(def color-a (first palette))
(def color-b (second palette))
(def color-c (nth palette 2))
(def color-d (last palette))

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


(defn horizon-height []
  (/ (q/height) 6))


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


(defn update-puck [state]
  (let [{{start-x :x start-y :y} :puck} state
        x (- start-x 0.1)
        y (- start-y 0.1)]
    (assoc state :puck {:x x
                        :y y
                        :angle 0.0})))

(defn draw-puck [state]
  (let [{{:keys [x y]} :puck} state]
    (hex/fill color-b)
    (q/ellipse x y 50 25)
    (q/ellipse x (- y 5) 50 25)))

(defn draw [state]
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
  (q/no-cursor)
  (game-word/draw-game-world palette)
  (draw-boss state)
  (draw-puck state)
  (draw-player state))

(defn update-game [state]
  ;; threading macro used so the game state gets passed from function to the next
  (-> state
      update-boss
      update-puck))

(defn setup []
  (q/frame-rate 60)
  (q/smooth)
  ;; The initial state
  {:paddle-width 100
   :paddle-height 30
   :puck {:x (/ (q/height) 2)
          :y (/ (q/width) 2)
          :angle 0.0}
   :boss {:x 0
          :y 0
          :angle 0.0}
   :dots (list)})

(q/sketch
  :host "pongjs"
  :size [850 600]
  :setup setup
  :update update-game
  :draw draw
  :middleware [quil.middleware/fun-mode])
