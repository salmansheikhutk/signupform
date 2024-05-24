document.getElementById("click").addEventListener('click', function() {
    document.getElementById("myform").submit();
  });

  // if id: user_password and confirm do not match, then display error message
    // Path: script.js
    document.getElementById("confirm").addEventListener('input', function() {
        var password = document.getElementById("user_password").value;
        var confirm = document.getElementById("confirm").value;
        if (password != confirm) {
            //Make the border of both elements red
            document.getElementById("user_password").style.borderColor = "red";
            document.getElementById("confirm").style.borderColor = "red";
            //Add text right below id="user_password"
            var p = document.createElement("p");
            p.innerHTML = "Passwords do not match!";
            document.getElementById("password").appendChild(p);
            // only append once, if it's already there dont keep adding
            if (document.getElementById("password").getElementsByTagName("p").length > 1) {
                document.getElementById("password").removeChild(document.getElementById("password").getElementsByTagName("p")[1]);
            }   
    } else {
        // remove the red border and error message if the passwords match
        document.getElementById("user_password").style.borderColor = "";
        document.getElementById("confirm").style.borderColor = "";
        document.getElementById("password").removeChild(document.getElementById("password").getElementsByTagName("p")[0]);
    }

});