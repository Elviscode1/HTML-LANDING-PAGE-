document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()

    let myname = document.getElementById("fullname").value;
    let myemail = document.getElementById("email").value;
    let myhelp = document.getElementById("help").value;

    let users = {
        name:myname,
        email:myemail,
        help:myhelp,
    }
})


