menu.onclick = function myFunction () {
  let x = document.getElementById('nav__top')
  if(x.className === 'navigation__nav'){
    x.className += " responsive"
  } else {
    x.className = "navigation__nav"
  }
}

// Slider script start ====================
let slides = document.querySelectorAll('.slide-container');
let index = 0;
let timer = 0
autoslider();
function next () {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev () {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
  autoslider()
}
function autoslider () {
  timer = setTimeout(prev,4000);
}
// Slider script and==========================================

// Valid form start===============================================
let reg = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,   //valid phone
reg2 = /^[^@]+@[^@.]+\.[^@]+$/,   // valid email
reg3 = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm,    ///email
reg4 = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/, //valid password  
reg5 = /^[а-яА-ЯёЁa-zA-Z0-9]+$/; //letters all
let inp = document.querySelectorAll('#name')
let span = document.querySelector('.span')

document.querySelectorAll('.btn__form').onclick = function(e) {
  e.preventDefault();
  if(!validate(reg3, inp.value)) {
    notValid(inp, span, 'Проверка не пройдена')
  }else  {
    valid(inp, span, ' ')
  }
};

function validate(regex,inp) {
  return regex.test(inp);
}
function notValid (inp, el, mess) {
  inp.classList.add('is-invalid');
  el.innerHTML = mess;
}

function valid (inp, el, mess) {
  inp.classList.remove('is-invalid');
  inp.classList.add('is-valid');
  el.innerHTML = mess;
}
 // Valid form and===========================================