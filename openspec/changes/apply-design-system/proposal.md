# Proposal: Apply Design System Analysis

The goal of this change is to implement the "Con Hilo Depilo" design system based on the provided analysis. This includes setting up Tailwind v4 design tokens, creating a library of atomic components, configuring content collections for services, and building the services grid section on the index page.

## Change ID
`apply-design-system`

## User Goal
Implement a cohesive design system for "Con Hilo Depilo" using Astro and Tailwind CSS to ensure brand consistency, scalability, and high performance.

## Capabilities
- `design-tokens`: Configure Tailwind v4 with the brand's color palette, typography, and spacing.
- `atomic-components`: Create a library of reusable base components: `Button`, `Badge`, `SectionHeader`, and `Icon`.
- `content-collections`: Setup Astro Content Collections for managing service data (e.g., "Diseño de Cejas").
- `service-card`: Implement the `ServiceCard` component to display individual service details.
- `services-grid`: Implement the `ServicesGrid` section to display a grid of service cards.
- `index-page`: Integrate the new design system components into the home page.

## Related Changes
- `install-tailwind-v4`: This change depends on Tailwind v4 being correctly installed and configured.
- `install-astro-react`: This change depends on Astro React integration for any future interactive components (though the current proposal focuses on Astro components).

## Proposed Specs
- `specs/design-tokens/spec.md`
- `specs/atomic-components/spec.md`
- `specs/content-collections/spec.md`
- `specs/service-card/spec.md`
- `specs/services-grid/spec.md`
- `specs/index-page/spec.md`
