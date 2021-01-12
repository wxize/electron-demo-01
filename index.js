const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 1. 引入包
// 2. app , window

// 3. 当app准备完成时创建一个 window
// 4. 当所有 window 都被关闭时，整个 app 都需要退出应用
// 5. 当 app 重新激活时， 并且没有创建 window 时，去创建 window 