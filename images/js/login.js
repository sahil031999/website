function Login() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if (pass.length >= 8) {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    } else {
        console.log("Invalid Length");
    }




}


function SignUp(){
    
}