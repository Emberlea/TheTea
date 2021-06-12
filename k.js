var firebaseConfig = {
    apiKey: "AIzaSyDYqFy_M5Xk_prX8i4XxC3ryEIBLPDECJ8",
    authDomain: "kritter-461cc.firebaseapp.com",
    projectId: "kritter-461cc",
    storageBucket: "kritter-461cc.appspot.com",
    messagingSenderId: "565531920672",
    appId: "1:565531920672:web:bafb0bd47c5f9c91baef45",
    measurementId: "G-FMDLQF8L90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var oop=localStorage.getItem("key");
document.getElementById("nam").innerHTML="Welcome, "+oop+"!";

function logout(){
  window.location="kwit.html";
}