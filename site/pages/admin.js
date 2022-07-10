$(document).ready(function () {
    //$('#username').focus();
    
    
    
    $("#submit").click(function () {
      event.preventDefault(); // prevent PageReLoad
  
      var ValidEmail = $("#username").val() === "idlaviv"; // User validate
      var ValidPassword = $("#password").val() === "3"; // Password validate
  
      if (ValidEmail === true && ValidPassword === true) {
        // if ValidEmail & ValidPassword
        $(".valid").css("display", "block");
        window.location = "https://google.com"; // go to home.html
      } else {
        $(".error").css("display", "block"); // show error msg
      }
    });
  });