// // Initialize butotn with users's prefered color
// // let changeColor = document.getElementById("changeColor");
// const buttonDownload = document.getElementById("download");

// // chrome.storage.sync.get("color", ({ color }) => {
// //   changeColor.style.backgroundColor = color;
// // });

// // console.log("i am right before button listener"); // RIP

// // When the button is clicked, inject setPageBackgroundColor into current page
// buttonDownload.addEventListener("click", async () => {
//   console.log("hi");

//   var backgroundPage = chrome.extension.getBackgroundPage();
//   backgroundPage.console.log("am i in the background page?");
//   console.log(backgroundPage);
//   // const data = backgroundPage.querySelectorAll("div");
//   // console.log(data);

//   // const songData = getSongs(); // get our text;
//   // console.log(songData);
// });

// // functions to get song data
// // returns array of text for now
// function getSongs() {
//   const songData = [];
//   // get array of elements holding each song
//   // const data = document.querySelectorAll("div");
//   const data = document.querySelectorAll('[aria-colindex="2"]');
//   console.log(data);
//   // for each song containing element push the inner text into songData
//   // for (let i = 0; i < data.length; i++) {
//   //   songData.push(data[i].innerText);
//   // }
//   // return array of innertext
//   return songData;
// }

// function to save song text data to file
