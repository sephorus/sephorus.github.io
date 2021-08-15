import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA6WOIEoVPHB7vMpsvLd7AREind-88CypM",
    authDomain: "ramoscoding.firebaseapp.com",
    databaseURL: "https://ramoscoding.firebaseio.com",
    projectId: "ramoscoding",
    storageBucket: "ramoscoding.appspot.com",
    messagingSenderId: "551138099002",
    appId: "1:551138099002:web:66d67a80da6d20bd861a03",
    measurementId: "G-ZZKQ9VN44C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;