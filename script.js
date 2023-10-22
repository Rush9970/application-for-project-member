var isVisible = false;

function see() {
    var input = document.getElementById("password");
    var seeIcon = document.getElementById("see");

    if (isVisible) {
        input.type = "password";
        isVisible = false;
        seeIcon.style.color = "gray";
    } else {
        input.type = "text";
        isVisible = true;
        seeIcon.style.color = "#262626";
    }
}

function check() {
    var input = document.getElementById("password").value;

    input = input.trim();
    document.getElementById("password").value = input;
    document.getElementById("count").innerText = "Length : " + input.length;

    var x = 0;
    if (input.length >= 8) {
        x++;
        document.getElementById("check0").style.color = "green";
    } else {
        document.getElementById("check0").style.color = "red";
    }

    if (input.match(/[0-9]/)) {
        x++;
        document.getElementById("check2").style.color = "green";
    } else {
        document.getElementById("check2").style.color = "red";
    }

    if (input.match(/[A-Z]/)) {
        x++;
        document.getElementById("check3").style.color = "green";
    } else {
        document.getElementById("check3").style.color = "red";
    }

    if (input.match(/[a-z]/)) {
        x++;
        document.getElementById("check4").style.color = "green";
    } else {
        document.getElementById("check4").style.color = "red";
    }

    if (input.match(/[!,%,&,@,#,$,^,*,?,_,~]/)) {
        x++;
        document.getElementById("check5").style.color = "green";
    } else {
        document.getElementById("check5").style.color = "red";
    }

    if (x == 5) {
        document.getElementById("approved").innerText = "Hurray!! Your Password is strong";
    } else {
        document.getElementById("approved").innerText = "";
    }
}

function onClick() {
    var email = document.getElementById("email").value;
    var userName = document.getElementById("userName").value;
    var input1 = document.getElementById("password").value;
    var input2 = document.getElementById("Cpassword").value;

    if (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById("email").style.borderColor = "green";
    } else {
        document.getElementById("validEmail").innerText = "Invalid email format";
    }

    if (userName.length >= 5) {
        document.getElementById("useNameDiv").innerText = "";
    } else {
        document.getElementById("useNameDiv").innerText = "Username should have more than 5 characters";
    }
    if (input1 === input2) {
      document.getElementById("Passworld2").innerText = "Passwords match";
  } else {
      document.getElementById("Passworld2").innerText = "Passwords do not match";
  }
}
