//Business Logic

//for (user; user < 5; user += 1) {

 var userNumber = function(user) {
  if (user <= 0) {
    return "Oops! You have to enter a positive number to play.";
  } else if (user % 15 === 0) {
    return "pingpong";
  } else if (user % 3 === 0) {
    return "ping";
  } else if (user % 5 === 0) {
    return "pong";
  } else {
    return user;
    };
};

//UI Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var user = parseInt($("input#number").val());
    var result = userNumber(user);

//    $("#result").text(result);
$("#result").prepend("<li>" + result + "</li>");

  });
});
