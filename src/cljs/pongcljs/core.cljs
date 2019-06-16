(ns pongcljs.core
  "This is the heart of the game. Everything is called from here."
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.hud :as hud]
            [pongcljs.messages :as messages]
            [pongcljs.opponents.boss :as boss]
            [pongcljs.player :as player]
            [pongcljs.puck :as puck]
            [pongcljs.styles :as styles]
            [pongcljs.score :as score]))

;;; ToDos
;; TODO - https://js.org/ - host the running project

;; "There's a simple rule that everybody follows - put all your app-state in one place" - David Nolen https://clojurescriptpodcast.com/ S1E1
;; TODO This is going to get bigger. Bigger than a screen and it needs to be pulled out of this namespace
(def starting-state
  {:boss {:pos nil
          :angle 0.0}
   :camera { ;The view of the game world
              ;Over-head will be 0
             :angle 0}
   :hud {:show false}
   :messages {:active-state :welcome
              :lang :eng
              :style :bright-bokeh
              :text-size 20
              :background-transparency 100
              :languages nil}
   :paddle {:width 100 :height 30}
   :paused true
   :player {:pos nil}
   :puck {:pos nil
          :direction nil
          :height 25
          :width 50
          :depth 5}
   :score [0 0]
   :style :algave-glitch})

(defn get-starting-state
  "Get the starting state of the application, but inject in additional environmental data."
  []
  (->
   (assoc-in starting-state [:puck :pos] (game-world/centre))
   (assoc-in [:puck :direction] puck/away)
   ;; TODO Give some meaning to these numbers
   (assoc-in [:player :pos] (let [h (- (q/height) 100)
                                  w (/ (q/width) 2)]
                              {:x w
                               :y h}))
   (assoc-in [:boss :pos] (let [h (/ (q/height) 5.5)
                                w (- (/ (q/width) 2)
                                     (/ (get-in starting-state [:paddle :width]) 2))]
                            {:x w
                             :y h}))
   (assoc-in [:messages :languages] messages/text)))

(defn change-camera-angle
  "Change the current camera. f will be inc or dec"
  [state f]
  (let [current-angle (get-in state [:camera :angle])]
    (assoc-in state [:camera :angle]
              (f current-angle))))

(defn update-game [state]
  ;; this maybe better expressed with (When (not (:paused)))
  (cond
    (:paused state) state
    :else
    ;; threading macro used so the game state gets passed from function to the next
    (-> state
        score/update
        boss/update
        player/update
        puck/update)))

(defn key-pressed?
  "has a key been pressed?"
  [k event] (= k (:key event)))

(defn key-pressed
  "This function needs to return the state"
  [state event]
  ;; TODO Bug - key-pressed works in Firefox, but not in Chrome
  (let [updated-state (assoc state :event event)]
    (cond
      (key-pressed? :c event) (assoc-in updated-state [:style]
                                        (styles/random-style)) ; pick new colour
      (key-pressed? :H event) (hud/toggle-hud updated-state) ; toggle hud if H key pressed
      (key-pressed? :h event) (messages/toggle-help updated-state) ; toggle help if h key pressed
      (key-pressed? :down event) (change-camera-angle updated-state inc)
      (key-pressed? :up event) (change-camera-angle updated-state dec)
      ;; TODO add more keys. Such as:
      ;; cheat/god mode
      ;; play/pause (this could be space which maybe is (keyword " "))
      ;; quit/new game/menu
      ;; high-scores
      ;; actions to spice up the game.
      :else updated-state)))

(defn mouse-clicked
  "-> new-state"
  [state event]
  (let [paused? (:paused state)
        active-state (get-in state [:messages :active-state])]
    (cond
      (and paused?
           (= :left (:button event))
           (= :welcome active-state)) (-> state
                                       (assoc-in [:paused] false)
                                       (assoc-in [:messages :active-state] :welcome2))
      (and paused?
           (= :left (:button event))) (assoc-in state [:paused] false)
      (and (not paused?)
           (= :left (:button event))) (assoc-in state [:paused] true)
      :else
      state)))

(defn order-of-moving-objects
  "Work out the order to draw of the moving objects in the game"
  [state]
  (let [boss-y (get-in state [:boss :pos :y])
        puck-y (get-in state [:puck :pos :y])
        player-y (get-in state [:player :pos :y])]
    (cond
      (< puck-y boss-y player-y) [puck/draw boss/draw player/draw]
      (< boss-y puck-y player-y) [boss/draw puck/draw player/draw]
      ;; The default is also a good option when two items are equal.
      :else [boss/draw player/draw puck/draw])))

(defn draw-functions
  "Returns of vector of the functions to draw everything, in the right order to draw them."
  [state]
  (flatten [game-world/draw
            (order-of-moving-objects state)
            score/draw
            hud/draw
            messages/draw]))

(defn draw [state]
  ;; Show cursor when game paused.
  (if (:paused state)
    (q/cursor)
    (q/no-cursor))
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
  ((apply juxt
          (draw-functions state))
   state))

(defn setup []
  (q/frame-rate 60)
  (q/smooth)
  ;; Return the initial state of the game
  (get-starting-state))

(q/sketch
  :host "pongjs"
  :size [850 600]
  :setup setup
  :update update-game
  :key-pressed key-pressed
  :mouse-clicked mouse-clicked
  :draw draw
  :middleware [quil.middleware/fun-mode])
