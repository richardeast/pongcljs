(ns pongcljs.hud
  "HUD - Head Up Display.
  Used for showing details about the game and state to help coding/debugging."
  (:require [quil.core :as q :include-macros true]
            [cljs.pprint :as pprint]))

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

(defn draw-hud
  "Head-up Display"
  [state]
  (cond (true? (get-in state [:hud :show]))
    (let [{boss :boss
           event :event
           paddle :paddle
           player :player
           puck :puck
           score :score
           style :style} state]
      ;; TODO comp pprint with-out-str q/text and make cljs.pprint work with java
      (q/text-size 20)
      ;; (q/text (with-out-str (pprint/pprint state)) 30 30)
      (q/text (str ":event " event ",\n"
                  ;; ":boss " boss ",\n"
                  ;; ":paddle " paddle ",\n"
                  ;; ":player " player ",\n"
                  ;; ":puck " puck ",\n"
                  ;; ":paddle " paddle ",\n"
                  ;; ":score " score ",\n"
                   ":style " style
                   )
              30 30)
      (draw-player-position player paddle)
      (draw-puck-position puck)
      (draw-boss-position boss paddle)
      (draw-mouse-pointer-position)
      (q/cursor))
    :else
    (q/no-cursor)))
