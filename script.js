confirm("Are you ready to play?");

var age = prompt("What is your age?");

if(age < 13)
{
    console.log("You should have a parent's approval before you play.");
}
else
{
    console.log("Ok! Let's get started!");
}

var userName = prompt("What is your name?");

var userQuest = prompt("What is your quest?");

var userColor = prompt("What is your favorite color?");

var friendName = prompt("In this story, you have a friend. What is your friend's
  name?");

console.log("You are at the store, gathering supplies to help you " + userQuest);

var userAnswer = prompt("Your phone buzzes. The caller ID shows" + friendName + ". Do you pick up?.'");

if (userAnswer === "yes")
{
    console.log(friendName "says that it is critical for you to buy a " + userColor " pair of pants.");
}
else
{
    console.log("Oh no! " + friendName " had crucial information about your quest! Now you will never " + userQuest + ".");
}

var feedback = prompt("Please rate the game from 1-10")

if (feedback > 8 )
{
    console.log("Thank you! We should go on a quest together!");
}
else
{
    console.log("I'll keep practicing coding and questing.");
}
