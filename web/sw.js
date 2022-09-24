/*importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging.js")

const firebaseConfig = {
  apiKey: "AIzaSyDkM69BX6Xy0HZrOYjuxnih_XDMuODSl38",
  authDomain: "helpewave-push.firebaseapp.com",
  projectId: "helpewave-push",
  storageBucket: "helpewave-push.appspot.com",
  messagingSenderId: "599961868175",
  appId: "1:599961868175:web:ec9e0e617bf4428c469dfa"
};

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const title = 'Hello';
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});
*/