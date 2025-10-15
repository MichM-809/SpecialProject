//WHAT TO DO: make flash cards and add info to them
var screen = 0

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


//Body Category

bodyBut.addEventListener('click', () => {
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

    screen= 1
});

bodyFlashBut.addEventListener('click', () => {
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';

});

bodyMatchBut.addEventListener('click', () => {
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


//Clothes Category

clothBut.addEventListener('click', () => {
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

    screen= 2
})

clothFlashBut.addEventListener('click', () => {
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';

});

clothMatchBut.addEventListener('click', () => {
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


//Nature Category

natBut.addEventListener('click', () => {
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

    screen= 3
})

natFlashBut.addEventListener('click', () => {
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';
});

natMatchBut.addEventListener('click', () => {
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


//Back Button
backBut.addEventListener('click', () => {
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

    screen= 0
})

//flashcards

let flashcards= document.getElementById('flashcards');
let bodyflashcard= [
    {front: 'Ojos', back: 'Eyes'},
    {front: 'Boca', back: 'Mouth'},
    {front: 'Cabeza', back: 'Head'},
];

let clothflashcard= [
    {front: 'Ropa', back: 'Clothes'},
    {front: 'Zapatos', back: 'Shoes'},
    {front: 'Camiseta', back: 'T-Shirt'},
];

let natflashcard= [
    {front: 'Laguna', back: 'Lagoon'},
    {front: 'Cueva', back: 'Cave'},
    {front: 'Isla', back: 'Island'},
];
 
let Front = true;
var currentIndex1= 0
var currentIndex2= 0
var currentIndex3= 0


//let currentCard;



flashcards.addEventListener('click', () => {

    let currentCard;

    if (screen ==1){
        currentCard = bodyflashcard[currentIndex1];
    } else if (screen== 2) {
        currentCard = clothflashcard[currentIndex2];
    }else if (screen== 3){
        currentCard = natflashcard[currentIndex3];
    }

  let word = document.getElementById('word');
  if (Front) {
    word.textContent = currentCard.front;
  } else {
    word.textContent = currentCard.back;
  }

  Front = !Front; // toggle between front and back
});

sortFlashcards();


function sortFlashcards() {
    let knowBut= document.querySelector('.button.know');
    let dontBut= document.querySelector('.button.dont-know');

    
    knowBut.addEventListener('click', () => {
        //store card in know pile and move onto next card
        if (screen ==1){
        currentCard = bodyflashcard[currentIndex1];
        currentIndex1+= 1
    } else if (screen== 2) {
        currentCard = clothflashcard[currentIndex2];
        currentIndex2+= 1
    }else if (screen== 3){
        currentCard = natflashcard[currentIndex3];
        currentIndex3+= 1
    }

    });

    dontBut.addEventListener('click', () => {
        //store card in dontknow pile and move onto next card
        currentIndex+= 1

    });


};

 //at the end, show know and dont know pile

 //Picture guess

 let images= [
  { src: "https://www.w3schools.com/howto/img_nature_wide.jpg", answer: "bosque"}

 ]

 let currentImage= 0

 let pic = document.getElementById('mysteryImage');
 let feedback = document.getElementById('feedback');
 let correct = images[currentImage].answer;
 let guess= document.getElementById('answer')
 let saveBut= document.getElementById('.button.enter')

  image.src = images[index].src;
  feedback.textContent = "";

  saveBut.addEventListener('click',() =>{

    if(guess == answer) {
    feedback.textContent= "Correct"
  } else{
     feedback.textContent= "Incorrect"
  }


  })

  
 
  











