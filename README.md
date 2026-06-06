# PoupApp

PoupApp is a personal finance dashboard built with **React + Vite** and styled with **Tailwind CSS**.

The main goal of this project was to practice and learn Tailwind CSS by creating a clean, responsive and organized financial control interface. The project is mostly a front-end/static application, focused on UI structure, component organization and visual design rather than full financial data persistence or backend integration.

![PoupApp Screenshot](./public/screenshot.png)

## Quick Start

Requirements:

- Node.js 18+ recommended

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Run lint verification:

```bash
npm run lint
```

## Main Features

- Personal finance dashboard interface
- Bank account overview
- Transaction list and transaction management UI
- Savings status with progress indicator
- Daily budget section
- Financial health indicators
- Quick transaction search
- Reusable React components
- Modular component structure, including `Accounts`, `Transactions`, `DailyBudget`, `SavingsStatus`, `ProgressBar`, and others
- Styling built with Tailwind CSS utility classes

## Project Purpose

This project was developed as a learning exercise during my studies with Tailwind CSS.

Although PoupApp looks like a personal finance application, its main purpose is not to be a complete production-ready finance tool. Instead, it was created to practice:

- Building interfaces with React
- Using Tailwind CSS for layout and styling
- Creating reusable components
- Organizing a front-end project with Vite
- Designing a simple and clean dashboard UI
- Improving component-based development workflow

## Running Locally

1. Clone the repository
2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## API / Backend

This project is currently a front-end application only.

There is no backend or database integration at the moment. The current focus is on the interface, layout and component structure. If an API is added in the future, the required environment variables, endpoints and setup instructions should be documented here.

## How It Works

PoupApp is a Single Page Application built with React and bundled with Vite for a fast development experience.

The `src` folder contains components organized by responsibility, such as accounts, transactions, daily budget and savings progress. Tailwind CSS is used throughout the project to build the layout, spacing, colors and responsive design using utility classes.

## Repository Structure

- `src/` — React source code and components
- `public/` — static assets
- `index.html` — main HTML file
- `vite.config.js` — Vite configuration
- `package.json` — project dependencies and scripts

## Credits

Developed by Arthur Lima Manenti
