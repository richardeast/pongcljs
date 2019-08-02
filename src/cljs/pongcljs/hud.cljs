(ns pongcljs.hud
  "HUD - Head Up Display.
  Used for showing details about the game and state to help coding/debugging."
  (:require [quil.core :as q :include-macros true]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.universe.game-world :as game-world]
            [cljs.pprint :as pprint]))

;; Bret Victor - Inventing on Principle https://www.youtube.com/watch?v=PUv66718DII
;; TODO Draw the opponents path
;; TODO Draw the player's past

(defn toggle-hud
  [state]
   (assoc-in state [:hud :show]
             (not (get-in state [:hud :show]))))

(defn show-hud? [state] (true? (get-in state [:hud :show])))
(defn text-size-data [state] (q/text-size (get-in state [:hud :colors :text-size-data])))
(defn text-size-position [state] (q/text-size (get-in state [:hud :colors :text-size-position])))
(defn set-color [state] (hex/fill (get-in state [:hud :colors :text-color])))
(defn screen-size [state] (get-in state [:screen :size]))

(defn lineAngle
  "Draw line from one point of a fixed length by an angle"
  ;; TODO Draw the path the puck is going
  ;; TODO Draw the path the puck has been
  [x y length angle]
  (q/stroke 235 135 0)
  (q/line x y
          (* length
             (+ x
                (Math/sin angle)))
          (* length
             (+ y
                (Math/cos angle)))))

(defn pprint-2dp
  "Print to two decimal places."
  [s] (pprint/cl-format nil "~6f" s))

(defn pprint-xy
  "print x y coordinates for an object to two decimal places."
  [x1 y1 x2 y2]
  (q/text (str " x:" (pprint-2dp x1)
               ",\n"
               " y:" (pprint-2dp y1)) x2 y2))

(defn draw-puck-position
  [state]
  (let [{:keys [angle speed pos]} (get-in state [:universe :puck])
        line-length (first (get-in state [:screen :size]))
        {x :x y :y} pos
        {xspeed :x yspeed :y} speed]
    (text-size-position state)
    (pprint-xy x y (+ 25 x) y)
    (q/text (str "\n\n angle: " (pprint-2dp angle)) (+ 25 x) y)
    (q/text (str "\n\n\n speed - x:" (pprint-2dp xspeed) " y:" (pprint-2dp yspeed)) (+ 25 x) y)
    (lineAngle x y line-length angle)))

(defn draw-player-position
  [state]
  (let [{:keys [paddle]} state
        {:keys [player]} (get-in state [:universe])
        {x :x y :y} (:pos player)]
    (text-size-position state)
    (pprint-xy x y (+ (:width paddle) x) y)))

(defn draw-boss-position
  [state]
  (let [{:keys [paddle]} state
        {:keys [boss]} (get-in state [:universe])
        {x :x y :y} (:pos boss)
        angle (:angle boss)]
    (text-size-position state)
    (pprint-xy x y (+ (:width paddle) x) y)
    (q/text (str "\n\n angle: " angle) (+ (:width paddle) x) y)))

(defn draw-mouse-pointer-position
  [state]
  (text-size-position state)
  (let [x (q/mouse-x)
        y (q/mouse-y)
        [w h] (screen-size state)]
    (pprint-xy x y (+ 5 x) (+ 15 y))
    (q/stroke 235 135 0)
    (q/line 0 y w y) ; draws line across screen
    (q/stroke 0 235 135)
    (q/line x 0 x h))) ; draws line top to bottom

(defn draw-corners-of-screen
  [state]
  (let [[w h] (screen-size state)]
    (text-size-position state)
    ;; don't need top left - it's 0 0
    (pprint-xy w 0 (- w 60) 20) ; top right
    (pprint-xy 0 h 20 (- h 20)) ; bottom left
    (pprint-xy w h (- w 60) (- h 20)))) ; bottom right

;; TODO
(defn draw-game-court
  [state]
  (text-size-position state)
  (let [[x1 y1 x2 y2 _ _ _ _] (game-world/get-court-quadrant state)]
    ;;  (pprint-xy (q/width) 0 (- (q/width) 60) 20) ;; top right
    ;; bottom left and bottom right are shown already in draw-corners-of-screen
    (pprint-xy x1 y1 (+ x1 8) (+ y1 15))
    (pprint-xy x2 y2 (- x2 50) (+ y2 15))))

(defn draw
  "Head-up Display"
  [state]
  (cond (show-hud? state)
        (let [{:keys [camera event messages mouse-wheel paddle
                      score style hud]} state
              {:keys [boss player puck game-world]} (get-in state [:universe])
              {:keys [sky ground tennis-court]} (:items game-world)]
      ;; TODO comp pprint with-out-str q/text and make cljs.pprint work with java
          (set-color state)
          (text-size-data state)
      ;; (q/text (with-out-str (pprint/pprint state)) 30 30)
      (q/text (str ;; ":event " event ",\n"
                    ":camera" camera ",\n"
                     ":mouse-wheel" mouse-wheel ",\n"
                   ;; ":messages " messages ",\n"
                   ;; ":boss " boss ",\n"
                   ;; ":tennis " tennis-court ",\n"
                  ;; ":paddle " paddle ",\n"
               ;; ":player " player ",\n"
                  ":hud" hud ",\n"
                  ;;  ":puck-depth " (get-in puck [:depth]) ",\n"
                  ;; ":paddle " paddle ",\n"
                  ;; ":score " score ",\n"
                   ;; ":style " style
                   )
              30 30)
      (draw-player-position state)
      (draw-puck-position state)
      (draw-boss-position state)
      (draw-mouse-pointer-position state)
      (draw-corners-of-screen state)
      (draw-game-court state)
      (q/cursor))
    :else
    (q/no-cursor)))
