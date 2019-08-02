(ns pongcljs.universe.game-world
  (:require [quil.core :as q :include-macros true]
            [pongcljs.styles :as styles]
            [pongcljs.hex-rgb :as hex]))

(defn set-color
  [state path color-position]
  (assoc-in state
            (concat [:universe :game-world :items] path)
            (styles/n->color state color-position)))

(defn change-colors
  [state]
  (-> state
      (set-color [:ground :colors :fill-color] 2)
      (set-color [:tennis-court :colors :fill-color] 4)
      (set-color [:tennis-court :colors :stroke-color] 0)
      (set-color [:sky :colors :fill-color] 3)))

;; TODO Magic Numbers here.
;; This needs to be based off the size of the screen and the camera angle.
(defn horizon-height [state]
  (get-in state [:universe :game-world :horizon]))

(defn draw-sky [state]
  ;; TODO make the sky more interesting
  ;; https://p5js.org/examples/color-linear-gradient.html
  (let [sky-color (get-in state [:universe :game-world :items
                                    :sky :colors :fill-color])]
    (hex/background sky-color)))

(defn centre
  ([]
   ;; TODO this arity is Deprecated
   (let [h (q/height)
         w (q/width)]
     {:x (/ w 2)
      :y (/ h 2)}))
  ([state]
   (let [[w h] (get-in state [:screen :size])]
     {:x (/ w 2)
      :y (/ h 2)})))

(defn draw-ground [state]
  (let [ground-color (get-in state [:universe :game-world :items
                                    :ground :colors :fill-color])
        [screen-width screen-height] (get-in state [:screen :size])]
    (hex/fill ground-color)
    (q/rect 0
            (horizon-height state)
            screen-width
            screen-height)))

;; TODO Magic Numbers here.
;; This needs to be based off the size of the screen and the camera angle.

(defn get-court-quadrant
  "The hud uses this function too"
  [state]
  (let [[w h] (get-in state [:screen :size])
        court-top (horizon-height state)]
    ;; court-quadrant {:top-left :top-right :bottom-right :bottom-left }
    [0 ; (/ w 4.25)
     court-top
     w ; (- w (/ w 4.25))
     court-top
     w h
     0 h]))

(defn draw-court-quadrant [state]
  (let [[x1 y1 x2 y2 x3 y3 x4 y4] (get-court-quadrant state)]
    (q/quad x1 y1
            x2 y2
            x3 y3
            x4 y4)))

(defn get-player-line
  [state]
  (let [[w h] (get-in state [:screen :size])
        ;;TODO factor in the camera angle
        w1 0
        w2 w
        new-height (/ h 1.25)]
    [w1 new-height w2 new-height]))

(defn get-boss-line
  [state]
  (let [[w h] (get-in state [:screen :size])
        ;;TODO factor in the camera angle
        w1 0
        w2 w
        new-height (/ h 4)]
    [w1 new-height w2 new-height]))

(defn get-centre-circle
  [state]
  ;;TODO factor in the camera angle
  (let [diameter (get-in state [:universe :game-world :items
                                :tennis-court :circle :diameter])
        {:keys [x y]} (centre state)]
    [x y diameter diameter]))


;; TODO Magic Numbers here. Move to the game-world state.
(defn draw-tennis-court [state]
  (let [[p1 p2 p3 p4] (get-player-line state)
        [b1 b2 b3 b4] (get-boss-line state)
        [c1 c2 c3 c4] (get-centre-circle state)
        {:keys [fill-color
                stroke-color
                stroke-weight]} (get-in state [:universe :game-world :items
                                               :tennis-court :colors])]
    (hex/fill fill-color)
    (hex/stroke stroke-color)
    (q/stroke-weight stroke-weight)
    (draw-court-quadrant state)
    (q/line p1 p2 p3 p4)
    (q/line b1 b2 b3 b4)
    (q/ellipse c1 c2 c3 c4)
    ;;TODO These have side effects later on. Delete and fix the issue they cause.
    (q/stroke 0)
    (q/stroke-weight 1)
    ))

(defn draw [state]
  (draw-sky state)
  (draw-ground state)
  (draw-tennis-court state))
