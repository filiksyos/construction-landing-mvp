# BuildPro Construction - Landing Page

A modern, responsive construction business landing page built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🌓 **Dark Mode Support** - Seamless theme switching with persistent preferences
- 🎨 **Modern UI Components** - Beautiful, accessible components built with Headless UI
- 🔄 **Smooth Animations** - Framer Motion powered animations and transitions
- 📱 **Responsive Design** - Mobile-first approach, looks great on all devices
- 🎯 **Landing Page** - Hero section, services, projects, about, and pricing sections
- 🚀 **Performance Optimized** - Built with Next.js 15 App Router for optimal performance
- 💅 **Tailwind CSS** - Utility-first CSS with custom theme configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/filiksyos/construction-landing-mvp.git
cd construction-landing-mvp
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with theme provider
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/
│   ├── TopBar.tsx        # Navigation bar with theme toggle
│   ├── PricingSection.tsx # Pricing cards
│   ├── TypewriterEffect.tsx # Animated text effect
│   └── VideoModal.tsx    # Video modal component
├── contexts/
│   └── ThemeContext.tsx  # Theme management context
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Headless UI](https://headlessui.com/)** - Unstyled, accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon sets
- **[React Scroll](https://www.npmjs.com/package/react-scroll)** - Smooth scrolling

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // Main brand color
    light: '#FF8C61',
    dark: '#E85A2A',
  },
  // ... more colors
}
```

### Content

Edit `app/page.tsx` to customize:
- Hero section content
- Service offerings
- Project showcase
- Pricing plans
- Company information

### Components

All components are located in the `components/` directory and can be customized or extended.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/filiksyos/construction-landing-mvp)

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Based on the architecture and patterns from [launch-mvp-stripe-nextjs-supabase](https://github.com/shenseanchen/launch-mvp-stripe-nextjs-supabase)

---

Built with ❤️ for the construction industry