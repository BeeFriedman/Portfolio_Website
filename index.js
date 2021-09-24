//when the page is finished loading it prints the first line
onload = () => {
    createNewUserInputLine();
}

//adds an event listener for the newest input line to capture when 
//the user clicks the enter key and removes the listener and disables
//the input from the last one 
function addListenerForUserInput() {
    var userInputArray = document.getElementsByClassName("user-input");
    var activeUserInput = userInputArray[userInputArray.length - 1];
    var unactiveUserInput = userInputArray[userInputArray.length - 2];

    function captureEnterPress(event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            event.preventDefault();

            switch(activeUserInput.value.toLowerCase().trim()){
                case "help":
                    displayCommands();
                    break;
            }
        }
    }

    if(userInputArray.length > 1){
        unactiveUserInput.removeEventListener("keyup", captureEnterPress);
        unactiveUserInput.disabled = true;
    }

    activeUserInput.focus();
    activeUserInput.addEventListener("keyup", captureEnterPress);
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

//prints out the output according to the users input
function displayCommands() {
    var element = document.body;
    var br = document.createElement("br");
    var outputLine = document.createElement("p");
    var outputLineText = document.createTextNode(`Type "ls" to list all available directories`);
    outputLine.className = "output-line";
    outputLine.appendChild(outputLineText);
    element.appendChild(outputLine);
    element.appendChild(br);
    createNewUserInputLine();
}