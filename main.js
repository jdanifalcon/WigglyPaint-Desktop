const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    autoHideMenuBar: true,
    title: "WigglyPaint Desktop",
    icon: path.join(__dirname, "assets", "icon.ico"),
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("WigglyPaint.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});