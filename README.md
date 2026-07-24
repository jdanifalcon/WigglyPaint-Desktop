# 🎨 WigglyPaint Desktop

> Desktop packaging of the original **WigglyPaint** HTML application using **Electron**.

⚠️ **Unofficial desktop adaptation**

This project is **not affiliated with or endorsed by Internet Janitor**.

The original WigglyPaint application was created by **John Earnest (Internet Janitor)**. This repository only provides the Electron packaging, desktop integration, installer configuration, and documentation.

---

## 🌐 Original Project

🎨 **WigglyPaint**

<https://internet-janitor.itch.io/wigglypaint>

---

## 🛡️ Author's Notice

Before using or sharing WigglyPaint, please read the author's message regarding scam websites, fake desktop applications, and unauthorized redistributions.

📢 **Please don't fall for scams**

<https://internet-janitor.itch.io/wigglypaint/devlog/1449946/please-dont-fall-for-scams>

The author has clarified that WigglyPaint is **free and open source**, and warns users about fake websites and applications pretending to be official versions.

---

## ✨ Features

- 🖥️ Native desktop application for **Windows** and **macOS**
- 🎨 Same original WigglyPaint experience
- ⚡ Electron-powered desktop packaging
- 📦 Windows installer (.exe) and macOS disk image (.dmg)
- 🍎 macOS builds for both Intel (x64) and Apple Silicon (arm64)
- 🚀 Simple installation with desktop and Start Menu / Launchpad shortcuts
- 🪟 Native application window
- ⚙️ Automated macOS builds via GitHub Actions
- ❤️ Open-source learning project

---

## 📷 Screenshots

![Hola](gif-test/hola.gif)

---

## 📥 Download & Install

If you just want to use the application, download the latest installer from the **Releases** page:

👉 [**Download the latest release**](https://github.com/jdanifalcon/WigglyPaint-Desktop/releases/latest)

### Windows

1. Download **WigglyPaint-Desktop-Setup-x.x.x.exe** from the Assets section
2. Run the installer
3. If Windows SmartScreen appears, see the [SmartScreen Notice](#%EF%B8%8F-windows-smartscreen-notice) below
4. Choose your installation directory and complete the setup
5. Launch WigglyPaint Desktop from the desktop shortcut or Start Menu

### macOS

1. Download the `.dmg` file from the Assets section:
   - **Intel Mac** → `WigglyPaint-Desktop-Setup-x.x.x-x64.dmg`
   - **Apple Silicon (M1/M2/M3/M4)** → `WigglyPaint-Desktop-Setup-x.x.x-arm64.dmg`
2. Open the `.dmg` file
3. Drag **WigglyPaint Desktop** into your **Applications** folder
4. If macOS Gatekeeper blocks the app, see the [Gatekeeper Notice](#-macos-gatekeeper-notice) below
5. Launch WigglyPaint Desktop from Applications or Launchpad

> 💡 **Not sure which Mac you have?** Click the Apple menu () → "About This Mac". If the Chip says "Apple M1" or similar, download the arm64 version. If it says "Intel", download the x64 version.

---

## ⚠️ Windows SmartScreen Notice

When running the installer for the first time, Windows SmartScreen may display a warning saying **"Windows protected your PC"**. This is expected behavior — it happens with any independently distributed application that is not signed with a paid code-signing certificate.

**This does not mean the application is harmful.** The source code is fully available in this repository for review.

<p align="center">
  <img src="assets/screenshots/smartscreen-warning.jpeg" alt="Windows SmartScreen warning" width="500">
</p>

### How to proceed:

1. Click **"More info"** on the SmartScreen dialog
2. Click **"Run anyway"**
3. The installation will continue normally

> 💡 **Why does this happen?** Microsoft SmartScreen flags executables that are not digitally signed with a trusted certificate. Code-signing certificates cost $70–$200 USD/year, which is not feasible for independent open-source projects. This is common across many Electron-based applications and open-source tools distributed outside the Microsoft Store.

---

## 🍎 macOS Gatekeeper Notice

When opening WigglyPaint Desktop for the first time on macOS, you may see a message saying **"WigglyPaint Desktop can't be opened because Apple cannot check it for malicious software"** or **"WigglyPaint Desktop is not from an identified developer"**. This is expected behavior — it happens with any application that is not signed with a paid Apple Developer certificate.

**This does not mean the application is harmful.** The source code is fully available in this repository for review.

### How to proceed:

1. **Right-click** (or Control-click) on the app in your Applications folder
2. Select **"Open"** from the context menu
3. Click **"Open"** in the dialog that appears
4. The app will launch normally from now on

**Alternative method:**

1. Go to **System Settings** → **Privacy & Security**
2. Scroll down to the Security section
3. You will see a message about WigglyPaint Desktop being blocked
4. Click **"Open Anyway"**

> 💡 **Why does this happen?** macOS Gatekeeper requires applications to be signed with an Apple Developer certificate ($99 USD/year). This is not feasible for independent open-source projects. This is common across many Electron-based applications and open-source tools distributed outside the Mac App Store.

---

## 🛠️ Build From Source

If you want to build the application yourself:

Clone the repository:

```bash
git clone https://github.com/jdanifalcon/WigglyPaint-Desktop.git
```

Navigate to the project folder:

```bash
cd WigglyPaint-Desktop
```

Install dependencies:

```bash
npm install
```

Run the application in development mode:

```bash
npm start
```

Build the installer:

```bash
npm run build
```

The installer will be generated in the `dist/` folder.

> ⚠️ **Note:** Windows builds can only be generated on Windows, and macOS builds can only be generated on macOS. This project includes a [GitHub Actions workflow](.github/workflows/build-macos.yml) that automates macOS builds in the cloud.

---

## 📁 Project Structure

```text
WigglyPaint-Desktop/
├── .github/
│   └── workflows/
│       └── build-macos.yml
├── assets/
│   ├── icon.ico
│   ├── icon.icns
│   └── screenshots/
│       └── smartscreen-warning.jpeg
├── main.js
├── package.json
├── WigglyPaint.html
├── README.md
└── LICENSE
```

---

## 🤝 Contributing

Contributions are welcome!

If you have ideas to improve the desktop packaging, installer, documentation, or cross-platform compatibility, feel free to open an Issue or submit a Pull Request.

---

## ❤️ Acknowledgements

- 🎨 Original application by **John Earnest (Internet Janitor)**
- ⚙️ Desktop packaging by **Jessica Falcón**
- 💙 Thanks to the open-source community and everyone supporting creative software.

---

## 📄 License

The original WigglyPaint project is released under the **MIT License**.

This repository preserves the original attribution while providing the Electron desktop packaging and documentation.
