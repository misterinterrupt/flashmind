/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
TODO:: Add require.js!
TODO:: eventually factor out a bootstrap file and keep app logic here
**/

var FlashMind = FlashMind || {};

require("utilities/db.js")

  FlashMind.namespace = function (ns_string) {
          var parts = ns_string.split('.'),
                          parent = MYAPP,
                          i;

          // strip redundant leading global
          if (parts[0] === "MYAPP") {
                  parts = parts.slice(1);
          }

          for (i = 0; i < parts.length; i += 1) {
                  // create a property if it doesn't exist
                  if (typeof parent[parts[i]] === "undefined") {
                          parent[parts[i]] = {};
                  }
                  parent = parent[parts[i]];
          }
          return parent;
  };
  
  FlashMind.initDB = function() {
    
  },

  // Application Constructor
  FlashMind.initialize = function() {
      this.bindEvents();
      // set up localstorage 
      flashcards = localstorage.getItem("flashcards");
      if(flashcards === null) {
        localstorage.setItem("flashcards", )
      }
  };

  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  FlashMind.bindEvents = function() {
    
      document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  FlashMind.onDeviceReady = function() {
    
      app.receivedEvent('deviceready');
      // next thing to do: function to hydrate a view from a model
  },
  // Update DOM on a Received Event
  FlashMind.receivedEvent = function(id) {
    
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');
      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');
      console.log('Received Event: ' + id);
  };
