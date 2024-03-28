// Sovellus käyttää syötteen lukemista
var input = require("readline-sync");

// Luo puhelinluettelokokoelma ja siihen testidataa
let person1 = {name:"Matti Meikalainen", number:"04523532291"};
let person2 = {name:"Hessu Hopo", number:"0123456789"};
let phonebook = [person1, person2];

// Ikuinen silmukka
while(true) {
    // Pyydä käyttäjältä syöte
    let action = input.question("What do you want to do? (1 = add phonenumber / 2 = search / 3 = show all) ");

    switch(action) {
        case "1":
            // Käyttäjä lisää puhelinnumeron kokoelmaan
            // Pyydä käyttäjältä puhelinnumero sekä nimi ja lisää annetuista tiedoista luotu objekti puhelinluetteloon
            console.log("Adding a phonenumber");
            let numberInput = input.question("Input a phonenumber: ");
            let nameInput = input.question("Input a name: ");
            let person = {name:nameInput, number:numberInput};
            phonebook.push(person);

            console.log("Phonenumber added!");
            break;
        case "2":
            // Käyttäjä etsii puhelinnumeron nimen perusteella
            // Pyydä käyttäjältä nimi, jonka jälkeen etsi nimeä vastaava puhellinnumero.
            console.log("Searching a phonenumber");
            let nameSearch = input.question("Input a name: ");
            let numberFound = searchPhonenumber(phonebook, nameSearch);
            if (numberFound != ""){
                console.log("Number found: " + numberFound);
            } else {
                console.log("Number not found!");
            }
            break;
        case "3":
            // Näytä kaikki puhelinluettelon numerot
            console.log("-----");
            console.log("Showing all numbers in phonebook");
            for(let i = 0; i < phonebook.length; i += 1) {
                console.log("- " + phonebook[i].name + " " + phonebook[i].number);
            }
            console.log("-----");
            break;
    }
}

// Funktio, joka etsii puhelinnumeron nimen perusteella
function searchPhonenumber(phonebook, name){
    let result = "";

    for(let i = 0; i < phonebook.length; i += 1) {
        if (phonebook[i].name == name) {
            result = phonebook[i].number;
            break;
        }
    }

    return result;
}