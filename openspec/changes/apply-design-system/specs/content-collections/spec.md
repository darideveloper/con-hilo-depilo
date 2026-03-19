# Spec: Content Collections

Define the schema and structure for managing the service offerings data.

## ADDED Requirements

### Requirement: Services Data Model
The project SHALL structure and validate the data for treatments and services.

#### Scenario: Services Collection Configuration
Setup a `services` collection in `src/content/config.ts`.
- **Given** a set of services with properties: `title`, `price`, `duration`, `description`, `image`.
- **When** data is stored as `.json` or `.md` files in `src/content/services/`.
- **Then** use `zod` to validate:
    - `title`: string (required).
    - `price`: string (optional).
    - `duration`: string (optional).
    - `description`: string (required).
    - `image`: string (required image path).
    - `category`: enum ("brows", "lashes", "threading", "other") (required).
    - `order`: number (required).
