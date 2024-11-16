const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Agora, ao invés de carregar o arquivo diretamente, carregue a URL do servidor
  win.loadURL("http://localhost:3000"); // Usando a URL do servidor (se estiver usando React, por exemplo)

  // Se você não estiver usando um servidor local, então use o caminho correto
  // win.loadFile(path.join(__dirname, 'public', 'index.html'));

  // Abra as DevTools para depuração, se necessário
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
