$(function() {
  $("#submit").click(function() {
    console.log($('input:radio[name=option]:checked').val());
    //this shows the value of the radio button checked
  });
});
