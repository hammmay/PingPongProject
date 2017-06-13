//Business Logic

function exceptions(index) {
  if (index % 15 === 0) {
    return "pingpong";
  } else if (index % 3 === 0) {
    return "ping";
  } else if (index % 5 === 0) {
    return "pong";
  } else {
    return index;
    };
};

//UI Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    $("#result").text("");
    var user = parseInt($(("input#number")).val());
    if (user < 1 || user > 50) {
    $("#result").text("Oops! Think of a number between 1 and 50 so you won't crash the page.");
  } else {
      for (var indexes = 1; indexes <= user; indexes += 1) {
      var result = exceptions(indexes);

      $("#result").append("<li>" + result + "</li>");
    };
    };
  });
});
