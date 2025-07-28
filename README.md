# Family Game Fans - Stream Overlays

A static website hosted on Cloudflare Workers providing overlay pages for OBS streaming setup.

## Pages

- **Index** (`/`) - Navigation dashboard with cards for each overlay
- **Starting Soon** (`/starting-soon`) - Stream starting soon overlay
- **Be Right Back** (`/be-right-back`) - Quick break overlay  
- **Be Back in T Minutes** (`/be-back-in-minutes.html`) - Timed break overlay with query parameters:
  - `/be-back-in-minutes.html?time=10` - 10 minute timer
  - `/be-back-in-minutes.html?time=20` - 20 minute timer
  - `/be-back-in-minutes.html?time=30` - 30 minute timer
- **Questions** (`/questions.html`) - Q&A session overlay

## Setup

### Prerequisites
- Node.js (v18 or later)
- pnpm package manager
- Cloudflare account (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd family-game-fans
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```
   The site will be available at `http://127.0.0.1:5173`

4. **Test the overlays**
   - Navigate to `http://127.0.0.1:5173` to see the main dashboard
   - Click on any card to view the respective overlay
   - Test timer functionality with different time parameters

### Deployment

1. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

2. **Deploy to Cloudflare Workers**
   ```bash
   pnpm run deploy
   ```

### Available Scripts

- `pnpm run dev` - Start development server (Vite)
- `pnpm run build` - Build the project for production
- `pnpm run preview` - Preview production build locally
- `pnpm run deploy` - Build and deploy to Cloudflare
- `pnpm run lint` - Run ESLint

### Project Structure

- `src/` - React application source (main dashboard)
- `public/` - Static HTML overlay files (easily editable)
- `worker/` - Cloudflare Worker for API endpoints
- `dist/` - Built files for deployment (generated)

## OBS Integration

Each page is designed to be used as a Browser Source in OBS Studio. Simply add the URL of each page as a Browser Source in your scenes.

Recommended Browser Source settings:
- Width: 1920
- Height: 1080
- CSS: Add any custom styling if needed
- Shutdown source when not visible: Checked
- Refresh browser when scene becomes active: Checked


## Tech Stack

This project is built with:

- **Frontend**: React + Vite for the main dashboard
- **Static Files**: Standalone HTML files for each overlay (easily editable)
- **Backend**: Cloudflare Workers for API endpoints
- **Deployment**: Cloudflare Workers with static asset hosting
- **Package Manager**: pnpm

The overlay files are simple HTML files with embedded CSS and JavaScript, making them easy to customize without needing to rebuild the project.
