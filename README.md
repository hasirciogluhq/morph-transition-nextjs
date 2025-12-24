# Morph Transition - Steam Big Picture UI

A proof-of-concept demonstrating seamless shared element transitions in Next.js. Built to explore the capabilities of Framer Motion's layout animations for creating fluid, app-like navigation experiences.

## Tech Stack

- **Next.js 16** (App Router)
- **Framer Motion** - Layout animations & shared element transitions
- **Tailwind CSS** - Styling
- **Bun** - Package management & runtime

## Features

- **Full-Screen Morphing**: Category cards expand to fill the viewport with smooth layout transitions
- **Nested Navigation**: Each category reveals a grid of games with staggered fade-in animations
- **Shared Layout IDs**: Seamless morphing between grid items and full-screen views
- **Zero Modals**: True page-like transitions without overlay boxes

## Quick Start

```bash
# Install dependencies
bun install

# Run development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Purpose

This is a technical exploration of modern web animation patterns, specifically testing Framer Motion's `layoutId` feature for creating PlayStation/Steam-style navigation flows. The project serves as a reference implementation for shared element transitions in React.

---

**Note**: This is a demonstration project focused on animation architecture, not a production application.
