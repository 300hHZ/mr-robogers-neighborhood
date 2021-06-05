# _Mr. Roboger's Neighborhood_

#### _A program that takes a number input and displays an array with numbers and custom messages._

#### By _**Woo Jin Kim**_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _jQuery_
* _Bootstrap_

## Description

### _User will be asked to input a number into a form. Program will return an array of integers, from 0 to inputted number, with the following exceptions (in order of priority):_

* **Numbers containing a 3: Entire number replaced with "Won't you be my neighbor?"**
* **Numbers containing a 2: Entire number replaced with "Boop!"**
* **Numbers containing a 1: Entire number replaced with "Beep!"**

### Extra features include:

* Loading screen animation & transitions.
* Separate transitions and results for valid and invalid submissions.
* Optional name input.
* A second button to perform the same operation, but reverse the resulting array output.

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open js/index.html_


## Known Bugs

* Very large inputs (>10000) returns some unexpected elements in the output array
* Not very scalable friendly.
* Very basic layout styling.
* Code could be refactored to be much more efficient.
* Can't resize loading screen image without hiding loading text.

## Specs
```
Describe: roboger()
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(roboger(0).toEqual([0]);

Test: "It should return an array with a 0 and "Beep!" if the number 1 is inputted"
Expect(roboger(1).toEqual([0, "Beep!"]);

Test: "It should return an array with a 0, "Beep!", and "Boop!" if the number 2 is inputted"
Expect(roboger(2).toEqual([0, "Beep!", "Boop!"]);

Test: "It should return an array with a 0, "Beep!", "Boop!" and "Won't you be my neighbor?" if the number 3 is inputted"
Expect(roboger(3).toEqual([0, "Beep!", "Boop!, "Won't you be my neighbor?""]);

Test: "It should return an array with a 0, "Beep!", "Boop!", "Won't you be my neighbor?", and 4 if the number 4 is inputted"
Expect(roboger(4).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4]);

Test: "If the number 10 is inputted, "Beep!" should replace 10 in the expected array.
Expect(roboger(10).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]);

Test: "If the number 12 is inputted, "Boop!" should replace 12 in the expected array."
Expect(roboger(12).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]);

Test: "If the number 13 is inputted, "Won't you be my neighbor?" should replace 13 in the expected array."
Expect(roboger(13).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);

Test: "If the number 21 is inputted, "Boop!" should replace 21 in the expected array."
Expect(roboger(21).toEqual([[0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!"]);

Test: "If the number 23 is inputted, "Won't you be my neighbor?" should replace 23 in the expected array."
Expect(roboger(23).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]);

Test: "If the number 32 is inputted, "Won't you be my neighbor?" should replace 32 in the expected array."
Expect(roboger(32).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"]);

```

## License

**_MIT_**


## Contact Information

**_Woo Jin Kim (kimwoojin211@gmail.com)_**

Copyright (c) 2021 Woo Jin Kim_
