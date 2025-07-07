# Flowise LATAM Investor Pitch Website

## Project Goal

To transform the existing `ref.js` content into a compelling, interactive, and bilingual (English/Spanish) web presence for the Flowise LATAM investor pitch. The website will be optimized for production and feature enhanced visual storytelling with GSAP.

## Key Features

1.  **Interactive Pitch Deck:** The existing slide-based content will be the core of the presentation.
2.  **Bilingual Support:** Seamless language switching between English and Spanish.
3.  **Enhanced Animations (GSAP):** Smooth, engaging transitions and element animations to improve user experience and highlight key data.
4.  **Responsive Design:** Optimized for various devices (desktop, tablet, mobile).
5.  **Production-Ready Build:** Minified, optimized assets in a `dist` folder.

## Technology Stack

*   **Frontend Framework:** React.js
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Animation:** GSAP (GreenSock Animation Platform)
*   **Internationalization:** `react-i18next`
*   **Build Tool:** Vite (for fast development and optimized production builds)

## UI/UX Senior Engineer's Vision & Storytelling

The current `ref.js` provides a solid foundation for content. As a UI/UX senior engineer, the approach will focus on:

*   **Clarity & Impact:** Ensuring each slide's message is immediately clear and impactful. Using GSAP to draw attention to key figures, headlines, and calls to action.
*   **Flow & Engagement:** Designing smooth, logical transitions between slides that guide the user through the narrative. The auto-play feature will be complemented by clear navigation controls (next/prev, play/pause).
*   **Visual Hierarchy:** Leveraging Tailwind CSS for consistent typography, spacing, and color palettes to establish a clear visual hierarchy, making important information stand out.
*   **Brand Consistency:** Maintaining the existing gradient and modern aesthetic, ensuring a cohesive look and feel throughout the presentation.
*   **Accessibility:** Considering basic accessibility principles for navigation and content readability.
*   **Storytelling through Motion:** GSAP will be used not just for "bling," but to *enhance* the story. For example:
    *   **Hero Slide:** A subtle entrance animation for the "Flowise LATAM" title, perhaps a gentle fade-in and scale.
    *   **Market Opportunity:** Numbers animating up with a satisfying "pop" as they appear, emphasizing growth.
    *   **Problem/Solution:** Elements sliding in to reveal the problem and then the solution, creating a sense of progression.
    *   **Competitive Advantage:** Icons and descriptions appearing with a slight delay, building up the strength of the advantages.
    *   **Investment Ask:** The `$250K` figure could have a more prominent, perhaps slightly bouncy, animation to emphasize its importance.

## Implementation Plan

1.  **Project Initialization:**
    *   Create a new React project using Vite (already done).
    *   Install Tailwind CSS, PostCSS, Autoprefixer, `lucide-react`, `react-i18next`, `i18next`, and `gsap` (already done).
    *   Configure Tailwind CSS (already done).

2.  **Component Migration & Structure:**
    *   Move the `InvestorPitch` component into `src/components/InvestorPitch.jsx`.
    *   Set up `src/App.jsx` to render the main application, including the `InvestorPitch` component and the language toggle.
    *   Create `src/index.css` for global styles and Tailwind directives.

3.  **Internationalization Implementation:**
    *   Create `src/i18n.js` for `i18next` configuration.
    *   Extract all hardcoded English strings from `InvestorPitch.jsx` into `src/locales/en.json`.
    *   Translate all content into Spanish and create `src/locales/es.json`.
    *   Integrate the `useTranslation` hook within `InvestorPitch.jsx` to dynamically load content based on the selected language.
    *   Implement a language toggle UI element (e.g., a button or dropdown) that updates the `i18n` language state.

4.  **GSAP Animation Integration:**
    *   Refactor the `AnimatedNumber` component to use GSAP's `gsap.to` for smoother, more controlled number animations.
    *   Implement GSAP timelines for slide transitions (e.g., fading out the old slide and fading in the new one, or subtle horizontal/vertical movements).
    *   Add entrance animations for key text elements, icons, and data points within each slide as they become active.

5.  **Responsiveness & Refinements:**
    *   Review existing Tailwind CSS classes and add/adjust as needed to ensure optimal display on mobile, tablet, and desktop screens.
    *   Fine-tune spacing, font sizes, and element alignment for a polished look.

6.  **Production Build:**
    *   Vite will handle the production build process, generating optimized HTML, CSS, and JavaScript files in a `dist` directory.

## Getting Started

1.  **Navigate to the project directory:**
    ```bash
    cd flowise-latam-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server, usually at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the optimized production build.