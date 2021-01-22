/*Wooj self-notes/thoughts:
How does this program handle decimals?
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

// User Interface Logic

$(document).ready(function(){
  $("#loading").delay(3000).fadeOut(1000);
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