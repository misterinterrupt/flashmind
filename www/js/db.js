//pretty much grabbed this stuff from MDN: https://developer.mozilla.org/en-US/docs/IndexedDB/Using_IndexedDB

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

var db;

// Request that a database be opened
var request = window.indexedDB.open("flashmind");

request.onerror = function(event) {
  // Do something with request.errorCode!
};
request.onsuccess = function(event) {
  // Do something with request.result!
  db = request.result;
};

db.onerror = function(event) {
  alert('Database Error: ' + event.target.errorCode);
}

// This event is only implemented in recent browsers
request.onupgradeneeded = function(event) { 
  var db = event.target.result;

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("flashcards", { keyPath: "id" });
  objectStore.createIndex("id", "id", {autoincrement: true, unique: true});
  objectStore.createIndex("hint", "hint", {unique: true});
};

FlashMind.namespace("FlashMind.utilities.DB")
FlashMind.utilities.DB = db,
