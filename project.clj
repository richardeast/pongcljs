; Copyright © 2019 Richard East.
;
; This is free software;  you can redistribute it and/or modify
; it under the terms of the GNU General Public License as published by
; the Free Software Foundation; either version 3 of the License, or (at
; your option) any later version.
;
; This software is distributed in the hope that it will be useful, but
; WITHOUT ANY WARRANTY; without even the implied warranty of
; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
; General Public License for more details.
;
; You should have received a copy of the GNU General Public License
; along with this code; if not, see <http://www.gnu.org/licenses/>.

(defproject pongcljs "0.2.0-SNAPSHOT"
  :description "Pong / Air Hockey game in ClojureScript"
  :url "http://example.com/FIXME"
  :license {:name "GPLv3"
            :url "http://www.opensource.org/licenses/GPL-3.0"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [quil "2.8.0"]
                 [cljs-bach "0.3.0"] ; for sound
                 [reagent-utils "0.3.3"]] ; for saving cookies

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.19"]]

  :resource-paths ["resources" "target"]
  
 ;; :clean-targets ^{:protect false} ["target/public"]
  
  ;; :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.3"]
  ;;                                 [com.bhauman/rebel-readline-cljs "0.1.4"]]}}
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.19"]]
                  ;; :source-paths ["cljs_src"]

                   }}

  ;; :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]}

  :hooks [leiningen.cljsbuild]

   :clean-targets ^{:protect false} ["resources/public/js"]
  :cljsbuild
  {:builds [; development build with figwheel hot swap
            {:id "development"
             :source-paths ["src/cljs" "src/cljc" "test/cljc" "test/cljs"]
             :figwheel true
             :compiler
             {:main "pongcljs.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/development"
              :asset-path "js/development"}}
                                        ; minified and bundled build for deployment
            {:id "optimized"
             :source-paths ["src/cljs" "src/cljc"]
             :compiler
             {:main "pongcljs.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/optimized"
              :asset-path "js/optimized"
              :optimizations :advanced}}]}
  )

