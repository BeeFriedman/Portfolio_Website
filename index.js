//the event handler function
function captureEnterPress(event) {
    var userInput = activeUserInput.value.toLowerCase().trim();
    if (event.key === "Enter" || event.keyCode === 13) {
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
            case "about":
                loadAbout();
            default:
                displayError(userInput);
        }
    }
}

//creates the container, text and input for the new line
function createNewUserInputLine() {
    var body = document.body;
    var inputLine = document.createElement("div");
    var inputLineLabel = document.createElement("p");
    var inputLineTextbox = document.createElement("input");
    var labelText = document.createTextNode("user@beefriedman:~$");
    inputLine.className = "input-line";
    inputLineLabel.className = "input-label"
    inputLineTextbox.className = "user-input"
    inputLineLabel.appendChild(labelText);
    inputLine.appendChild(inputLineLabel);
    inputLine.appendChild(inputLineTextbox);
    body.appendChild(inputLine);
    addListenerForUserInput();
}

//adds an event listener for the newest input line to capture when 
//the user clicks the enter key, and removes the listener and disables
//the input from the last input line
function addListenerForUserInput() {
    var userInputArray = document.getElementsByClassName("user-input");
    var activeUserInput = userInputArray[userInputArray.length - 1];
    var unactiveUserInput = userInputArray[userInputArray.length - 2];

    if (userInputArray.length > 1) {
        unactiveUserInput.removeEventListener("keyup", captureEnterPress);
        unactiveUserInput.disabled = true;
    }

    activeUserInput.focus();
    activeUserInput.addEventListener("keyup", captureEnterPress);
}

//creates the output line and takes the output text as an argument.
function createOutputLine(outputText) {
    var element = document.body;
    var br = document.createElement("br");
    var outputLine = document.createElement("p");
    var outputLineText = document.createTextNode(outputText);
    outputLine.className = "output-line";
    outputLine.appendChild(outputLineText);
    element.appendChild(outputLine);
    element.appendChild(br);
    createNewUserInputLine();
}

//prints out the output for the help command
function displayHelp() {
    var outputText = `Type 'ls' to list all available directories`;
    createOutputLine(outputText);
}

//prints out the output for the ls command
function displayLs() {
    //TODO
}

//prints out the output for the project directory
function loadProjects() {
    //TODO
}

//prints out the output for the about directory
function loadAbout() {
    //TODO
}

//prints out the output for the wrong inputs
function displayError(input) {
    var outputText = `'${input}' is not a valid command type help for a list of commands`
    createOutputLine(outputText);
}

//when the page is finished loading it prints the first line
onload = () => {
    createNewUserInputLine();
}