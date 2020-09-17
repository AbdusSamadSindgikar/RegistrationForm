function validate(){
    let name=document.getElementById("n").value
    let password=document.getElementById("pw").value
    let city=document.getElementById("ct").value
    let male=document.getElementById("m").checked
    let female=document.getElementById("f").checked
    if(name==""){
        document.getElementById("s").innerHTML="Please enter your name"
        return false
    }
    else if(password==""){
        document.getElementById("s1").innerHTML="Please provide password"
        return false
    }
    else if(password.length<=3|| password.length>15){
        document.getElementById("s1").innerHTML="password should contain minimum 3 leters/ max 15"
        return false
    }
    else if(city==""){
        document.getElementById("s2").innerHTML="Please enter city name"
        return false
    }
    else if(male=" "&&female==" "){
        document.getElementById("s3").innerHTML=""
        return false
    }

} 