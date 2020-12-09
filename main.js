var objPeople = [
    {
        username: "admin",
        password: "12345"  
    }  
]
function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(var i=0; i<objPeople.length; i++){

        if(username == objPeople[i].username && password == objPeople[i].password) {
            location.replace('home.html')
            // document.write(username + " is logged in !!!")
            return
        }
        
    }
    alert("incorrect username or password")
    // document.write("incorrect username or password")   
}
