let str = document.getElementById("p1").textContent;
document.getElementById("p1").textContent = "Welcome";

let flipButton = document.getElementById("flip");
let greeting = document.getElementById("greeting");

//let userName = prompt('Enter your name:');
//document.getElementById('username').textContent = userName;
flipButton.addEventListener("click", function () {
  flipButton.classList.toggle("rotate");
});

function Car(make, model, year, color, fuelType) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.fuelType = fuelType;
  this.drive = function () {
    console.log(`you are driving ${this.model}`);
  };
}

const car1 = new Car("Cheverlot", "Camaro", 2024, "red", "petrol");

console.log(car1.make);
console.log(car1.model);
car1.drive();

console.log();

let box = document.getElementById("box");
let t = setInterval(move, 25);
let pos = 0;
function move() {
  if (pos >= 275) {
    clearInterval(t);
  } else {
    pos = pos + 1;
    box.style.left = pos + "px";
  }
}

function change() {
  let eventname = document.getElementById("eventName");
  eventname.value = eventname.value.toUpperCase();
}

let Pibtn = document.getElementById("pi");
Pibtn.addEventListener("click", PiFunc);
function PiFunc() {
  Pibtn.remove();
  alert(Math.PI);
  Pibtn.removeEventListener("click", PiFunc);
}

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  console.log(hours + ":" + mins + ":" + secs);
}
setInterval(printTime, 10000000);

function checkAge() {
  let age = null;
  let vipname = null;
  vipname = prompt("Please enter your name:");

  /*let vi = vipname.split(" ");
  function capi(vi){
    return vi.charAt(0).toUpperCase()+vi.slice(1);
  }
  let vipna = vi.map(capi).join(" ");*/

  function capitalizeFirstLetter(vipname) {
    return vipname
      .split(" ")
      .map((capi) => capi.charAt(0).toUpperCase() + capi.slice(1))
      .join(" ");
  }

  let vipnameCaped = capitalizeFirstLetter(vipname);

  age = Number(prompt("Please enter your age: "));
  const isMember = document.getElementById("membership").checked;
  if (age != 0) {
    if (age >= 18 && isMember) {
      alert("You are a VIP member");
      greeting.innerHTML = "Hello, VIP member " + vipnameCaped;
      greeting.style.color = "green";
    } else if (!isMember) {
      alert("Sorry, You are not a VIP member");
    } else {
      alert("Sorry, below 18 not allowed");
    }
  } else {
    alert("please enter the valid age");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

let images = ["Harish.jpg", "tree.jpg", "city.jpg"];
let currentImage = 0;
function next() {
  let slider = document.getElementById("slider");
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  slider.src = images[currentImage];
}
function prev() {
  let slider = document.getElementById("slider");
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  slider.src = images[currentImage];
}

function validate(event){
  event.preventDefault();
  let n1 = document.getElementById("num1");
  let n2 = document.getElementById("num2");
  if(n1.value !== '' && n2.value !== ''){
    if(n1.value == n2.value){
      alert("equal");
    }else{
      alert("not equal")
    }
  }else{
    alert("Enter the same value in both boxes and no blank");
  }
  n1.value = '';
  n2.value = '';
}

document.addEventListener("DOMContentLoaded", () => {
  function processFormData() {
    const name = document.getElementById("name").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const pass = document.getElementById("pass").value;
    const agree = document.getElementById("agree").value;

    if (name && mail && pass) {
      document.getElementById("output").style.display = "block";
      document.getElementById("outputName").textContent = name;
      document.getElementById("outputMail").textContent = mail;
      document.getElementById("outputPass").textContent = pass;
      if (document.getElementById("agree").checked) {
        document.getElementById("outputAgree").textContent = "Agreed";
      } else {
        document.getElementById("outputAgree").textContent = "Disagreed";
      }
      document.getElementById("myForm").reset();
    } else {
      alert("Please fill in all the fields.");
    }
  }
  window.processFormData = processFormData;
});
console.log(str, greeting.textContent, name);
