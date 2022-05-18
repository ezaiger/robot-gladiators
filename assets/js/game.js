// player name entry
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function(enemyName) {
  // alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
}; // end of fight function

// run fight function to start game
//fight();
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}


/* NOTES FOR FUTURE REFERENCE
data types: 
var stringDataType = "text";        must be wrapped in double or single quotes
var numberIntergerDataType = 10;    can be an integer or have decimals
var numberFloatDataType = 10.4;   
var booleonDataType = true;         can only be given a value of true or false    

primitive data types:
*Boolean    true or false (one or two values)                           'typeof false'                                                                                             
*Null       an absence of value (zero or absence of date=a)
Undefined   undefined
*Number     numberic value up to 2 to the 53rd power minus 1            'typeof 10'
BitInt      whole numbers - value over 2 to the 53rd power minus 1
*String     once created - cannot modify                                'typeof "hello, world"'
Symbol      key of an object property

var (variable)          captures the data from the window.prompt

playerName              will be the name the play picked for the robot

window.prompt("text")   asks player to send some info back to program (aka user input)

=                       everything on left of assignment operator (=) sets up variable name for the program; everything on the right is value being stored into variable name

function fight () { }   creates a function named "fight"

window.alert("text")    sends a message from program to player

fight();                calls on the above function with the same name

console.log             allows developer to test code without interrupting page with alert

+                       allows you to include a variable with a string (text)                        

var fight = function()  is when we create a function by assigning it to a variable

===                     allows you to check if two values are directly equal to one another

if                      anything put between the parentheses of an 'if' statement will result in true or false value

||                      the "or" operator; tells the program to execute that code as long as at lease one of the condition checks results in true. If both are false, move on.

window.confirm()        requires a yes/no answer
*/