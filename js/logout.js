// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB152-GSPe1oY80-Y3zxfGCFthGY1q5438",
  authDomain: "gradetracker-789b7.firebaseapp.com",
  databaseURL: "https://gradetracker-789b7-default-rtdb.firebaseio.com",
  projectId: "gradetracker-789b7",
  storageBucket: "gradetracker-789b7.appspot.com",
  messagingSenderId: "812405538459",
  appId: "1:812405538459:web:b2fa905633bb09658e903e",
  measurementId: "G-QHEED44LFF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
database = firebase.database();
const auth = firebase.auth();

var barLabels = [];
var barData = [];





//////////////////////
  function data(){
    var userId = firebase.auth().currentUser.uid;
    console.log(userId);
    var ref = database.ref('students/' +userId+'/studentGrades').once("value", snap => {
      // console.log(snap.val())
      var dataRetrieved = snap.val();
      barLabels =  Object.keys(dataRetrieved);
      console.log(barLabels);
      barData =  Object.values(dataRetrieved);
      console.log(barData);

      createChart();





      // keys.forEach((key, index) => {
      //     console.log(`${key}: ${tempArray[key]}`);
      // });

      //code below print keys
      //  for (const i in tempArray){
      //   barLabels = barLabels + i ;
      // }
      // console.log(barLabels);
      // console.log(tempArray);

    })
};


//////////////////////



  function createChart() {


      var ctx = document.getElementById("myBarChart");
      var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: barLabels,
        datasets: [{
          label: 'Student Grade',
          data: barData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        scales: {
          xAxes: [{
            ticks: {
              maxRotation: 90,
              minRotation: 80
            },
              gridLines: {
              offsetGridLines: true // à rajouter
            }
          },
          {
            position: "top",
            ticks: {
              maxRotation: 90,
              minRotation: 80
            },
            gridLines: {
              offsetGridLines: true // et matcher pareil ici
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

/////////////////////

  function signOut(){
    alert("SignOut Successfully from System");
    auth.signOut();

  }




// firebase.database().ref('doctors/'+userId+'/doctorDetails').on('value', function(snapshot){
//     console.log(snapshot.val());
// });
