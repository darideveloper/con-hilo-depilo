# Spec: Design Tokens

Define the brand's core visual identity through a set of centralized design tokens.

## MODIFIED Requirements

### Requirement: Global Design Foundation
The project SHALL apply the "Con Hilo Depilo" brand identity to the styling layer.

#### Scenario: Tailwind v4 Theme Block
When the project is built, the global CSS should include the brand colors and typography as Tailwind-aware variables.

- **Given** the "Con Hilo Depilo" color palette and font choices.
- **When** updating `src/styles/global.css`.
- **Then** define the following variables in a `@theme` block:
    - `--color-brand-primary: #f3c6bf;`
    - `--color-brand-secondary: #C7B7A3;`
    - `--color-brand-accent: #25D366;`
    - `--color-ui-bg-light: #FFF9F6;`
    - `--color-ui-bg-dark: #201412;`
    - `--color-ui-text-main: #2A2A2A;`
    - `--color-ui-text-muted: #6B7280;`
    - `--font-sans: "Inter", "ui-sans-serif", "system-ui";`
    - `--font-display: "Inter", "sans-serif";`
    - `--radius-lg: 0.5rem;`
    - `--radius-xl: 0.75rem;`
    - `--radius-2xl: 1rem;`
    - `--width-container: 1200px;`
