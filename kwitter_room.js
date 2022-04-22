
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGXq74a6qCSCWC4e_vRUA0nuqy34H8r8c",
  authDomain: "class-93-dee19.firebaseapp.com",
  projectId: "class-93-dee19",
  storageBucket: "class-93-dee19.appspot.com",
  messagingSenderId: "152142114744",
  appId: "1:152142114744:web:2a11b5954d01ea6bd0294d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
