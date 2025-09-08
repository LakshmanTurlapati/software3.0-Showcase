# Fonts Directory

This directory should contain the TT Autonomous font files.

## Required Font Files

To complete the font integration, please add the following TT Autonomous font files to this directory:

### Regular Weight (400)
- `TT-Autonomous-Regular.woff2`
- `TT-Autonomous-Regular.woff`
- `TT-Autonomous-Regular.ttf` (optional, fallback)

### Bold Weight (700)
- `TT-Autonomous-Bold.woff2` 
- `TT-Autonomous-Bold.woff`
- `TT-Autonomous-Bold.ttf` (optional, fallback)

### Mono Variant (if available)
- `TT-Autonomous-Mono-Regular.woff2`
- `TT-Autonomous-Mono-Regular.woff`

## Font Licensing

TT Autonomous is a commercial font from TypeType. Make sure you have the appropriate license for web use.

- **Website**: https://typetype.org/fonts/tt-autonomous/
- **License**: Commercial (purchase required)

## Usage

Once the font files are added to this directory, the CSS in `styles.css` will automatically load them. The font is already integrated into the design with fallbacks to system fonts if the files are not available.

## Current Font Stack

```css
font-family: 'TT Autonomous', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

## File Structure
```
fonts/
├── README.md (this file)
├── TT-Autonomous-Regular.woff2
├── TT-Autonomous-Regular.woff
├── TT-Autonomous-Bold.woff2
├── TT-Autonomous-Bold.woff
└── (optional mono variant files)
```
