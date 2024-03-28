// Käytetään luokkatiedostoja
const Henkilo = require('./cl/Henkilo.js');
const Urheilija = require('./cl/Urheilija.js');

// Luo testidataa
let urheilija1 = new Urheilija("Patrik", "Laine", "Pate", new Date("1998"), "https://www.jatkoaika.com/sites/default/files/styles/art_1200/public/media/GettyImages-1750907974.jpg", "98kg", "jääkiekko", "WJC20 mestaruus");
let urheilija2 = new Urheilija("Jari", "Litmanen", "Litti", new Date("1971"), "https://img.a.transfermarkt.technology/portrait/header/4675-1683630540.jpg?lm=1", "83kg", "jalkapallo", "Champions League mestaruus");

// Tulosta testidataa
console.log(urheilija2.Laji);

// Muuta testidataa ja tulosta se
urheilija2.Laji = "futis";
console.log(urheilija2.Laji);

// Tulostetaan urheilijan kantaluokan muuttuja
console.log(urheilija1._Etunimi);
console.log(urheilija2._Syntyvuosi);