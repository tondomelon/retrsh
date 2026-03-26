/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

var filterActive = document.querySelector('.filter-active');
var filterActiveOne = document.querySelector('.filter-active .chooseOne');
var filterChoose = document.querySelector('.filter-choose');
var filterList = document.querySelectorAll('.chooseOne');
filterActive.addEventListener('click', function () {
  filterActive.classList.remove('active');
  filterChoose.classList.add('active');
  filterList.forEach(function (filterOne) {
    filterOne.addEventListener('click', function () {
      filterActive.classList.add('active');
      filterChoose.classList.remove('active');
      filterActiveOne.innerText = filterOne.innerText;
      filterActiveOne.setAttribute('class', filterOne.getAttribute('class'));
    });
  });
});
/******/ })()
;