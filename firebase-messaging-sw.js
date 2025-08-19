importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCwROsAEGB-FETpisk0moC6t7ecrm0knCk",
    authDomain: "simted-4eaf3.firebaseapp.com",
    projectId: "simted-4eaf3",
    storageBucket: "simted-4eaf3.firebasestorage.app",
    messagingSenderId: "263420312936",
    appId: "1:263420312936:web:8a83f2e4a713d0e852eadd",
    measurementId: "G-QP36CQHVQE"
});

const messaging = firebase.messaging();
