//WHAT TO DO: make flash cards and add info to them
let screen = 0;

let element = document.getElementById('Text');
let element1 = document.getElementById('Text1');
let flashBox= document.getElementById('flashBox');
let matchBox= document.getElementById('matchBox');
let backBut= document.querySelector('.button.back');

let bodyBut= document.querySelector('.button.body');
let bodyFlashBut= document.querySelector('.button.flash-body');
let bodyMatchBut= document.querySelector('.button.match-body');

let clothBut= document.querySelector('.button.cloth');
let clothFlashBut= document.querySelector('.button.flash-cloth');
let clothMatchBut= document.querySelector('.button.match-cloth');

let natBut= document.querySelector('.button.nature');
let natFlashBut= document.querySelector('.button.flash-nat');
let natMatchBut= document.querySelector('.button.match-nat');

//Food Category

bodyBut.addEventListener('click', () => {
    screen= 1;
    bodyFlashBut.style.display= 'inline-block';
    bodyMatchBut.style.display= 'inline-block';
    backBut.style.display= 'inline-block';
    bodyBut.style.display= 'none';
    clothBut.style.display= 'none';
    natBut.style.display= 'none';

    clothFlashBut.style.display= 'none';
    clothMatchBut.style.display= 'none';
    natFlashBut.style.display= 'none';
    natMatchBut.style.display= 'none';
    flashBox.style.display= 'none';
    matchBox.style.display= 'none';
});

bodyFlashBut.addEventListener('click', () => {
    screen= 4;
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';

});

bodyMatchBut.addEventListener('click', () => {
    screen= 5;
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


//Clothes Category

clothBut.addEventListener('click', () => {
    screen= 2
    clothFlashBut.style.display= 'inline-block';
    clothMatchBut.style.display= 'inline-block';
    backBut.style.display= 'inline-block';
    bodyBut.style.display= 'none';
    clothBut.style.display= 'none';
    natBut.style.display= 'none';

    bodyFlashBut.style.display= 'none';
    bodyMatchBut.style.display= 'none';
    natFlashBut.style.display= 'none';
    natMatchBut.style.display= 'none';
    flashBox.style.display= 'none';
    matchBox.style.display= 'none';
})

clothFlashBut.addEventListener('click', () => {
    screen= 6;
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';

});

clothMatchBut.addEventListener('click', () => {
    screen= 7;
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


//Nature Category

natBut.addEventListener('click', () => {
    screen= 3
    natFlashBut.style.display= 'inline-block';
    natMatchBut.style.display= 'inline-block';
    backBut.style.display= 'inline-block';
    bodyBut.style.display= 'none';
    clothBut.style.display= 'none';
    natBut.style.display= 'none';

    bodyFlashBut.style.display= 'none';
    bodyMatchBut.style.display= 'none';
    clothFlashBut.style.display= 'none';
    clothMatchBut.style.display= 'none';
    flashBox.style.display= 'none';
    matchBox.style.display= 'none';
})

natFlashBut.addEventListener('click', () => {
    screen= 8;
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';
});

natMatchBut.addEventListener('click', () => {
    screen= 9;
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


//Back Button
backBut.addEventListener('click', () => {
    screen= 0
    bodyFlashBut.style.display= 'none';
    bodyMatchBut.style.display= 'none';
    clothFlashBut.style.display= 'none';
    clothMatchBut.style.display= 'none';
    natFlashBut.style.display= 'none';
    natMatchBut.style.display= 'none';
    flashBox.style.display= 'none';
    matchBox.style.display= 'none';
    bodyBut.style.display= 'inline-block';
    clothBut.style.display= 'inline-block';
    natBut.style.display= 'inline-block';
    backBut.style.display= 'none';
})

//flashcards





