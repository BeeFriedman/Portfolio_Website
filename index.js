var userInput = document.getElementById("user-input");

userInput.addEventListener("keyup", event => {
    if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault();

        switch(userInput.value.toLowerCase()){
            case "help":
                displayCommands();
                break;
        }
    }
});

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
}

function displayCommands() {
    var element = document.body;
    var br = document.createElement("br");
    var outputLine = document.createElement("p");
    var outputLineText = document.createTextNode(`Type "ls" to list all available directories`);
    outputLine.className = "output-line";
    outputLine.appendChild(outputLineText);
    element.appendChild(br);
    element.appendChild(outputLine);
    createNewUserInputLine();
}