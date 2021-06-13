import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDuNd9KBpzVMKOz_-2a1r2eWKg33oqlICk",
    authDomain: "fb-clone-1e13b.firebaseapp.com",
    projectId: "fb-clone-1e13b",
    storageBucket: "fb-clone-1e13b.appspot.com",
    messagingSenderId: "783912080074",
    appId: "1:783912080074:web:93d110ec113a257f9e1a33",
    measurementId: "G-0GQ3QS99SQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export {auth, provider}
  export default db