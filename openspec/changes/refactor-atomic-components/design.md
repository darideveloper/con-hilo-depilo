# Design: Component Folder Refactor to Atomic Design

## Structural Changes

The `src/components/` directory will be restructured into subfolders.

### Folders

*   `src/components/atoms/`: Contains base UI primitives with no dependencies on other components.
*   `src/components/molecules/`: Contains groups of atoms that form simple UI patterns.
*   `src/components/organisms/`: Contains complex UI sections that may contain atoms and molecules.

### Mapping

| Component | Target Folder | Type | Dependencies |
| :--- | :--- | :--- | :--- |
| `Badge.astro` | `atoms` | Atom | None |
| `Button.astro` | `atoms` | Atom | None |
| `Icon.astro` | `atoms` | Atom | None |
| `ReactTest.tsx` | `atoms` | Atom | None |
| `SectionHeader.astro` | `molecules` | Molecule | `Icon` (likely) |
| `ServiceCard.astro` | `molecules` | Molecule | `Badge`, `Button`, `Icon` |
| `ServicesGrid.astro` | `organisms` | Organism | `ServiceCard`, `SectionHeader`, `Button`, `Icon` |
| `Welcome.astro` | `organisms` | Organism | None (in its current state) |

## Import Updates

All imports must be updated from `@components/ComponentName` or `../components/ComponentName` to:

*   `@components/atoms/ComponentName`
*   `@components/molecules/ComponentName`
*   `@components/organisms/ComponentName`

Or relative equivalent paths:
*   `../components/atoms/ComponentName`
*   `../../components/atoms/ComponentName`

## Validation Strategy

1.  **Build Check:** Run `npm run build` to verify there are no broken imports.
2.  **Lint Check:** Ensure no linting errors are introduced.
3.  **Manual Verification:** Check key pages (`index.astro`, `design-system.astro`) to ensure UI is still rendering correctly.
