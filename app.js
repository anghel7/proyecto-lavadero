const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let appWindow;

function createWindow(params) {
  /** OK */
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/dist/proyecto-lavadero/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  appWindow.webContents.openDevTools();

}

app.whenReady().then(createWindow)

/** OK */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getFocusedWindow().length === 0) {
    createWindow()
  }
});