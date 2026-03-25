# Specification: Atomic Structure for Components

This specification defines the organization and usage of components within an atomic design structure.

## ADDED Requirements

### Requirement: Component Categorization

- Components **MUST** be placed into one of three subfolders within `src/components/`: `atoms/`, `molecules/`, or `organisms/`.
- **Atoms** are the smallest building blocks, like buttons, inputs, and badges. They should not depend on other components.
- **Molecules** are simple combinations of atoms, like a search bar or a service card. They may depend on atoms but **MUST NOT** depend on organisms.
- **Organisms** are complex UI components that can depend on atoms, molecules, or other organisms. They represent distinct sections of an interface.

#### Scenario: Moving a Component to Atoms
- GIVEN a component `Badge.astro` that represents a simple UI element without dependencies
- WHEN it is moved to `src/components/atoms/`
- THEN all its references in the project **MUST** be updated to the new path.

#### Scenario: Moving a Component to Molecules
- GIVEN a component `ServiceCard.astro` that uses `Badge.astro` and `Button.astro`
- WHEN it is moved to `src/components/molecules/`
- THEN its imports **MUST** reflect the new location of `Badge` and `Button` (e.g., `import Badge from "../atoms/Badge.astro"`).

#### Scenario: Moving a Component to Organisms
- GIVEN a component `ServicesGrid.astro` that uses `ServiceCard.astro`
- WHEN it is moved to `src/components/organisms/`
- THEN its import of `ServiceCard` **MUST** reflect the new location (e.g., `import ServiceCard from "../molecules/ServiceCard.astro"`).
