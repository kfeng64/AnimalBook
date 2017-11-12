var dropdown = document.getElementById("dropdown").addEventListener("change", function() {
  chrome.storage.sync.set({"choice": dropdown.value}, function() {
    alert("option saved");
  });
});


// var dropdown = document.getElementById("dropdown").addEventListener("change", () => {
//   chrome.runtime.onConnect.addListener(function(port) {
//     animal = dropdown.value;
//     console.assert(port.name == "choice");
//     port.onMessage.addListener(function(msg) {
//       if (msg.listen == "Listening") {
//         if (animal == "dogs") {
//           port.postMessage({animal: "dogs"});
//         } else if (animal == "cats") {
//           port.postMessage({animal: "cats"});
//           //alert("cats");
//         } else if (animal == "other") {
//           port.postMessage({animal: "other"});
//         } else if (animal == "all") {
//           port.postMessage({animal: "all"});
//         }
//       }  
//     });
//   });
// });





