const electron = require("electron")
const path = require("path")
const isDev = require("electron-is-dev")
const url = require('url')
const { session } = require("electron")
const ipc = electron.ipc
// #282C34
let window;
const createWindow =()=>{
    window = new electron.BrowserWindow({
        width: 1200,
        height: 650,
       webPreferences:{
           nodeIntegration: true,
           enableRemoteModule: true,
           nativeWindowOpen: true,
       }
    })
    window.loadURL(isDev?"http://localhost:3000":`file://${path.join(__dirname, './build/index.html')}`)
    window.on("closed", ()=>{
        window=null
    })
    // window.webContents.openDevTools({mode: "bottom"})
}
electron.app.on("ready", ()=>{
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback)=>{
    details.requestHeaders["User-Agent"] = "Chrome",
    callback({cancel: false, requestHeaders: details.requestHeaders})
  })
  createWindow()
})
electron.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      electron.app.quit();
    }
  });
  electron.app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });