# 🚀 My Portfolio

A modern, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features smooth scrolling navigation and dynamic section highlighting.

## ✨ Features

- 🎨 **Modern Design** - Clean and professional layout
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎯 **Smooth Navigation** - Dynamic scroll-based section highlighting
- 🎭 **Interactive Elements** - Hover effects and smooth transitions
- 📄 **Multi-section Layout** - About, Experience, Projects, and Contact sections

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Font Awesome** - Icons

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── sections/           # Main page sections
│   ├── About/         # About section
│   ├── Contact/       # Contact section
│   ├── Header/        # Header section
│   ├── LeftSection/   # Left sidebar
│   ├── Navbar/        # Navigation bar
│   └── RightSection/  # Main content area
├── contents/          # Data files
└── App.tsx           # Main application component
```

## 🎨 Customization

### Adding New Sections
1. Create a new section component in `src/sections/`
2. Add your content data in `src/contents/`
3. Import and add to `RightSection` component
4. The navigation will automatically update

### Styling
- All styles use Tailwind CSS classes
- Custom colors defined in `tailwind.config.js`
- Responsive design with mobile-first approach

### Content Management
- Edit section content in `src/contents/` files
- Update personal information in respective data files
- Add new projects/experiences easily

## 📱 Responsive Design

- **Desktop**: Two-column layout with sidebar navigation
- **Tablet**: Adaptive grid layout
- **Mobile**: Single-column stack layout

## 🎯 Key Features Explained

### Dynamic Navigation
- Automatically detects page sections
- Highlights current section while scrolling
- Smooth scroll-to-section functionality

### Performance Optimized
- Lazy loading of components
- Optimized bundle size with Vite
- Efficient re-rendering with React

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Push your code to GitHub
2. Connect your repository to Vercel/Netlify
3. Deploy automatically on push

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

⭐ **Star this repository if you found it helpful!**
