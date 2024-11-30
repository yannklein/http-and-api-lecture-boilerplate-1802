console.log("Good Saturday everyone!");

// JS POWER! Make your app suggest the user an activity 
const activities = [
  "Frying a cat", // 0
  "Petting a cat", // 1 
  "Doing Yoga with cat", // 2
  "Gardening with the cat", // 3
  "Doing Pilates with a Cat" // 4
];

// // 1. Select elements
// const button = document.querySelector(".inspire-me");
// const header = document.querySelector("#activity");

// // 2. Listen to click on button
// button.addEventListener("click", () =>  {
//   // console.log(event);
//   // 3. Change the DOM (insert the activity on the header)
//   const randomIndex = Math.floor(Math.random() * activities.length);
//   const activity = activities[randomIndex];
//   header.innerText = activity;
// });


// const ghUrl = "https://api.github.com/users/yannklein";

// fetch(ghUrl)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//   });


// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!
// ==> www.boredapi.com

// 1. Select elements
const button = document.querySelector(".inspire-me");
const header = document.querySelector("#activity");

// 2. Listen to click on button
button.addEventListener("click", () =>  {
  // console.log(event);

  // 2.5 Fetch data from the API
  const url = "https://bored.api.lewagon.com/api/activity";
  fetch(url) // HTTP request
    .then(response => response.json()) //from JSON  file to JS data
    .then((data) => {
      console.log(data);
      // 3. Change the DOM (insert the activity on the header)
      header.innerText = data.activity;
    })
  console.log("after the fetch");
});


