

const firebaseConfig = {
  apiKey: "AIzaSyA_BvpVYCMin1u3JN05KJmG6XL-es2eaYg",
  authDomain: "commm-6b98a.firebaseapp.com",
  databaseURL: "https://commm-6b98a-default-rtdb.firebaseio.com",
  projectId: "commm-6b98a",
  storageBucket: "commm-6b98a.appspot.com",
  messagingSenderId: "385323127558",
  appId: "1:385323127558:web:33dfb1539d5d6798410487",
  measurementId: "G-C75QVVRJPV"
};
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Seja bem-vindo " + user_name + "!";
  
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