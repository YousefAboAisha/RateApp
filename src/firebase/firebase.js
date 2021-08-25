import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCPbMmZxvYivFFzpEnNd3tEVBIxBQWajWg",
  authDomain: "rate-app-e4c05.firebaseapp.com",
  databaseURL: "https://rate-app-e4c05-default-rtdb.firebaseio.com",
  projectId: "rate-app-e4c05",
  storageBucket: "rate-app-e4c05.appspot.com",
  messagingSenderId: "990884340306",
  appId: "1:990884340306:web:6a3670a7336cae49d7758b",
  measurementId: "G-H755ST1YPY",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
