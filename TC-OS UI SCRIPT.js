documents = [];
applicationList = ["tutorial | The Tutorial"," tutorialNumber | Asks you for a number, then displays the number" , " browser | You can browse the web" , " documents | Open up the document window" , " mpia | Open the TC-OS MPIA" , " rps | Play rock paper scissors" , " "];
function startTCOS(){
    full = document.getElementById("full");
    full.innerHTML = "<textarea id = \"input\"><\/textarea><p id = \"output\"><\/p>";
    input = document.getElementById("input");
    output = document.getElementById("output");
    output.innerHTML = "Welcome to TC-OS UI! This is a user friendly version of TC-OS. It\'s much simpler than the previous TC-OS. To start, let\'s type in tutorial. Just type in: \"tutorial\". Nothing more, nothing less.";
    input.addEventListener("input",getCommand);
}
function getCommand(){
    switch(input.value){
        case 'tutorial':
            output.innerHTML = "Wow! Alright, so here\'s the deal with the updated TC-OS. There\'s no more commands. Just applications, which are executed in the black box you\'re typing into above. It makes it very simple, and now you don\'t have to go through so much effort to type in a command. Let\'s do our first application. Type in tutorialNumber.";
            break;
        case 'tutorialNumber':
            output.innerHTML = "Please enter in your number below: <p><input id = \"numberTutorial\"><\/input></p><button onClick = \"numberGuess()\">Submit</button>";
            break;
        case 'help':
            output.innerHTML = applicationList.length + " applications detected: " + applicationList;
            break;
        case 'browser':
            output.innerHTML = "Please enter in the URL of your website <b>EXCLUDING</b> the http:\/\/: <p><input type = \"text\" id = \"URL\"></input><input type = \"submit\" onClick = \"submitURL()\"></input></p>";
            break;
        case 'documents':
            documentOpen();
            break;
        case 'mpia':
            window.open("about:blank").innerHTML = "<script src = \"TC-OS MPIA.js\"></script>";
            break;
        case 'rps':
            var choice = prompt("rock, paper, or scissors?");
var computer = Math.floor(Math.random() * 3);
switch(choice){
    case 'rock':
        if(computer === 2){
            alert("Computer wins! Paper beats rock!");
        } else if (computer === 1){
            alert("Tied! Rock can't beat rock!");
        } else {
            alert("You win! Rock beats scissors!");
        }
        break;
    case 'paper':
        if(computer === 2){
            alert("Tied! Paper can't beat paper!");
        } else if (computer === 1) {
            alert("You win! Paper covers rock!");
        } else {
            alert("Computer wins! Scissors cuts paper!");
        }
        break;
    case 'scissors':
        if(computer === 2){
            alert("You win! Scissors cut paper!");
        } else if (computer === 1){
            alert("Computer wins! Rock crushes scissors!");
        } else {
            alert("Tied! Scissors can't beat scissors!");
        }
        break;
        default:
        alert("Sorry, I couldn't understand.");
        break;
}
            break;
            case'calculator':
                
                break;
    }
}
function calculate(){
    var equate = prompt("Please enter in your equation.");
    //So what? Eval is useful. And I need it in this context.
    output.innerHTML = eval(equate);
}
function numberGuess(){
    numberTutorial = document.getElementById("numberTutorial").value;
    output.innerHTML = "Was your number... " + numberTutorial + "? Well, no matter what you say, you typed in " + numberTutorial + ". Alright, that\'s pretty simple, and all you need to know. When you see a command, type it in exactly as spelled. Type in help to get the list of applications.";
}
function submitURL(){
    UR = document.getElementById("URL").value;
    window.open("http://www." + UR);
}
function documentOpen(){
    output.innerHTML = "<button onClick = \"documentWrite()\">Write a new document</button><button onClick = \"openDoc()\">Open a document</button><button onClick = \"documentEdit()\">Edit a document</button><button onClick = \"printDoc()\">Print a document</button><p><b>Note: Any documents you write are compatible with html. If you use html tags, they will be executed as html code when you open the document.</b></p>";
}
function documentWrite(){
    output.innerHTML = "<textarea id = \"documentArea\">Write your document text in here!</textarea><input type = \"submit\" onClick = \"saveDocument()\"></input>";
}
function saveDocument(){
    areaD = document.getElementById("documentArea").value;
    documents[documents.length] = areaD;
    cake = documents.length - 1;
    if(cake === 0){
        cake = "0";
    }
    output.innerHTML = "Your document has been saved. <b>Your save slot is: " + cake + ".</b> Press <button onClick = \"documentOpen()\">here</button> to go back.";
}
function openDoc(){
    i = prompt("What was the save slot you were given?");
    output.innerHTML = documents[i] + " <button onClick = \"documentOpen()\">Go back</button>";
}
function documentEdit(){
    i = prompt("What was the save slot you were given?");
    output.innerHTML = "<textarea id = \"documentArea\">" + documents[i] +"</textarea><input type = \"submit\" onClick = \"saveDocumentEdit()\"></input>";
}
function printDoc(){
    i = prompt("What was the save slot you were given?");
    documentPrintWindow = window.open("","MsgWindow","width = 200","height = 1000");
    documentPrintWindow.document.write(documents[i]);
    documentPrintWindow.print();
}
function saveDocumentEdit(){
    areaD = document.getElementById("documentArea").value;
    documents[i] = areaD;
    cake = documents[i];
    if(cake === 0){
        cake = "0";
    }
    output.innerHTML = "Your document has been saved. <b>Your save slot is: " + i + ".</b> Press <button onClick = \"documentOpen()\">here</button> to go back.";
}
