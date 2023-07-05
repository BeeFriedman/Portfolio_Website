var userInputArray = document.getElementsByClassName("user-input");
var userInputValues = [];
var activeUserInput = userInputArray[userInputArray.length - 1];

//the event handler function
function captureEnterPress(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        activeUserInput = userInputArray[userInputArray.length - 1];
        var userInput = activeUserInput.value.toLowerCase().trim()
        saveUserInput();
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
    inputLineTextbox.autocomplete = "off";
    var labelText = document.createTextNode("user@beefriedman:~$");
    inputLine.className = "input-line";
    inputLineLabel.className = "input-label";
    inputLineTextbox.className = "user-input";
    inputLineLabel.appendChild(labelText);
    inputLine.appendChild(inputLineLabel);
    inputLine.appendChild(inputLineTextbox);
    terminalContanier.appendChild(inputLine);
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
        }
        else{
            outputLine = document.createElement("p");
            outputLineText = document.createTextNode(outputText[i]);
            outputLine.className = "output-line";
            outputLine.appendChild(outputLineText);
            terminalContanier.appendChild(outputLine);
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
    var outputText = [`projects`, `br`, `about`, `br`, `contact`, `br`];
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

//prints out the output for the contact directory
function loadContact() {
    window.location.href = "contact.html";
}

//prints out the output for the wrong inputs
function displayError(input) {
    var outputText = [`'${input}' is not a valid command type help for a list of commands`, `br`];
    createOutputLine(outputText);
}

function saveUserInput(){
    userInputValues[userInputValues.length] = userInputArray[userInputArray.length - 1].value;
}
$("textarea").on("input", function(e) {
    while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
        $(this).height($(this).height()+1);
    };
});

//when the page is finished loading it prints the first line
onload = () => {
    app.welcome();

    setTimeout(() => {
        createNewUserInputLine();
        document.documentElement.addEventListener("keyup", captureEnterPress);
    }, 13000);  

    $(document).on("input", "textarea", function()
    {
        $(this).prop('style').cssText = 'height:auto;';
        $(this).prop('style').cssText = 'height:' + $(this).prop('scrollHeight') + 'px';
    });
        // Get the current page URL
    var currentURL = window.location.href;

    // Iterate over each navigation link
    $('.navbar-nav .nav-link').each(function() {
    // Get the link's URL
        var linkURL = $(this).attr('href');

        // Check if the link's URL matches the current page URL
		if (currentURL === 'https://beefriedman.com/') {
			$(this).addClass('active');
		}
        else if (currentURL.includes(linkURL)) {
            // Add the 'active' class to the link
            $(this).addClass('active');
        }
    });
}

var app = new Vue({
    el: '#app',
    data: {
    },
    methods: { 
        welcome: function() {
            var terminalContanier = document.getElementById("terminal");
            var inputLine = document.createElement("div");
            var inputLineLabel = document.createElement("p");
            var inputLineTextbox = document.createElement("textarea");
            var labelText = document.createTextNode("user@beefriedman:~$");
            inputLine.className = "input-line";
            inputLineLabel.className = "input-label";
            inputLineTextbox.className = "user-input";
            inputLineLabel.appendChild(labelText);
            inputLine.appendChild(inputLineLabel);
            inputLine.appendChild(inputLineTextbox);
            terminalContanier.appendChild(inputLine);
            var welcome = "Hi, my name is Berel Friedman and I am a software developer." +
                " I tried designing this site to imitate a computer terminal. You could type help to get a list of commands." + 
                " If you don't want to type in order to navigate the site feel free to use the navigation bar."
            inputLineTextbox.style.overflow = "hidden"
            inputLineTextbox.focus();

            var i = 0;
            var intervalId = setInterval(function() {
                if (i < welcome.length) {
                    inputLineTextbox.dispatchEvent(new Event('input', {bubbles:true}));
                    inputLineTextbox.value += welcome.charAt(i);
                    i++;
                } else {
                    clearInterval(intervalId);
                }
            }, 50) 
        }

    }
  })