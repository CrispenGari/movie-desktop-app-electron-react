import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAC5DJz87PDUqmYOWTZRVWofZGVdrkMgxY",
    authDomain: "movies-desktop-app.firebaseapp.com",
    databaseURL: "https://movies-desktop-app.firebaseio.com",
    projectId: "movies-desktop-app",
    storageBucket: "movies-desktop-app.appspot.com",
    messagingSenderId: "267844788905",
    appId: "1:267844788905:web:16f6a33ecfce7071e83fb8",
    measurementId: "G-RFK8YRTK28"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebaseApp.auth()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  const githubAuthProvider = new firebase.auth.GithubAuthProvider()
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export {googleAuthProvider, githubAuthProvider, facebookAuthProvider, auth}