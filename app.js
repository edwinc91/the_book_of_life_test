$("#submit1").click(function() {
  // console.log($('input:radio[name=first]:checked').val());
  //this shows the value of the radio button checked
  if ($('input:radio[name=first]:checked').val() == 'Option A1') {
    $('span.message').text(
'You have studied and forgone hanging out with friends. You soon realize that your friends have been drifting apart from you. However, you have managed to do well enough in school to be able to pick from a list of your dream colleges.'
    )
  } else if ($('input:radio[name=first]:checked').val() == 'Option A2') {
    $('span.message').text(
"You spend more and more time with your friends and notice that your grades have been falling. One of your friends has gotten more distant to your friend group as he's been studying more and more."
    )
  }
  $('div.firstTrip').toggleClass("hidden")
  $('div.secondTrip').toggleClass("hidden")
});

$("#submit2").click(function() {
  $('span.message').text(
'The girl looks at you and whispers thanks. After class, she hands back the pen to you and tells you her name is Sarah and she just moved to the neighborhood. She seems eager to talk more and make friends.'
  )
  if ($('input:radio[name=second]:checked').val() == 'Option B1' && $('input:radio[name=first]:checked').val() == 'Option A1') {
    $('span.consultant').text(
"You realize that your next class is Math and you need to really go in a few minutes early to grab a seat in the front as you've been struggling lately while studying for the upcoming test. You've already made the decision to study hard this year and steeled yourself when your friends drifted away from you. What do you do?"
    )
    $('label.c1').text(
"Forget it, I have to get to class early. I need to do well on this next test or all the time I've given up to study will be wasted. There'll be other opportunities to talk to her. Who knows, we might not even become friends."
    )
    $('label.c2').text(
"Eh, although the test may be hard, I'm sure I can do well if I study a little harder. I've been studying so much lately, I've barely talked to anyone lately. I deserve a small break. Plus, Sarah must feel lonely since she just moved here and doesn't know anyone yet."
    )
  } else if ($('input:radio[name=second]:checked').val() == 'Option B2' && $('input:radio[name=first]:checked').val() == 'Option A1') {
    $('span.consultant').text(
""
    )
  }
  $('div.secondTrip').toggleClass("hidden")
  $('div.thirdTrip').toggleClass("hidden")
});
