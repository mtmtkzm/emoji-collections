import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FB_DATABASE_URL,
    authDomain: process.env.FB_DATABASE_URL,
    databaseURL: process.env.FB_DATABASE_URL,
    projectId: process.env.FB_DATABASE_URL,
    storageBucket: process.env.FB_DATABASE_URL,
    messagingSenderId: process.env.FB_DATABASE_URL,
    appId: process.env.FB_DATABASE_URL
  })
}

export default firebase
