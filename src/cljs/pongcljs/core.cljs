(ns pongcljs.core
  "This is the heart of the game. Everything is called from here."
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.camera :as camera]
            [pongcljs.hud :as hud]
            [pongcljs.logging :as log]
            [pongcljs.messages :as messages]
            [pongcljs.state.core :as state]
            [pongcljs.score :as score]
            [pongcljs.universe.core :as universe]))

;;; ToDos
;; TODO - https://js.org/ - host the running project
;; TODO What namespaces can I remove. game-world
;; TODO Save game - and pick up from saved game, because then I can be more like Bret Victor, as I can keep the game running as I make changes.
;; TODO - see  https://photofunia.com/effects/retro-wave for some style ideas

;; TODO - 5.17: Introduction to Matter.js - The Nature of Code https://www.youtube.com/watch?v=urR596FsU68

(defn update-game [state]
  ;; TODO this maybe better expressed with (When (not (:paused)))
  (cond
    (:paused state) state
    :else (universe/update state)))

(defn key-pressed?
  "has a key been pressed?"
  [k event] (= k (:key event)))

(defn key-pressed
  "This function needs to return the state"
  [state event]
  ;; TODO Bug - key-pressed works in Firefox, but not in Chrome
  ;; I think this is down to a browser plugin.
  (let [updated-state (assoc state :event event)]
    (condp key-pressed? event
      :c (universe/change-colors updated-state)
      :H (hud/toggle-hud updated-state) ; toggle hud if H key pressed
      :h (messages/toggle-help updated-state) ; toggle help if h key pressed
      :down (camera/change-angle updated-state inc)
      :up (camera/change-angle updated-state dec)
      :r (state/reset) ; Reset the game / new game
      ;; TODO add more keys. Such as:
      ;; cheat/god mode
      ;; save game
      ;; quit/menu
      ;; high-scores
      ;; actions to spice up the game.
      updated-state)))

(defn mouse-wheel-rotate
  [state m]
  (assoc state :mouse-wheel m)
  (cond (= 1 m) (camera/change-angle state inc)
        :else (camera/change-angle state dec)))

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

;; This is hackey, but ClojureScript cannot resolve functions stored in a map as a symbol or string. Clojure can.
;; See https://stackoverflow.com/questions/12020576/resolve-function-throws-an-error-in-clojurescript-but-not-clojure
(def universe-draw-functions {:boss universe/draw-boss
                              :game-world universe/draw-game-world
                              :player universe/draw-player
                              :puck universe/draw-puck})

(defn draw-functions
  "Returns of vector of the functions to draw everything, in the right order to draw them."
  [state]
  (flatten [(map universe-draw-functions (universe/order-of-draw-functions state))
            score/draw
            messages/draw
            hud/draw]))

(defn draw [state]
  ;; Show cursor when game paused.
  (if (:paused state)
    (q/cursor)
    (q/no-cursor))
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
  (doseq [f (draw-functions state)]
    (f state)))

(defn setup []
  (let [state (state/get-starting-state)]
    (q/smooth)
    (q/frame-rate (:frame-rate state))
    ;; Return the initial state of the game
    state))

(def size
  ;; "Returns vector
  ;;  :size - A vector of width and height for the sketch or :fullscreen. Defaults to [500 300].
  ;;  If you're using :fullscreen you may want to enable present mode using :features [:present].
  ;;  :fullscreen size works only in Clojure.
  ;;  In ClojureScript all sketches support fullscreen when you press F11."
  (get-in state/starting-state [:screen :size]) )

(q/sketch
  :host "pongjs"
  :size  size
  :setup setup
  :update update-game
  :key-pressed key-pressed
  :mouse-clicked mouse-clicked
  :mouse-wheel mouse-wheel-rotate ; Called every time mouse wheel is rotated.
  :draw draw
  :middleware [quil.middleware/fun-mode])
