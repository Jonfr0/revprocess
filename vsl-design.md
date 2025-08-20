# VSL Landing Page Creation Prompt

Create a complete Next.js VSL (Video Sales Letter) landing page with the following specifications:

## Project Structure
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Responsive design (mobile-first)

## Design Requirements

### Header Section
- Brand logo: "REVPROCESS" in uppercase, yellow/orange color (#F59E0B or similar)
- Clean, minimal header with centered logo

### Hero Section
- Main headline: "Scale Your Brand or Business Beyond 6-Figures Using" (black text, bold, large font)
- Emphasized text: "The Backend Secret" (yellow/orange color, italic, same size as main headline)
- Subheading: "Discover how creators with tiny audiences are quietly making 10x more than their competitors... while you're grinding 12-hour days for scraps." (gray text, medium size)

### Video Section
- Large video placeholder area with gray background (#E5E7EB)
- Centered play button icon (white triangle on darker gray circle)
- Video should be responsive and take up significant screen real estate
- Add hover effects on play button

### CTA Section
- Text above button: "Ready to focus 100% on content?" (centered, medium gray text)
- Primary CTA button: "Book Our Call" 
- Button styling: white background, black border, black text, rounded corners
- Button should have hover effects (background color change)

### Footer
- Small disclaimer text: "This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way."
- Copyright: "© 2023 RevProcess All rights reserved."
- Links: "Privacy Policy" and "Terms of Service" (separated by spaces)
- All footer text should be small and gray

## Technical Requirements
- Fully responsive design (mobile, tablet, desktop)
- Clean, modern typography (use system fonts or Google Fonts)
- Smooth transitions and hover effects
- Semantic HTML structure
- Accessible design (proper alt texts, ARIA labels)
- Video placeholder that could easily be replaced with actual video embed
- Fast loading and optimized
- Modern gradient backgrounds where appropriate

## File Structure Needed
```
src/
  app/
    page.tsx (main landing page)
    layout.tsx (root layout)
    globals.css (Tailwind imports)
  components/
    VideoPlayer.tsx (video section component)
    CTAButton.tsx (call-to-action button component)
```

## Color Scheme
- Primary brand color: Yellow/Orange (#F59E0B)
- Text: Black (#000000) for headlines, Gray (#6B7280) for body text
- Background: White (#FFFFFF) with light gray (#F9FAFB) sections
- Button: White background with black border and text

## Additional Features
- Add subtle animations (fade-in effects, button hover states)
- Make the video area clickable (even though it's a placeholder)
- Ensure proper meta tags for SEO
- Add proper TypeScript types
- Include error handling for any interactive elements

Create all necessary files with complete, production-ready code. The design should closely match the provided image while being fully functional and modern.