import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const  input = document.querySelector('.search-form__input');
const btnSearch = document.querySelector('.search-form__btn');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');



btnLoadMore.style.display = 'none';

let pageNumber = 1;

btnSearch.addEventListener('click', e => {
  e.preventDefault();
  cleanGallery();

  const trimmedValue = input.ariaValueMax.trim();
  if (trimmedValue !== '') {
    pixabay(trimmedValue);
  } else {
    
  }
})