# Design: Apply Design System Analysis

Implement a modular and performant UI architecture for "Con Hilo Depilo" using Astro and Tailwind CSS.

## Architecture Highlights
- **Tailwind v4 Integration:** Leverage the CSS-first approach for design tokens to define the brand identity.
- **Astro Components:** Focus on static HTML delivery for maximum performance, using `.astro` files for the core UI.
- **Atomic Design:** Organize the UI into a system of atoms (buttons, badges) and organisms (service cards, grids).
- **Astro Content Collections:** Use structured data for dynamic content like "services," enabling easy maintenance and type safety.
- **Astro Assets:** Optimize all visual treatment images automatically for WebP and responsive sizes.
- **Font Strategy:** Use `@fontsource/inter` for self-hosted, performant typography.
- **Icon Library:** Use `lucide-astro` for a consistent, type-safe icon set.

## Design Patterns

### 1. Design Tokens (CSS Variables)
In `src/styles/global.css`, we define colors, fonts, and other key brand properties using the Tailwind v4 `@theme` block.

```css
@import "tailwindcss";
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/700.css";
@import "@fontsource/inter/900.css";

@theme {
  --color-brand-primary: #f3c6bf;
  --color-brand-secondary: #C7B7A3;
  --color-brand-accent: #25D366;
  
  --color-ui-bg-light: #FFF9F6;
  --color-ui-bg-dark: #201412;
  --color-ui-text-main: #2A2A2A;
  --color-ui-text-muted: #6B7280;

  --font-sans: "Inter", "ui-sans-serif", "system-ui";
  --font-display: "Inter", "sans-serif";

  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;

  --width-container: 1200px;
}
```

### 2. Atomic Component: `Button.astro`
- **Variants:** `primary`, `outline`, `ghost`.
- **Sizes:** `sm`, `md`, `lg`.
- **Properties:** Supports both `button` and `a` (as an anchor) automatically.

### 3. Content Collection for Services
- **Location:** `src/content/services/*.json` (or `.md`).
- **Schema:** Defined in `src/content/config.ts` using `zod`.
- **Fields:** 
    - `title`: string
    - `price`: string (optional)
    - `duration`: string (optional)
    - `description`: string
    - `image`: string (image path)
    - `category`: "brows" | "lashes" | "threading" | "other"
    - `order`: number (for manual sorting)

## Implementation Strategy
1.  **Tokens:** Start with the global stylesheet to establish the visual foundation.
2.  **Atoms:** Implement low-level components like `Button` and `SectionHeader` with full type safety.
3.  **Data Layer:** Set up the "services" collection with sample data.
4.  **Organisms:** Build `ServiceCard` and `ServicesGrid` by composing atoms and using data from the content collection.
5.  **Integration:** Assemble the final page sections in `index.astro`.
