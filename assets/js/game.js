// Player name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function
var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
};

// Ask player if they'd like to fight or run
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// If player chooses to fight, fight
if (promptFight === "fight" || promptFight === "FIGHT") {

    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }

    // If player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
    // Confirm the player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }

    // if no (false), ask question again by running fight() again
    else {
        fight();
    }

} else {
    window.alert("You need to try a valid option. Try again!");
}

fight();



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

var fight = function()  is when we create a function by assigning it to a variable

===                     allows you to check if two values are directly equal to one another

if                      anything put between the parentheses of an 'if' statement will result in true or false value

||                      the "or" operator; tells the program to execute that code as long as at lease one of the condition checks results in true. If both are false, move on.

window.confirm()        requires a yes/no answer
*/