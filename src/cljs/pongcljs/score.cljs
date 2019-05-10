(ns pongcljs.score
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.puck :as puck]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

(defn player-scored?
  "They score if they have gone over the horizon"
  [y] (< y (game-world/horizon-height)))

(defn opponent-scored?
  "They score if they have gone off the bottom of screen"
  [y] (> y (q/height)))

 (defn update-state
   "Update the state based on the effects of someone scoring"
   [state score]
   (-> (assoc state :score score)
       (puck/reset-in-centre)
       (puck/toggle-direction)))

(defn update-score
  "Update the score"
  [state]
  (let [y (get-in state [:puck :pos :y]) ;; when calculating score we only care about up and down the board. :x position is irrelevant.
        [opponent player] (:score state)]
    (cond
      (player-scored? y) (update-state state [opponent (inc player)])
      (opponent-scored? y) (update-state state [(inc opponent) player])
      :else
       state)))

(defn draw-score
  "Show the score"
  [state]
  (let [[a b] (:score state)]
    (hex/fill (styles/color-b state))
    (q/text-size 40)
    (q/text (str a  " : " b) 680 60)))
