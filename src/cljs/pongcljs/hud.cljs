(ns pongcljs.hud
  "HUD - Head Up Display.
  Used for showing details about the game and state to help coding/debugging."
  (:require [quil.core :as q :include-macros true]
            [cljs.pprint :as pprint]))

;; Bret Victor - Inventing on Principle https://www.youtube.com/watch?v=PUv66718DII
;; TODO Draw the path the puck is going
;; TODO Draw the path the puck has been
;; TODO Draw the opponents path
;; TODO Draw the player's past

(defn toggle-hud
  [state]
   (assoc-in state [:hud :show]
             (not (get-in state [:hud :show]))))

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
  [puck]
  (let [{x :x y :y} (:pos puck)]
    (q/text-size 15)
    (pprint-xy x y (+ 25 x) y)))

(defn draw-player-position
  [player paddle]
  (let [{x :x y :y} (:pos player)]
    (q/text-size 15)
    (pprint-xy x y (+ (:width paddle) x) y)))

(defn draw-boss-position
  [boss paddle]
  (let [{x :x y :y} (:pos boss)
        angle (:angle boss)]
    (q/text-size 15)
    (pprint-xy x y (+ (:width paddle) x) y)
    (q/text (str "\n\n angle: " angle) (+ (:width paddle) x) y)))

(defn draw-mouse-pointer-position
  []
  (q/text-size 15)
  (pprint-xy (q/mouse-x) (q/mouse-y) (+ 5 (q/mouse-x)) (+ 15 (q/mouse-y)))
  (q/stroke 235 135 0)
  (q/line 0 (q/mouse-y) (q/width) (q/mouse-y)) ;; vertical line
  (q/stroke 0 235 135)
  (q/line (q/mouse-x) 0 (q/mouse-x) (q/height)) ;; horizontal line
  )

(defn draw-corners-of-screen
  []
  (q/text-size 12)
  ;; don't need top left - it's 0 0
  (pprint-xy (q/width) 0 (- (q/width) 60) 20) ;; top right
  (pprint-xy 0 (q/height) 20 (- (q/height) 20)) ;; bottom left
  (pprint-xy (q/width) (q/height) (- (q/width) 60) (- (q/height) 20)) ;; bottom right
  )

(defn draw
  "Head-up Display"
  [state]
  (cond (true? (get-in state [:hud :show]))
        (let [{:keys [camera event messages mouse-wheel paddle
                      score style]} state
              {:keys [boss player puck game-world]} (get-in state [:universe])]
      ;; TODO comp pprint with-out-str q/text and make cljs.pprint work with java
      (q/text-size 20)
      ;; (q/text (with-out-str (pprint/pprint state)) 30 30)
      (q/text (str  ":event " event ",\n"
                   ;; ":camera" camera ",\n"
                    ":mouse-wheel" mouse-wheel ",\n"
                   ;; ":messages " messages ",\n"
                    ":boss " boss ",\n"
                  ;; ":paddle " paddle ",\n"
                   ;; ":player " player ",\n"
                    ":puck-depth " (get-in puck [:depth]) ",\n"
                  ;; ":paddle " paddle ",\n"
                  ;; ":score " score ",\n"
                   ;; ":style " style
                   )
              30 30)
      (draw-player-position player paddle)
      (draw-puck-position puck)
      (draw-boss-position boss paddle)
      (draw-mouse-pointer-position)
      (draw-corners-of-screen)
      (q/cursor))
    :else
    (q/no-cursor)))
