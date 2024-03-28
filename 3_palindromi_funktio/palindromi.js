// npm install readline-sync                            // terminaaliin tämä -> asentaa tarvittavat paketit käyttäjän syötteen lukemiseen

// Sovellus käyttää syötteen lukemista
var input = require("readline-sync");

// Pyydä käyttäjältä syöte
var word = input.question("Type word to check:");

// Tulostetaan konsoliin isPalindrome funktion tulos
console.log(isPalindrome(word));

// Funktio, joka palauttaa totuusarvon siitä, onko parametrina annettu sana sama kuin mikä se on takaperin.
function isPalindrome(word) {
  // Alustetaan lohkoon muuttuja takaperin käännettävälle sanalle
  let wordBackwards = "";

  // Käydään läpi parametrina annettu sana lopusta alkuun lisäten sen kirjaimet käänteisessä järjestyksessä toiseen muuttujaan
  for (let i = word.length - 1; i >= 0; i -= 1) {
    wordBackwards += word[i];
  }

  // Totuusarvomuuttuja, joka kertoo oliko parametrina annettu sana sama oikein- ja takaperin.
  let result = word == wordBackwards;

  // Palautetaan totuusarvo
  return result;
}
