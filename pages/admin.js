$(document).ready(function () {
    //$('#username').focus();
    
    
    
    $("#submit").click(function () {
      event.preventDefault(); // prevent PageReLoad
  
      var ValidAns = $("#username").val() === "Infiniment plus faible"; //Fuck you Smartass, c'était pas comme ça qu'il fallait deviner
      var ValidAns2 = $("#username").val() === "infiniment plus faible"; //Fuck you Smartass, c'était pas comme ça qu'il fallait deviner
  
      if (ValidAns === true || ValidAns2 === true) {
        // if ValidEmail & ValidPassword
        $(".valid").css("display", "block");

        localStorage.setItem('adminaccess', 'yes');



        window.location = "../Admin/index.html"; // go to home.html
      } else {
        $(".error").css("display", "block"); // show error msg
      }
    });
  });

  let adminAccess = localStorage.getItem('adminaccess'); 
  
  if (adminAccess === 'yes') {
    window.location = '../Admin/index.html';
  }
  else {
    
  }