# The Neighbourhoods

A platform to discover and showcase positive aspects of every single Calgary neighborhood, creating connection, pride, and appreciation for our communities.

## Tech Stack

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **UI Icons:** Lucide React
- **AI:** Google Gemini 1.5 (gemini-1.5-flash model)
- **Hosting:** Vercel (planned)
- **Database:** Supabase (planned)

## Brand & Logo

**Logo Design:**
- User-provided custom icon
- Displayed at larger sizes on page for visual impact
- Clean, modern design suitable for favicon and branding

**Files:**
- `/public/logo.png` — Main logo (64x64 PNG)
- `/public/favicon.png` — Browser favicon (32x32 PNG)

## Canadian English

All content uses Canadian English spelling:
- "Neighbourhood" instead of "Neighborhood"
- "Centre" instead of "Center" (where applicable)
- `/public/logo-small.png` — Original user icon source file

## Development

### Mobile Responsiveness

The site is fully mobile-responsive with:
- Flexible navigation with adaptive spacing
- Responsive typography scaling across breakpoints
- Mobile-optimized padding and spacing
- Touch-friendly buttons and inputs
- Properly sized logos on mobile screens
- Responsive grid layouts (1→2→3 columns)

Breakpoints used:
- `sm` (640px+): 2-column grids, full navigation text
- `md` (768px+): 2-3 column grids, standard padding
- `lg` (1024px+): 3-column grids, full content width

### Install Dependencies

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

Get your API key from: https://makersuite.google.com/app/apikey

### AI Integration

The site includes Google Gemini 1.5 AI capabilities for:
- Neighborhood insights generation
- Content assistance
- Q&A about Calgary communities

Usage example:
```typescript
import { generateText, askAboutNeighborhood } from '@/lib/gemini';

// General text generation
const response = await generateText("Your prompt here");

// Neighborhood-specific queries
const insights = await askAboutNeighborhood("Kensington", "What are the best coffee shops?");
```

### Run Development Server

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Status

**Current Phase:** Phase 1 - Foundation & Discovery

### Completed
- ✅ Project structure initialized
- ✅ Next.js 15 + TypeScript configured
- ✅ Tailwind CSS set up
- ✅ Brand guidelines created
- ✅ Landing page designed and implemented

### Next Steps
- 🔄 Install npm dependencies
- 🔄 Set up Supabase database
- 🔄 Create neighborhood profile pages
- 🔄 Add interactive map integration
- 🔄 Deploy to Vercel

## Brand Identity (Calgary City Palette)

- **Primary Color:** Calgary Red (#C8102E)
- **Secondary Color:** Soft Red (#E63946)
- **Accent Color:** Calgary Grey (#6B7280)
- **Background:** White (#FFFFFF)
- **Text Color:** Black (#1A1A1A)
- **Tagline:** "Discover the heart of every Calgary neighborhood"

## License

© 2026 The Neighbourhoods. All rights reserved.
