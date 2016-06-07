$(document).ready(function(){
  var animal = prompt("Do you want to learn about turtles, snakes or bees?").toLowerCase();
  if (animal === "turtles") {
    $("#turtles").show();
  } else if (animal === "snakes") {
    $("#snakes").show();
  } else {
    $("#bees").show();
  }
});
