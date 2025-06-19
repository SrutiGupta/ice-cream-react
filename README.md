# 🍦 Ice Cream Co. – React Website

A pixel-perfect, fully responsive React.js website for an ice cream company. Built using functional components, React Hooks, and Tailwind CSS.  
This project was created as part of the **Code-X-Novas React Developer assignment**.

---

## 📌 Project Overview

This project replicates a provided Figma prototype to demonstrate frontend skills in:

- React.js (Functional Components & Hooks)
- Tailwind CSS
- Responsive Design
- Component-based Architecture
- Pixel-perfect UI Implementation

**Key Features:**

- Hero banner
- Product showcase
- About the brand
- Contact form
- Responsive navigation
- Smooth animations and hover effects

---

<pre><code>## 📁 Folder Structure

<code>ice-cream-react/
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── manifest.json
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── FeaturedProducts.jsx
│ │ ├── About.jsx
│ │ ├── Contact.jsx
│ │ └── Footer.jsx
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── index.css
│ ├── serviceWorkerRegistration.js
│ └── reportWebVitals.js
├── package.json
├── vercel.json
└── README.md
</code> </code></pre>
yaml
Copy code

---

## 🚀 Setup and Deployment Instructions

### ✅ Prerequisites

- Node.js (v14 or later)
- npm (v6+) or yarn

### 🛠 Installation & Development

**Clone the Repository:**

```bash
git clone https://github.com/SrutiGupta/ice-cream-react.git
cd ice-cream-react
Install Dependencies:

bash
Copy code
npm install
Run Development Server:

bash
Copy code
npm start
Visit: http://localhost:3000

📦 Build for Production
bash
Copy code
npm run build
🌐 Deployment (Vercel)
Push code to a public GitHub repository.

Visit https://vercel.com

Import your GitHub repo and configure:

Framework Preset: Create React App

Build Command: npm run build

Output Directory: build

Click Deploy.

🔗 Live Demo:
👉 https://ice-cream-react-79xv.vercel.app

⚙️ Internal Documentation & Comments
Each component in src/components/ is well-commented.

Follows naming conventions and modular structure.

Uses Tailwind CSS classes consistently for layout & responsiveness.

🧩 Known Issues or Limitations
Contact form currently has static fields (no backend integration).

Animations are minimal; can be improved using libraries like Framer Motion.

Tested on Chrome and modern browsers only.

🛠 Tech Stack
Tech	Purpose
React.js	JavaScript UI Library
Tailwind CSS	Utility-first CSS Framework
Vercel	Deployment Platform
Create React App	Project setup
Google Fonts	Poppins (headings), Inter (body)

📱 Responsive Breakpoints
Device	Width
Mobile	< 640px
Tablet	640px – 1024px
Desktop	> 1024px

📄 License
This project is built strictly for learning, testing, and demonstration purposes during the Code-X-Novas selection process.

🤝 Contributing
This is a personal assignment project.
Suggestions are welcome via issues or pull requests.
