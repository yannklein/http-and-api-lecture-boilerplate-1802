// JS POWER! Make your app suggest the user an activity 
// const activities = ["Sleep", "Meditate", "Vaccuum ceiling", "Tequila shots!", "Workout", "Yell at strangers"];

// // 1. Select elements (button, activity h2)
// const inspireBtn = document.querySelector(".inspire-me");
// const activity = document.querySelector("#activity");

// // 2. Listen to an event (click on the button)
// inspireBtn.addEventListener("click", (event) => {
//   // 3. Change the DOM (add an innerText to the h2)
//   // console.log(event);
//   const randomIndex = Math.floor(Math.random() * 6);
//   activity.innerText = activities[randomIndex];
// });





// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!
// ==> www.boredapi.com
const url = 'https://www.boredapi.com/api/activity/'
const activities = ["Sleep", "Meditate", "Vaccuum ceiling", "Tequila shots!", "Workout", "Yell at strangers"];

// 1. Select elements (button, activity h2)
const inspireBtn = document.querySelector(".inspire-me");
const activity = document.querySelector("#activity");

// 2. Listen to an event (click on the button)
inspireBtn.addEventListener("click", (event) => {
  // 2.5 Fetch an API
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.activity);
      // 3. Change the DOM (add an innerText to the h2)
      // console.log(event);
      // const randomIndex = Math.floor(Math.random() * 6);
      activity.innerText = data.activity;
    })
});