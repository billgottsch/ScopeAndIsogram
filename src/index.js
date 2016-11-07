// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope" and IIFEs


(function() {
  var score = 0

  function increaseScore() {
    score++
  }

  function decreaseScore() {
    score--
  }
  function run(){
    // ...
    increaseScore()
  }
})();

/**
An isogram is a word that has no repeating letters, consecutive or
non-consecutive. Implement a function that determines whether a
string that contains only letters is an isogram. Assume the empty
string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
**/



function isIsogram(str){

  var letters = str.toLowerCase().split('');
  var checkLetters = [];

  letters.forEach(function(letter) {
    if(checkLetters.indexOf(letter) === -1) {
      checkLetters.push(letter);
    }
  });

  return letters.length === checkLetters.length ? true : false;
}

console.assert( isIsogram("Dermatoglyphics") );
console.assert( isIsogram("isogram") );
console.assert( isIsogram("aba") === false );
console.assert( isIsogram("moOse") === false );
console.assert( isIsogram("isIsogram") === false );
console.assert( isIsogram("") );
