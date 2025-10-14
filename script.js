//WHAT TO DO: make flash cards and add info to them
let screen = 0;

let element = document.getElementById('Text');
let element1 = document.getElementById('Text1');
let flashBox= document.getElementById('flashBox');
let matchBox= document.getElementById('matchBox');
let backBut= document.querySelector('.button.back');

//body
let bodyBut= document.querySelector('.button.body');
let bodyFlashBut= document.querySelector('.button.flash-body');
let bodyMatchBut= document.querySelector('.button.match-body');

//Clothes
let clothBut= document.querySelector('.button.cloth');
let clothFlashBut= document.querySelector('.button.flash-cloth');
let clothMatchBut= document.querySelector('.button.match-cloth');

//Nature
let natBut= document.querySelector('.button.nature');
let natFlashBut= document.querySelector('.button.flash-nat');
let natMatchBut= document.querySelector('.button.match-nat');

//Flash cards
let saveBut= document.getElementById('.button.save-card');


//Body Category

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
let flashcards= document.getElementById('flashcards');
let flashcardInfo= [
    {front: 'Manzanas', Back: 'Apples'},
    {front: 'Cueva', Back: 'Cave'},
    {front: 'Cabeza', Back: 'Head'},
];

function getFlashcards() {

};

function sortFlashcards() {
    let knowBut= document.querySelector('.button.know');
    let dontBut= document.querySelector('.button.dont-know');

    knowBut.addEventListener('click', () => {
        //store card in know pile and move onto next card


    });

    knowBut.addEventListener('click', () => {
        //store card in dontknow pile and move onto next card


    });


    //at the end, show know and dont know pile
};






