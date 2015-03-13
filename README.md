# JavaScript_Racer
JavaScript Racer game is written in 3 different architectural patterns. [Spaghetti Code, OOJS, MVC JS]

I wrote this 3 different ways to prove to myself I understand how each pattern works and for new comers to JS to be able to compare each style side by side. I kept the styling to a bare minimum so you can focus on what really matters, the code structure.

Spaghetti Code:
*Player Controls[Player 1: a, Player2: l]*

bits and pieces of reflexion:
-fastest to get up and running of the 3 patterns.
-Variable declarations up top, functions after, and 1 event listener to move the cars.

  All global variables are placed up top because of personal preference. They could have been nested between functions, but that would not have been good for readability.  The functions could be placed anywhere because in JS, they are first class citizens. They are compiled first by the JS compiler and made readily available throughout the program. I placed them on the bottom to easily comb through my code comparing functions and variables.

-Its pretty cool that this all runs with 1 event listener placed at the very bottom.


OOJS:
*Player Controls[Player 1: a, Player2: l]*

bits and pieces of reflexion:

MVC JS:
Player Controls, User[s] select.

bits and pieces of reflexion:


I hope you have much much more fun playing this game than I did writing it.