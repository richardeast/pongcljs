(ns pongcljs.game-world
  (:require [quil.core :as q :include-macros true]
            [pongcljs.styles :as styles]
            [pongcljs.hex-rgb :as hex]))

(defn horizon-height []
  (/ (q/height) 6))

(defn draw-sky []
  (hex/background styles/color-d)
  ;; TODO make the sky more interesting
  )

(defn centre
  "get the centre of the game world. This can be used elsewhere, such as resetting the puck."
  []
  (let [h (q/height)
        w (q/width)]
    {:x (/ w 2)
     :y (/ h 2)}))

(defn draw-ground []
  (hex/fill styles/color-c)
  (q/rect 0
          (horizon-height)
          (- (q/width) 0)
          (- (q/height) 0)))

(defn draw-court-quadrant []
  (let [h (q/height)
        w (q/width)
        court-top (horizon-height)
        court-quadant {:top-left [(/ w 4.25) court-top]
                       :top-right [(- w (/ w 4.25)) court-top]
                       :bottom-right [w h]
                       :bottom-left [0 h]}
        x1 (first (:top-left court-quadant))
        y1 (second (:top-left court-quadant))
        x2 (first (:top-right court-quadant))
        y2 (second (:top-right court-quadant))
        x3 (first (:bottom-right court-quadant))
        y3 (second (:bottom-right court-quadant))
        x4 (first (:bottom-left court-quadant))
        y4 (second (:bottom-left court-quadant))]
    (q/quad x1 y1
            x2 y2
            x3 y3
            x4 y4)))

(defn draw-tennis-court []
  (let [h (q/height)
        w (q/width)
        centre-x (:x (centre))
        centre-y (:y (centre))]
    (q/fill 0)
    (hex/stroke styles/color-a)
    (q/stroke-weight 3)
    (draw-court-quadrant)
    (q/line 172 (/ h 3.5) 677 (/ h 3.5))
    (q/ellipse centre-x centre-y 200 75)
    (q/line 55 (/ h 1.3) 794 (/ h 1.3))
    (q/stroke 0)
    (q/stroke-weight 1)))

(defn draw-game-world []
  (draw-sky)
  (draw-ground)
  (draw-tennis-court))
