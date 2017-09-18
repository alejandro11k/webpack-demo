import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';

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

  return element;
}

document.body.appendChild(component());
