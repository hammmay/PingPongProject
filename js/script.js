//Business Logic
var userNumber = function(user) {
  if ((user % 15 === 0) && (user > 0)) {
    return "pingpong";
  }  else if ((user % 3 === 0) && (user > 0)) {
      return "ping";
  } else if ((user % 5 === 0) && (user > 0)) {
    return "pong";
  } else if (user <= 0) {
    return "Oops! You have to enter a positive number to play.";
  } else {
    return user;
  }
};


//UI Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var user = parseInt($("input#number").val());
    var result = userNumber(user);


    $("#result").text(result);

  });


});
