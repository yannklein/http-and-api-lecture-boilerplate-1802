// console.log("Good Saturday everyone!");

// JS POWER! Make your app suggest the user an activity 
// const activities = [
//   "Practice pitches", 
//   "Play games",
//   "Workout",
//   "Read a book",
//   "Do your flashcard"
// ];

// 1. Select elements (button, h2)
// const button = document.querySelector(".inspire-me");
// const activityH2 = document.querySelector("#activity");

// 2. Listen to click on button
// button.addEventListener("click", (event) => {
//   // console.log(event);
//   // 3. Add random activity to the h2 (innerText)

//   // in Ruby:
//   // [1,2,3].sample
//   // rand(10)
//   const randomIndex = Math.round(Math.random()*activities.length);
//   activityH2.innerText = activities[randomIndex];
// });



// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!
// ==> www.boredapi.com

// const url = 'https://api.github.com/users/yannklein'
// fetch(url)
// .then(response => response.json())
// .then((data) => {
//   // do stuffs with the data received
//   console.log(data);
// });

const url = "https://www.boredapi.com/api/activity/"

// 1. Select elements
const button = document.querySelector(".inspire-me");
const activityH2 = document.querySelector("#activity");

console.log("before the code") // 1st console.log
// 2. Listen to a click on button
button.addEventListener("click", (event) => {
  // 2.5 Fetch the BoredAPI
  console.log("after the event listener") // 3rd console.log
  fetch(url)
    .then(response => response.json()) // .json() converts JSON into JS
    .then((data) => {
      console.log("in the fetch") // 5th console.log

      // console.log(data.activity);
      // 3. Adding the activity in innerText
      activityH2.innerText = data.activity;
    })
  console.log("after the fetch") // 4th console.log
});
console.log("after the code") // 2nd console.log
