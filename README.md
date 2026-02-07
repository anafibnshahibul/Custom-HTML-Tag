# 🌟 Custom HTML Tag
### *Lightweight Custom Elements for Modern Web Interfaces*

The **Lumina Component Library** provides high-performance, easy-to-use HTML tags for interactive UI design. Built for efficiency and speed.

---

## 🚀 Key Features

### 1. ⌨️ Interactive TypeWriter (`<type-writer>`)
A dynamic text animation tool that simulates real-time typing.
* **Tag Control:** Use the `con` attribute to choose between `h1`, `p`, `span`, etc.
* **Precision Timing:** Control typing speed (`speed`) and initial start delay (`delay`).
* **Identity Support:** Fully supports standard `id` and `class` for external CSS targeting.
* **Layout Friendly:** Handles `<br>` tags for multi-line animations.

### 2. 💻 Pro Code Display (`<cpc>`)
A specialized container for displaying code snippets with high readability.
* **Shadow DOM Protection:** Styles are isolated, ensuring zero conflict with your global CSS.
* **Theme Customization:** Adjust background (`bg`) and font color (`color`) via simple attributes.
* **Auto-Formatting:** Respects indentation and automatically wraps long code lines.
* **Snippet Badge:** Includes a built-in "CODE" label for a professional documentation look.

---

## 📖 How To Use

### 🛠️ Installation & Setup

To activate these custom tags in your project, follow these steps:

1. **Download:** Get the `custom-html-tag.js` file from this repository.
2. **Link:** Place the file in your directory and link it inside your HTML:
   ```html
   <script src="custom-html-tag.js"></script>

### TypeWriter Implementation
```html
<type-writer 
    id="hero-text" 
    class="neon" 
    con="h2" 
    speed="100" 
    delay="500">
    Welcome to Lumina Project.
</type-writer>
```

### CopyCode Implementation
```html
<cpc bg="#1e293b" color="#38bdf8">
    // Your professional code here
    console.log("Custom Tag is working!");
</cpc>
