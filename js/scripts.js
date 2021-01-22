/*Wooj self-notes/thoughts:
How does this program handle decimals?
*/

// Business Logic
function roboger(number)
{
  let answer = [];
  let numToString;
  const messages = ["Beep!","Boop!", "Won't you be my neighbor?"];
  for(let i = 0; i <= number; i++)
  {
    numToString = i.toString();
    for(let j = 3; j > 0; j--)
    {
      if(numToString.includes(j.toString()))
      {
        answer.push(" " + messages[j-1]);
        break;
      }
    }

    if (answer.length < (i+1)) { answer.push(" " + i); }
  }
  return answer;

}

// User Interface Logic

$(document).ready(function(){
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