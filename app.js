const electron = require('electron');
const window = require('./client/window/Window');
const exec = require('child_process').exec;

const {app} = electron;

function init() {

  exec('ng serve --port=4202', function callback(error, stdout, stderr) {
    // stdout('yo');
  });

  // temp, will need to tie it to debug mode
  require('electron-debug')({showDevTools: 'undocked'});
  
  setTimeout(function () { 
    // Create a Window
    window.create();  
  }, 3000);
}

app.on('ready', init);