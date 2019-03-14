// list of possible words
const WORDS_ARRAY = ["taco","pizza","burger","waffle","hotdog","bigman","java","rubber","duck","rubberducky"]
let pickedword = WORDS_ARRAY[Math.floor(Math.random()*WORDS_ARRAY.length)]
let guessesleft = 10;
let losscounter = 0;
let guessinput;
let acceptkey = ["a","b","c","d","e","f","g","h","i","j",'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
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
    
document.getElementById("guesshere").textContent = underArray.join(" ");
// document.getElementById("wrongletter").textContent = "-";
document.getElementById("guessleft").textContent = guessesleft;
// document.getElementById("pickedword").textContent = pickedword;

document.onkeyup = function(event){
    
    guessinput = event.key.toLowerCase();
    
    if(acceptkey.indexOf(guessinput) > -1){

        if(pickedword.indexOf(guessinput) > -1){

            correctGuessList.push(guessinput);
            pushToUnderArray();
        
        }//41
        else{
            
            if(wrongGuessList.indexOf(guessinput) == -1){
                wrongGuessList.push(guessinput);
                guessesleft--;
            }//49
            if(guessesleft == 0){
                losscounter++;
                correctGuessList = [];
                wrongGuessList = [];
                underArray = [];
                guessesleft = 10;
                alert("you lose! the word was " +pickedword)
                pickedword = WORDS_ARRAY[Math.floor(Math.random()*WORDS_ARRAY.length)]
                makeUnderscore();
            ;      
            }//53 
        }//47

        if(underArray.join("")== pickedword){
            document.getElementById("guesshere").textContent = underArray.join(" ");
            pickedword = WORDS_ARRAY[Math.floor(Math.random()*WORDS_ARRAY.length)];
            alert("you win");
            correctGuessList = [];
            wrongGuessList = [];
            underArray = [];
            guessesleft = 10;
            makeUnderscore();
            wincounter++
        }//66
    }//big if
    
    document.getElementById("guesshere").textContent = underArray.join(" ");
    document.getElementById("losses").textContent = losscounter;
    document.getElementById("wrongletter").textContent = wrongGuessList;
    document.getElementById("guessleft").textContent = guessesleft;
    document.getElementById("wincounter").textContent = wincounter;

    //document.getElementById("pickedword").textContent = pickedword;
}//36

