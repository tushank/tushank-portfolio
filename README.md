# 🚀 Personal Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark theme, and optimized performance.

## ✨ Features

- ⚡ **Next.js 14** - React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first styling
- 🌊 **Framer Motion** - Smooth scroll animations
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **TypeScript** - Type-safe code
- 🔍 **SEO Optimized** - Meta tags and sitemap
- 📊 **Google Analytics** - Track visitor insights
- 🎭 **Lucide Icons** - Modern icon library
- ⚡ **Fast Performance** - Optimized loading

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** pnpm
- **Analytics:** Google Analytics 4

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/tushank-portfolio.git
cd tushank-portfolio
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```
Add your Google Analytics ID:
```
NEXT_PUBLIC_GA_ID=your_ga_id_here
```

4. **Run the development server**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚀 Build & Deploy

### Build for production
```bash
pnpm build
```

### Start production server
```bash
pnpm start
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel Platform](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/tushank-portfolio)

## 📁 Project Structure

```
tushank-portfolio/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   └── lib/           # Utility functions
│       ├── analytics.ts
│       ├── projects.ts
│       └── resume.ts
├── next.config.ts     # Next.js configuration
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information
Edit the data in `src/lib/resume.ts` to customize:
- Personal details
- Work experience
- Education
- Skills
- Contact information

### Update Projects
Modify `src/lib/projects.ts` to add/edit your projects with:
- Project name
- Description
- Technologies used
- Links (GitHub, Live Demo)

### Modify Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-level styles: Individual component files

## 📊 Analytics Setup

See [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md) for detailed instructions on setting up Google Analytics 4.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/tushank-portfolio/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- Website: [your-portfolio-url.com](https://your-portfolio-url.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ and Next.js
