# 🌤️​​ Gnomai App

**Gnomai app es un aplicativo que permite ver el estado del clima actual por ciudad que el usuario ingrese. Así entonces el usuario será capaz de 
ver la fecha actual, el clima en °C, sensación térmica, temperatura maxima, temperatura minima, entre otras. También podra ver el pronostico por horas y de los proximos días. 

Además el usuario podrá ingresar sesión por medio de correo y contraseña o autenticación de Gmail, una vez loggeado será capaz de hacer comentarios para publicar en la pagina principal de Gnomai app.
**

## 📂​ Estructura de carpetas

``````

├───📁 public/
│   └───📄 index.html
|
├───📁 src/
│   ├───📁 components/
│   │   ├───📁
│   │    └───📄 Create.jsx
    |     └───📄 Edit.jsx
    |    └───📄 Footer.jsx
    |    └───📄 FormBar.jsx
    |    └───📄 Gallery.jsx
    |    └───📄 Home.jsx
    |    └───📄 Login.jsx
        └───📄 Navbar.jsx
    |    └───📄 Register.jsx
    |    └───📄 Weather.jsx
│   ├───📁 Firebase/
│   │   └───📄 rifebaseConfig.js
|
│   ├───📁 redux/
         ├───📁 actions
│   │     └───📄 actionRegister.js
          |───📄 actionFotos.js
         ├───📁 reducers
│   │    └───📄 registerReducers.js
         └───📄 fotoReducers.js
         ├───📁 store
│   │    └───📄 store.js
         ├───📁 types
│   │    └───📄 types.js
│    ├───📁routes
│   │    └───📄 AppRoutes.jsx
    |     └───📄Dashboard.jsx
    |    └───📄 PrivateRoutes.jsx
    |    └───📄 PublicRoutes.jsx
│   ├───📁 styles/
│   │   ├───📄 styles.css
│   │   └───📄 styles.js
│   ├───📁 test/
│   │   └───📄 Apptest.test.js
│   └───📄 index.js
├───📄 .gitignore
├───📄 package-lock.json
├───📄 package.json
└───📄 README.md

``````

## 📚​ Dependencias usadas

    1. Puedes clonar el repositorio
    2. Abre tu terminal y digita "nmp i"
    3. Digita "npm start"


    "firebase": "^9.8.4",
    "react": "^18.2.0",
    "react-bootstrap": "^2.4.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1",
    "styled-components": "^5.3.5",
    "thunk": "^0.0.1",
    "web-vitals": "^2.1.4"

## 🌐​ Despliegue del proyecto

    Puedes ver el proyecto aquí : https://prueba-tecnica-one.vercel.app/


## 💻​ Recursos de interes

    React-bootstrap: https://react-bootstrap.netlify.app/
    API Weather : https://openweathermap.org/api
    Cloudinary: https://cloudinary.com

