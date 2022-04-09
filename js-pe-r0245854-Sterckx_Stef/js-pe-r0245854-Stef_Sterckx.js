const registreren_btn = document.getElementById('btnRegistreren')
const alert_danger = document.getElementById('danger')
const alert_info = document.getElementById('info')
const alert_succes = document.getElementById('succes')
const form = document.getElementById("form")

//check for empty fields

function checkVoornaam() {
    let voornaam = document.getElementById('inputVoornaam').value;
    if (voornaam == "") return errors.push("Voornaam is niet ingevuld")
}

//eigen test
function checkVoornaam() {
    let voornaam = document.getElementById('inputVoornaam').value;
    if (voornaam == "") return console.log("Voornaam is niet ingevuld")
}

function checkNaam() {
    let naam = document.getElementById('inputNaam').value;
    if (naam == "") return errors.push("Naam is niet ingevuld")
}

function checkGebruikersnaam() {
    let gebruikersnaam = document.getElementById('inputGebruikersnaam').value;
    if (naam == "") return errors.push("Gebruikersnaam is niet ingevuld")
}


function checkEmailadres() {
    let email = document.getElementById('inputEmail').value;
    if (email == "") return errors.push("Email is niet ingevuld")
}

function checkWachtwoord() {
    let wachtwoord = document.getElementById('wachtwoord').value;
    if (wachtwoord == "") return errors.push("Wachtwoord is niet ingevuld")
}

function checkHerhaalWachtwoord() {
    let wachtwoordHerhaal = document.getElementById('wachtwoordHerhaal').value;
    if (wachtwoordHerhaal == "") return errors.push("Herhaal wachtwoord is niet ingevuld")
}

function checkAdres() {
    let adres = document.getElementById('inputAdres').value;
    if (adres == "") return errors.push("Adres is niet ingevuld")
}

//https://www.youtube.com/watch?v=HzJngc-Se9Q&ab_channel=OnlineTutorials
function validateEmail() {
    let email = document.getElementById('inputEmail').value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        return errors.push("E-mailadres is niet correct");
    }
}

function checkBetaling() {
    let betaling = document.forms[0];
    let txt = "";
    let i;

    for (let i = 0; i < betaling.length; i++) {
        if (betaling[i].checked) {
            txt = txt + betaling[i].value + "";
        }
    }
    document.getElementById("betalingswijze").innerHTML = ("Je betalingswijze is: " + txt);
}

function checkPostcode() {
    let postcode = document.getElementById('inputPostcode').value;
    if (adres == "") return errors.push("Postcode is niet ingevuld")
    if (adres >= 1000 && adres <= 10000) {

    } else {
        errors.push("Postcode moet tussen 1000 en 9999 liggen!")
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //opbouw errors Array
    let errors = []
    checkVoornaam()
    checkNaam()
    checkGebruikersnaam()
    checkEmailadres()
    checkWachtwoord()
    checkHerhaalWachtwoord()
    checkAdres()
    checkBetaling()
    checkLand()
    checkProvincie()
    checkPostcode()
    checkAlgemeneVoorwaarden()
    validateEmail()

    let checked = document.forms["form"]["checkVoorwaarden"].checked;
    if (!checked) {
        errors.push("Je moet de algemene voorwaarden accepteren");
        return false;
    }

    if (wachtwoord.value.length <= 7) {
        errors.push('Wachtwoord moet langer zijn dan 7 tekens')
    }

    if (wachtwoord.value !== wachtwoordHerhaal.value) {
        errors.push('Wachtwoord en herhaal wachtwoord moet hetzelfde zijn!')
    }

    for (i = 0; i < errors.length; i++) {
        let errors = errorLoop[i];
        for (let error in errors) {
            errorLijst += error + ": " + errors[error] + "\n";
        }
    }

    if (errors.length > 0) {
        Alert.danger.classlist.remove('visually-hidden')
        Alert.info.classlist.add('visually-hidden')
        Alert.succes.classlist.add('visually-hidden')
    } else {
        Alert.danger.classlist.add('visually-hidden')
        Alert.info.classlist.remove('visually-hidden')
        Alert.succes.classlist.remove('visually-hidden')
    }
})