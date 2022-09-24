// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDkM69BX6Xy0HZrOYjuxnih_XDMuODSl38",
  authDomain: "helpewave-push.firebaseapp.com",
  projectId: "helpewave-push",
  storageBucket: "helpewave-push.appspot.com",
  messagingSenderId: "599961868175",
  appId: "1:599961868175:web:ec9e0e617bf4428c469dfa"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});