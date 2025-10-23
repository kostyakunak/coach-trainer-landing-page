# Landing Page - Natalia Sorokina

> **🌐 Live Demo:** [https://coachlandingpage.netlify.app](https://coachlandingpage.netlify.app)  
> *This is a copy of a real client order that I use as a portfolio*

Landing page for Natalia Sorokina - master of synergy of esotericism, parapsychology, tarot, and bioenergetics.

## 📚 Documentation

- **[PORTFOLIO_EN.md](./PORTFOLIO_EN.md)** - Detailed project documentation with technology descriptions and implementation details
- **[README.md](./README.md)** - Русская версия
- **[PORTFOLIO.md](./PORTFOLIO.md)** - Русская документация проекта

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Opens at http://localhost:3000
```

### Production Build

```bash
# Build project
npm run build

# Preview build
npm run preview
```

## 🌐 Deploy to Netlify

### Automatic Deploy from GitHub

1. Connect repository to Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### Manual Deploy

```bash
# Build project
npm run build

# Upload contents of dist/ folder to Netlify
```

## 📁 Project Structure

```
├── public/
│   └── images/           # Static images
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # UI components
│   │   └── ...          # Landing sections
│   ├── styles/          # Styles
│   └── main.tsx         # Entry point
├── dist/                # Built project (for deploy)
├── netlify.toml         # Netlify configuration
└── vite.config.ts       # Vite configuration
```

## 🛠 Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Components
- **Motion** - Animations
- **Lucide React** - Icons

## 📝 Features

- ✅ Responsive design
- ✅ Modern animations
- ✅ Optimized performance
- ✅ SEO-friendly structure
- ✅ Hot reload in development

## 🔧 Available Commands

- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run preview` - preview build
- `npm run build:lib` - build as library (if needed)
