importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCwROsAEGB-FETpisk0moC6t7ecrm0knCk",
    authDomain: "simted-4eaf3.firebaseapp.com",
    projectId: "simted-4eaf3",
    storageBucket: "simted-4eaf3.firebasestorage.app",
    messagingSenderId: "263420312936",
    appId: "1:263420312936:web:8a83f2e4a713d0e852eadd",
    measurementId: "G-QP36CQHVQE"
});

// Obtém a instância do Messaging
const messaging = firebase.messaging();

// Opcional: recebe mensagens em background
messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icons/icon-192.png' // ajuste o caminho do ícone se quiser
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});