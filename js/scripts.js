/*Wooj self-notes/thoughts:
Discovered a bug that submission would still work if input contained both numbers and letters. Made use of a RegExp object and .test to fix big.
*/

// Business Logic
function roboger(number)
{
  let answer = [];
  let numToString;
  const messages = ["Beep!","Boop!", "Won't you be my neighbor?"];
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
    setInterval(function () {
      dot1.hide();
      dot2.hide();
      dot3.hide();
      dot1.delay(300).fadeIn(0);
      dot2.delay(600).fadeIn(0);
      dot3.delay(900).fadeIn(0);
    }
    ,1200);

}

// User Interface Logic

$(document).ready(function(){
  //loading image and text w/ animation
  loadingTextAnimation($(".firstDot"), $(".secondDot"),$(".thirdDot"), 4000);
  //transition to main content
  $("#loading").delay(3000).fadeOut(1000);
  $("#main").delay(4000).fadeIn();
  //submit button logic
  $("#form").submit(function(event){
    event.preventDefault();
    const input = $("#number").val();
    const nonnumber = new RegExp(/\D/); 
    //calculation transition
    $(".answer").hide();
    $("#calculating").fadeIn();
    $("#calculating").delay(2000).fadeOut();
    
    if (isNaN(parseInt(input)) || nonnumber.test(input) || parseInt(input < 0))
      {
        $("#angryRobo").delay(3000).fadeIn();
        $("#form").delay(3600).fadeOut();
        setTimeout(function () { alert("Uh oh. You made Mr. Roboger mad. Please enter a non-negative integer."); }, 4000);
        $("#angryRobo").delay(1000).fadeOut();
        $("#form").delay(400).fadeIn();
      }

    else{
      $(".output").text(roboger(parseInt(input)));
      $(".answer").delay(3000).fadeIn();
    }
  });
});