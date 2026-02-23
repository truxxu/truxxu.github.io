# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Daniel Trujillo, themed as a Windows 95 desktop. Built with Create React App and [React95](https://github.com/React95/React95) (a Windows 95 component library for React). Deployed to GitHub Pages at https://truxxu.github.io.

## Commands

- `npm start` — Start dev server
- `npm run build` — Production build
- `npm test` — Run tests (Jest via react-scripts)
- `npm run deploy` — Build and deploy to GitHub Pages (gh-pages, pushes to `master` branch)

## Architecture

The app simulates a Windows 95 desktop with clickable icons that open modal "windows."

**Entry point:** `src/index.js` → `src/App.js` → wraps everything in React95's `ThemeProvider`

**Core component:** `src/components/desktop.jsx` — The main orchestrator. Manages all modal state (About, Skills, Photo, Doom, Portfolio, CV) via individual `useState`/`useCallback` hooks. Also renders the Windows 95 `TaskBar` with a start menu and desktop icon shortcuts.

**Modal content components** (rendered conditionally in `desktop.jsx`):
- `portfolio.jsx` — Project showcase
- `cv.jsx` — Curriculum vitae

**Layout system:**
- `layoutStyling.js` — Styled-components wrapping React95's `Modal` and `Frame` with responsive breakpoints (uses `styled-media-query`)
- `desktopBox.jsx` / `iconBox.jsx` / `iconText.jsx` — Styled-component primitives for desktop icon layout
- `mainPage.jsx` — Page wrapper with background image
- `styles.scss` — Global SCSS styles (requires `node-sass`)

**Data:** `socialMedia.jsx` — Static array of social links used in the TaskBar start menu.

## Key Dependencies

- `@react95/core` and `@react95/icons` — UI components and icons (Modal, TaskBar, List, Frame, ProgressBar, etc.)
- `styled-components` + `styled-media-query` — Styling and responsive design
- `node-sass` — SCSS compilation

## Formatting

Prettier is configured (default settings via empty `.prettierrc.json`). VSCode is set to format on save.
