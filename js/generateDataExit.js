
function printUID(){
  console.log(userUID);

}



//TRYING TO PASS DATA FRO PREVIOUS SCREEN TO THIS
//
//
// function Signin(){
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
//     promise.catch(e=>alert(e.message));
// }
//
//   function signOut(){
//     auth.signOut();
//     alert("SignOut Successfully from System");
//   }
//
//   //active user to homepage
//   firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//       var email = user.email;
//       window.location.href="charts.html"
//       alert("Active user "+email);
//       userUID = (user.uid);
//
//
//     }else{
//       alert("No Active user Found")
//     }
//   })
