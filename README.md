# Morite Birdwatching - Flat HTML Export

This is a flat HTML/CSS/JavaScript export of the Morite Birdwatching website. It uses vanilla JavaScript and Tailwind CSS (via CDN) for easy deployment.

## Files

- `index.html` - Main HTML structure
- `styles.css` - Custom CSS styles
- `script.js` - JavaScript for interactivity (language switching, scroll animations, carousel)

## Features

- **Bilingual support** - Toggle between English and Indonesian
- **Responsive design** - Works on mobile, tablet, and desktop
- **Smooth scrolling** - Animated scroll between sections
- **Hero carousel** - Auto-playing image slider using Slick Carousel
- **Parallax effects** - Multi-layer canopy and forest floor transitions
- **Interactive bird cards** - Hover effects with focus animation and waveform borders
- **Masonry grid layout** - For tour packages

## Dependencies (loaded via CDN)

- Tailwind CSS 3.x
- jQuery 3.6.0
- Slick Carousel 1.8.1
- Google Fonts (Cormorant Garamond, Inter)

## Image Paths

The HTML file references images using relative paths to `../src/imports/`. You have two options:

### Option 1: Keep current structure
Keep the `export` folder inside the project and images will load from `src/imports/`.

### Option 2: Copy images for standalone deployment
1. Copy all images from `src/imports/` to a new `images/` folder inside `export/`
2. Update image paths in `index.html` and `script.js`:
   - Change `../src/imports/` to `images/`
   - Update bird image paths in the `birdsData` object in `script.js`

### External Images
Some bird images are loaded from external URLs (moritebirdwatching.com) and don't require local copies.

## Deployment

### Simple Deployment
1. Upload `index.html`, `styles.css`, and `script.js` to your web server
2. Ensure image paths are correct (see Image Paths section above)
3. Open `index.html` in a browser

### Customization

#### Update Google Form
Replace the placeholder in the Contact section with your Google Form embed code:
```html
<iframe src="YOUR_GOOGLE_FORM_URL" width="100%" height="500" frameborder="0"></iframe>
```

#### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #2d4a3e;    /* Dark blue-green */
    --secondary: #8b7355;   /* Earth brown */
    --accent: #5a7c65;      /* Forest green */
    --background: #f8f8f6;  /* Off-white */
}
```

#### Update Content
- Text content uses `data-en` and `data-id` attributes for bilingual support
- Bird and trip data are in the `birdsData` and `tripsData` objects in `script.js`

## Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance

- CDN resources are cached by browsers
- Images should be optimized before deployment (recommend WebP format)
- Consider adding lazy loading for images below the fold

## License

© 2026 Morite Birdwatching. All rights reserved.
