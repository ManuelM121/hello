'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('ð¥° Pon tu nombre');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' â¤';

const zomosNobios = () => {
  // alert('ðNow zomos ParTnEr ' + ${partner} + 'ð');
  alert(`ð SABÃA QUE DIRÃAS QUE SÃ, ${partner} ð±`);
  alert(' ððð YO TE AMO MÃÃÃÃÃÃS ððð');
  location.href = "https://youtu.be/AcdNwY1R-Cc";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', zomosNobios);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);