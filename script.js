var index = 0;
var text = ["Hello",
            "I'm Nguyen Luu",
            "People usually call me the Master of Pick-up Lines",
            "But hey you",
            "You can call me tonight!"];
var count = 0;
let currentText = ""; 
let letter = "";

function type(){
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('#typing').textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 150);

};

type();