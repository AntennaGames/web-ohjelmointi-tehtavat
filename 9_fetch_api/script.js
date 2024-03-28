// Suorittaa tämän parametrittoman ANONYYMISEN ARROW FUNKTION automaattisesti kun ajetaaan script.js
(() =>{
    // JSON taulukko henkilöitä. id, nimi, puhelinnumero
    // Palauttaa promise responsen. Res parametri, response (tää  voi olla minkäniminen tahansa). Käytetään parametria, halutaan siltä jsonia.
    // Otetaan data, käytetään data parametria
    fetch("http://a41d.k.time4vps.cloud:3001/henkilot")
    .then((res) => res.json())
    .then((data) => {
        // Mitä tehdään palautuvalla datalla.
        // Laitetaan oma metodi
        // Tarkoituksena tehdä taulukko. Bootstrapista katsotaan mallia minkälainen taulukon tulisi olla.
        // Rakennetaan js tiedostoon html osio jolla luodaan table
                //console.log(data);    // väliaikainen testi että katsotaan mitä data:sta saadaan. korvataan myöhemmin kutsuilla joilla luodaan html-elementit

        // Fetchin kautta tuleva data annetaan metodille, joka luo HTML-elementin, eli taulun datasta.
        displayPhoneNumbers(data);
    }
    );
})();


// DOMilla haetaan selectoria käyttäen table tag.
// getELementById() olisi voitu hakea html-tiedoston elementti ID tiedoston perusteella
const phoneNumbers = document.querySelector(".table");

// HEADER OSUUS TAULUKOSTA
// Arrow funktio, jolla html-tiedostossa olevan tablen tagia hyödynnetään
// Parametrina dataa
displayPhoneNumbers = (data) => {
    // Luodaan HTML:llää tablen sisälle. Lisätään koodia += operaattorilla
    // Thead tarkoittaa taulukon otsikko-osuutta (table header). Data osa tehdään erikseen.
    phoneNumbers.innerHTML += `
        <thead>
        <tr>
            <th>Id</th>
            <th>Nimi</th>
            <th>Puhelin</th>
        </tr>
        </thead>
    `;
    // Kutsutaan metodia, joka täyttää datan
    displayRow(data);
}

// DATA OSUUS TAULUKOSTA
// Metodi joka täyttää datan käyttämällä fetchiä
displayRow = (data) => {
    // Silmukassa puretaan alkiot ja lisätään HTML:lään
    // Data on taulukko.
    // elementin nimi voi olla mikä tahansa
    data.forEach(element => {
        // Lisätää HTML:lään
        // upotetaan merkkijonon sisälle parametrin arvot. ${}. Haetaan siihen loopattavan elementin arvot
        phoneNumbers.innerHTML += `
        <tbody>
            <tr>
            <td>${element.id}</td>
            <td>${element.nimi}</td>
            <td>${element.puhelin}</td>
            </tr>
        </tbody>
        `;
    });
}