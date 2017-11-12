var animal = document.getElementById("dropdown");

if (animal == "dogs") {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "dogs"}, function(response) {
    console.log(response.farewell);
    alert("send message");
  });
});
} else if (animal == "cats") {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "cats"}, function(response) {
    console.log(response.farewell);
    alert("send message");
  });
});
} else if (animal == "other") {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "other"}, function(response) {
    console.log(response.farewell);
    alert("send message");
  });
});
} else if (animal == "all") {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "all"}, function(response) {
    console.log(response.farewell);
    alert("send message");
  });
});
}

