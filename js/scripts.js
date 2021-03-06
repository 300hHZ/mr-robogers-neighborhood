// Business Logic
function roboger(number,name)
{
  let answer = [];
  let numToString;
  let messages = ["Beep!","Boop!", "Won't you be my neighbor?"];
  if(name)
  {
    messages[2] = messages[2].replace("?",", " + name + "?");
  }
  for(let index1 = 0; index1 <= number; index1++)
  {
    numToString = index1.toString();
    for(let index2 = 3; index2 > 0; index2--)
    {
      if(numToString.includes(index2.toString()))
      {
        answer.push(" " + messages[index2-1]);
        break;
      }
    }

    if (answer.length < (index1+1)) { answer.push(" " + index1); }
  }
  return answer;
}

function loadingTextAnimation(dot1,dot2,dot3)
{
    setInterval(function() {
      dot1.hide();
      dot2.hide();
      dot3.hide();
      dot1.delay(300).fadeIn(0);
      dot2.delay(600).fadeIn(0);
      dot3.delay(900).fadeIn(0);
    }, 1200);

}

// User Interface Logic

$(document).ready(function(){
  //loading image and text w/ animation
  loadingTextAnimation($(".firstDot"), $(".secondDot"),$(".thirdDot"), 4000);

  //transition to main content
  $("#loading").delay(3000).fadeOut(1000);
  $("#main").delay(4000).fadeIn();

  //button click logic
  $("#form button").click(function(event){
    event.preventDefault();
    const input = $("#number").val();

    //calculation transition
    $(".answer").hide();
    $("#calculating").fadeIn();
    $("#calculating").delay(2000).fadeOut();

    //invalid input
    if (/\D/.test(input) || isNaN(parseInt(input)) || parseInt(input) < 0)
    {
      $("#angryRobo").delay(3000).fadeIn();
      $("#form").delay(3600).fadeOut();
      setTimeout(function () { alert("Uh oh. You made Mr. Roboger mad. Please enter a non-negative integer."); }, 4000);
      $("#angryRobo").delay(1000).fadeOut();
      $("#form").delay(400).fadeIn();
    }

    //valid input
    else{
      if($(this).attr("name")==="reverse")
        $(".output").text(roboger(parseInt(input),$("#name").val()).reverse());
      else
        $(".output").text(roboger(parseInt(input), $("#name").val()));
      $(".answer").delay(3000).fadeIn();
    }
  });
});