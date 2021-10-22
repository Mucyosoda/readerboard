import 'lodash';
import './style.css';
import { saveScore, getScores } from './connectAPI.js';

const userValue = document.querySelector('.gameName');
const scoreValue = document.querySelector('.score');
const points = document.querySelector('.list');
const refresh = document.querySelector('.btn-refresh');
const submit = document.querySelector('#sub');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (userValue.value === '' || scoreValue.value === '') {
    userValue.setCustomValidity('name and score is empty');
    userValue.reportValidity();
  } else if (scoreValue.value > 500) {
    scoreValue.setCustomValidity('highest score is 500');
    scoreValue.reportValidity();
  } else {
    saveScore(userValue.value, scoreValue.value);
    getScores(points);
    userValue.value = '';
    scoreValue.value = '';
  }
});

refresh.addEventListener('click', () => {
  window.location.reload();
});

getScores(points);
