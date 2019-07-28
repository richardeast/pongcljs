(ns pongcljs.universe.opponents.boss
  (:refer-clojure :exclude [update])
  (:require [quil.core :as q :include-macros true]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.sound :as sound]
            [pongcljs.styles :as styles]
            [pongcljs.universe.puck :as puck]))

;; Some Universal values
(def degrees-in-circle 360)
(def oscillations 10)

;;TODO This is a bit too like player/change-colors. Refactor
(defn change-colors
  [state]
  (let [color (styles/n->color state 1)]
    (-> state
        (assoc-in [:universe :boss :colors :fill-color] color)
        (assoc-in [:universe :boss :colors :stroke-color] color))))

(defn hit-puck?
  "They hit the puck if the bottom of the puck touches the player's paddle"
  [state]
  (let [{paddle :paddle} state
        {:keys [boss puck]} (get-in state [:universe])
        {:keys [pos diameter depth]} puck
        {x :x y :y} pos
        puck-bottom (+ y (/ diameter 2) depth)
        {boss-x :x boss-y :y} (:pos boss)
         paddle-height (:height paddle)]
    (cond
      (and (> puck-bottom boss-y)
           (< puck-bottom (+ boss-y (/ paddle-height 2)))
           (> x (- boss-x (/ (:width paddle) 2)))
           (< x (+ boss-x (/ (:width paddle) 2)))) true
      :else false)))

(defn update-boss-state
  [state x y boss-angle]
  (let [speed (get-in state [:universe :boss :speed])]
    (-> state
        (assoc-in [:universe :boss :pos] {:x x :y y})
        (assoc-in [:universe :boss :angle]
                  (mod (+ boss-angle speed)
                       (* degrees-in-circle oscillations) ; this mod stops the angle getting too large
                       )))))

;; TODO revisit this and consider a Lissajous curve as shown here:
;; http://quil.info/sketches/show/example_lissajous-table
;; https://en.wikipedia.org/wiki/Lissajous_curve
(defn update [state]
  ;; TODO remove q
  (let [[w _] (get-in state [:screen :size])
        boss-angle (get-in state [:universe :boss :angle])
        paddle-width (get-in state [:paddle :width])
        scalar (* w 0.2) ; size up the paddle so it can run across the board

        x (-> boss-angle
              q/radians
              (/ oscillations)                 ; this affects the number of oscillations it makes
              Math/sin
              (* scalar)             ; size up the paddle so it can run across the board
              (+ (/ w 2))            ; moves it across so it can play in the centre of the board
              (- (/ paddle-width 2)) ; a slight offset to centre the paddle
              )

        y (-> boss-angle
              q/radians
              (/ 2)      ; this affects the number of oscillations it makes
              Math/sin
              (/ 5.5)    ; the smaller the number the bigger the up and down movement
              (* scalar) ; size up the paddle so it can run across the board
              (+ 110)    ; move it down
              )
        updated-state (update-boss-state state x y boss-angle)]
    (cond (hit-puck? updated-state)
          (puck/attract-puck updated-state)
      :else
      updated-state)))

(defn draw
  "The opponent"
  [state]
  ;;TODO this is too much like player/draw refactor
  (let [boss (get-in state [:universe :boss])
        {:keys [fill-color fill-transparency stroke-color]} (:colors boss)
        {:keys [x y]} (:pos boss)
        {w :width h :height} (:paddle state)]
    (hex/fill fill-color fill-transparency)
    (hex/stroke stroke-color fill-transparency)
    (q/rect x y w h)))
