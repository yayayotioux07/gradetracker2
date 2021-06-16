var firebaseConfig = {
  apiKey: "AIzaSyB152-GSPe1oY80-Y3zxfGCFthGY1q5438",
  authDomain: "gradetracker-789b7.firebaseapp.com",
  projectId: "gradetracker-789b7",
  storageBucket: "gradetracker-789b7.appspot.com",
  messagingSenderId: "812405538459",
  appId: "1:812405538459:web:b2fa905633bb09658e903e",
  measurementId: "G-QHEED44LFF"
};
var globalVariable={
       userUID: ""
    };// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function Signin(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
}

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      window.location.href="charts.html"
      alert("Active user "+email);
      console.log(user.uid);


    }else{
      alert("No Active user Found")
    }
  })
