const electron = require('electron');
const window = require('./client/window/Window'); 
const {app} = electron;

function init() {

  // temp, will need to tie it to debug mode
  require('electron-debug')({showDevTools: 'undocked'});
  
  setTimeout(function () { 
    // Create a Window
    window.create();  
  }, 3000);
}

app.on('ready', init);