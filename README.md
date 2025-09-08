# Software 3.0 Website

A modern website showcasing the revolutionary **.s3 file format** - implementing Andrej Karpathy's vision where **English becomes the programming language**. Built with a dark theme aesthetic inspired by [opencode.ai](https://opencode.ai).

## 🎨 Design Features

- **Dark Theme**: Clean, modern interface with terminal-inspired elements
- **Typography**: TT Autonomous font integration with system font fallbacks
- **Responsive Design**: Mobile-first approach with smooth animations
- **Terminal UI**: Interactive terminal windows showcasing the AI development theme
- **Smooth Scrolling**: Enhanced navigation with intersection observers

## 📁 Project Structure

```
Website/
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet with CSS variables
├── script.js               # Interactive JavaScript functionality
├── fonts/                  # TT Autonomous font files directory
│   ├── README.md           # Font installation instructions
│   └── (font files)        # Add TT Autonomous font files here
├── logo-placeholder.svg    # Placeholder logo (replace with actual logo)
├── README.md              # This file
└── (your-logo.svg/.png)   # Your actual logo file
```

## 🚀 Quick Start

1. **Add Font Files**: Place TT Autonomous font files in the `fonts/` directory (see `fonts/README.md`)
2. **Replace Logo**: Replace `logo-placeholder.svg` with your actual logo
3. **Update Colors**: Extract hex colors from your logo and update the CSS variables in `styles.css`
4. **Open Website**: Simply open `index.html` in a web browser

## 🎯 Logo Integration

### Current Status
- Using a placeholder logo with green accent color (`#00ff88`)
- Logo placeholder is positioned in the navigation header

### To Complete Logo Integration:
1. **Add your logo file** (SVG preferred for scalability)
2. **Extract the primary color** from your logo 
3. **Update CSS variables** in `styles.css`:

```css
:root {
    --accent-color: #your-logo-hex-color;
    --accent-hover: #your-logo-hex-color-darker;
}
```

4. **Update HTML** to reference your logo file:

```html
<!-- Replace this in index.html -->
<div class="logo-placeholder">
    <img src="your-logo.svg" alt="Software 3.0 Logo" width="30" height="30">
    <span class="logo-text">Software 3.0</span>
</div>
```

## 🔧 Customization

### Color Scheme
The website uses CSS custom properties for easy theming:

```css
:root {
    --primary-bg: #0a0a0a;        /* Main background */
    --secondary-bg: #1a1a1a;      /* Section backgrounds */
    --text-primary: #ffffff;       /* Main text */
    --text-secondary: #b3b3b3;     /* Secondary text */
    --accent-color: #00ff88;       /* Accent/brand color */
    --border-color: #333333;       /* Borders and dividers */
}
```

### Typography
- **Headers**: TT Autonomous Bold
- **Body Text**: TT Autonomous Regular  
- **Code/Terminal**: TT Autonomous Mono (with monospace fallbacks)

### Content Sections
- **Hero**: Terminal-style introduction to .s3 format
- **About**: Overview of the Software 3.0 file format and dual-view architecture  
- **Features**: Natural language programming, VS Code integration, language agnostic format
- **Paradigm**: Evolution from traditional coding → neural networks → English as programming language
- **Demo**: Live .s3 format example showing instruction/code pairing
- **Get Started**: Links to GitHub repository and VS Code extension

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (max-width container)
- **Tablet**: 768px-1199px (adjusted grid layouts)
- **Mobile**: <768px (stacked layout, mobile navigation)

## 🎭 Animations & Interactions

- **Scroll Animations**: Fade-in effects for sections
- **Terminal Typing**: Simulated typing effects in terminal windows
- **Hover Effects**: Interactive buttons and navigation
- **Mobile Navigation**: Smooth slide-in menu

## 🔗 Links & References

- **Software 3.0 Repository**: [GitHub - Software 3.0](https://github.com/LakshmanTurlapati/Software-3.0)
- **VS Code Extension**: Software3 Enhanced (v1.1.8+)
- **Design Inspiration**: [opencode.ai](https://opencode.ai) 
- **Font Source**: [TT Autonomous by TypeType](https://typetype.org/fonts/tt-autonomous/)
- **Concept Origin**: Andrej Karpathy's Software 3.0 vision

## 💡 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features**: Custom properties, Grid, Flexbox, Intersection Observer API
- **JavaScript**: ES6+ features with graceful degradation

## 📝 License

Please ensure you have proper licensing for:
- **TT Autonomous Font**: Commercial license required from TypeType
- **Logo Usage**: Ensure you have rights to the logo image
- **Content**: Based on Software 3.0 repository content

---

**Built with AI collaboration** • Styled after opencode.ai • Modern dark theme
