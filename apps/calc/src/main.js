/* eslint import/no-extraneous-dependencies: off */

import { app, BrowserWindow } from 'electron';
import startup from 'electron-squirrel-startup';
import { environment } from './environment';

console.log('hello from main');

if (startup) {
  app.quit();
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 768,
    webPreferences: {
      preload: environment.MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  win.loadURL(environment.MAIN_WINDOW_WEBPACK_ENTRY);
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
