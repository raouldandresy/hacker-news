# Hacker News Reader

Un'applicazione mobile per esplorare le storie, i commenti e gli utenti di Hacker News, sviluppata con Expo e React Native.

## 🚀 Installazione e avvio

### Prerequisiti

* [Node.js](https://nodejs.org/) ≥ 18.x
* [npm](https://www.npmjs.com/) ≥ 9.x
* [Expo CLI](https://docs.expo.dev/get-started/installation/) (opzionale, ma consigliato per un'esperienza ottimale)

### Passaggi

1. **Clona il repository:**

   ```bash
   git clone https://github.com/raouldandresy/hacker-news.git
   cd hacker-news
   ```

2. **Installa le dipendenze:**

   ```bash
   npm install
   ```

3. **Avvia l'app in modalità sviluppo:**

   ```bash
   npx expo start
   ```

   Questo comando aprirà una finestra nel tuo browser con un QR code. Scansiona il codice con l'app Expo Go sul tuo dispositivo mobile per visualizzare l'app in tempo reale.

### Avvio su emulatori

Per avviare l'app su un emulatore Android o iOS:

* **Android:**

  ```bash
  npx expo start --android
  ```

* **iOS (solo su macOS):**

  ```bash
  npx expo start --ios
  ```

## 🧠 Scelte tecniche

* **Expo & React Native:** Per sviluppare un'app mobile multipiattaforma con un ciclo di sviluppo rapido.
* **React Navigation:** Per gestire la navigazione tra le schermate in modo dichiarativo.
* **Redux Toolkit:** Per la gestione centralizzata dello stato dell'applicazione.

## ⚠️ Note e limitazioni

* **Prestazioni:** L'app è progettata per dispositivi mobili moderni. Su dispositivi più datati, potrebbero verificarsi rallentamenti.

## 📄 Licenza

Questo progetto è concesso in licenza sotto la [MIT License](https://opensource.org/licenses/MIT).
