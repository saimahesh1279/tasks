function send() {
    var email = document.getElementById('emailID').value;
    var sub = document.getElementById('subject1').value;
    var myObj = {
        To: email,
        subject: sub
    };
    var myJSON = JSON.stringify(myObj);
    localStorage.setItem("textJSON", myJSON);
    window.alert("Email send sucessfully");
    return;
}