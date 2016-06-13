const electron = require('electron');
const config = require('./../config/Config');
const {BrowserWindow} = electron;

// Our Window object. There should only be one.
let win;

function create(hidden) {
  
  // Get a handle on the User's primary Screen
  let screen = electron.screen.getPrimaryDisplay();
  
  // Create the window
  win =  new BrowserWindow({
    height: (hidden) ? 0 : 500,
    width: 340,
    show: false,
    x: screen.size.width - 349,
    y: screen.size.height - 500,
    frame: false,
    transparent: true,
    alwaysOnTop: true
  });
  
  // Load-up the UI
  win.loadURL('http://localhost:4200/');
  
  // Show it!
  if (!hidden) {
    win.show();
  }
}

function show() {
  if (win) {
    win.show();
  }
}

function peek() {
  if (win) {
    // Get a handle on the User's primary Screen
    let screen = electron.screen.getPrimaryDisplay();
    // Set size & position 
    win.setSize(340, 124);
    win.setPosition(screen.size.width - 349, screen.size.height - 124);
    win.show();
  }
}

function close() {
  if (win) {
    window.close();
  }
}

module.exports = {
  create: create,
  show: show,
  peek: peek,
  close: close
};