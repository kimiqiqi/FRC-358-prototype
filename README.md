# Robotic Eagles 358 - Official Website

This is the official website for Hauppauge High School's FIRST Robotics Competition Team 358, the Robotic Eagles. This website provides information about our team, upcoming events, how to join, and ways to sponsor or donate.

## Project Structure

This is a modern front-end application built with React, Vite, and Tailwind CSS.

- `src/pages`: Contains all the page components (`Home`, `About`, `Events`, `Join`, `Donate`, `Sponsors`, etc.).
- `src/components`: Contains reusable UI components like `Navigation` and `Footer`.
- `src/config/site.ts`: Central configuration file for managing links, dummy data status flags, and team details.
- `src/data/`: Data arrays for things like History, Sponsors, and Events to easily update them without touching complex UI code.
- `src/index.css`: Tailwind entry point and global design tokens.

## How to Edit

### Basic Content Updates
1. **Config & Links:** To change email, year, social links, or toggle sections like "Donations" / "Join Form" off/on, edit `src/config/site.ts`.
2. **Calendar Events:** To add upcoming featured events to the Events page sidebar, edit `src/data/events.ts`.
3. **Sponsor Logos:** To update sponsor names or logos, edit `src/data/sponsors.ts`.
4. **Team History:** To add a new milestone to the About page timeline, edit `src/data/history.ts`.

### Pages
Navigate to `src/pages/` to update specific paragraphs or sections of content for each route.

## Setup Instructions

If developing locally:

1. `npm install`
2. `npm run dev`

## Deployment

To deploy in AI Studio or other platforms, you can build the site with:
`npm run build`

> **Pre-Launch Checklist:**
> Before the final launch, future editors must update real photos to replace Unsplash stock images, configure real Google Calendar links, replace the active donation portal links if applicable, and upload actual sponsor logos.
