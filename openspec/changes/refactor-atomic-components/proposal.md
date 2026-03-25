# Proposal: Refactor Component Folder to Atomic Design Structure

This proposal aims to organize the `src/components/` directory using Atomic Design principles by introducing `atoms`, `molecules`, and `organisms` subfolders. This will improve codebase maintainability, component discoverability, and scalability.

## Problem Statement

The current `src/components/` directory is flat, making it difficult to distinguish between simple UI primitives and complex structural components as the project grows.

## Proposed Solution

1.  **Introduce Subfolders:** Create `src/components/atoms/`, `src/components/molecules/`, and `src/components/organisms/`.
2.  **Move Components:**
    *   **Atoms:** `Badge.astro`, `Button.astro`, `Icon.astro`, `ReactTest.tsx`.
    *   **Molecules:** `SectionHeader.astro`, `ServiceCard.astro`.
    *   **Organisms:** `ServicesGrid.astro`, `Welcome.astro`.
3.  **Update Imports:** Fix all import references in components, layouts, and pages to use the new paths.
4.  **Maintain Path Aliases:** Ensure `@components` path alias (if configured) still works or update it to support the new structure.

## Benefits

*   **Improved Organization:** Clear separation of concerns based on component complexity.
*   **Scalability:** Easier to manage a growing number of components.
*   **Consistency:** Standardizes component placement for all developers.

## Risks & Mitigations

*   **Broken Imports:** Automated search and replace will be used to ensure all imports are updated correctly. Validation via build/lint will follow.
