import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyCSb6bZyk0U5T1jMSu8A93yYOYRBLtqv_4",
    authDomain: "tela-de-login-com-autenticacao.firebaseapp.com",
    projectId: "tela-de-login-com-autenticacao",
    storageBucket: "tela-de-login-com-autenticacao.firebasestorage.app",
    messagingSenderId: "377829093201",
    appId: "1:377829093201:web:e0c9d1f621b0a44252ed70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const createUser = async (email, password) => {

    try {

        const userCredential = createUserWithEmailAndPassword(auth, email, password)
        
        alert("Conta criada com sucesso " + userCredential.user)

    } catch (error) {

        alert("Erro ao registrar: " + error.message)
    }

}

export default createUser()