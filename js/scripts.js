/*Wooj self-notes/thoughts: 
Should this include negative numbers?
Problem with this solution is it'll run all 3 interations of 2nd for loop every time there isn't 1-3 in current number
After running test cases, there isn't a whole lot of cases where this happens, so I guess it's not that big of a deal
Especially with large number inputs.
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