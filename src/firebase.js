import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKV5ScyN1FwqmXL0G2ZVjwKO89rb3MMKk",
    authDomain: "jantabazar-c2440.firebaseapp.com",
    databaseURL: "https://jantabazar-c2440.firebaseio.com",
    projectId: "jantabazar-c2440",
    storageBucket: "jantabazar-c2440.appspot.com",
    messagingSenderId: "620971956579",
    appId: "1:620971956579:web:c0ce79531a0e1f68399b56",
    measurementId: "G-NFYQ26L5CL"
})

const db =  firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}