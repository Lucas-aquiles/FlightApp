![BrightCoders Logo](img/logo-bc.png)

# Reservación de Vuelos.

![Cover](img/cover.jpg)

<span>Photo by <a href="https://unsplash.com/@by_syeoni?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Suhyeon Choi</a> on <a href="https://unsplash.com/s/photos/flight?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Pre-requisitos

- React Native
  - Instalar el entorno de desarrollo [**:warning: utiliza la opción React Native CLI Quickstart NO utilizar Expo**](https://reactnative.dev/docs/environment-setup)
- Editor de texto
  - Elegir un editor para codificar, puede ser [Visual Studio Code](https://code.visualstudio.com/), o algúno similar.
  - Agregar la extensión [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) para mantener un estilo consistente en tu código
  - Instalar [ESLint](https://eslint.org/) para ayudarte a encontrar y arreglar problemas de tu código
  - Agregar la extensión [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) a tu editor para integrar la funcionalidad de Eslint
- Calidad de código. Para analizar la calidad de tu código necesitarás
  - Instalar y configurar [DeepScan](https://deepscan.io/) para analizar tu codigo y mejorar la calidad atendiendo los resultados del análisis
  - Instalar y configurar [CodeClimate](https://codeclimate.com/) para analizar tu codigo y mejorar la calidad atendiendo los resultados del análisis

## Requerimientos funcionales

La empresa ABC Corp requiere una App para que sus clientes puedan registrar las reservaciones de sus vuelos.

La aplicación deberá cumplir con los siguientes requerimientos:

### Milestone: Registration with email and password

- [ ] As a new user, I can register using my name, email, and password so that I can log in later

**_Acceptance criteria_**

- [ ] Email and password are Required, First Name is optional
- [ ] A same email can not be registered twice
- [ ] Password must have at least 8 characters with a mix of letters, numbers, and symbols.
- [ ] Accept Terms and Privacy Policy is compulsory, subscription is optional
- [ ] UI design must be as close as possible to the one provided
- [ ] User information must be stored on firebase

### Milestone:

- [ ] As a new user, I can register using my name, email, and password, so I can log in later
- [ ] As a new user, I can register using a Google account, so I can login later
- [ ] As a user who has been registered, I can login using the provided email and password, so I can access the app starting on my home screen
- [ ] As a user who has been registered, I can login using the provided Google account, so I can access the app
- [ ] As a user who has logged in, I can see a lists of of my registered flights as a first screen, so I can see a summary of my reserved flights
- [ ] As a user who has logged in, I can add a new flight booking, so it is added to my reserved flights list. To book a flight users must indicate origin, destination, date and number of passengers.

Algunos de los requerimientos sun un tanto genéricos, es decir no brindan el suficiente detalle, el tratamiento que se debe dar al proyecto es el de un MVP, es decir no es necesario que el funcionamiento o el cumplimiento a los requerimientos sea el más complejo, que cumpla con lo mínimo necesario para que cumpla su función

## Requerimientos no-funcionales

- De la App
  - Tanto la información del registro, como la de los datos de los vuelos deben estár almacenadas en firebase
  - El diseño debe ser lo mas cercano al proporcionado
  - Tanto el formulario de registro como el de inicio de sesión deberán contar con validaciones tal y como se indica en el diseño
- Base de datos
  - La información se guardará en firebase
- Calidad
  - Utilizar un estilo de código estandarizado (revisado por Eslint)
  - Incluir pruebas unitarias
  - Puntuación **A** obtenida en CodeClimate
- Ejecución
  - Puede ejecutarse en Android o iOs
- Diseño
  - Debe ser lo más cercano posible al proporcionado
- Código fuente
  - Orientado a Objetos
  - Métodos pequeños
  - Aplicar los principios [SOLID](https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982)
- Manejo del estado
  - Redux para el manejo del estado de la App

## Diseño

En la carpeta [img](/img) de este repositorio se encuentra el diseño solicitado en formato PNG e [InVision](https://www.invisionapp.com/).

## Entregable

- Código fuente en Github (en la rama master)
- Incluir en el repositorio la puntuación obtenida (badge) en CodeClimate
- Documentar en [este archivo](setup/README.md) los pasos necesarios para ejecutar la App
- [Los commits deben se significativos](https://medium.com/better-programming/you-need-meaningful-commit-messages-d869e44e98d4)

## Setup

[Aquí se describen los pasos necesarios para ejecutar y probar este proyecto](setup/README.md)

## Recursos

[Para apoyo de tus actividades utiliza esta lista de recursos recomendados](https://brightcoder.gitbook.io/handbook/react-native)
