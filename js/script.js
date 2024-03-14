'use strict'

document.querySelector('.button').addEventListener('click', function () {
  document.querySelector('.backdrop').classList.toggle('is-open');
  
});

document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.backdrop').classList.toggle('is-open');
});




document.querySelector('.menu-btn').addEventListener('click', function () {
  document.querySelector('.backdrop-menu').classList.toggle('is-open');
});

document.querySelector('.close-btn-menu').addEventListener('click', function () {
  document.querySelector('.backdrop-menu').classList.toggle('is-open');
});
