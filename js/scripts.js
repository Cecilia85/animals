$(document).ready(function(){
  var animal = prompt("Do you want to learn about turtles, snakes or bees?").toLowerCase();
  if (animal === "turtles") {
    $("#turtles").show();
  } else if (animal === "snakes") {
    $("#snakes").show();
  } else if (animal==="bees"){
    $("#bees").show();
  } else{
    alert("Please write turtles, snakes or bees");
  }
});
