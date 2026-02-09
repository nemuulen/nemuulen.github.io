# Portfolio Website

Personal portfolio website showcasing my projects, experience, and skills as a Computer Science and Design student at Duke Kunshan University.

## ✨ Features

- **Individual Project Pages** - Each project has a dedicated detail page with sections for overview, features, documents, links, and gallery
- **Project Categories** - Filter by Web, App, Design, Class Project, or Others
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Fun Animations** - Smooth Motion animations throughout
- **Clean Navigation** - Easy-to-use navigation between pages
- **Downloadable CV** - PDF download functionality on About page

## 🚀 Quick Deploy to GitHub Pages

### Super Quick Version:

```bash
# 1. Create repo on GitHub named: yourusername.github.io
# 2. Run these commands:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main

# 3. In GitHub: Settings → Pages → Source: "GitHub Actions"
# 4. Visit: https://yourusername.github.io
```

## 🎨 Design

- **Fonts**: Alex Brush (script) & Montserrat (body)
- **Colors**: Duke Blue (#012169, #00539B)
- **Style**: Clean, bright, modern with fun animations

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── components/              # React components
│   ├── Hero.tsx            # Landing page
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── ForFun.tsx          # For Fun page
│   └── projects/           # Individual project detail pages
│       ├── RadikalProject.tsx
│       ├── ChalloProject.tsx
│       └── ... (9 total)
├── data/                   # Data files
│   ├── personal.ts         # Personal info, experience, awards
│   └── projects.ts         # Project details
├── public/                 # Static assets
│   ├── files/              # CV and documents
│   │   └── projects/       # Project-specific PDFs
│   └── images/             # Project images
│       └── projects/       # Project-specific images
└── styles/                 # Global styles

```

## 📝 Updating Content

### Project Detail Pages

Each project has its own detail page in `/components/projects/`. To customize:

1. Open the project file (e.g., `RadikalProject.tsx`)
2. Update the `projectData` object with your content
3. Add PDFs to `/public/files/projects/`
4. Add images to `/public/images/projects/`

**📖 Full Guide:** See `/PROJECT_PAGES_GUIDE.md` for detailed instructions and examples.

### Personal Information

Edit `/data/personal.ts` to update:

- Bio, contact info
- Education details
- Work experience
- Leadership roles
- Awards

### Projects

Edit `/data/projects.ts` to update:

- Project details
- Links (demo, GitHub)
- Cover images
- Tags and categories

### CV/Resume

Add your CV to: `/public/files/Nemuulen_Togtbaatar_CV.pdf`

### Project Images

Add images to: `/public/images/projects/`

## 🔧 Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide Icons

## 📧 Contact

Nemuulen Togtbaatar  
Duke Kunshan University  
[Add your email]

---

Built with ❤️ using React and Tailwind CSS