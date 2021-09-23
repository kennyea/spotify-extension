// // // Initialize butotn with users's prefered color
// // // let changeColor = document.getElementById("changeColor");
// const buttonDownload = document.getElementById("download");

// // // chrome.storage.sync.get("color", ({ color }) => {
// // //   changeColor.style.backgroundColor = color;
// // // });

// // // console.log("i am right before button listener"); // RIP
// // not able to get background page
// //chrome.runtime.getBackgroundPage(() => console.log("i got background page"));

// // // When the button is clicked, inject setPageBackgroundColor into current page
// buttonDownload.addEventListener("click", async () => {
//   console.log("hi");
//   // chrome.tabs.getCurrent(function (tab) {
//   //   alert(tab.title);
//   // });
//   chrome.tabs.query(
//     { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
//     function (tabs) {
//       let code = document.querySelectorAll("div");
//       console.log(code);

//       const { id: tabId } = tabs[0].url;
//       chrome.tabs.executeScript(
//         tabId,
//         { code: 'document.querySelectorAll("div")' },
//         (result) => console.log(result)
//       );
//     }
//   );
//   // chrome.extension.getBackgroundPage().console.log("foo");
//   //const songData = getSongs(); // get our text;
// });

// // functions to get song data
// // returns array of text for now
// function getSongs() {
//   const songData = [];
//   // get array of elements holding each song
//   const data = document.querySelectorAll("div");
//   //const data = document.querySelectorAll('[aria-colindex="2"]');
//   console.log(data);
//   // for each song containing element push the inner text into songData
//   // for (let i = 0; i < data.length; i++) {
//   //   songData.push(data[i].innerText);
//   // }
//   // return array of innertext
//   return songData;
// }

// // function to save song text data to file
