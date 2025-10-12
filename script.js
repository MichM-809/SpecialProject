let screen = 0;

let element = document.getElementById('Text');
let element1 = document.getElementById('Text1');
let foodBut= document.querySelector('.button.food');
let clothBut= document.querySelector('.button.cloth');
let natBut= document.querySelector('.button.nature');

let FoodFlashBut= document.querySelector('.button.flashFood');
let FoodMatchBut= document.querySelector('.button.matchFood');

let ClothFlashBut= document.querySelector('.button.flashCloth');
let ClothMatchBut= document.querySelector('.button.matchCloth');

let NatFlashBut= document.querySelector('.button.flashNat');
let NatMatchBut= document.querySelector('.button.matchNat');

foodBut.addEventListener('click', () => {
    screen= 1;
    FoodFlashBut.style.display= 'block';
    FoodMatchBut.style.display= 'block';

    clothBut.style.display= 'none';
    natBut.style.display= 'none';

    element.style.display= 'none';
    element1.style.display= 'none';
    
});

clothBut.addEventListener('click', () => {
    screen= 2
    ClothFlashBut.style.display= 'block';
    ClothMatchBut.style.display= 'block';

    foodBut.style.display= 'none';
    natBut.style.display= 'none';
    
    element.style.display= 'none';
    element1.style.display= 'none';
    
})

natBut.addEventListener('click', () => {
    screen= 3
    NatFlashBut.style.display= 'block';
    NatMatchBut.style.display= 'block';

    foodBut.style.display= 'none';
    clothBut.style.display= 'none';
    
    element.style.display= 'none';
    element1.style.display= 'none';
})
