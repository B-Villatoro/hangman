// list of possible words
const WORDS_ARRAY = ["taco","pizza","burger","waffle","hotdot","bigman","java"]
let pickedword = WORDS_ARRAY[Math.floor(Math.random()*WORDS_ARRAY.length)]
let guessesleft = 10;
let losscounter = 0;
let guessinput;
let correctGuessList = [];
let wrongGuessList = [];
let underArray = [];
let wincounter = 0;

let makeUnderscore = function(){
    for(let i = 0; i<pickedword.length; i++){
        underArray.push("_");
    }
    return underArray;
}

let pushToUnderArray = function(){
    for (let j = 0; j <pickedword.length;j++){
        if (pickedword[j] == guessinput){
            underArray[j] = guessinput;
        }
    }
}

    makeUnderscore();
    
document.getElementById("guesshere").textContent = underArray;
document.getElementById("losses").textContent = losscounter;
document.getElementById("pickedword").textContent = pickedword;
document.getElementById("wrongletter").textContent = wrongGuessList;
document.getElementById("guessleft").textContent = guessesleft;


document.onkeyup = function(event){
    
    guessinput = event.key.toLowerCase();
    


    if(pickedword.indexOf(guessinput) > -1){

        correctGuessList.push(guessinput);
        pushToUnderArray();
    
    }//46
    else{
        
        if(wrongGuessList.indexOf(guessinput) == -1){
            wrongGuessList.push(guessinput);
            guessesleft--;
        }//52  
        if(guessesleft == 0){
            losscounter++;
            correctGuessList = [];
            wrongGuessList = [];
            underArray = [];
            guessesleft = 10;
            makeUnderscore();
            alert("you lose");      
        }//57
    }//50

    if(underArray.join("")== pickedword){
        document.getElementById("guesshere").textContent = underArray;
        pickedword = WORDS_ARRAY[Math.floor(Math.random()*WORDS_ARRAY.length)];
        alert("youwin");
        correctGuessList = [];
        wrongGuessList = [];
        underArray = [];
        guessesleft = 10;
        makeUnderscore();
        wincounter++
    }

    document.getElementById("guesshere").textContent = underArray;
    document.getElementById("losses").textContent = losscounter;
    document.getElementById("pickedword").textContent = pickedword;
    document.getElementById("wrongletter").textContent = wrongGuessList;
    document.getElementById("guessleft").textContent = guessesleft;
}

