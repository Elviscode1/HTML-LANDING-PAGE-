document.querySelector("form").addEventListener('submit', function(e){

    e.preventDefault()

    try {
        
    let myemail = document.querySelector("input[type = email]").value

    let myname = document.querySelector("input[type = text]").value

    let mytext = document.querySelector("textarea").value

    let user = {

        name: myname,
        email:myemail,
        details:mytext,
    }
    document.querySelector("form").reset()


    //let userarraystringe = JSON.stringify(user)
   // localStorage.setItm("userinfo", userarraystringe )
let DB = firebase.firestore()
DB.collection("xtianoweb").doc("usersData").add(user)
        
    } catch (error) {

        console.log(error)
        
    }



})


  





  
  



