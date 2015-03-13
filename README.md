# JavaScript_Racer
JavaScript Racer game is written in 3 different architectural patterns. [Spaghetti Code, OOJS, MVC JS]. They can be found as branches in this repo.

I wrote this 3 different ways to prove to myself I understand how each pattern works and for new comers to JS to be able to compare each style side by side. I kept the styling to a bare minimum so you can focus on what really matters, the code structure.

Spaghetti Code:
*Player Controls[Player 1: a, Player2: l]*

bits and pieces of reflexion:
-fastest to get up and running of the 3 patterns.
-Its pretty cool that this all runs with 1 event listener placed at the very bottom.
-Variable declarations up top, functions after, and 1 event listener to move the cars.

  All global variables are placed up top because of my personal preference.They could have been nested between functions, but that would not have been good for readability.  The functions could be placed anywhere because in JS, they are first class citizens. They are compiled first by the JS compiler and made readily available throughout the program. I placed them on the bottom to easily comb through my code comparing functions and variables.

OOJS:
*Player Controls[Player 1: a, Player2: l]*

bits and pieces of reflexion:
-Added more LOC
-Added slightly more amount of time to encapsulate everything into objects and interact with one another.
-Still runs off of 1 event listener.

-Object literals can hold both variable attributes and functions.

  In this design pattern, objects are very intertwined with their knowing their state, knowing how to display themselves on the DOM, and how to behave when a key event is hit. To me, this is OK because the game is so small. If it was to scale up, it would become unwieldy to keep track of all of the objects and its functions. We can separate each object to its own file to deal with this OR move to MVC.

I was pretty happy with this version of JS_Racer. There are Player, Racetrack, Engine, and Game Objects that know of its own properties and functions. A plus to separating everything into its own module is that it adds scope to protect its variables.

MVC JS:
*Player Controls: User[s] select.*

bits and pieces of reflexion:
-Most Challenging way to implement JS_Racer
-Difficult at first to conceptualize what belongs to the View, Model, and Controller.

Lets talk about MVC.

So if you're new to MVC, its really hard to think about how the MVC structure is set up. I know I had a super tough time understanding it. I'm still not great at it, but with practice comes mastery, so lets keep at it.

#Model

When first trying to understand MVC, I heard the word "Model" and thought of PostgreSQL. With that mindset, its understandable to think of the Model as a pieces of data storing strings and integers. Well let me tell you, if you think the same, you are only at best half correct.

Think of the Model abstraction as something that holds information, much like a JS object literal. It can hold properties and behaviors of the object pertinent only to the object(e.g. A racecar might have a property driverName, and a function revEngine, but it wouldnt know that it is represented in the HTML DOM by the class "active". Thats something that us developers use to associate the 2 in our mind, but we have to keep these abstractions separated.)

#View

Not only does the View holds information pertaining to the DOM, it possesses information to change the DOM. This is the place to put instructions that deal with display information and instructions(e.g. When an event action is triggered in JS_Racer, the "active" class is removed from its current <td> and applied to the next <td> element.). Don't keep yourself restricted to DOM elements and properties, you can pass information from the model to the View to render. In MVC JS_Racer, I pass the Game Model's Car Model's track information to the view. This allowed the view to know which track to update when the car moves forward.

In your mind you might be confused, You're telling me that the Model deals with its objects data and its behaviors, and the View deals with its DOM's data and its behaviors, then where does the controller come into play, and do we need it? Lets take a look at the controller.

#Controller

As we have seen, we can build JS_Racer using Spaghetti Code and OOJS just fine without using MVC. When building a MVC JS_Racer, we can get away with just having MV and no C. We would just combine Controller features into both Model and View. But why would we not want to do this? Hmmmm... I believe having an explicit controller gives us control of the order that events are fired off. It also centralizes where our event listeners are, so we when we want to make changes, we know where our functions are being fired off.

So how do we intertwine the Model and View with the Controller? We pass both Model and View into our Controller as arguments. This gives our controller the ability to access both model and view properties. The controller acts as a controller in the sense that it controls which events are being executed, NOT how they behave when executed(e.g. The controller doesn't know how to re-render the View, but it does know how to call the view which has a re-render function. The controller doesn't have the logic to check if there is a winner, but it does have access to the model which knows how to check if there is a winner).

That's all I have for you!

I hope with my examples and explanations you get a better understanding of Spaghetti Code, OOJS, and MVC JS!
