# Spec: Index Page

Update the home page to integrate the new design system and service listings.

## MODIFIED Requirements

### Requirement: Home Page Redesign
The project SHALL apply the "Con Hilo Depilo" brand identity and content to the main entry point.

#### Scenario: Index Integration
Update `src/pages/index.astro` to include the `ServicesGrid` section.
- **Given** a functional `ServicesGrid`.
- **When** the home page is rendered.
- **Then** place the `ServicesGrid` within a structured section and use global design tokens for spacing and backgrounds.
