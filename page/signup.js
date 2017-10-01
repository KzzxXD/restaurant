function signUp(form) {
    var name = form.name.value;
    var lastName = form.LastName.value;
    var pass1 = form.password1.value;
    var pass2 = form.password2.value;
    var email = form.email.value;
    var fail = false;

    if(name.length != 0 && lastName.length != 0 && pass1.length != 0 && pass2.length != 0 &&  pass1 == pass2 && email.length !=0){
       var c =  window.location.href="../index.html";
    }else {
        document.getElementById('text-box').innerHTML = "Введите коректние даные";
    }
}
function visib (bl) {
    var c = document.getElementById('dis-non').style.display='none';
}