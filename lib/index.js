// console.log("Good Monday everyone!");

// JS POWER! Make your app suggest the user an activity 
// const activities = [
//   "Practice pitches", 
//   "Choose a Halloween costume", 
//   "Doing flashcards", 
//   "Drinking coffee", 
//   "Finding a lunch place"
// ];

// // 1. Select the button and the activity header2
// const button = document.querySelector(".inspire-me");
// const activity = document.querySelector("#activity");

// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, randomly pick an activity 
//   //    insert it (innerText) in the header2
//   const randomIndex = Math.floor(Math.random() * activities.length);
//   const pickedActivity = activities[randomIndex];
//   activity.innerText = pickedActivity;
// });






// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!
// ==> www.boredapi.com
const url = 'https://www.boredapi.com/api/activity/'

// 1. Select the button and the activity header2
const button = document.querySelector(".inspire-me");
const activity = document.querySelector("#activity");

console.log("before the addEventListener");
// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  console.log("after the addEventListener");
  // console.log(event);
  // 2.5  Fetch an API: Get a random activity from API
  // const data = fetch(url) // NOT WORKING
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log("after the then");
      // console.log(data.activity);
      // 3. Change the DOM, randomly pick an activity 
      //   //    insert it (innerText) in the header2
      activity.innerText = data.activity;
    })
  console.log("after the fetch");
});
console.log("end of the code");

