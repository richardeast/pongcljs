(ns pongcljs.core
  "This is the heart of the game. Everything is called from here."
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.hud :as hud]
            [pongcljs.messages :as messages]
            [pongcljs.puck :as puck]
            [pongcljs.state.core :as state]
            [pongcljs.styles :as styles]
            [pongcljs.score :as score]
            [pongcljs.universe :as universe]))

;;; ToDos
;; TODO - https://js.org/ - host the running project
;; TODO What namespaces can I remove. game-world
;; TODO Save game - and pick up from saved game, because then I can be more like Bret Victor, as I can keep the game running as I make changes.

(defn update-camera
  ""
  [state f]
  (let [current-angle (get-in state [:camera :angle])]
    (assoc-in state [:camera :angle]
              (f current-angle))))

(defn change-camera-angle
  "Change the current camera angle. f will be inc or dec"
  [state f]
  (let [current-angle (get-in state [:camera :angle])
        max-angle (get-in state [:camera :max-angle])
        min-angle (get-in state [:camera :min-angle])
        current-horrizon (get-in state [:game-world :horizon])
        dec-camera-state (if (and (= f dec)
                                  (> current-angle min-angle))
                           (update-camera state dec)
                           ;else
                           state)
        inc-camera-state (if (and (= f inc)
                                  (< current-angle max-angle))
                           (update-camera dec-camera-state inc)
                           ;else
                           dec-camera-state)]
    (-> inc-camera-state
        ;; TODO constrain the movement of the horizon based on min/max camera angle
        (assoc-in [:game-world :horizon]
                  (f current-horrizon))
        (puck/change-camera-angle f))))

(defn update-game [state]
  ;; this maybe better expressed with (When (not (:paused)))
  (cond
    (:paused state) state
    :else
    ;; threading macro used so the game state gets passed from function to the next
    (-> state
        universe/update-score
        universe/update-boss
        universe/update-player
        universe/update-puck)))

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
      ;; save game
      ;; quit/new game/menu
      ;; high-scores
      ;; actions to spice up the game.
      :else updated-state)))

(defn mouse-wheel-rotate
  [state m]
  (assoc state :mouse-wheel m)
  (cond (= 1 m) (change-camera-angle state inc)
        :else (change-camera-angle state dec)))

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

(defn draw-functions
  "Returns of vector of the functions to draw everything, in the right order to draw them."
  [state]
  (flatten [(universe/order-of-draw-functions state [:game-world :puck :player :boss])
            score/draw
            hud/draw
            messages/draw]))

(defn draw [state]
  ;; Show cursor when game paused.
  (if (:paused state)
    (q/cursor)
    (q/no-cursor))
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
  (doseq [f (draw-functions state)]
    (f state)))

(defn setup []
  (q/frame-rate 60)
  (q/smooth)
  ;; Return the initial state of the game
  (state/get-starting-state))

(q/sketch
  :host "pongjs"
  :size (get-in state/starting-state [:screen :size])
  :setup setup
  :update update-game
  :key-pressed key-pressed
  :mouse-clicked mouse-clicked
  :mouse-wheel mouse-wheel-rotate ; Called every time mouse wheel is rotated.
  :draw draw
  :middleware [quil.middleware/fun-mode])
