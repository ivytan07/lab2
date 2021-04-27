/* validate login page*/
function validateLoginForm() {
    var email = document.forms["loginForm"]["idemail"].value;
    var password = document.forms["loginForm"]["idpassword"].value;
    if ((email == "") || (password == "")) {
        alert("Please fill out your email/password");
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email))) {
        alert("Please enter your email again. Your email is invalid.");
        return false;
    }
}
/* validate register page*/
function validateRegForm() {
    var email = document.forms["registerForm"]["idemail"].value;
    var password = document.forms["registerForm"]["idpassword"].value;
    if ((email == "") || (password == "")) {
        alert("Please fill out your email/password");
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email))) {
        alert("Please enter your email again. Your email is invalid.");
        return false;
    }
}

