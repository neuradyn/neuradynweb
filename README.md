# NeuraDyn Web Application

> Enterprise-grade automation systems that think, adapt, and scale.

This repository contains the source code for the NeuraDyn marketing website, built with modern web technologies for performance and scalability.

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd neuradyn-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Global layout components (Navbar, Footer, Hero)
│   ├── sections/     # Landing page sections (Industries, CTA, Features)
│   └── utils/        # Utility components (ScrollToTop, HashScroll)
├── pages/            # Top-level route pages
│   ├── Home.tsx      # Main landing page
│   ├── About.tsx     # About Us page
│   ├── Contact.tsx   # Contact/Support page
│   ├── Privacy.tsx   # Privacy Policy
│   └── Terms.tsx     # Terms of Service
├── App.tsx           # Main application component & Router config
├── main.tsx          # Application entry point
└── index.css         # Global styles & Tailwind directives
```

---

## 🎨 Customization

### Color Palette & Theme
Styles are defined in `tailwind.config.js` and `index.css`.
- **Primary**: `royal-blue`
- **Background**: `deep-void`
- **Accents**: `electric-cyan`

To update branding colors, modify the `theme.extend.colors` section in `tailwind.config.js`.

### Adding a New Page
1. Create a new component in `src/pages/NewPage.tsx`.
2. Import it in `src/App.tsx`.
3. Add a new route:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```

---

## 📦 Building & Deployment

### Build for Production
Create an optimized production build:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Deployment (Netlify)
This project is configured for Netlify (`netlify.toml`).
1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`

**Manual Deploy**: Drag and drop the `dist` folder into the Netlify dashboard.

---

## 🤝 Contribution Guidelines

1. Create a feature branch (`git checkout -b feature/amazing-feature`).
2. Commit your changes (`git commit -m 'Add some amazing feature'`).
3. Push to the branch (`git push origin feature/amazing-feature`).
4. Open a Pull Request.

---

© 2025 NeuraDyn AI Systems.
