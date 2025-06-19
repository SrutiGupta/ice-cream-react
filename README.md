🍦 Ice Cream Co. – React Website
A pixel-perfect, fully responsive React.js website for an ice cream company. Built using functional components, React Hooks, and Tailwind CSS. This project was created as part of the Code-X-Novas React Developer assignment.

📌 Project Overview
This project replicates a provided Figma prototype to demonstrate frontend skills in:

React.js (Functional Components & Hooks)

Tailwind CSS

Responsive Design

Component-based architecture

Pixel-perfect UI implementation

The website features modern design sections such as:

Hero banner

Product showcase

About the brand

Contact form

Responsive navigation

Smooth animations and hover effects

📁 Folder Structure
php
Copy
Edit
ice-cream-react/
├── public/
│   ├── index.html              # HTML template
│   ├── favicon.ico             # Favicon
│   └── manifest.json           # App manifest
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Responsive navigation bar
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── FeaturedProducts.jsx# Ice cream product showcase
│   │   ├── About.jsx           # Company story and features
│   │   ├── Contact.jsx         # Contact form & info
│   │   └── Footer.jsx          # Footer with links & social icons
│   │
│   ├── App.js                  # Main app component
│   ├── App.css                 # Custom app styles
│   ├── index.js                # React entry point
│   ├── index.css               # Global Tailwind styles
│   ├── serviceWorkerRegistration.js # PWA support
│   └── reportWebVitals.js     # Performance metrics
│
├── package.json                # Project metadata & dependencies
├── README.md                   # Project documentation
└── vercel.json                 # Vercel deployment config
🚀 Setup and Deployment Instructions
✅ Prerequisites
Node.js (v14 or later)

npm (v6+) or yarn

🛠 Installation & Development
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/SrutiGupta/ice-cream-react.git
cd ice-cream-react
Install Dependencies:

bash
Copy
Edit
npm install
Run Development Server:

bash
Copy
Edit
npm start
Website will be available at: http://localhost:3000

📦 Build for Production
bash
Copy
Edit
npm run build
This creates a production-ready build in the build/ directory.

🌐 Deployment (Vercel)
Push code to a public GitHub repository.

Visit https://vercel.com.

Import your GitHub repo and configure:

Framework Preset: Create React App

Build Command: npm run build

Output Directory: build

Click Deploy.

🔗 Live Demo:
https://ice-cream-react-79xv.vercel.app

⚙️ Internal Documentation & Comments
Each component in the src/components folder is well-commented to explain its purpose and layout.

Reusable components follow naming conventions and are modular for scalability.

Tailwind classes are used consistently for styling and responsiveness.

🧩 Known Issues or Limitations
Contact form uses static fields without backend integration (can be enhanced).

Some animations are basic and can be upgraded with libraries like Framer Motion.

Currently optimized for Chrome and modern browsers.

🛠 Tech Stack
Tech	Purpose
React.js	JavaScript UI Library
Tailwind CSS	Utility-first CSS Framework
Vercel	Deployment Platform
Create React App	React project bootstrapping
Google Fonts	Poppins (headings), Inter (body)

📱 Responsive Breakpoints
Device	Width
Mobile	< 640px
Tablet	640px – 1024px
Desktop	> 1024px

📄 License
This project is built strictly for learning, testing, and demonstration purposes during the Code-X-Novas selection process.

🤝 Contributing
This is a personal assignment project. Suggestions are welcome via issues or pull requests.

