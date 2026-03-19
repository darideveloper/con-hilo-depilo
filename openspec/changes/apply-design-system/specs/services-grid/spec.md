# Spec: Services Grid

Implement the `ServicesGrid` section to display a collection of services.

## ADDED Requirements

### Requirement: Dynamic Services Listing
The project SHALL dynamically fetch and display services in a responsive grid.

#### Scenario: ServicesGrid Layout
Create a `ServicesGrid.astro` component to manage the layout of service cards.
- **Given** a set of services from the `services` collection.
- **When** the `ServicesGrid` is rendered.
- **Then** fetch data using `getCollection("services")` and render:
    - A `SectionHeader`.
    - A responsive grid (1 col mobile, 2 cols tablet, 4 cols desktop).
    - Map each service item to a `ServiceCard`.
