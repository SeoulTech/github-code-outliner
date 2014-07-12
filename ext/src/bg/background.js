'use strict'

chrome.runtime.onMessage.addListener(function(msg, sender, response) {
  response(msg)
})