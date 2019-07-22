(ns pongcljs.universe.player
  (:refer-clojure :exclude [update])
  (:require [quil.core :as q :include-macros true]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.universe.puck :as puck]
            [pongcljs.styles :as styles]))

;;TODO This is a bit too like boss/change-colors. Refactor
(defn change-colors
  [state]
  (-> state
      (assoc-in [:universe :player :colors :fill-color]
                (styles/style->color
                 (:style state)
                 first))))

(defn mouse-x-pos []
  (let [m (q/mouse-x)
        w (q/width)]
    (cond
      (< m 10) 10
      (> m w) w
      :else m)))

(defn mouse-y-pos [state]
  (let [m (q/mouse-y)
        h (q/height)
        paddle-height (get-in state [:paddle :height])
        ;; restrict player to a playing area they cannot go out of
        playing-area-max-height (- (/ h 1.3) ;;magic number
                                   (/ paddle-height
                                      2))
        playing-area-min-height (- h (/ paddle-height
                                        2))]
    (cond
      (> m playing-area-min-height) playing-area-min-height
      (> m playing-area-max-height) m
      :else playing-area-max-height)))

(defn hit-puck?
  "They hit the puck if the bottom of the puck touches the player's paddle"
  [state]
  (let [{:keys [paddle]} state
        {:keys [player puck]} (:universe state)
        {:keys [pos height width depth]} puck
        {x :x y :y} pos
        puck-bottom (+ y (/ height 2) depth)
        {player-x :x player-y :y} (:pos player)
        paddle-height (:height paddle)]
    (cond
      (and (> puck-bottom player-y)
           (< puck-bottom (+ player-y (/ paddle-height 2)))
           (> x (- player-x (/ (:width paddle) 2)))
           (< x (+ player-x (/ (:width paddle) 2)))) true
      :else false)))

;; TODO - Currently can move so fast as to go through puck
;; TODO Need to check starting position, end position and any position in-between hit puck
;; TODO if moving faster than the puck need to pass this speed to the puck and push it to the new end position
(defn update
  [state]
  (if (hit-puck? state)
    (->
     (puck/repulse-puck state)
     (assoc-in [:universe :player :pos] {:x (mouse-x-pos)
                                         :y (mouse-y-pos state)}))
    ;;else
    (assoc-in state [:universe :player :pos] {:x (mouse-x-pos)
                                              :y (mouse-y-pos state)})))

(defn draw
  "The player is a pong bat, but could be a character like Mario or Space Harrier"
  [state]
  (let [player (get-in state [:universe :player])
        {:keys [fill-color fill-transparency]} (:colors player)
        {:keys [x y]} (:pos player)
        {w :width h :height} (:paddle state)
        x2 (- x (/ w 2)) ;; this adds an offset,
                         ;; otherwise the player paddle would not be at the centre of the mouse.
        y2 (- y (/ h 2)) ;; as above
        ]
    (hex/fill fill-color fill-transparency)
    (q/rect x2 y2 w h)))
