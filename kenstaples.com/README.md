# KenStaples.com

Personal website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Deployment

This project is configured for Vercel deployment.

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI if you haven't already:
```bash
npm install -g vercel
```

2. Navigate to this directory:
```bash
cd kenstaples.com
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to authenticate and deploy.

### Option 2: Deploy via Vercel Dashboard

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project settings
6. Deploy!

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd kenstaples.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
kenstaples.com/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vercel.json             # Vercel deployment configuration
└── package.json            # Project dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... and more
  }
}
```

### Content

- Homepage content is in `app/page.tsx`
- Update metadata in `app/layout.tsx`
- Modify styles in `app/globals.css`

## 📦 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://kenstaples.com
```

## 🔧 Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **Framer Motion** (optional) - Animations

## 📝 License

This project is private. Please contact me for any questions or collaborations.

## 👤 Contact

- **Email:** ken@kenstaples.com
- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/kenstaples)
- **GitHub:** [Your GitHub Profile](https://github.com/kenstaplesonline)

---

Built with ❤️ in Calgary, Alberta 🏔️
