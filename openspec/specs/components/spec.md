# components Specification

## Purpose
Define the requirements for UI components to ensure consistency, flexibility, and adherence to the design system.

## ADDED Requirements

### Requirement: Flexible Content via Slots
Molecules and Organisms that display content such as titles, subtitles, or descriptions MUST provide slots for these content areas to allow for dynamic and rich formatting.

#### Scenario: `SectionHeader` slots
- **GIVEN** a `SectionHeader` component
- **WHEN** passing a `title` as a prop
- **THEN** it renders the title in an `H2` tag
- **BUT WHEN** providing a `<slot name="title">`
- **THEN** it renders the slot content instead of the `title` prop

#### Scenario: `InfoCard` default slot
- **GIVEN** an `InfoCard` component
- **WHEN** providing children content
- **THEN** it renders that content as the card body text
- **AND** it MUST support a `text` prop as a fallback for simple text content

#### Scenario: `ServiceCard` and `CourseCard` slots
- **GIVEN** a `ServiceCard` or `CourseCard` component
- **WHEN** providing content in the default slot
- **THEN** it renders as the card's description
- **AND** it MUST support a `description` prop as a fallback
## Requirements
### Requirement: Flexible Content via Slots
Molecules and Organisms that display content such as titles, subtitles, or descriptions MUST provide slots for these content areas to allow for dynamic and rich formatting.

#### Scenario: `SectionHeader` slots
- **GIVEN** a `SectionHeader` component
- **WHEN** passing a `title` as a prop
- **THEN** it renders the title in an `H2` tag
- **BUT WHEN** providing a `<slot name="title">`
- **THEN** it renders the slot content instead of the `title` prop

#### Scenario: `InfoCard` default slot
- **GIVEN** an `InfoCard` component
- **WHEN** providing children content
- **THEN** it renders that content as the card body text
- **AND** it MUST support a `text` prop as a fallback for simple text content

#### Scenario: `ServiceCard` and `CourseCard` slots
- **GIVEN** a `ServiceCard` or `CourseCard` component
- **WHEN** providing content in the default slot
- **THEN** it renders as the card's description
- **AND** it MUST support a `description` prop as a fallback

### Requirement: Service Presentation
The system MUST support a scalable React-based slider for services that includes category filtering.

#### Scenario: `ServicesSlider` displays and filters services
- **GIVEN** a list of services with categories
- **WHEN** rendered in the `ServicesSlider` component
- **THEN** it displays filter buttons for each unique category, plus an "All" option
- **AND** it renders a Swiper slider containing only the services matching the selected category

