window.addEventListener('load', () => {


    var today = new Date();
    var time = today.getHours();
    var min = today.getMinutes();
    text = localStorage.getItem("textJSON");
    var obj = JSON.parse(text);


    document.getElementById('emailId').innerHTML = obj.To;
    document.getElementById('subject1').innerHTML = obj.subject;

    document.getElementById('time').innerHTML = time + ' : ' + min;
})