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
    {front: 'el ojo', back: 'eye'},
    {front: 'la boca', back: 'mouth'},
    {front: 'la cabeza', back: 'head'},
    {front: 'el brazo', back: 'arm'},
    {front: 'el dedo', back: 'finger'},
    {front: 'la espalda', back: 'back'},
    {front: 'los hombros', back: 'shoulders'},
    {front: 'la nariz', back: 'nose'},
    {front: 'la mano', back: 'hand'},
    {front: 'la oreja/el oido', back: 'ear/inner ear'},
    {front: 'el pie', back: 'foot'},
    {front: 'la pierna', back: 'leg'},
    {front: 'la rodilla', back: 'knee'},
    {front: 'la ceja', back: 'eyebrow'},
    {front: 'la mejilla', back: 'cheek'},
    {front: 'el menton/la barbilla', back: 'chin'},
    {front: 'el pecho', back: 'chest'},
    {front: 'la muneca', back: 'wrist'},
    {front: 'la palma', back: 'palm'},
    {front: 'la frente', back: 'forehead'},
    {front: 'los labios', back: 'lips'},
    {front: 'el cuello', back: 'neck'},
    {front: 'el muslo', back: 'thigh'},
    {front: 'el codo', back: 'elbow'},
    {front: 'la cadera', back: 'hip'},
    {front: 'la nalga', back: 'butt'},
    {front: 'el tobillo', back: 'ankle'},
    {front: 'la pantorrilla', back: 'calf'},
    {front: 'el pulgar', back: 'thumb'},
    {front: 'el antebrazo', back: 'forearm'},
];

let clothflashcard= [
    {front: 'la ropa', back: 'clothes'},
    {front: 'los zapatos', back: 'shoes'},
    {front: 'la camiseta', back: 't-shirt'},
    {front: 'el abrigo', back: 'coat'},
    {front: 'la bolsa', back: 'purse'},
    {front: 'las botas', back: 'boots'},
    {front: 'los calcetines', back: 'socks'},
    {front: 'la camisa', back: 'shirt'},
    {front: 'las chancletas', back: 'flip flops'},
    {front: 'el cinturon', back: 'belt'},
    {front: 'la corbata', back: 'tie'},
    {front: 'vestirse (e:i)', back: 'to get dressed'},
    {front: 'los vaqueros', back: 'jeans'},
    {front: 'vender', back: 'to sell'},
    {front: 'el traje', back: 'suit'},
    {front: 'la sudadera', back: 'sweatshirt'},
    {front: 'el sueter', back: 'sweater'},
    {front: 'las sandalias', back: 'sandals'},
    {front: 'probarse(o:ue)', back: 'to try on'},
    {front: 'los panatalones cortos', back: 'shorts'},
    {front: 'llevar', back: 'to wear'},
    {front: 'el traje de bano', back: 'bathing suit'},
    {front: 'quedar(me, te, le) bien/mal', back: 'to fit(well/poorly'},
    {front: 'la prenda', back: 'article of clothing'},
    {front: 'los pantalones de trekking', back: 'hiking pants'},
    {front: 'la ropa (ligera/liviana', back: 'lightweight clothing'},
    {front: 'el impermeable', back: 'raincoat'},
];

let natflashcard= [
    {front: 'la laguna', back: 'lagoon'},
    {front: 'la cueva', back: 'cave'},
    {front: 'la isla', back: 'island'},
    {front: 'la avalancha de nieve', back: 'avalanche'},
    {front: 'el canon', back: 'canyon'},
    {front: 'el cerro', back: 'hill'},
    {front: 'el ciclon', back: 'cyclone/tornado'},
    {front: 'la cordillera', back: 'mountain range'},
    {front: 'la costa', back: 'coast'},
    {front: 'el desierto', back: 'desert'},
    {front: 'la erupcion volcanica', back: 'volcanic eruption'},
    {front: 'el norte', back: 'north'},
    {front: 'el este', back: 'east'},
    {front: 'el sur', back: 'south'},
    {front: 'el oeste', back: 'west'},
    {front: 'el noreste', back: 'northeste'}, 
    {front: 'el noroeste', back: 'northwest'},
    {front: 'el sureste', back: 'southeast'},
    {front: 'el suroeste', back: 'southwest'},
    {front: 'el huracan', back: 'hurricane'},
    {front: 'el incendio forest', back: 'forest fire'},
    {front: 'la inundacion', back: 'flood'},
    {front: 'el lago', back: 'lake'},
    {front: 'los llanos', back: 'plains'},
    {front: 'el mar', back: 'sea'},
    {front: 'el maremoto', back: 'tsunami'},
    {front: 'la montana', back: 'mountain'},
    {front: 'el oceano', back: 'ocean'},
    {front: 'los relampagos', back: 'lightning'},
    {front: 'el rio', back: 'river'},
    {front: 'la selva', back: 'jungle'},
    {front: 'la sequia', back: 'drought'},
    {front: 'el terremoto', back: 'earthquake'},
    {front: 'la tormenta', back: 'storm'},
    {front: 'los truenos', back: 'thunder'},
    {front: 'el valle', back: 'valley'},
    {front: 'el volcan', back: 'volcano'},
    {front: 'la pradera', back: 'meadow/grassland'},
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
  { src: "https://www.w3schools.com/howto/img_nature_wide.jpg", answer: "bosque"},



 ]

 let currentImage= 0

 let pic = document.getElementById('Image');
 let feedback = document.getElementById('feedback');
 
 let guess= document.getElementById('answer')
 let saveBut= document.getElementById('.button.enter')

  pic.src = images[currentImage].src;
  //feedback.textContent = '';

  saveBut.addEventListener('click',() =>{
    let correct = images[currentImage].answer;

    if(guess.value.toLowerCase() == correct.toLowerCase()) {
    feedback.textContent= "Correct"
  } else{
     feedback.textContent= "Incorrect"
  }

  currentImage += 1


  })

  
 
  











