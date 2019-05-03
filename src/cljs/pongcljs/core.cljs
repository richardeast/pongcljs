(ns pongcljs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.styles :as styles]
            [pongcljs.score :as score]
            [pongcljs.game-world :as game-world]
            [pongcljs.opponents.boss :as boss]
            [pongcljs.puck :as puck]
            [pongcljs.player :as player]))

;; The global state is supposed to be bad, so this puts it to the test
(def starting-state
  {:paddle-width 100
   :paddle-height 30
   :score [0 0]
   :puck {:pos nil
          :direction nil}
   :boss {:x 0
          :y 0
          :angle 0.0}
   :hud {:show true}})

(defn get-starting-state
  "Get the starting state of the application, but inject in additional environmental data."
  []
  (assoc starting-state :puck {:pos (game-world/centre)
                               :direction (puck/away)}))

(defn draw-hud
  "Head-up Display"
  [state]
  (q/text-size 20)
  (when (true? (get-in state [:hud :show]))
    (q/text (with-out-str (cljs.pprint/pprint state)) 30 30)))

(defn update-game [state]
  ;; threading macro used so the game state gets passed from function to the next
  (-> state
       score/update-score
       boss/update-boss
       puck/update-puck))

(defn draw [state]
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
       (game-world/draw-game-world)
       (boss/draw-boss state)
       (puck/draw-puck state)
       (player/draw-player state)
       (score/draw-score state)
       (draw-hud state))

(defn setup []
  (q/no-cursor)
  (q/frame-rate 60)
  (q/smooth)
  ;; Return the initial state of the game
 ;; starting-state
  ;; {:paddle-width 100
  ;;  :paddle-height 30
  ;;  :score [0 0]
  ;;  :puck {:pos (game-world/centre)
  ;;         :direction (puck/away)
  ;;         }
  ;;  :boss {:x 0
  ;;         :y 0
  ;;         :angle 0.0}}
  (get-starting-state)
  )

(q/sketch
  :host "pongjs"
  :size [850 600]
  :setup setup
  :update update-game
  :draw draw
  :middleware [quil.middleware/fun-mode])
