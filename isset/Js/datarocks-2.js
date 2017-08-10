$(document).ready(function(){
  var provider = new firebase.auth.GoogleAuthProvider();

    var user = firebase.auth().currentUser;
    var txtNombre = $("#txtNombre");
    var txtEmail = $("#txtEmail");
    var imgFoto = $("#imgFoto");
//<<<<<<< HEAD
if (user != null) {
  user.providerData.forEach(function (profile) {
    
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
    console.log("  Photo URL: "+profile.photoURL);
    txtEmail.html(profile.email);
    txtNombre.html(profile.displayName);
    imgFoto.attr("src",profile.photoURL);
  });
}
var btn_out = $("#btn-out");
btn_out.on("click", function(){

  firebase.auth().signOut().then(function() {
  // Sign-out successful.
    
  
      window.location.href="../index.html";
    
  });

}).catch(function(error) {
  // An error happened.
});

});

=======
    $(".button-collapse").sideNav();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.providerData.forEach(function (profile) {
                txtEmail.html(profile.email);
                txtNombre.html(profile.displayName);
                imgFoto.attr("src",profile.photoURL);
                console.log("Sign-in provider: "+profile.providerId);
                console.log("  Provider-specific UID: "+profile.uid);
                console.log("  Name: "+profile.displayName);
                console.log("  Email: "+profile.email);
                console.log("  Photo URL: "+profile.photoURL);
              });
        } 
    });

>>>>>>> origin/master
});
  