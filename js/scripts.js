/*Wooj self-notes/thoughts:
huh. i thought i would have to parseInt before the submit function would work properly (thought it would break the for loop on line 11), but it works just fine without it. I wonder why.
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
        answer.push(messages[j-1]);
        break;
      }
    }

    if(answer.length < (i+1)){ answer.push(i); }
  }
  return answer;

}

// User Interface Logic

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    $("#output").text(roboger($("#number").val()));
  });
});