//make import from css folder
import styles from './app.css';

//testing css modules
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML =   `<div class="${styles.container}">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
</div>`;

  return element;
}

document.body.appendChild(component());

// import greetings from './content.js'
// document.write(greetings("Affirmative", "Dave"));


// document.write(element);