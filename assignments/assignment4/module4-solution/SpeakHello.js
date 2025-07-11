// STEP 2: Wrap in IIFE
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  // STEP 3: Define 'speak' function
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 4: Expose to global scope
  window.helloSpeaker = helloSpeaker;
})(window);
