---
name: Social Handler Pro
colors:
  surface: '#fbf8fc'
  surface-dim: '#dbd9dc'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f6'
  surface-container: '#efedf0'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e4e2e5'
  on-surface: '#1b1b1e'
  on-surface-variant: '#44474e'
  inverse-surface: '#303033'
  inverse-on-surface: '#f2f0f3'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4e5e81'
  primary: '#031635'
  on-primary: '#ffffff'
  primary-container: '#1a2b4b'
  on-primary-container: '#8293b8'
  inverse-primary: '#b6c6ef'
  secondary: '#605e57'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2d8'
  on-secondary-container: '#66645d'
  tertiary: '#231400'
  on-tertiary: '#ffffff'
  tertiary-container: '#3e2700'
  on-tertiary-container: '#b08d5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#b6c6ef'
  on-primary-fixed: '#081b3a'
  on-primary-fixed-variant: '#364768'
  secondary-fixed: '#e6e2d8'
  secondary-fixed-dim: '#cac6bd'
  on-secondary-fixed: '#1c1c16'
  on-secondary-fixed-variant: '#484740'
  tertiary-fixed: '#ffddb1'
  tertiary-fixed-dim: '#e8c08a'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#5d4217'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e2e5'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  stat-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-padding: 24px
  gutter: 20px
---

## Brand & Style

The design system is built for a professional yet accessible social media management environment. It targets agencies and multi-client managers who require a high-density information display that doesn't feel overwhelming.

The visual style is **Corporate / Modern** with a touch of **Minimalism**. It utilizes high-contrast structural elements—specifically the deep navy sidebar—to anchor the user, while the soft cream background reduces eye strain during long working sessions. The emotional response is one of reliability, organized efficiency, and calm control. Vibrant accents are used sparingly but purposefully to identify social platforms, ensuring the functional color doesn't distract from the primary data.

## Colors

The palette is dominated by the **Deep Navy (#1a2b4b)**, used for structural navigation and primary actions to signify authority. The **Soft Cream (#f7f3e9)** acts as the canvas, providing a warmer, more premium feel than standard stark white.

Platform indicators use specific brand-aligned accents:
- **Pink:** Instagram and engagement metrics.
- **Teal/Green:** Active status and growth indicators.
- **Orange:** Warnings, scheduled states, and specific brand markers.
- **Blue:** Facebook/LinkedIn platform identifiers.

Backgrounds for cards and input fields should remain pure white (#ffffff) to pop against the cream backdrop.

## Typography

This design system employs a dual-sans-serif approach. **Manrope** is used for headlines and statistics to provide a modern, slightly geometric character that feels refined. **Inter** is used for all functional body text, inputs, and labels due to its exceptional legibility at small sizes and systematic feel.

Hierarchy is established through weight shifts rather than drastic size changes. Data points (like follower counts) should use medium or semi-bold weights to ensure they are the first thing a user sees within a card.

## Layout & Spacing

The design system utilizes a **Fluid Grid** model with fixed sidebar constraints. The sidebar is set to a fixed width (240px), while the main content area expands to fill the viewport. 

Spacing follows a strict 4px base unit. 
- **Dashboards:** Use a 12-column grid for the main content area.
- **Card Internals:** Use 24px (lg) padding for primary dashboard cards and 16px (md) for secondary or nested list items.
- **Sections:** Maintain a 32px (xl) vertical gap between major page sections (e.g., between the stat row and the client roster).

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** rather than heavy shadowing. The base layer is the Soft Cream background. 

- **Level 0 (Base):** Soft Cream background.
- **Level 1 (Cards):** Pure White surface with a very soft, high-diffusion shadow (0px 4px 12px rgba(0,0,0,0.03)) or a subtle 1px border in a slightly darker cream tint.
- **Level 2 (Active States/Dropdowns):** Use a slightly more pronounced shadow (0px 8px 24px rgba(0,0,0,0.08)) to indicate temporary overlay.

The sidebar does not use elevation; it relies on its dark color value to "recede" into a different functional plane.

## Shapes

The shape language is consistently **Rounded**, reflecting a friendly and modern professional tool. 

- **Primary Cards:** 1rem (16px) corner radius.
- **Buttons and Inputs:** 0.5rem (8px) corner radius.
- **Avatars:** Fully circular (pill-shaped).
- **Platform Badges:** 0.25rem (4px) for a sharper, more "tag-like" appearance within cards.

Interactive elements in the sidebar use a "pill" treatment for the active state background, ensuring the selection is unmistakable.

## Components

### Buttons
- **Primary:** Deep navy background, white text. Bold weight.
- **Secondary:** White background, navy border (1px), navy text.
- **Ghost:** No background or border, navy or gray text, used for less frequent actions like "Cancel."

### Input Fields
Inputs use a light gray border (1px) that darkens on focus. Labels are positioned above the field in `label-bold` Inter. Placeholder text uses a muted gray.

### Cards
Cards are the primary container for data. They must always have a white background. Header sections within cards should use a subtle bottom border or 24px padding to separate title from content.

### Chips & Platform Badges
Used for status (e.g., "Active," "Scheduled") and platform identification. These should have a light tinted background of the accent color (10% opacity) with high-contrast text of the same color for readability.

### Sidebar Navigation
The active state is indicated by a background tint (slightly lighter navy or subtle blue) and a high-contrast icon. Icons should be linear and consistent in stroke weight.

### Indicators
Small colored dots (Teal for online/active, Orange for pending) are used next to labels to provide quick status checks without requiring text labels.