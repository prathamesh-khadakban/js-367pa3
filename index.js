// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class Data {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log(`This is ${this.name}, and he is ${this.age} months old`);
  }
}

let car = new Data('shourya', '4');
car.getName();
