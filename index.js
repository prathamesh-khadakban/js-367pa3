// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// ARC Tutorials

// 1. Class
// 2. Class Inheritance with super();


class Data {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log(`This is ${this.name}, and he is ${this.age} months old`);
  }
}

class subData extends Data {
  // getChildName(){
  //   console.log(`This is Child ${this.name}, and he is ${this.age} months old`);
  // }

  getName() {
    super.getName();
  }
}

let car = new subData('shourya', '4');
car.getName();
