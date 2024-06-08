console.log("Good Saturday everyone!");

// JS POWER! Make your app suggest the user an activity 
// const activities = [
//   "Watch Paint Dry", // 0
//   "Read a book", // 1
//   "Play the guitar", // 2
//   "Drink coffee", // 3
//   "Watch the lecture 📺" // 4
// ];

// // 1. Select elements (button, activity h2)
// const button = document.querySelector(".inspire-me");
// const result = document.querySelector("#activity");

// // 2. Listen to a click on button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, display the activity on the h2 (.innerText)
//   const randomIndex = Math.floor(Math.random()* activities.length);
//   const randomElement = activities[randomIndex];
//   result.innerText = randomElement;
// });

// const url = "https://api.github.com/users/yannklein"

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.blog);
//   })


// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!
// ==> www.boredapi.com

const url = "https://bored.api.lewagon.com/api/activity";

// 1. Select elements (button, activity h2)
const button = document.querySelector(".inspire-me");
const result = document.querySelector("#activity");
console.log("before addEventlistener"); // 1
// 2. Listen to a click on button
button.addEventListener("click", (event) => {
  // 2.5 Fetch the Bored API
  console.log("after addEventlistener"); // 3

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log("get the API data"); // 4?
      // 3. Change the DOM, display the activity on the h2 (.innerText)
      result.innerText = data.activity;
    })
  console.log("after the fetch"); // 5?
});

console.log("after the code"); // 2