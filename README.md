# Pong CLJS

A game of Pong / Air Hockey, written in Clojure/Script

## Usage
I will have a playable version on line eventually. If you can't wait until then, use the following instructions -

To run locally, you must have [Clojure](https://clojure.org/) and [Leiningen](https://leiningen.org/) installed
Clone from git. 
Run `lein figwheel` in your terminal. Wait for a while until you see `Successfully compiled "resources/public/js/main.js"**. Open [localhost:3449](http://localhost:3449) in your browser.

For more information about Figwheel, check the [Figwheel repository on GitHub](https://github.com/bhauman/lein-figwheel).

## History / Prior Art
There are many games like this.
The most obvious are:
* [Pong](https://en.wikipedia.org/wiki/Pong)
* [Air Hockey](https://en.wikipedia.org/wiki/Air_hockey)
* [Shufflepuck Café](https://en.wikipedia.org/wiki/Shufflepuck_Caf%C3%A9)

## Why

### Why write a game in Clojure?
* I like Clojure. I wanted to write a hobby project in it. Something a little bigger than a Dojo sized project, but something fun. A game seems a good choice and something that pushes the boundaries of what one expects of Clojure.

* Clojure excels at transforming data. It turns out all programming problems can be thought of as turning data from one form to another. Philosophically the visualised game is just a view of the game state.

### Why write a pong clone?
* Pong was one of the first computer games. Intuitively it's a very basic game. However with a little bit of imagination it can be quickly adapted to something different. For example, this version can be viewed like the original as an overhead, or can be angled to present the player with some depth. Having a perspective, one can easily imagine how it can be adapted to other kinds of games.

## License
Copyright © 2019 Richard East

Distributed under the GNU General Public License v3.0
