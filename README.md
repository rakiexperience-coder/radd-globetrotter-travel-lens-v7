# Globetrotter Travel Lens App v7.0

AI-powered travel photography and itinerary generator built with Google AI Studio.

## Live App
https://ai.studio/apps/419eb518-fa9a-4a58-a2ef-b5df67546bc5

## Password
RADDVIP

## Changes Made (June 2026)
- **Model upgraded** to `gemini-3.1-flash-image` for both image generation (line 107) and itinerary (line 251) in `services/geminiService.ts`
- **Password gate added** — new `components/LicenseGate.tsx` component (see file in this repo)
- **App.tsx updated** — shows LicenseGate on first load, stores session in localStorage on success
- **No API key input** — uses `process.env.API_KEY` via Google AI Studio

## Key Files Changed
| File | Change |
|------|--------|
| `services/geminiService.ts` | Model updated to gemini-3.1-flash-image |
| `components/LicenseGate.tsx` | New — password gate screen |
| `App.tsx` | Integrated LicenseGate before main app |

## Tech Stack
- React + TypeScript
- Google Gemini AI (gemini-3.1-flash-image)
- Framer Motion
- Vite + Tailwind CSS