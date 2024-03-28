// Käytetään henkilöluokkaa
const Henkilo = require('./Henkilo.js');

// Urheilija on Henkilo-luokan aliluokka
class Urheilija extends Henkilo {
    // Yksityiset jäsenmuuttujat
    #kuva = "";
    #paino = "";
    #laji = "";
    #saavutukset = "";

    // Luoja
    constructor(etunimi, sukunimi, kutsumanimi, syntyvuosi, kuva, paino, laji, saavutukset) {
        // Annetaan yläluokalle ominaisuudet
        super(etunimi, sukunimi, kutsumanimi, syntyvuosi);
        this.#kuva = kuva;
        this.#paino = paino;
        this.#laji = laji;
        this.#saavutukset = saavutukset;
    }

    // Hae kuva
    get Kuva() {
        return this.#kuva;
    }

    // Hae paino
    get Paino() {
        return this.#paino;
    }    

    // Aseta paino
    set Paino(paino) {
        this.#paino = paino;
    }      

    // Hae laji
    get Laji() {
        return this.#laji;
    }

    // Aseta laji
    set Laji(laji) {
        this.#laji = laji;
    }       

    // Hae saavutukset
    get Saavutukset() {
        return this.#saavutukset;
    }  

    // Aseta saavutukset
    set Saavutukset(saavutukset) {
        this.#saavutukset = saavutukset;
    }       
}

module.exports = Urheilija