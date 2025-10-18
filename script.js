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

    word.textContent= ''
    end.textContent= ''
    currentIndex1= 0
    currentIndex2= 0
    currentIndex3= 0
    currentCard=0
    flashcards.style.display= 'block'
    knowNat = 0
    knowCloth= 0
    knowBod= 0
    DknowNat = 0
    DknowCloth= 0
    DknowBod= 0

    knowPile= []
    DknowPile= []

    screen= 0
})

/*Flashcards*/

let flashcards= document.getElementById('flashcards');

let bodyflashcard= [
    {front: 'el ojo', back: 'eye'},
    {front: 'la boca', back: 'mouth'},
    {front: 'la cabeza', back: 'head'},
    /*{front: 'el brazo', back: 'arm'},
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
    {front: 'el antebrazo', back: 'forearm'}, */
];

let clothflashcard= [
    {front: 'la ropa', back: 'clothes'},
    {front: 'los zapatos', back: 'shoes'},
    {front: 'la camiseta', back: 't-shirt'},
  /*  {front: 'el abrigo', back: 'coat'},
    {front: 'la blusa', back: 'blouse'},
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
    {front: 'los pantalones', back: 'pants'},
    {front: 'la gorra', back: 'hat'},
    {front: 'las gafas de sol', back: 'sunglasses'},
    {front: 'el vestido', back: 'dress'},
    {front: 'la falda', back: 'skirt'}
    {front: 'el impermeable', back: 'raincoat'} */
];

let natflashcard= [
    {front: 'la laguna', back: 'lagoon'},
    {front: 'la cueva', back: 'cave'},
    {front: 'la isla', back: 'island'},
   /* {front: 'la avalancha de nieve', back: 'avalanche'},
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
    {front: 'el arbol', back: 'tree'},
    {front: 'la planta', back: 'plant'},
    {front: 'la flor', back: 'flower'},
    {front: 'el bosque', back: 'forest'},
    {front: 'la pradera', back: 'meadow/grassland'}, */
];
 
let Front = true;
var currentIndex1= 0
var currentIndex2= 0
var currentIndex3= 0
var currentCard;

flashcards.addEventListener('click', () => {

    if (screen ==1){
        currentCard = bodyflashcard[currentIndex1];
    } else if (screen== 2) {
        currentCard = clothflashcard[currentIndex2];
    }else if (screen== 3){
        currentCard = natflashcard[currentIndex3];
    }

  var word = document.getElementById('word');
  if (Front) {
    word.textContent = currentCard.back;
    flashcards.style.backgroundColor= '#F5FFFA'
  } else {
    word.textContent = currentCard.front;
    flashcards.style.backgroundColor= '#F8F8FF'

  }

  Front = !Front; // toggle between front and back
});

    var knowNat = 0
    var knowCloth= 0
    var knowBod= 0

    var DknowNat = 0
    var DknowCloth= 0
    var DknowBod= 0

    let knowPile= []
    let DknowPile= []

    let end = document.getElementById('end');

    sortFlashcards();


 

