var myStorage = window.sessionStorage;
var userInputArray = document.getElementsByClassName("user-input");
var userInputValues = [];
var activeUserInput = userInputArray[userInputArray.length - 1];

//the event handler function
function captureEnterPress(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        var userInput = activeUserInput.value.toLowerCase().trim();
        userInputValues[userInputValues.length] = activeUserInput.value;
        myStorage.setItem("userValues", JSON.stringify(userInputValues));
        event.preventDefault();

        switch (userInput) {
            case "help":
                displayHelp();
                break;
            case "ls":
                displayLs();
                break;
            case "projects":
                loadProjects();
                break;
            case "about":
                loadAbout();
                break;
            default:
                displayError(userInput);
        }
    }
}

//creates the container, text and input for the new line
function createNewUserInputLine() {
    var terminalContanier = document.getElementById("terminal");
    var inputLine = document.createElement("div");
    var inputLineLabel = document.createElement("p");
    var inputLineTextbox = document.createElement("input");
    var labelText = document.createTextNode("user@beefriedman:~$");
    inputLine.className = "input-line";
    inputLineLabel.className = "input-label";
    inputLineTextbox.className = "user-input";
    inputLineLabel.appendChild(labelText);
    inputLine.appendChild(inputLineLabel);
    inputLine.appendChild(inputLineTextbox);
    terminalContanier.appendChild(inputLine);
    myStorage.setItem("storedPage", terminalContanier.innerHTML);
    addListenerForUserInput();
}

//adds an event listener for the newest input line to capture when 
//the user clicks the enter key, and removes the listener and disables
//the input from the last input line
function addListenerForUserInput() {
    var unactiveUserInput = userInputArray[userInputArray.length - 2];
    activeUserInput = userInputArray[userInputArray.length - 1];

    if (userInputArray.length > 1) {
        unactiveUserInput.disabled = true;
    }

    activeUserInput.focus();
}

//creates the output line and takes the output text as an argument.
function createOutputLine(outputText) {
    var terminalContanier = document.getElementById("terminal");
    var br = document.createElement("br");
    var outputLine;
    var outputLineText;


    for(var i = 0; i < outputText.length; i++){
        if(outputText[i] === "br"){
            terminalContanier.appendChild(br);
            myStorage.setItem("storedPage", terminalContanier.innerHTML);
        }
        else{
            outputLine = document.createElement("p");
            outputLineText = document.createTextNode(outputText[i]);
            outputLine.className = "output-line";
            outputLine.appendChild(outputLineText);
            terminalContanier.appendChild(outputLine);
            myStorage.setItem("storedPage", terminalContanier.innerHTML);
        }
    }
    createNewUserInputLine();
}

//prints out the output for the help command
function displayHelp() {
    var outputText = [`Type 'ls' to list all available directories`, `br`];
    createOutputLine(outputText);
}

//prints out the output for the ls command
function displayLs() {
    var outputText = [`projects`, `br`, `about`, `br`];
    createOutputLine(outputText);
}

//prints out the output for the project directory
function loadProjects() {
    window.location.href = "projects.html";
}

//prints out the output for the about directory
function loadAbout() {
    window.location.href = "about.html";
}

//prints out the output for the wrong inputs
function displayError(input) {
    var outputText = [`'${input}' is not a valid command type help for a list of commands`, `br`];
    createOutputLine(outputText);
}

//when the page is finished loading it prints the first line
onload = () => {
    var storedPage = myStorage.getItem("storedPage");
    var values = JSON.parse(myStorage.getItem("userValues"));

    if(storedPage){
        document.getElementById("terminal").innerHTML += (storedPage + "<br>");

        for(var i = 0; i < values.length; i++){
            userInputArray[i].value = values[i];
        }
    }
    createNewUserInputLine();  
    document.documentElement.addEventListener("keyup", captureEnterPress);
}