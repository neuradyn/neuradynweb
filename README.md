# NeuraDyn Web Application

> **Enterprise-grade automation systems that think, adapt, and scale.**

NeuraDyn is a high-performance react web application designed to showcase custom AI ecosystems. It demonstrates solutions for Marketing, HR, Finance, and Chatbot automation, emphasizing speed, efficiency, and seamless integration.

## 🚀 Features

-   **Modern UI/UX**: Built with React and Framer Motion for smooth, engaging animations.
-   **Responsive Design**: Fully responsive layout optimized for all devices using Tailwind CSS.
-   **Performance First**:
    -   **WebP Images**: All media assets are optimized for low bandwidth.
    -   **Lazy Loading**: Critical assets load instantly; secondary assets load on demand.
    -   **Compression**: Production builds are Gzip-compressed for minimal transfer size.
-   **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility.

## 🛠 Tech Stack

-   **Framework**: [React](https://react.dev/) (v19) via [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)

---

## ⚡ Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm (v9 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd neuradyn-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # Note: If you see legacy peer deps warnings, use:
    # npm install --legacy-peer-deps
    ```

3.  **Start Development Server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This command will:
1.  Compile TypeScript code.
2.  Bundle assets with Vite.
3.  Generate Gzip-compressed files (`.gz`) for text assets.
4.  Output everything to the `dist/` directory.

---

## 📂 Project Structure

```
src/
├── assets/           # Static assets (images, logos)
├── components/
│   ├── layout/       # Global shell (Navbar, Footer, Hero)
│   ├── sections/     # Landing page modules (Credibility, Testimonials)
│   └── utils/        # Helpers (ScrollToTop, HashScroll)
├── pages/            # Route components (Home, Marketing, HR, etc.)
├── App.tsx           # Main router configuration
└── main.tsx          # Entry point
```

---

## 🚀 Performance Optimizations

This project includes several automated optimizations to ensure fast load times and low bandwidth usage:

1.  **Media Diet**: Large PNG/JPG images have been converted to **WebP**. The original files are backed up in `_backup/`.
2.  **Lazy Loading**: Images and iframes below the fold are set to `loading="lazy"`.
3.  **Hero Video**: The hero video uses a lightweight **WebP poster** image and `preload="auto"` for instant perceived loading.
4.  **Source Maps**: Disabled in production builds to reduce artifact size.
5.  **Gzip Compression**: `vite-plugin-compression` is configured to compress build assets automatically.

---

## ☁️ Deployment

This project is configured for **Netlify**.

-   **Build Command**: `npm run build`
-   **Publish Directory**: `dist`
-   **Configuration**: Settings are defined in `netlify.toml`.

To deploy manually:
1.  Run `npm run build`.
2.  Drag and drop the `dist` folder into the Netlify dashboard.

---

## License

© 2025 NeuraDyn AI Systems. All rights reserved.
