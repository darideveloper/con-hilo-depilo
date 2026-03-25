# Tasks: Refactor Component Folder to Atomic Design Structure

This task list tracks the migration of components to an atomic structure and the update of all related imports.

## Setup

- [ ] Create `atoms`, `molecules`, and `organisms` subfolders in `src/components/`

## Component Migration

### Atoms
- [ ] Move `src/components/Badge.astro` to `src/components/atoms/`
- [ ] Move `src/components/Button.astro` to `src/components/atoms/`
- [ ] Move `src/components/Icon.astro` to `src/components/atoms/`
- [ ] Move `src/components/ReactTest.tsx` to `src/components/atoms/`

### Molecules
- [ ] Move `src/components/SectionHeader.astro` to `src/components/molecules/`
- [ ] Move `src/components/ServiceCard.astro` to `src/components/molecules/`

### Organisms
- [ ] Move `src/components/ServicesGrid.astro` to `src/components/organisms/`
- [ ] Move `src/components/Welcome.astro` to `src/components/organisms/`

## Import Resolution

- [ ] Update imports in `src/components/molecules/ServiceCard.astro`
- [ ] Update imports in `src/components/organisms/ServicesGrid.astro`
- [ ] Update imports in `src/pages/index.astro`
- [ ] Update imports in `src/pages/design-system.astro`

## Validation

- [ ] Run `npm run build` to verify the build process completes without errors
- [ ] Verify `index.astro` and `design-system.astro` render correctly (if preview is available)
