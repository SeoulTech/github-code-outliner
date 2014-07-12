'use strict'

// parse dom and talk to background.js

var code = [].map.call(document.querySelectorAll('.line'), function(line) {
  return line.innerText
})

chrome.runtime.sendMessage({code: code}, function(response) {
  console.log(response)
})

// looking glass

var container = document.querySelector('.site > .container')
container.style.marginRight = 0

var overlay = document.createElement('p')
overlay.innerText = code.join('\n')
overlay.style.position = 'absolute'
overlay.style.left = '40px'
overlay.style.top = '300px'
document.body.appendChild(overlay)
