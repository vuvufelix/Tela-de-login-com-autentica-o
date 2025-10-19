import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js"

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

// Firebase cadastro
const firebaseConfig = {
    apiKey: "AIzaSyCSb6bZyk0U5T1jMSu8A93yYOYRBLtqv_4",
    authDomain: "tela-de-login-com-autenticacao.firebaseapp.com",
    projectId: "tela-de-login-com-autenticacao",
    storageBucket: "tela-de-login-com-autenticacao.firebasestorage.app",
    messagingSenderId: "377829093201",
    appId: "1:377829093201:web:e0c9d1f621b0a44252ed70"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider();

const createUser = async (email, password) => {

    try {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        
        alert("Conta criada com sucesso " + userCredential.user)

    } catch (error) {

        alert("Erro ao registrar: " + error.message)
    }

}

const loginWithGoogle = (autorization, provid) => {
    signInWithPopup(autorization, provid)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const user = result.user
        message("Usuário logado com sucesso!", "greenyellow")
        console.log(user)
    }).catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
        message("Falha ao fazer login!", "red")
  })
}

const loginWithFacebook = (autorization, provid) => {
    signInWithPopup(autorization, provid)
    .then((result) => {
        const user = result.user
        console.log(user)
        message("Usuário logado com sucesso!", "greenyellow")
    })
    .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
        message("Falha ao fazer login!", "red")
    })
}


// Mensagem de cadastro
const message = (texto, cor) => {
    Toastify({
        text: texto,
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right", 
        stopOnFocus: true,
        style: {
          background: cor,
          color: "black"
        }
    }).showToast();
}

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
        createUser(email.value, password.value)
        message("Cadastro realizado com sucesso", "greenyellow")
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
    loginWithGoogle(auth, provider)
})

apple_btn.addEventListener("click", (e) => {
    e.preventDefault()
    loginWithFacebook(auth, providerFacebook)
})