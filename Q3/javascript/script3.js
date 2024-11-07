function login() {
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "ale@cesupa.br" && password == "123123") {
        window.location = "https://www.cesupa.br/";
    } else if (email === "pedro@giroto.com" && password === "223344") {
        window.location = "https://www.detran.pa.gov.br/index_.php";
    } else if (email === "isaac@java.com" && password === "asdasd") {
        window.location = "https://www.idopterlabs.com.br/";
    } else if (email != "ale@cesupa.br" && email != "pedro@giroto.com" && email != "isaac@java.com") {
        document.getElementById("error-email").style.display = "block";
    }
    if (password != "123123" && password != "223344d" && password != "asdasd"){
        document.getElementById("error-pass").style.display = "block";
    }

}

document.getElementById("email").addEventListener("focus", function(){
    document.getElementById("error-email").style.display = "none";
})

document.getElementById("password").addEventListener("focus", function(){
    document.getElementById("error-pass").style.display = "none";
})