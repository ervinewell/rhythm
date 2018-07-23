const { app, BrowserWindow, ipcMain, dialog } = require('electron')
let mainWindow = null

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadFile(`${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('choose-hexo-config', (event) => {
  dialog.showOpenDialog({
    title: '选择hexo配置文件',
    message: '仅支持yaml',
    properties: ['openFile'],
    filters: [
      {name: 'All Files', extensions: ['yaml']}
    ]
  }, (files) => {
    if (files) {
      event.sender.send('send-hexo-config', files)
    }
  })
})
