# 🐱 Custom File Header with Auto-Updating Timestamp in VS Code

This guide sets up a **custom file header** (with a cute cat!) and **automatically updates the "Updated" timestamp** every time you save your file.

---

## ✅ Features

- Cute ASCII cat in your file headers 😺  
- Insert header with a `headercat` shortcut  
- Auto-update timestamp on file save (no manual editing needed)  
- Works for `.c`, `.cpp`, `.h`, etc.

---

## 📁 Project Structure

```bash
your-project/
├── .vscode/
│   └── settings.json        ← VS Code settings (includes run-on-save config)
├── scripts/
│   └── update-header.js     ← Script to update the timestamp
├── src/
│   └── main.cpp             ← Your source file
```

## 1️⃣ Create a VS Code Snippet

1. Open **Command Palette** (ctrl+shift+P on windows and linux) → `Preferences: Configure User Snippets`  
2. Select `cpp.json` (or your language of choice)  
3. Add the snippet like featured on cpp.json

## 3️⃣ Configure `.vscode/settings.json`

Create or edit `.vscode/settings.json` as shown on this repository.

## 🔁 How It Works

1. Insert header with `headercat` snippet  
2. On every save:  
   - Script finds the `/*  Updated:` line  
   - Replaces it with the current date/time  
3. Done! No manual updates needed 🎉

---

## 🧪 Tips

- Ensure the `Updated:` line follows the same format as the snippet.  
- You can adapt the script to work with `.js`, `.py`, or other extensions.  
- Works great in combination with Git for tracking changes.

