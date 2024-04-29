console.log("Good Monday everyone!");

// JS POWER! Make your app suggest the user an activity 
const activities = [
  "Running",
  "Coding",
  "Fishing",
  "Stretching",
  "Clubbing"
];

// 1. Select elements (button, h2)
const button = document.querySelector(".inspire-me");
const quote = document.querySelector("#activity");

console.log("1. before addeventlistener");
// 2. Listen to click on button
button.addEventListener("click", (event) => {
  console.log("3. in addeventlistener");

  // console.log(event);
  // 2.5 Fetch Bored API
  const url = 'http://www.boredapi.com/api/activity/'

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log("5. data arrives!");
      // 3. Change the DOM (add some text in the h2 with innerText)
      // index = Math.floor(Math.random() * activities.length);
      // quote.innerText = activities[index];
      quote.innerText = data.activity
    })
  console.log("4. after the fetch");
});
console.log("2. after addeventlistener");



// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!
// ==> www.boredapi.com

// const url = 'http://www.boredapi.com/api/activity/'

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.activity);
//   })


