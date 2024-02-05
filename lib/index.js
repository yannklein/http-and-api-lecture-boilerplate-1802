console.log("Good Monday everyone!");

// JS POWER! Make your app suggest the user an activity 
// const activities = [
//   "Sleep",
//   "Play UNO",
//   "Get drunk",
//   "Read a book",
//   "Learn code"
// ];

// // 1. Select elements (button, prompt)
// const button = document.querySelector(".inspire-me");
// const prompt = document.querySelector("#activity");

// // 2. Listen to an event, a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, change prompt's innerText
//   let randomIndex = Math.floor(Math.random() * activities.length)
//   randomIndex = randomIndex === activities.length ? activities.length - 1 : randomIndex
//   prompt.innerText = activities[randomIndex];
// });



// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!
// ==> www.boredapi.com

const url = 'https://api.github.com/users/yannklein'

fetch(url) // http request to that url
  .then( response => response.json()) // convert JSON into JS data
  .then((data) => { // JS arrow function that processes the JS data
    console.log(data.blog);
  })

  
// 1. Select elements
const button = document.querySelector(".inspire-me");
const prompt = document.querySelector("#activity");

// 2. Listen to a click on button
console.log("before add event listener");
button.addEventListener("click", (event) => {
  console.log("in add event listener");
  // 2.5 Fetch the bored API
  const url = "https://www.boredapi.com/api/activity/";
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log("the data arrives");
      // 3. Change the DOM, show the activity
      prompt.innerText = data.activity;
    });
  console.log("after the fetch");
});
console.log("end of the code");

