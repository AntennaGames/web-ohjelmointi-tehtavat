class Henkilo {
    // Yksityiset jäsenmuuttujat
    #etunimi = "";
    #sukunimi = "";
    #kutsumanimi = "";
    #syntyvuosi = "";
    
    // Luoja
    constructor(etunimi, sukunimi, kutsumanimi, syntyvuosi) {
        this.#etunimi = etunimi;
        this.#sukunimi = sukunimi;
        this.#kutsumanimi = kutsumanimi;
        this.#syntyvuosi = syntyvuosi; 
    }

    // Hae etunimi
    get _Etunimi() {
        return this.#etunimi;
    }

    // Hae sukunimi
    get _Sukunimi() {
        return this.#sukunimi;
    }
    
    // Hae kutsumanimi
    get _Kutsumanimi() {
        return this.#kutsumanimi;
    }

    // Hae syntymävuosi
    get _Syntyvuosi() {
        return this.#syntyvuosi;
    }    
}

module.exports = Henkilo