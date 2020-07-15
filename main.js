const electron = require('electron')
const url = require('url')
const path = require('path')

const{app, BrowserWindow} = electron

let mainWindow
let loginWindow

// Create new browser window
function CreateMainWindow(){
    mainWindow = new BrowserWindow({
        frame: false,
        width: 1000,
        height: 700,
        minWidth: 900,
        minHeight: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    // Load index.html
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file', 
    //     slashes: true
    // }))

    // mainWindow.loadURL(`file://${path.join(__dirname, 'http://localhost:3000')}`)
    mainWindow.loadURL('http://localhost:3000/')
    // Set to null when window is closed
    mainWindow.on('closed', () => {
        mainWindow = null,
        app.quit()
    })
}

// Listen for app to be ready
app.on('ready', CreateMainWindow)