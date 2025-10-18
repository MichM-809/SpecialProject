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
    {front: 'el antebrazo', back: 'forearm'}
];

let clothflashcard= [
    {front: 'la ropa', back: 'clothes'},
    {front: 'los zapatos', back: 'shoes'},
    {front: 'la camiseta', back: 't-shirt'},
    {front: 'el abrigo', back: 'coat'},
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
    {front: 'la falda', back: 'skirt'},
    {front: 'el impermeable', back: 'raincoat'} 
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
    {front: 'el arbol', back: 'tree'},
    {front: 'la planta', back: 'plant'},
    {front: 'la flor', back: 'flower'},
    {front: 'el bosque', back: 'forest'},
    {front: 'la pradera', back: 'meadow/grassland'}
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

  Front = !Front; 
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

 let images= []

 let bodyimages=[
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
 let clothimages=[
    { src: "https://www.shutterstock.com/shutterstock/photos/1815121379/display_1500/stock-photo-red-sports-shoes-sneakers-with-white-laces-1815121379.jpg", alt:"shoes", answer: "los zapatos"},
    { src: "https://cdni.llbean.net/is/image/wim/227260_1123_41?hei=804&wid=700&resMode=sharp2&defaultImage=llbprod/227260_1123_41", alt:"coat", answer: "el abrigo"},
    { src: "https://i5.walmartimages.com/seo/George-Unisex-General-Purpose-Rubber-Rain-Work-Boot_acb53a36-5161-43ff-b6d1-51ea065662d0.2d1c4c4018fb9f5d28b4dc891607bc19.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF", alt:"boots", answer: "las botas"},
    { src: "https://mpdenmark.com/cdn/shop/files/10_77194_0_2126.jpg?v=1739434039&width=800", alt:"socks", answer: "los calcetines"},
    { src: "https://www.tannergoods.com/cdn/shop/products/Standard-Belt-Black-Front.jpg?v=1648152389&width=823", alt:"belt", answer: "el cinturon"},
    { src: "https://media.istockphoto.com/id/1369338313/vector/icon-of-tie.jpg?s=1024x1024&w=is&k=20&c=kaSukJLunVKnDQigI0J9FU7aDUDcsZzcnNp2bN5pReQ=", alt:"tie", answer: "la corbata"},
    { src: "https://media.istockphoto.com/id/873985780/vector/suit-icon-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=oM-BXhfrBIv6vR0CkzTpdf6lnUs-ZedZj84r-VaJxjw=", alt:"suit", answer: "el traje"},
    { src: "https://media.istockphoto.com/id/1425070558/vector/hoodie-sweatshirt-vector-isolated-illustration.jpg?s=1024x1024&w=is&k=20&c=aoSuOK4VixMH4-FZlM4gqljUfqLAU5KUGCLWlS8Oa_s=", alt:"hoodie", answer: "la sudadera"},
    { src: "https://www.shutterstock.com/shutterstock/photos/2512622699/display_1500/stock-vector-a-cartoon-drawing-of-a-striped-orange-sweater-2512622699.jpg", alt:"sweater", answer: "el sueter"},
    { src: "https://www.shutterstock.com/image-vector/stylish-women-pants-fashion-basic-trousers-2276830317", alt:"pants", answer: "los pantalones"},
    { src: "https://i5.walmartimages.com/seo/Sandels-For-Women-Sawvnm-Women-s-Ladies-Fashion-Casual-Sandals-Wedges-Shoes-Outdoor-Slippers-on-Clearance_fbfa0d74-c764-4358-86b2-032f01c21d5e.42e4e9dc6f96e91d141ff463543a721c.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF", alt:"sandals", answer: "las sandalias"},
    { src: "https://i5.walmartimages.com/seo/EnJoCho-Toddler-Kids-Summer-Shorts-Boys-Girls-Solid-Color-Lace-Casual-Shorts-Pockets-Fashion-Beach-Cargo-Pants-Shorts-Children-Casual-Sports-Wear_67fd8d15-7e42-4494-8b7e-6cc711775abc.fa0ef3da950a518e9af4150f30b5b683.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF", alt:"shorts", answer: "los pantalones cortos"},
    { src: "https://www.creativefabrica.com/wp-content/uploads/2023/01/12/Swimsuit-for-women-Cartoon-drawing-of-s-Graphics-57367835-1-1-580x387.jpg", alt:"bathing suit", answer: "el traje de bano"},
    { src: "https://media.istockphoto.com/id/1219165217/vector/baseball-cap-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=XD3estGMzCrM4egEi8OjkmV180uC-bEx2PBCrF7bxx0=", alt:"hat/cap", answer: "la gorra"},
    { src: "https://heatwavevisual.com/cdn/shop/files/Apollo_Black.jpg?v=1724098835&width=1000", alt:"sunglasses", answer: "las gafas de sol"},
    { src: "https://as1.ftcdn.net/jpg/09/87/21/64/1000_F_987216422_IbwEYfS6gQEzv1vLZDPgVXn3DYAT75ub.jpg", alt:"dress", answer: "el vestido"},
    { src: "https://media.istockphoto.com/id/1491788852/vector/summer-womens-skirt.jpg?s=1024x1024&w=is&k=20&c=ZTmI53X4ajG1w00mh3ahmqK39e_bQFUFWPLv9FtBzWg=", alt:"skirt", answer: "la falda"},
]
 
 let natimages=[
    { src: "https://www.shutterstock.com/shutterstock/photos/2512462355/display_1500/stock-vector-illustration-of-eucalyptus-tree-isolated-on-white-2512462355.jpg", alt:"tree", answer: "el arbol"},
    { src: "https://cdn.vectorstock.com/i/1000v/48/06/cute-cartoon-river-scene-vector-10704806.avif", alt:"river", answer: "el rio"},
    { src: "https://cdn.britannica.com/16/77416-120-6D5A3D41/volcano-Mount-St-Helens-south-eruption-May-18-1980.jpg", alt:"volcano", answer: "el volcan"},
    { src: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", alt:"meadow", answer: "la pradera"},
    { src: "https://as1.ftcdn.net/v2/jpg/01/65/98/62/1000_F_165986202_8ITP2AGw6wVYaZtMHI9ljCTcSCF1jiAh.jpg", alt:"hill", answer: "el cerro"},
    { src: "https://c7.alamy.com/comp/2D033XY/avalanche-in-city-cartoon-vector-illustration-snow-falling-on-mountainside-snowslide-snow-slip-scene-snowfall-in-mountains-destructive-phenomenon-2D033XY.jpg", alt:"avalanche", answer: "la avalancha de nieve"},
    { src: "https://cdn.mos.cms.futurecdn.net/CbivdLKKTLVsjak9RDT9J5-970-80.jpg.webp", alt:"desert", answer: "la desierto"},
    { src: "https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/wildfire-1105209_1280%20%281%29.jpg", alt:"forest fire", answer: "el incendio foresto"},
    { src: "https://media.istockphoto.com/id/478627080/photo/evening-view-of-ama-dablam.jpg?s=1024x1024&w=is&k=20&c=MwRN-zomZ3h8XKwG3ah-Hje8MPOM21cebX5tXO1XAHE=", alt:"mountain", answer: "la montana"},
    { src: "https://c02.purpledshub.com/uploads/sites/41/2018/07/ad37704c4b870390b6a25ea32c7146d6jpg-bdec485.jpg?w=1410&webp=1", alt:"storm", answer: "la tormenta"},
    { src: "https://media.istockphoto.com/id/1341996801/vector/cave-opening.jpg?s=1024x1024&w=is&k=20&c=LtGmYSZSnqN5CW4ioCzbihE5VYJnWafLgMzbOzynh94=", alt:"cave", answer: "la cueva"},
    { src: "https://cdn.vectorstock.com/i/1000v/60/46/tropical-island-cartoon-vector-2606046.avif", alt:"island", answer: "la isla"},
    { src: "https://media.istockphoto.com/id/1130881910/vector/paint-illustrations-in-the-wild-and-natural.jpg?s=1024x1024&w=is&k=20&c=hVgwspoha1493mwJYIxw-dOc2CE2UdDxLO_syixnaQs=", alt:"forest", answer: "el bosque"},
    { src: "https://as2.ftcdn.net/v2/jpg/02/83/67/69/1000_F_283676964_muGCzZwHR0iatBKRCmCTqyI1oI6Z9CGm.jpg", alt:"tornado", answer: "el ciclon"},
    //{ src: "", alt:"", answer: ""},
 ]




 let currentImage= 0
 let currentPic= 0

 let pic = document.getElementById('Image');
 let feedback = document.getElementById('feedback');
 
 let guess= document.getElementById('answer')
 let saveBut= document.querySelector('.button.enter')
 let nextBut= document.querySelector('.button.next')

  pic.src = images[currentImage].src;
  pic.alt = images[currentPic].alt;
  feedback.textContent = ''



  saveBut.addEventListener('click',() =>{
    let correct = images[currentImage].answer;

    if(guess.value.toLowerCase() == correct.toLowerCase()) {  
    feedback.textContent= "Correct"
    nextBut.style.display= "block"  
    
  } else{
    feedback.textContent= `Incorrect. The correct answer is: ${correct}`
  }
  nextBut.style.display= "block"  

  })

 nextBut.addEventListener('click', () => {
  currentImage += 1
  updateImage()
})



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

function updateImage() {
  if (currentImage < images.length) {
    pic.src = images[currentImage].src;
    pic.alt = images[currentImage].alt;
    feedback.textContent = '';
    guess.value = '';
    nextBut.style.display = 'none';
  } else {
    pic.style.display = 'none';
    feedback.textContent = 'The end. ';
    guess.style.display = 'none';
    saveBut.style.display = 'none';
    nextBut.style.display = 'none';
  }
}




  
 
  











