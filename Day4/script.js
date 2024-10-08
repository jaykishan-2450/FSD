function validate(){
    let username = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;
    // let p1 = document.getElementById
    if(username.length>3){
        if(pass.length>7 ){
            return true
            // alert("Validated")
        }
        else{
            alert("Invalid Password")
            return false
            // 
        }
    }
    else{
        alert("Invalid Username")
        return false
        // 
    }    
}