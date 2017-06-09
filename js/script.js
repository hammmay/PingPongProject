//Business Logic
var userNumber = function(user) {
  if ((user % 3 === 0)) {// && (year % 100 !== 0) || (year % 400 === 0)) {
    return "ping";
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
