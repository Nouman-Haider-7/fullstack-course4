// STEP 5: Wrap in IIFE
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  // STEP 6: Define 'speak' function
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 7: Expose to global scope
  window.byeSpeaker = byeSpeaker;
})(window);
