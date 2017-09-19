import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import axios from 'axios';
import cors from 'cors';

var intervalID = window.setInterval(miFuncion, 1000);

var foo = function () {
    clearInterval(intervalID);
};

function miFuncion() {
  console.log('interval');
  axios.get('http://localhost:3000/login/', cors)
  .then(function (response) {
    console.log(response);
    console.log('over');
    foo();
  })
  .catch(function (error) {
    console.log(error);
    console.log('more');
  });
}

function component() {
  var element = document.createElement('div');

  // Loadash, currently included via a script, is required for this line to work
// Loadsh, now imported by this script
  element.innerHTML = _.join(['Hello','webpack'],' ');
  element.classList.add('hello');

  //image
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

}

document.body.appendChild(component());
