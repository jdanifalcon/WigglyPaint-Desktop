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

- 🖥️ Native Windows desktop application
- 🎨 Same original WigglyPaint experience
- ⚡ Electron-powered desktop packaging
- 📦 Windows installer (.exe)
- 🚀 Simple installation with desktop and Start Menu shortcuts
- 🪟 Native application window
- ❤️ Open-source learning project

---

## 📷 Screenshots

> Screenshots coming soon.

---

## 📥 Download & Install

If you just want to use the application, download the latest installer from the **Releases** page:

👉 [**Download the latest release**](https://github.com/jdanifalcon/WigglyPaint-Desktop/releases/latest)

1. Download **WigglyPaint-Desktop-Setup-x.x.x.exe** from the Assets section
2. Run the installer
3. If Windows SmartScreen appears, see the [SmartScreen Notice](#%EF%B8%8F-windows-smartscreen-notice) below
4. Choose your installation directory and complete the setup
5. Launch WigglyPaint Desktop from the desktop shortcut or Start Menu

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

---

## 📁 Project Structure

```text
WigglyPaint-Desktop/
├── assets/
│   ├── icon.ico
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

