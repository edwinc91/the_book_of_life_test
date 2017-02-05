$(function() {
  $("#submit1").click(function() {
    console.log($('input:radio[name=first]:checked').val());
    //this shows the value of the radio button checked
    if ($('input:radio[name=first]:checked').val() == 'Option 1') {
      console.log(
'You have studied and forgone hanging out with friends. You soon realize that your friends have been drifting apart from you. However, you have managed to do well enough in school to be able to pick from a list of your dream colleges.'
      )
    } else if ($('input:radio[name=first]:checked').val() == 'Option 2') {
      console.log(
"You spend more and more time with your friends and notice that your grades have been falling. One of your friends has gotten more distant to your friend group as he's been studying more and more."
      )
    }
  });
});
