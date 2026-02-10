# ScheduStudent Prototype

## Purpose
ScheduStudent is a minimal, student-facing mobile prototype focused on helping college students see what assignment to do next. It prioritizes clarity with a single assignment list and one progress indicator.

## Mock data
The app ships with a local mock JSON dataset in `data/mockAssignments.js` containing 10 assignments across four courses, including mixed completion states and missing-date edge cases.

## UI philosophy
The UI is intentionally calm and distraction-free: one screen, light neutrals, subtle typography, and task-first ordering. Instead of a calendar, the app emphasizes a prioritized assignment feed plus a live completion slider.

## Run the demo
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm start
   ```
3. Open on simulator/device:
   - `npm run ios`
   - `npm run android`
   - or scan the QR code in Expo Go.
