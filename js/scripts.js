/*Wooj self-notes/thoughts:
Wanted to scale loading gif to be bigger, but it keeps hiding the loading text, and I can't figure out how to make it not :(
*/

// Business Logic
function roboger(number)
{
  let answer = [];
  let numToString;
  const messages = ["Beep!","Boop!", "Won't you be my neighbor?"];
  for(let index1 = 0; index1 <= number; i++)
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

function loadingTextAnimation(dot1,dot2,dot3,duration)
{
  setTimeout(
    setInterval(function () {
      dot1.hide();
      dot2.hide();
      dot3.hide();
      dot1.delay(300).fadeIn(0);
      dot2.delay(600).fadeIn(0);
      dot3.delay(900).fadeIn(0);
    }
    ,1200),duration);

}

// User Interface Logic

$(document).ready(function(){
  //loading image and text w/ animation
  loadingTextAnimation($("#firstDot"), $("#secondDot"),$("#thirdDot"), 4000);
  $("#loading").delay(3000).fadeOut(1000);

  //transition to main content
  $("#main").delay(4000).fadeIn();
  $("#form").submit(function(event){
    event.preventDefault();
    const input = parseInt($("#number").val());
    if(isNaN(input) || input < 0)
    {
      alert("Invalid input detected. Please enter a non-negative integer.");
    }
    else{
      $("#output").text(roboger(input));
    }
  });
});