// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCU_VVMPbcFc38FER87-evZvhCCNqbtSvk",
    authDomain: "class-test-9a7fc.firebaseapp.com",
    projectId: "class-test-9a7fc",
    storageBucket: "class-test-9a7fc.appspot.com",
    messagingSenderId: "187695492480",
    appId: "1:187695492480:web:f8290b24bc84b61731e565"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name= document.getElementById ("user_name").value;
      firebase.database().ref("/").child (user_name).update({
          purpose : "adding user" 
      });
  }