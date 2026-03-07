# Amarion Portfolio

A premium, modern portfolio designed and developed to showcase technical design, gameplay systems, and experimental interfaces. Built for recruitment in AAA, Systems Design, and XR roles.

## Tech Stack
- React
- Vite
- Tailwind CSS (v4)
- Lucide React (Icons)
- Framer Motion *(Optional, easy to add)*

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/amarion-portfolio.git
   cd amarion-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   The project will actuate on `http://localhost:5173`.

## Customization & Asset Swapping

Before deploying, ensure you swap out the placeholder content in `src/data/index.js` and `public/`.

### 1. Update Social Links & Resume
In `src/sections/Footer.jsx`, replace the `#` hrefs with your actual URLs for:
- GitHub
- LinkedIn
- Resume PDF (Place your `resume.pdf` in the `public/` folder and change the href to `/resume.pdf`).

### 2. Update Placeholder Media
All images referenced in `src/data/index.js` point to the root (public folder). 
- To add your project images or videos, place the real assets in the `/public` folder.
- Update the image names in `src/data/index.js` (e.g., `/placeholder-shooter.jpg` to `/top-down-shooter.jpg`).
- Add video links or YouTube/Vimeo embeds in the `data` object for the Featured Projects section if desired.

## Build and Deployment

This project is built to easily deploy on Vercel or Netlify.

### Building for Production:
```bash
npm run build
```
This will generate a `dist` folder optimized for production.

### Deploying to Netlify/Vercel:
1. Push this repository to GitHub.
2. Log into [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
3. Connect your GitHub account and select this repository.
4. The build command (`npm run build`) and publish directory (`dist`) should be detected automatically.
5. Deploy!

---
*Built with intent. Designed for the future.*
