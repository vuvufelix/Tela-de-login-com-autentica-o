# 🚀 Tela de login com Autenticação

A modern web registration and login application developed to demonstrate secure user authentication. The project uses Firebase Authentication to manage accounts, providing a fluid user experience and a robust backend without the need for a custom server.

![Imagem do projeto](./src/img/screencapture-127-0-0-1-5500-index-html-2025-10-19-16_45_48.png)

## ✨ Key Features

- Full Authentication: User registration, Login, and session management using Firebase Auth. 
- Responsive Design: Modern, clean, and responsive user interface. 
- Validated Form Fields: Ensures that the data entered (email, password) meets security standards. 
- Social Login: (If applicable) Login options with Google and Facebook for added convenience. 
- Error Handling: Clear visual feedback for registration or login errors.

## 🛠️ Technologies Used

- HTML5 & CSS3 (Including Flexbox/Grid for layout) 
- JavaScript (ES6+): Form logic and integration with Firebase. 
- Firebase Authentication: Backend service for user management. 
- Firebase SDK: For communication with Firebase services.

## ⚙️ How to Run the Project Locally

Follow these steps to set up and run the project on your machine.

### 1. Prerequisites

You'll need Node.js and npm (or Yarn) installed. While this project can run with just a simple static server, Node/npm is helpful for dependency management.

### 2. Firebase Setup

- Create a new project in the Firebase Console.

- Add a Web app (the </> icon).

- Copy your project's configuration object (known as firebaseConfig).

- Create a file named firebase-config.js (or similar) in the root of your project and paste the configuration object into it.

```JavaScript
// Exemplo de firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Exporte os módulos que você usa (Auth)
export const auth = firebase.auth(); 
// ...
```

- Enable the Authentication Providers (Email/Password, Google, Facebook) in the Firebase Authentication settings on the Console.

### 3. Execution

- Clone the Repository:

```Bash
git clone https://www.dio.me/articles/enviando-seu-projeto-para-o-github
cd [Nome do seu projeto]
```

- Open index.html: Since this is a pure front-end application, you can simply open the index.html file in your browser.

Recommendation: To avoid CORS issues and ensure correct module loading, use a simple local server extension (like 'Live Server' in VS Code) or run a basic HTTP server via the terminal:

```Bash
# Se você tiver Python instalado
python -m http.server 5500
```

- Open your browser and navigate to http://localhost:5500.