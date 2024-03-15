'use strict'

document.querySelector('.main-btn').addEventListener('click', function () {
  document.querySelector('.backdrop').classList.toggle('is-open');
});

document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.backdrop').classList.toggle('is-open');
});




document.querySelector('.burger-btn').addEventListener('click', function () {
  document.querySelector('.backdrop-menu').classList.toggle('is-open');
});

document.querySelector('.close-btn-menu').addEventListener('click', function () {
  document.querySelector('.backdrop-menu').classList.toggle('is-open');
});
