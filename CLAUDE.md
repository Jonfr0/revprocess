# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js VSL (Video Sales Letter) landing page for RevProcess, designed to capture leads for a business scaling service. The project follows the design specifications outlined in `vsl-design.md`.

## Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture

### Tech Stack
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **Fonts**: Inter and DM Sans (Google Fonts)

### Project Structure
```
src/
  app/
    page.tsx      # Main landing page with hero, video, CTA sections
    layout.tsx    # Root layout with fonts and metadata
    globals.css   # Tailwind imports and custom CSS variables
  components/
    VideoPlayer.tsx  # Video placeholder component with play button
    CTAButton.tsx    # Reusable call-to-action button component
```

### Key Components
- **VideoPlayer**: Interactive video placeholder with hover effects, designed to be easily replaced with actual video embed (Wistia mentioned in placeholder)
- **CTAButton**: Styled button component with hover states and focus management
- **Landing Page**: Single-page layout with hero section, video section, CTA, and footer

### Design System
The project uses a custom color scheme defined in `globals.css`:
- Brand orange: `#F59E0B`
- Text colors: Black headlines, gray body text
- Typography: Inter for body text, DM Sans for buttons
- Responsive design with mobile-first approach

### Content Strategy
The landing page follows VSL best practices with:
- Compelling headline emphasizing "Scale Your Brand Beyond 6-Figures"
- "The Backend Secret" as the key value proposition
- Social proof messaging about creators with small audiences
- Single clear CTA: "Book Our Call"

## Development Notes
- All components are properly typed with TypeScript interfaces
- Responsive design implemented with Tailwind breakpoints
- Accessibility considerations included (focus states, semantic HTML)
- SEO optimized with proper meta tags and structured content
- No test suite currently configured

## Design Reference
Follow the complete VSL design specifications in `vsl-design.md` for any modifications or additions to the landing page.