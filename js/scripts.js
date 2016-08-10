$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var food = $("#foods").val();
    var music = $("input:radio[name=style]:checked").val();
    var favoriteColor = $("#color").val();
    var dob = $("#born").val();
    $("#nameoutput").append(name);
    $("#foodoutput").append(food);
    $("#styleoutput").append(music);
    $("#coloroutput").append(favoriteColor);
    $("#doboutput").append(dob);
    $("#output").show();
  });
});
