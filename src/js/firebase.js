const firebaseConfig = {
    apiKey: "AIzaSyCSb6bZyk0U5T1jMSu8A93yYOYRBLtqv_4",
    authDomain: "tela-de-login-com-autenticacao.firebaseapp.com",
    projectId: "tela-de-login-com-autenticacao",
    storageBucket: "tela-de-login-com-autenticacao.firebasestorage.app",
    messagingSenderId: "377829093201",
    appId: "1:377829093201:web:e0c9d1f621b0a44252ed70"
};

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

const createUser = async (email, password, create, auth_) => {
    try {
        const userCredential = await create(auth_, email, password)
        message(`Conta criada com sucesso! ${userCredential.user}`, "greenyellow")
    } catch {
       message("Erro ao se cadastrar!", "red")
    }

}

const loginWithGoogle = (autorization, provid, GoogleAuth) => {
    signInWithPopup(autorization, provid)
    .then((result) => {
        const credential = GoogleAuth.credentialFromResult(result)
        const token = credential.accessToken
        message("Usuário logado com sucesso!", "greenyellow")

    }).catch(() => {
        message("Falha ao fazer login!", "red")
  })
}

const loginWithFacebook = (autorization, provid, signInWithPopup, FacebookAuthProvider) => {
    signInWithPopup(autorization, provid)
    .then(() => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        message("Usuário logado com sucesso!", "greenyellow")
    })
    .catch(() => {
        message("Falha ao fazer login!", "red")
    })
}

export {createUser, firebaseConfig, loginWithGoogle, loginWithFacebook}