import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js"
import { firebaseConfig, createUser, loginWithGoogle, loginWithFacebook } from "./firebase.js";

const terms = document.querySelector("#terms")
const btn = document.querySelector("#btn")
const container = document.querySelector(".container")

const name = document.querySelector("#first_name")
const sobre_name = document.querySelector("#last_name")
const email = document.querySelector("#email")
const password =  document.querySelector("#password")

const sms_first_name = document.querySelector("#sms_first_name")
const sms_last_name = document.querySelector("#sms_last_name")
const sms_email = document.querySelector("#sms_email")
const sms_password = document.querySelector("#sms_password")

const google_btn = document.querySelector("#google_btn")
const apple_btn = document.querySelector("#apple_btn")

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider();

// Botão para cadastrar
btn.addEventListener("click", (e) => {
    e.preventDefault()

    const verifiquer = () => {

        sms_first_name.style.display = "block"
        sms_last_name.style.display = "block"
        sms_email.style.display = "block"
        sms_password.style.display = "block"

        sms_first_name.style.marginTop = "5px"
        sms_first_name.style.fontSize = "0.7rem"

        sms_last_name.style.marginTop = "5px"
        sms_last_name.style.fontSize = "0.7rem"

        sms_email.style.marginTop = "5px"
        sms_email.style.fontSize = "0.7rem"

        sms_password.style.marginTop = "5px"
        sms_password.style.fontSize = "0.7rem"

        if(name.value == "") {
            sms_first_name.style.color = "red"
            sms_first_name.textContent = "Por favor preencha este campo"
        } else if(name.value != "" && name.value.length < 3) {
            sms_first_name.style.color = "red"
            sms_first_name.textContent = "O nome tem que ter no mínimo 3 caracteres"
        } else {
            sms_first_name.style.color = "greenyellow"
            sms_first_name.textContent = "Nome válido"
        }

        if(sobre_name.value.length == 0) {
            sms_last_name.style.color = "red"
            sms_last_name.textContent = "Por favor preencha este campo"
        } else if(sobre_name.value.length > 0 && sobre_name.value.length < 3) {
            sms_last_name.style.color = "red"
            sms_last_name.textContent = "O nome tem que ter no mínimo 3 caracteres"
        } else {
            sms_last_name.style.color = "greenyellow"
            sms_last_name.textContent = "Nome válido"
        }

        if(email.value.length == 0) {
            sms_email.style.color = "red"
            sms_email.textContent = "Por favor preencha este campo"
        } else {
            sms_email.style.color = "greenyellow"
            sms_email.textContent = "Email válido"
        }

        if(password.value.length == 0) {
            sms_password.style.color = "red"
            sms_password.textContent = "Por favor preencha este campo"
        } else if(password.value.length > 0 && password.value.length < 6) {
            sms_password.style.color = "red"
            sms_password.textContent = "A senha tem que ter no mínimo 6 caracteres"
        } else {
            sms_password.style.color = "greenyellow"
            sms_password.textContent = "Senha válida"
        }

    }

    container.style.height = "40rem"

    verifiquer()

    const sms = [...document.querySelectorAll(".sms")]

    let sms_value = sms.every(mensage => {
        if(mensage.style.color == "greenyellow") {
            return "sms_value"
        }
    })

    if(sms_value && terms.checked) {
        createUser(email.value, password.value, createUserWithEmailAndPassword, auth)
        container.style.height = "35rem"

        password.value = ""
        email.value = ""
        name.value = ""
        sobre_name.value = ""

        sms_first_name.textContent = ""
        sms_last_name.textContent = ""
        sms_email.textContent = ""
        sms_password.textContent = ""
    }

})

google_btn.addEventListener("click", (e) => {
    e.preventDefault()
    loginWithGoogle(auth, provider, GoogleAuthProvider)
})

apple_btn.addEventListener("click", (e) => {
    e.preventDefault()
    loginWithFacebook(auth, providerFacebook, signInWithPopup, FacebookAuthProvider)
})