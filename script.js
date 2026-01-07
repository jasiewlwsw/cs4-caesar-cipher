const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let message = document.getElementById("messageInput");
let key = document.getElementById("key");

function encrypt() {
    console.log("Encrypt");
    //get user text
    let messageInput = message.innerText
    console.log(messageInput);
    //get key and parseint
   let keyInput = key.innerText
    //create empty string var to store results
    let results = "";
    //convert message to number with for loop
    for(let i = 0; i < messageInput.length){
        // get current char .charat(i)
         curr = messageInput.charAt(i);
         console.log(curr)
        //convert to lower case .lowercase()
        
        //get index o0f char in alpha array .indexof(char)

        //apply formula (x + key) %26 to get encrypted number

    }
}


function decrypt() {

}