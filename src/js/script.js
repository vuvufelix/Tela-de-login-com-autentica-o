const terms = document.querySelector("#terms")
const btn = document.querySelector("#btn")
const container = document.querySelector(".container")

const google_btn = document.querySelector("#google_btn")
const apple_btn = document.querySelector("#apple_btn")

const mensagem = (texto, cor) => {
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

btn.addEventListener("click", (e) => {
    e.preventDefault()

    const sign_up = {
        name: document.querySelector("#first_name").value,
        sobre_name: document.querySelector("#last_name").value,
        email: document.querySelector("#email").value,
        password:  document.querySelector("#password").value
    }

    const verifiquer = () => {

        const sms_first_name = document.querySelector("#sms_first_name")
        const sms_last_name = document.querySelector("#sms_last_name")
        const sms_email = document.querySelector("#sms_email")
        const sms_password = document.querySelector("#sms_password")

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

        if(sign_up.name.length == 0) {
            sms_first_name.style.color = "red"
            sms_first_name.textContent = "Por favor preencha este campo"
        } else if(sign_up.name.length > 0 && sign_up.name.length < 3) {
            sms_first_name.style.color = "red"
            sms_first_name.textContent = "O nome tem que ter no mínimo 3 caracteres"
        } else {
            sms_first_name.style.color = "greenyellow"
            sms_first_name.textContent = "Nome válido"
        }

        if(sign_up.sobre_name.length == 0) {
            sms_last_name.style.color = "red"
            sms_last_name.textContent = "Por favor preencha este campo"
        } else if(sign_up.sobre_name.length > 0 && sign_up.sobre_name.length < 3) {
            sms_last_name.style.color = "red"
            sms_last_name.textContent = "O nome tem que ter no mínimo 3 caracteres"
        } else {
            sms_last_name.style.color = "greenyellow"
            sms_last_name.textContent = "Nome válido"
        }

        if(sign_up.email.length == 0) {
            sms_email.style.color = "red"
            sms_email.textContent = "Por favor preencha este campo"
        } else {
            sms_email.style.color = "greenyellow"
            sms_email.textContent = "Email válido"
        }

        if(sign_up.password.length == 0) {
            sms_password.style.color = "red"
            sms_password.textContent = "Por favor preencha este campo"
        } else if(sign_up.password.length > 0 && sign_up.password.length < 6) {
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
        mensagem("Cadastro realizado com sucesso", "greenyellow")
        container.style.height = "35rem"

        sms_password.textContent = ""
        sms_email.textContent = ""
        sms_last_name.textContent = ""
        sms_first_name.textContent = ""
    }

})

google_btn.addEventListener("click", (e) => {
    e.preventDefault()

})

apple_btn.addEventListener("click", (e) => {
    e.preventDefault()

})