
/* Navigate to main form */
$('#btnMainForm').click(function() {
    window.location.href = 'ACD_FEB2.1_Session_8_Assignment_2_Main.html';
});

/* Navigate to login form */
$('#btnLogin').click(function() {
    window.location.href = 'login.html';
});

/* Navigate to registration form */
$('#btnSignUp').click(function() {
    window.location.href = 'signup.html';
});

/* store new user in local storage and give success message */
$('#btnResgistration').click(function() {
    
    /* Small trick to register more than one user in the system */
    localStorage.setItem("Password_" + $("#txtEmail").val(),$("#txtPassword").val());
    localStorage.setItem("Name_" + $("#txtEmail").val(),$("#txtName").val());

    window.location.href = 'signupsuccess.html';
});

/* check if user exists in localstorage, if exists show success message else show invalid email/passwrod message 

    *** Below loop in console will display all the registered users ***
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        console.log(key + " => " + value);
    }

*/
$('#btnLoginEnter').click(function() {
    
    if(localStorage.getItem("Password_" + $("#txtEmail").val())==$("#txtPassword").val())
    {
        /* Setting login user in special local storage and used to print in welcome message */
        localStorage.setItem("CurrentUser", localStorage.getItem("Name_" + $("#txtEmail").val()));
        window.location.href = 'loginsuccess.html';
        
    }
    else
    {
        alert("Invalid email and/or password");
    }
});

/*Show welcome message */
function setWelcomeMessage()
{
    $("#headerWelcome").text("Welcome " + localStorage.getItem("CurrentUser"));
}