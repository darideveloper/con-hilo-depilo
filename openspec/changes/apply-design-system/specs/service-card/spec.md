# Spec: Service Card

Implement the `ServiceCard` component for displaying individual service items.

## ADDED Requirements

### Requirement: Interactive Service Cards
The project SHALL present service offerings with high-quality visual presentation.

#### Scenario: ServiceCard Implementation
Create a `ServiceCard.astro` component to render a treatment card.
- **Given** props `title`, `price`, `duration`, `image`, `description`.
- **When** `<ServiceCard title="Threading" price="25€" ... />` is used.
- **Then** render a card with:
    - Optimized image using `astro:assets`.
    - Distinctive styling for title and description.
    - Information badges for price and duration.
    - Hover effects for interactivity.
