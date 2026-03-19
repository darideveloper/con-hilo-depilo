# Spec: Atomic Components

Implement the foundational UI building blocks for the design system.

## ADDED Requirements

### Requirement: Atomic UI Library
The project SHALL provide a set of reusable, type-safe components in `src/components/`.

#### Scenario: Button Component
Create a `Button.astro` component with flexible props.
- **Given** variants `primary`, `outline`, and `ghost`.
- **When** used as `<Button variant="primary" size="lg">Submit</Button>`.
- **Then** render a button with appropriate classes, transitioning to an `<a>` if an `href` prop is provided.

#### Scenario: SectionHeader Component
Create a `SectionHeader.astro` component to consistently label sections.
- **Given** props `title`, `subtitle`, and `centered`.
- **When** `<SectionHeader title="Hello" centered={true} />` is called.
- **Then** render a section header with centered alignment and correct typography.
