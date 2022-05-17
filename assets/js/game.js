

var playerName = window.prompt("What is your robot's name?"); 
    console.log(playerName);

console.log(10 + 10);

console.log("Our robot's name is " + playerName);

function fight () {
    window.alert("The fight has begun!"); 
}

//fight();



/* NOTES FOR FUTURE REFERENCE
data types: 
var stringDataType = "text";        must be wrapped in double or single quotes
var numberIntergerDataType = 10;    can be an integer or have decimals
var numberFloatDataType = 10.4;   
var booleonDataType = true;         can only be given a value of true or false

var (variable)          captures the data from the window.prompt

playerName              will be the name the play picked for the robot

window.prompt("text")   asks player to send some info back to program (aka user input)

=                       everything on left of assignment operator (=) sets up variable name for the program; everything on the right is value being stored into variable name

function fight () { }   creates a function named "fight"

window.alert("text")    sends a message from program to player

fight();                calls on the above function with the same name

console.log             allows developer to test code without interrupting page with alert

+                       allows you to include a variable with a string (text)                        

*/