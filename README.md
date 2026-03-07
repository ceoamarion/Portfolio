# Amarion Anderson – Technical Designer & XR Developer Portfolio

A premium, modern portfolio architected to showcase deeply technical design work, rapid gameplay prototyping, and experimental XR/BCI interfaces. Built specifically for recruitment in AAA Gameplay Engineering, Technical Design, and Spatial Computing roles.

---

## ⚡ Tech Stack
- **React 18** & **Vite**
- **Tailwind CSS v4** (Custom design system)
- **Lucide React** (Scalable iconography)
- **GitHub Actions** (Automated CI/CD Deployment)

---

## 🛠 Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ceoamarion/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   The project will be live at `http://localhost:5173/Portfolio/`.

---

## 🎨 Content Management & Asset Swapping

Before officially sharing the link, ensure you swap out the placeholder content located in `src/data/index.js` and the `/public` directory.

### 1. Update Social Links & Resume
In `src/sections/Footer.jsx`, replace the `#` hrefs with your actual URLs for:
- **LinkedIn** (Replace the TODO comment placeholder)
- **Resume PDF** (Place your `resume.pdf` in the `public/` folder and change the href to `/Portfolio/resume.pdf` or an external Google Drive link).

### 2. Update Placeholder Media
All images referenced in `src/data/index.js` point to the `public/` folder root.
- Add your high-resolution project images or GIFs to the `/public` folder.
- Update the image paths in `src/data/index.js` (e.g., Change `"/placeholder-shooter.jpg"` to `"/top-down-shooter.jpg"`).

---

## 🚀 Automated Deployment (GitHub Pages)

This repository is pre-configured with a **GitHub Actions workflow** (`.github/workflows/deploy.yml`) to automatically build and deploy to GitHub Pages.

### How to Publish Updates:
1. Make your changes locally.
2. Commit and push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. GitHub Actions will automatically detect the push, run the build script, and deploy the `/dist` folder to GitHub Pages.
4. Your site will automatically update at: **[https://ceoamarion.github.io/Portfolio/](https://ceoamarion.github.io/Portfolio/)**

*(Note: Ensure your GitHub Repository Settings under **Settings > Pages** are set to use "GitHub Actions" as the Source).*

---
*Built with intent. Architected for scalable interaction.*
