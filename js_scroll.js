var words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression", "what I learned at CodingDojo!"],
    el = document.getElementById('magic'),
    wordCounter = 0,
    characterCounter = 0;
function updateText() {
    var character = words[wordCounter][characterCounter++];

    if (character === ' ') {
        character = "&nbsp;" // use non-breaking space character
    }

    el.innerHTML = el.innerHTML + character;
    if (characterCounter === words[wordCounter].length + 1) {
        wordCounter++; 	//choose a different word
        characterCounter = 0;	//start over with the first character of the word
        el.innerHTML = '';  //set the html to be blank
        //if we're displaying the last word, go back to the first word
        if (wordCounter == words.length) {
            wordCounter = 0;
}
    }
}
setInterval(updateText, 300);