const firebaseConfig = {
  apiKey: "AIzaSyBfY1pmxEvxYS2gxB1GhdBEr_wu-LmPUDQ",
  authDomain: "kwitter-94b73.firebaseapp.com",
  databaseURL: "https://kwitter-94b73-default-rtdb.firebaseio.com",
  projectId: "kwitter-94b73",
  storageBucket: "kwitter-94b73.appspot.com",
  messagingSenderId: "563552844796",
  appId: "1:563552844796:web:7c2fe437a6613e627e5079",
  measurementId: "G-XTNTC0LVM7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
