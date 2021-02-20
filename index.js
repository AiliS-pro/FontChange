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
  font_b.classList.remove('active-btn');
  font_c.classList.remove('active-btn');
  font_d.classList.remove('active-btn');
  font_e.classList.remove('active-btn');
  font_f.classList.remove('active-btn');
  font_g.classList.remove('active-btn');
  font_h.classList.remove('active-btn');
  font_a.classList.add('active-btn');
  text.style.fontFamily = 'Yu Mincho Light','YuMincho','Yu Mincho','游明朝体','sans-serif';
}, false);

font_b.addEventListener('click', function() {
  font_a.classList.remove('active-btn');
  font_c.classList.remove('active-btn');
  font_d.classList.remove('active-btn');
  font_e.classList.remove('active-btn');
  font_f.classList.remove('active-btn');
  font_g.classList.remove('active-btn');
  font_h.classList.remove('active-btn');
  font_b.classList.add('active-btn');
  text.style.fontFamily = 'Hannotate TC','sans-serif';
}, false);

font_c.addEventListener('click', function() {
  font_a.classList.remove('active-btn');
  font_b.classList.remove('active-btn');
  font_d.classList.remove('active-btn');
  font_e.classList.remove('active-btn');
  font_f.classList.remove('active-btn');
  font_g.classList.remove('active-btn');
  font_h.classList.remove('active-btn');
  font_c.classList.add('active-btn');
  text.style.fontFamily = 'Arial Unicode MS', 'sans-serif';
}, false);

font_d.addEventListener('click', function() {
  font_a.classList.remove('active-btn');
  font_b.classList.remove('active-btn');
  font_c.classList.remove('active-btn');
  font_e.classList.remove('active-btn');
  font_f.classList.remove('active-btn');
  font_g.classList.remove('active-btn');
  font_h.classList.remove('active-btn');
  font_d.classList.add('active-btn');
  text.style.fontFamily = 'Apple Chancery', 'sans-serif';
}, false);

font_e.addEventListener('click', function() {
  font_a.classList.remove('active-btn');
  font_b.classList.remove('active-btn');
  font_c.classList.remove('active-btn');
  font_d.classList.remove('active-btn');
  font_f.classList.remove('active-btn');
  font_g.classList.remove('active-btn');
  font_h.classList.remove('active-btn');
  font_e.classList.add('active-btn');
  text.style.fontFamily = 'Chalkduster','sans-serif';
}, false);

font_f.addEventListener('click', function() {
  font_a.classList.remove('active-btn');
  font_b.classList.remove('active-btn');
  font_c.classList.remove('active-btn');
  font_d.classList.remove('active-btn');
  font_e.classList.remove('active-btn');
  font_g.classList.remove('active-btn');
  font_h.classList.remove('active-btn');
  font_f.classList.add('active-btn');
  text.style.fontFamily = 'Herculanum','sans-serif';
} , false);

font_g.addEventListener('click', function() {
  font_a.classList.remove('active-btn');
  font_b.classList.remove('active-btn');
  font_c.classList.remove('active-btn');
  font_d.classList.remove('active-btn');
  font_e.classList.remove('active-btn');
  font_f.classList.remove('active-btn');
  font_h.classList.remove('active-btn');
  font_g.classList.add('active-btn');
  text.style.fontFamily = 'Luminari','sans-serif';
}, false);

font_h.addEventListener('click', function() {
  font_a.classList.remove('active-btn');
  font_b.classList.remove('active-btn');
  font_c.classList.remove('active-btn');
  font_d.classList.remove('active-btn');
  font_e.classList.remove('active-btn');
  font_f.classList.remove('active-btn');
  font_g.classList.remove('active-btn');
  font_h.classList.add('active-btn');
  text.style.fontFamily = 'Skia-Regular_Black','sans-serif';
}, false);




red.addEventListener('click', function() {
  blue.classList.remove('active-btn');
  darkturquoise.classList.remove('active-btn');
  green.classList.remove('active-btn');
  purple.classList.remove('active-btn');
  firebrick.classList.remove('active-btn');
  deeppink.classList.remove('active-btn');
  black.classList.remove('active-btn');
  red.classList.add('active-btn');
  text.style.color = 'red';
})

blue.addEventListener('click', function() {
  red.classList.remove('active-btn');
  darkturquoise.classList.remove('active-btn');
  green.classList.remove('active-btn');
  purple.classList.remove('active-btn');
  firebrick.classList.remove('active-btn');
  deeppink.classList.remove('active-btn');
  black.classList.remove('active-btn');
  blue.classList.add('active-btn');
  text.style.color = 'blue';
})

darkturquoise.addEventListener('click', function() {
  red.classList.remove('active-btn');
  blue.classList.remove('active-btn');
  green.classList.remove('active-btn');
  purple.classList.remove('active-btn');
  firebrick.classList.remove('active-btn');
  deeppink.classList.remove('active-btn');
  black.classList.remove('active-btn');
  darkturquoise.classList.add('active-btn');
  text.style.color = 'darkturquoise';
})

green.addEventListener('click', function() {
  red.classList.remove('active-btn');
  blue.classList.remove('active-btn');
  darkturquoise.classList.remove('active-btn');
  purple.classList.remove('active-btn');
  firebrick.classList.remove('active-btn');
  deeppink.classList.remove('active-btn');
  black.classList.remove('active-btn');
  green.classList.add('active-btn');
  text.style.color = 'green';
})

purple.addEventListener('click', function() {
  red.classList.remove('active-btn');
  blue.classList.remove('active-btn');
  darkturquoise.classList.remove('active-btn');
  green.classList.remove('active-btn');
  firebrick.classList.remove('active-btn');
  deeppink.classList.remove('active-btn');
  black.classList.remove('active-btn');
  purple.classList.add('active-btn');
  text.style.color = 'purple';
})

firebrick.addEventListener('click', function() {
  red.classList.remove('active-btn');
  blue.classList.remove('active-btn');
  darkturquoise.classList.remove('active-btn');
  green.classList.remove('active-btn');
  purple.classList.remove('active-btn');
  deeppink.classList.remove('active-btn');
  black.classList.remove('active-btn');
  firebrick.classList.add('active-btn');
  text.style.color = 'firebrick';
})

deeppink.addEventListener('click', function() {
  red.classList.remove('active-btn');
  blue.classList.remove('active-btn');
  darkturquoise.classList.remove('active-btn');
  green.classList.remove('active-btn');
  purple.classList.remove('active-btn');
  firebrick.classList.remove('active-btn');
  black.classList.remove('active-btn');
  deeppink.classList.add('active-btn');
  text.style.color = 'deeppink';
})

black.addEventListener('click', function() {
  red.classList.remove('active-btn');
  blue.classList.remove('active-btn');
  darkturquoise.classList.remove('active-btn');
  green.classList.remove('active-btn');
  purple.classList.remove('active-btn');
  firebrick.classList.remove('active-btn');
  deeppink.classList.remove('active-btn');
  black.classList.add('active-btn');
  text.style.color = 'black';
})