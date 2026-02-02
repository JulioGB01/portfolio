# Julio Gonzales - Portfolio Website

Modern, interactive one-page portfolio website for Julio Gonzales, Electromechanical Engineer specializing in MEP Design, BIM Modeling, and CAD Drafting.

## 🌐 Live Demo

**GitHub Pages URL:** [https://juliogb01.github.io/portfolio/](https://juliogb01.github.io/portfolio/)

## ✨ Features

- **Responsive Design** - Mobile-first approach with hamburger menu
- **Smooth Animations** - Scroll-triggered fade-ins and hover effects
- **Interactive Components** - Modals for certificates, image carousels for achievements
- **Modern Design** - Clean, Notion-inspired minimalism with brand colors
- **Optimized Performance** - Lazy loading images and smooth scroll behavior
- **SEO Optimized** - Meta tags and semantic HTML structure

## 🎨 Design System

**Brand Colors:**
- Primary: `#44A6BE` (cyan-blue)
- Accent: `#F56567` (coral-red)
- Text: `#4A646A` (slate-gray)
- Background: `#FFFFFF` (white)

**Typography:**
- Font Family: Nunito (Google Fonts)
- Weights: 400 (Regular), 700 (Bold), 900 (Black)

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── assets/
│   ├── images/             # All image assets
│   │   ├── welcome_background.png
│   │   ├── profile_picture.png
│   │   ├── education_1.png
│   │   ├── project_1.png
│   │   ├── project_2.png
│   │   ├── project_3.png
│   │   ├── certificate_1.png
│   │   ├── certificate_2.png
│   │   └── achievement_1.png
│   └── files/              # PDF documents
│       ├── Julio_Gonzales_CV.pdf
│       ├── project_1.pdf
│       ├── project_2.pdf
│       ├── project_3.pdf
│       ├── certificate_1.pdf
│       └── certificate_2.pdf
├── .gitignore
└── README.md
```

## 🚀 Local Development

### Option 1: Simple File Opening
Simply open `index.html` in your web browser by double-clicking the file.

### Option 2: Local Server (Recommended)
For better performance and to avoid CORS issues:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📝 How to Update Content

### Updating Text Content

Edit `index.html` directly. All content is clearly organized by sections:

1. **Welcome Section** - Lines 80-95: Update name, tagline, and button text
2. **About Section** - Lines 100-120: Modify description and bio
3. **Education** - Lines 125-145: Update degree, institution, dates
4. **Projects** - Lines 150-220: Add/edit project cards
5. **Experience** - Lines 225-400: Update work history
6. **Certificates** - Lines 405-470: Add/modify certifications
7. **Achievements** - Lines 475-520: Update awards and recognition
8. **Contact** - Lines 525-575: Change email, phone, location

### Replacing Images

All placeholder images are in `assets/images/`. Replace them with your actual images **keeping the same filenames**:

| File Name | Recommended Size | Description |
|-----------|------------------|-------------|
| `welcome_background.png` | 1920x1080px | Hero section background |
| `profile_picture.png` | 400x400px | Your professional photo |
| `education_1.png` | 800x600px | Diploma/certificate image |
| `project_1/2/3.png` | 600x400px | Project thumbnails |
| `certificate_1/2.png` | 800x600px | Certificate images |
| `achievement_1.png` | 800x600px | Achievement photos |

### Replacing PDF Files

Replace placeholder PDFs in `assets/files/` with your actual documents:

- `Julio_Gonzales_CV.pdf` - Your resume/CV
- `project_1.pdf`, `project_2.pdf`, `project_3.pdf` - Project documentation
- `certificate_1.pdf`, `certificate_2.pdf` - Certification PDFs

### Adding More Projects

In `index.html`, duplicate a project card (lines ~150-180) and update:

1. Change image src: `<img src="./assets/images/project_NEW.png" ...>`
2. Update title: `<h3 class="card-title">New Project Name</h3>`
3. Modify description
4. Update skills badges
5. Change PDF link: `<a href="./assets/files/project_NEW.pdf" ...>`

### Adding More Certificates

Duplicate a certificate card (lines ~405-435) and update accordingly.

### Adding More Experience

Duplicate a timeline card (lines ~225-250) and fill in:
- Job title, company, location
- Employment type, date range
- Responsibilities (bullet points in `<ul>`)

## 🚢 Deployment to GitHub Pages

### Initial Setup

```bash
# 1. Initialize Git repository
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Portfolio website"

# 4. Add remote repository
git remote add origin https://github.com/JulioGB01/portfolio.git

# 5. Push to GitHub
git push -u origin main
```

### Configure GitHub Pages

1. Go to your repository: `https://github.com/JulioGB01/portfolio`
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select branch: **main**, folder: **/ (root)**
6. Click **Save**
7. Wait 1-2 minutes for deployment
8. Visit your site at: `https://juliogb01.github.io/portfolio/`

### Updating the Live Site

After making changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically rebuild and deploy (takes 1-2 minutes).

## 🔧 Customization Tips

### Changing Colors

Edit CSS custom properties in `styles.css` (lines 6-10):

```css
:root {
    --color-primary: #44A6BE;    /* Change this */
    --color-accent: #F56567;     /* Change this */
    --color-text: #4A646A;       /* Change this */
}
```

### Changing Fonts

Replace Google Fonts import in `index.html` (line 21) and update CSS:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700;900&display=swap">
```

### Modifying Animations

Edit animation durations in `styles.css` under the `:root` section:

```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
```

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px (hamburger menu activates)

## 🐛 Troubleshooting

### Images not loading
- Check file paths are relative: `./assets/images/filename.png`
- Ensure filenames match exactly (case-sensitive on GitHub Pages)

### Modal/Carousel not working
- Check browser console for JavaScript errors
- Ensure `script.js` is loading correctly

### GitHub Pages not updating
- Check repository Settings → Pages is configured
- Wait 2-3 minutes after pushing
- Clear browser cache (Ctrl+Shift+R)

## 📧 Contact

**Julio Gonzales**
- Email: juliogb01@gmail.com
- WhatsApp: +591 77661063
- Location: Santa Cruz, Bolivia
- LinkedIn: [linkedin.com/in/julio-gonzales](https://www.linkedin.com/in/julio-gonzales-baa64920a/)

## 📄 License

© 2026 Julio Gonzales. All rights reserved.

---

**Built with vanilla HTML, CSS, and JavaScript** - No frameworks, maximum performance!
