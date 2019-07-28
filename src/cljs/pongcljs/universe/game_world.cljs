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

;; TODO Magic Number here. Move to the game-world state.
(defn draw-court-quadrant [state]
  (let [[w h] (get-in state [:screen :size])
        court-top (horizon-height state)
        ;; court-quadrant {:top-left :top-right :bottom-right :bottom-left }
        [x1 y1 x2 y2 x3 y3 x4 y4] [(/ w 4.25) court-top
                                   (- w (/ w 4.25)) court-top
                                   w h
                                   0 h]]
    (q/quad x1 y1
            x2 y2
            x3 y3
            x4 y4)))

;; TODO Magic Numbers here. Move to the game-world state.
(defn draw-tennis-court [state]
  (let [[w h] (get-in state [:screen :size])
        centre-x (:x (centre state))
        centre-y (:y (centre state))
        {:keys [fill-color
                stroke-color
                stroke-weight]} (get-in state [:universe :game-world :items
                                               :tennis-court :colors])]
    (hex/fill fill-color)
    (hex/stroke stroke-color)
    (q/stroke-weight stroke-weight)
    (draw-court-quadrant state)
    (q/line 172 (/ h 3.5) 677 (/ h 3.5))
    (q/line 55 (/ h 1.3) 794 (/ h 1.3))
    (q/ellipse centre-x centre-y 200 75)
    ;;TODO These have side effects later on. Delete and fix the issue they cause.
    (q/stroke 0)
    (q/stroke-weight 1)
    ))

(defn draw [state]
  (draw-sky state)
  (draw-ground state)
  (draw-tennis-court state))
