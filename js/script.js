//Business Logic
var pingOrPongs = function(userNumber) {
//  if ((userNumber % 3 === 0) && (userNumber % 100 !== 0) || (userNumber % 400 === 0)) {
//    return true;
//  } else {
//    return false;
//  }
//};


//UI Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("input#Number").val());
    var result = pingOrPongs(userNumber);


    $("#result").text(result);
  });


});
