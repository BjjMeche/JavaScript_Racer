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
-Built using OOP pattern.
-Added more LOC
-Added slightly more amount of time to encapsulate everything into objects and interact with one another.
-Still runs off of 1 event listener placed at the bottom.


-Object literals can hold both variable attributes and functions.

  In this design pattern, objects are very intertwined with their knowing their state, knowing how to display themselves on the DOM, and how to behave when a key event is hit. To me, this is OK because the game is so small. If it was to scale up, it would become unwieldy to keep track of all of the objects and its functions. We can separate each object to its own file to handle this OR move to MVC.

I was pretty happy with this version of JS_Racer. There are Player, Racetrack, Engine, and Game Objects that know of its own properties and functions. A plus to separating everything into its own module is that it adds scope to protect its variables.

MVC JS:
Player Controls, User[s] select.

bits and pieces of reflexion:
[pending]

I hope you have much much more fun playing this game than I did writing it.
