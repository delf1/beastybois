import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase with your own info at https://firebase.google.com/
var config = {
    apiKey: "AIzaSyBfjIdVb1epPOqupXXak6nUjon0uoq39y4", //not sensitive, can be shown to world
    authDomain: "beastybois-bca97.firebaseapp.com",
    databaseURL: "https://beastybois-bca97.firebaseio.com",
    projectId: "beastybois-bca97",
    storageBucket: "beastybois-bca97.appspot.com",
    messagingSenderId: "302770047254"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;