/*Picture guess */

 let images= [
  { src: "https://www.w3schools.com/howto/img_nature_wide.jpg", alt:"forest", answer: "el bosque"},
  { src: "https://t4.ftcdn.net/jpg/02/80/18/35/240_F_280183529_80oEb7a26WRESlCrV5GtsjQM2APA27T1.jpg", alt:"eye", answer: "el ojo"},
  { src: "https://as1.ftcdn.net/v2/jpg/02/67/69/20/1000_F_267692011_3dKIcmJqtOOSMCq7HXE3OPUckOIJk3pd.jpg", alt:"mouth", answer: "la boca"},
  { src: "https://as1.ftcdn.net/v2/jpg/02/92/67/58/1000_F_292675875_Vd84ZrymQvFh8lWXzDEo5U2A4VjGh8b2.jpg", alt:"head", answer: "la cabeza"},
  { src: "https://images.unsplash.com/photo-1586710743237-1eb35c3c881c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387", alt:"arm", answer: "el brazo"},
  { src: "https://as1.ftcdn.net/v2/jpg/02/98/91/16/1000_F_298911650_pUELMn3JHrxhFwOMVpZrn7zQbRzoy2Ld.jpg", alt:"finger", answer: "el dedo"},
  { src: "https://www.sosbones.com/media/eb2dplym/back-pain-from-sos.jpg", alt:"back", answer: "la espalda"},
  { src: "https://as1.ftcdn.net/jpg/00/62/23/30/1000_F_62233042_HlVDQhZuw1XQtbZoSz8WUHIEBSghvOe3.jpg", alt:"nose", answer: "la nariz"},
  { src: "https://cdn.mos.cms.futurecdn.net/mhJ2yWNwMtNcmijZqVEDDW-440-80.jpg.webp", alt:"hand", answer: "la mano"},
  { src: "https://cdn.mos.cms.futurecdn.net/NvekX9tT7peSEUHRersaT8-970-80.jpg.webp", alt:"ear", answer: "la oreja/el oido"},
  { src: "https://c7.alamy.com/comp/2C6YAN1/human-feet-silhouette-icon-stylized-hand-drawn-footprints-isolated-vector-illustration-logo-design-element-2C6YAN1.jpg", alt:"foot", answer: "el pie"},
  { src: "https://c7.alamy.com/comp/2C6YAN1/human-feet-silhouette-icon-stylized-hand-drawn-footprints-isolated-vector-illustration-logo-design-element-2C6YAN1.jpg", alt:"leg", answer: "la pierna"},
  { src: "https://assets.yourpractice.online/2259/3d-images/knee-effusion.jpg", alt:"knee", answer: "la rodilla"},
  { src: "https://orthoinfo.aaos.org/contentassets/690894f0f45d4afcb789bfb806a7fa59/a00410f01_emc-04-8b4-10-fig01-kh-compressor.jpg", alt:"neck", answer: "el cuello"},
  { src: "https://media.istockphoto.com/id/504033435/photo/male-hand-sign-with-thumb-up-isolated.jpg?s=1024x1024&w=is&k=20&c=PAEeDzqHXZNtCOJ9pIqDjbyUcI3zPkmxsLVk3TsIZr4=", alt:"thumb", answer: "el pulgar"},
  { src: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/blogs/october2023/detail-main-Left-Side-Chest-Pain.jpeg?w=1920&q=75", alt:"chest", answer: "el pecho"},
  { src: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2752014.jpeg", alt:"shoulder", answer: "el hombro"},
  { src: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2xpcHMtZGlmZmVyZW50LXNraW4tMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==", alt:"lips", answer: "los labios"},
  { src: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1859711.jpg", alt:"hip", answer: "la cadera"},
  { src: "https://www.pngarts.com/files/10/Eyebrows-Transparent-Image.png", alt:"eyebrow", answer: "la ceja"},

 ]

 //let bodyimages=[]
 //let clothimages=[]




 let currentImage= 0

 let pic = document.getElementById('Image');
 let feedback = document.getElementById('feedback');
 
 let guess= document.getElementById('answer')
 let saveBut= document.querySelector('.button.enter')

  pic.src = images[currentImage].src;
  pic.alt = images[currentImage].alt;
  feedback.textContent = ''


  let nextBut= document.querySelector('.button.next')

  

  saveBut.addEventListener('click',() =>{
    let correct = images[currentImage].answer;

    if(guess.value.toLowerCase() == correct.toLowerCase()) {  
    feedback.textContent= "Correct"
    nextBut.style.display= "block"  
    nextBut.addEventListener('click', () => {
    currentImage+= 1
    pic.src+= 1
    pic.alt+= 1
    nextBut.style.display= "none"
    feedback.textContent = ''
  })
    
  } else{
    feedback.textContent= `Incorrect. The correct answer is: ${correct}`
    nextBut.style.display= "block"  
    nextBut.addEventListener('click', () => {
    currentImage+= 1
    pic.src += 1
    pic.alt+= 1
    nextBut.style.display= "none"
    feedback.textContent = ''
  })
  }

  })

  //FIX THIS

  if(currentImage >= images.length) {
    Image.style.display= 'none'
  }








  /*Functions*/

  function theEnd(){

    if (currentIndex1 >= bodyflashcard.length){
        flashcards.style.display= 'none'
        word.textContent=  ''
        end.textContent= `The End. You got ${knowBod} correct and ${DknowBod} incorrect.`
    }else if (currentIndex2 >= clothflashcard.length){
        flashcards.style.display= 'none'
        word.textContent= ''
        end.textContent= `The End. You got ${knowCloth} correct and ${DknowCloth} incorrect.`
    } else if (currentIndex3 >= natflashcard.length){
        flashcards.style.display= 'none'
        word.textContent= ''
        end.textContent= `The End. You got ${knowNat} correct and ${DknowNat} incorrect.`
    }
}


function sortFlashcards() {

    let knowBut= document.querySelector('.button.know');
    let dontBut= document.querySelector('.button.dont-know');

    
    knowBut.addEventListener('click', () => {
        //store card in know pile and move onto next card
        if (screen ==1){
        currentCard = bodyflashcard[currentIndex1];
        currentIndex1+= 1
        knowBod+=1
        knowPile.push(currentCard);
        
    } else if (screen== 2) {
        currentCard = clothflashcard[currentIndex2];
        currentIndex2+= 1
        knowCloth+= 1
        knowPile.push(currentCard);
    }else if (screen== 3){
        currentCard = natflashcard[currentIndex3];
        currentIndex3+= 1
        knowNat+= 1
        knowPile.push(currentCard);
    }

    theEnd()

    });

    dontBut.addEventListener('click', () => {
        //store card in dontknow pile and move onto next card
         if (screen ==1){
        currentCard = bodyflashcard[currentIndex1];
        currentIndex1 += 1;
        DknowBod+=1
        DknowPile.push(currentCard)
    } else if (screen== 2) {
        currentCard = clothflashcard[currentIndex2];
        currentIndex2+= 1
        DknowCloth+=1
        DknowPile.push(currentCard)
    }else if (screen== 3){
        currentCard = natflashcard[currentIndex3];
        currentIndex3+= 1
        DknowNat+=1
        DknowPile.push(currentCard)
    }

    theEnd()


    });

};




  
 
  











