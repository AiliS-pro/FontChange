const font_a = document.getElementById('font_a');
const font_b = document.getElementById('font_b');
const font_c = document.getElementById('font_c');
const font_d = document.getElementById('font_d');
const font_e = document.getElementById('font_e');
const font_f = document.getElementById('font_f');
const font_g = document.getElementById('font_g');
const font_h = document.getElementById('font_h');

const red = document.getElementById('red');
const blue = document.getElementById('blue');
const darkturquoise = document.getElementById('darkturquoise');
const green = document.getElementById('green');
const purple = document.getElementById('purple');
const firebrick = document.getElementById('firebrick');
const deeppink = document.getElementById('deeppink');
const black = document.getElementById('black');


const text = document.getElementById('text');



font_a.addEventListener('click', function() {
  
    text.style.fontFamily = 'Yu Mincho Light','YuMincho','Yu Mincho','游明朝体','sans-serif';
  
}, false);

font_b.addEventListener('click', function() {
  
    text.style.fontFamily = 'Hannotate TC','sans-serif';
  
}, false);

font_c.addEventListener('click', function() {
  
    text.style.fontFamily = 'Arial Unicode MS', 'sans-serif';
    
}, false);

font_d.addEventListener('click', function() {
  
    text.style.fontFamily = 'Apple Chancery', 'sans-serif';
      
}, false);

font_e.addEventListener('click', function() {
  
    text.style.fontFamily = 'Chalkduster','sans-serif';
  
}, false);

font_f.addEventListener('click', function() {
  
    text.style.fontFamily = 'Herculanum','sans-serif';

} , false);

font_g.addEventListener('click', function() {
  
    text.style.fontFamily = 'Luminari','sans-serif';
    
}, false);

font_h.addEventListener('click', function() {
  
    text.style.fontFamily = 'Skia-Regular_Black','sans-serif';
    
}, false);




red.addEventListener('click', function() {

    text.style.color = 'red';

})

blue.addEventListener('click', function() {

  text.style.color = 'blue';

})

darkturquoise.addEventListener('click', function() {

  text.style.color = 'darkturquoise';

})

green.addEventListener('click', function() {

  text.style.color = 'green';

})

purple.addEventListener('click', function() {

  text.style.color = 'purple';

})

firebrick.addEventListener('click', function() {

  text.style.color = 'firebrick';

})

deeppink.addEventListener('click', function() {

  text.style.color = 'deeppink';

})

black.addEventListener('click', function() {

  text.style.color = 'black';

})