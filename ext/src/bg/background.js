// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "Reciving from a content script:" + sender.tab.url :
                "Reciving from the extension");

    console.log(JSON.stringify(request, null, 4));

    sendResponse({by: true});
  });
