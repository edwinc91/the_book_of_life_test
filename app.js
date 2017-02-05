$("#submit1").click(function () {
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
  $('div#secondTrip').toggleClass("hidden")
});

$("#submit2").click(function () {
  if ($('input:radio[name=second]:checked').val() == 'Option B1' && $('input:radio[name=first]:checked').val() == 'Option A1') {
    $('span.message').text(
'The girl looks at you and whispers thanks. After class, she hands back the pen to you and tells you her name is Sarah and she just moved to the neighborhood. She seems eager to talk more and make friends.'
    )
    $('span.consultant').text(
"You realize that your next class is Math and you need to really go in a few minutes early to grab a seat in the front as you've been struggling lately while studying for the upcoming test. You've already made the decision to study hard this year and steeled yourself when your friends drifted away from you. What do you do?"
    )
    $('label.c1').text(
"Forget it, I have to get to class early. I need to do well on this next test or all the time I've given up to study will be wasted. There'll be other opportunities to talk to her. Who knows, we might not even become friends."
    )
    $('label.c2').text(
"Eh, although the test may be hard, I'm sure I can do well if I study a little harder. I've been studying so much lately, I've barely talked to anyone lately. I deserve a small break. Plus, Sarah must feel lonely since she just moved here and doesn't know anyone yet."
    )
    $('div#thirdTrip').addClass("A1B1")
  } else if ($('input:radio[name=second]:checked').val() == 'Option B1' && $('input:radio[name=first]:checked').val() == 'Option A2') {
    $('span.message').text(
'The girl looks at you and whispers thanks. After class, she hands back the pen to you and tells you her name is Sarah and she just moved to the neighborhood. She seems eager to talk more and make friends.'
    )
    $('span.consultant').text(
"You see your friend Sam walking towards you while you're talking with Sarah still. He gives you a funny look and starts walking towards you with a goofy smile plastered on his face. What do you do?"
    )
    $('label.c1').text(
"You're embarassed that Sam caught you talking to Sarah and know that he's going to tell everyone that you have a new crush as all highschool friends love to do. To avoid this, you quickly finish your conversation with Sarah and tell her you have to run and quickly intercept Sam before he gets the wrong idea, leaving her alone in the hallway."
    )
    $('label.c2').text(
"Although you know Sam will exaggerate about the encounter to all of your friends, you still keep talking to Sarah and introduce the two to each other when Sam comes."
    )
    $('div#thirdTrip').addClass("A2B1")
  } else if ($('input:radio[name=second]:checked').val() == 'Option B2' && $('input:radio[name=first]:checked').val() == 'Option A2') {
    $('span.message').text(
"The girl fidgets in her seat and looks around. You notice she has a slightly crestfallen expression on her face. Finally, she asks Mr. Adams if she can use one of his pens on his desk. He frowns and scolds her in front of the class, amidst some muffled laughter from your classmates, telling her how a student should be prepared for class or don't show up at all, before reluctantly giving her a pen."
    )
    $('span.consultant').text(
"You see Sarah after class lost in the hallway, wondering where her next class is. Your friend Jane notices you in the hallway and calls out your name. What do you do?"
    )
    $('label.c1').text(
"You wave to Jane and walk towards her. You, Jane, and the rest of your friends decided before to go to the new burger joint that opened up and you're not sure where to meet up after school. Now is a perfect chance to ask Jane. Beside, Sarah has to learn the layout of the school eventually."
    )
    $('label.c2').text(
"You wave to Jane and go up to Sarah and ask her if she's lost. You tell her you know where her next class is located after seeing her schedule and offer to guide her there since it's on the way anyway. You introduce Jane to Sarah together, the three of you walk to Sarah's next class and invite her to go to the new burger joint with the rest of your friends after school."
    )
    $('div#thirdTrip').addClass("A2B2")
  } else if ($('input:radio[name=second]:checked').val() == 'Option B2' && $('input:radio[name=first]:checked').val() == 'Option A1') {
    $('span.message').text(
"The girl fidgets in her seat and looks around. You notice she has a slightly crestfallen expression on her face. Finally, she asks Mr. Adams if she can use one of his pens on his desk. He frowns and scolds her in front of the class, amidst some muffled laughter from your classmates, telling her how a student should be prepared for class or don't show up at all, before reluctantly giving her a pen."
    )
    $('span.consultant').text(
"You see Sarah after class lost in the hallway, wondering where her next class is. You realize that your next class is Math and you need to really go in a few minutes early to grab a seat in the front as you've been struggling lately while studying for the upcoming test. You've already made the decision to study hard this year and steeled yourself when your friends drifted away from you. What do you do?"
    )
    $('label.c1').text(
"You really have to get to Math early to ask the teacher some questions. You don't know Sarah and really don't owe her anything. You rush to class and after talking to the teacher a bit, your understanding has improved greatly and you're confident you'll ace the upcoming test."
    )
    $('label.c2').text(
"Eh, although the upcoming test may be hard, I'm sure I can do well if I study a little harder. I've been studying so much lately. Mom always said to be nice to girls. Plus, Sarah looks lost and she already got called out by Mr. Adams in front of everyone."
    )
    $('div#thirdTrip').addClass("A1B2")
  }
  $('div#secondTrip').toggleClass("hidden")
  $('div#thirdTrip').toggleClass("hidden")
});

$("#submit3").click(function () {
  if ($('div#thirdTrip').hasClass("A1B1")) {
    $('span.message').text("A1B1")
  } else if ($('div#thirdTrip').hasClass("A1B2")) {
    $('span.message').text("A1B2")
  } else if ($('div#thirdTrip').hasClass("A2B1")) {
    $('span.message').text("A2B1")
  } else if ($('div#thirdTrip').hasClass("A2B2")) {
    $('span.message').text("A2B2")
  }
  $('div#thirdTrip').toggleClass("hidden")
  $('div#fourthTrip').toggleClass("hidden")
})
