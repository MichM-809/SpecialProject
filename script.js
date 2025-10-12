let screen = 0;

let element = document.getElementById('Text');
let element1 = document.getElementById('Text1');
let flashBox= document.getElementById('flashBox');
let matchBox= document.getElementById('matchBox');

let foodBut= document.querySelector('.button.food');
let FoodFlashBut= document.querySelector('.button.flashFood');
let FoodMatchBut= document.querySelector('.button.matchFood');

let clothBut= document.querySelector('.button.cloth');
let ClothFlashBut= document.querySelector('.button.flashCloth');
let ClothMatchBut= document.querySelector('.button.matchCloth');

let natBut= document.querySelector('.button.nature');
let NatFlashBut= document.querySelector('.button.flashNat');
let NatMatchBut= document.querySelector('.button.matchNat');

//Food Category

foodBut.addEventListener('click', () => {
    screen= 1;
    FoodFlashBut.style.display= 'block';
    FoodMatchBut.style.display= 'block';

    element.style.display= 'none';
    element1.style.display= 'none';

    ClothFlashBut.style.display= 'none';
    ClothMatchBut.style.display= 'none';
    NatFlashBut.style.display= 'none';
    NatMatchBut.style.display= 'none';
    flashBox.style.display= 'none';
    matchBox.style.display= 'none';


});

FoodFlashBut.addEventListener('click', () => {
    screen= 4;
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';
});

FoodMatchBut.addEventListener('click', () => {
    screen= 5;
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


//Clothes Category

clothBut.addEventListener('click', () => {
    screen= 2
    ClothFlashBut.style.display= 'block';
    ClothMatchBut.style.display= 'block';

    element.style.display= 'none';
    element1.style.display= 'none';

    FoodFlashBut.style.display= 'none';
    FoodMatchBut.style.display= 'none';
    NatFlashBut.style.display= 'none';
    NatMatchBut.style.display= 'none';
    flashBox.style.display= 'none';
    matchBox.style.display= 'none';


})
ClothFlashBut.addEventListener('click', () => {
    screen= 6;
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';

});
ClothMatchBut.addEventListener('click', () => {
    screen= 7;
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


//Nature Category

natBut.addEventListener('click', () => {
    screen= 3
    NatFlashBut.style.display= 'block';
    NatMatchBut.style.display= 'block';

    element.style.display= 'none';
    element1.style.display= 'none';

    FoodFlashBut.style.display= 'none';
    FoodMatchBut.style.display= 'none';
    ClothFlashBut.style.display= 'none';
    ClothMatchBut.style.display= 'none';
    flashBox.style.display= 'none';
    matchBox.style.display= 'none';
})

NatFlashBut.addEventListener('click', () => {
    screen= 8;
    flashBox.style.display= 'block';
    matchBox.style.display= 'none';
});

NatMatchBut.addEventListener('click', () => {
    screen= 9;
    flashBox.style.display= 'none';
    matchBox.style.display= 'block';
});


