(ns pongcljs.universe.opponents.boss
  (:refer-clojure :exclude [update])
  (:require [quil.core :as q :include-macros true]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.universe.puck :as puck]
            [pongcljs.styles :as styles]))

;; Some Universal values
(def degrees-in-circle 360)
(def oscillations 10)
(def speed 10)

(defn hit-puck?
  "They hit the puck if the bottom of the puck touches the player's paddle"
  [state]
  (let [{paddle :paddle} state
        {:keys [boss puck]} (get-in state [:universe])
        {:keys [pos height width depth]} puck
        {x :x y :y} pos
        puck-bottom (+ y (/ height 2) depth)
        {boss-x :x boss-y :y} (:pos boss)
         paddle-height (:height paddle)]
    (cond
      (and (> puck-bottom boss-y)
           (< puck-bottom (+ boss-y (/ paddle-height 2)))
           (> x (- boss-x (/ (:width paddle) 2)))
           (< x (+ boss-x (/ (:width paddle) 2)))) true
      :else false)))

(defn update-boss-state
  ""
  [state x y boss-angle speed]
  (-> state
      (assoc-in [:universe :boss :pos] {:x x :y y})
      (assoc-in [:universe :boss :angle]
                (mod (+ boss-angle speed)
                     (* degrees-in-circle oscillations) ; this mod stops the angle getting too large
                     ))))

;; TODO revisit this and consider a Lissajous curve as shown here:
;; http://quil.info/sketches/show/example_lissajous-table
;; https://en.wikipedia.org/wiki/Lissajous_curve
(defn update [state]
  (let [w (q/width)
        boss-angle (get-in state [:universe :boss :angle])
        paddle-width (get-in state [:paddle :width])
        scalar (* w 0.2) ; size up the paddle so it can run across the board

        x (-> boss-angle
              q/radians
              (/ oscillations)                 ; this affects the number of oscillations it makes
              q/sin
              (* scalar)             ; size up the paddle so it can run across the board
              (+ (/ w 2))            ; moves it across so it can play in the centre of the board
              (- (/ paddle-width 2)) ; a slight offset to centre the paddle
              )

        y (-> boss-angle
              q/radians
              (/ 2)      ; this affects the number of oscillations it makes
              q/sin
              (/ 5.5)    ; the smaller the number the bigger the up and down movement
              (* scalar) ; size up the paddle so it can run across the board
              (+ 110)    ; move it down
              )
        updated-state (update-boss-state state x y boss-angle speed)
        ]
    (cond (hit-puck? updated-state)
          (puck/attract-puck updated-state)
      :else
      updated-state)))

(defn draw
  "The opponent"
  [state]
  ;; TODO def the color at the top so the Score can call the same color
  (hex/fill (styles/color-b state))
  (let [{x :x y :y} (get-in state [:universe :boss :pos])
        {w :width h :height} (get-in state [:paddle])]
    (q/rect x y w h)))
