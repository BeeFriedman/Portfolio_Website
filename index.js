var userInput = document.getElementById("page");

userInput.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        event.preventDefault();

        switch(userInput.value.toLowerCase()){
            case "help":
                displayCommands();
        }
    }
});

function displayCommands(){
    var br = document.createElement("br");
    var tag = document.createElement("p");
    var text = document.createTextNode(`Type "ls" to list all available directories`);
    tag.appendChild(text);
    console.log(tag);
    var element = document.body;
    console.log(element);
    element.appendChild(br);
    element.appendChild(tag);
}