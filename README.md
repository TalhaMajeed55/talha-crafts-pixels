# Talha Majeed - Portfolio

A modern, responsive portfolio website showcasing AI-powered experiences and full-stack development projects.

## 🚀 Live Demo

Visit the live portfolio: [https://yourusername.github.io/talha-crafts-pixels](https://yourusername.github.io/talha-crafts-pixels)

## ✨ Features

- **Modern Design**: Clean, professional portfolio with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Contact Form**: Integrated EmailJS for real email functionality
- **Project Showcase**: Interactive project gallery with detailed modals
- **Tech Stack Display**: Comprehensive technology showcase
- **Performance Optimized**: Fast loading with Vite and optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Email**: EmailJS for contact form functionality
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/talha-crafts-pixels.git
cd talha-crafts-pixels
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📧 Email Configuration

This portfolio uses EmailJS for contact form functionality. To set up:

1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Configure your email service and template
3. Update credentials in `src/lib/emailjs-config.ts`

See `EMAILJS_SETUP.md` for detailed setup instructions.

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project
```bash
npm run build
```

2. The built files will be in the `dist` folder

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Push to main branch to trigger automatic deployment

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configs
├── pages/         # Page components
└── main.tsx       # App entry point
```

## 🎨 Customization

- **Colors**: Update CSS variables in `src/index.css`
- **Content**: Modify project data in `src/pages/Portfolio.tsx`
- **Styling**: Customize Tailwind classes and component styles
- **Email**: Configure EmailJS settings in `src/lib/emailjs-config.ts`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: tmajeed55@gmail.com
- **Portfolio**: [https://yourusername.github.io/talha-crafts-pixels](https://yourusername.github.io/talha-crafts-pixels)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
