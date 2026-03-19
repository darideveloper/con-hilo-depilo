# Tasks: Apply Design System Analysis

## Task 1: Initialize Design Tokens and Base Styling
Configure Tailwind v4 and setup the project's visual foundation.

- [x] Install dependencies: `@fontsource/inter` and `lucide-astro`.
- [x] Update `src/styles/global.css` with Tailwind v4 `@theme` block and font imports.
- [x] Update `src/layouts/Layout.astro` to apply the global font-family and brand background color as the default.
- [x] Verify Tailwind v4 correctly picks up tokens.

## Task 2: Implement Atomic Components
Create a library of foundational UI components in `src/components/`.

- [x] Implement `Button.astro` with support for variants (`primary`, `outline`, `ghost`), sizes, and polymorphic tag (`button` vs `a`).
- [x] Implement `Badge.astro` for service status or treatment categories.
- [x] Implement `SectionHeader.astro` with centered and left-aligned options.
- [x] Implement `Icon.astro` using `lucide-astro`.
- [x] Add basic documentation/examples for each component.

## Task 3: Setup Content Collections
Define and implement the data layer for managing service listings.

- [x] Create `src/content/config.ts` with the enhanced `services` collection schema (title, price, duration, description, image, category, order).
- [x] Create initial sample service data in `src/content/services/` with Spanish content.
- [x] Verify collection querying.

## Task 4: Implement Service Card and Grid
Build the organisms and sections that showcase the service offerings.

- [x] Implement `ServiceCard.astro` using `astro:assets` for image optimization and the atomic components.
- [x] Implement `ServicesGrid.astro` to fetch services from the content collection and render them in a responsive grid.
- [x] Verify the layout across different screen sizes (mobile, tablet, desktop).

## Task 5: Integrate Into Home Page
Update the main page to reflect the new design system.

- [x] Update `src/pages/index.astro` to include the `ServicesGrid` section.
- [x] Apply the design system's background colors and global spacing to the layout.
- [x] Run a final build and verify that all assets are correctly optimized and components are rendered as expected.
