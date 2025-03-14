# FashionFinder

A Tinder-like interface for discovering and shopping fashion items. This application allows users to swipe through fashion recommendations, save their favorites, and shop directly from the app.

## Features

- Tinder-style swiping interface for fashion items
- Responsive design optimized for both mobile and desktop
- User authentication and personalized recommendations
- Style preference selection to customize recommendations
- Desktop sidebar for quick navigation
- Mobile-optimized bottom navigation

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- React Spring (for animations)
- Lucide React (for icons)
- Supabase (for backend and authentication)

## Demo

The desktop version of the application resembles a typical dating app with a sidebar showing user info, notification area, and navigation tabs. It displays fashion items in a card format with swiping functionality.

The mobile version is optimized for touch interactions with large, easy-to-tap buttons and a bottom navigation bar for quick access to key features.

## UI Design

The UI is inspired by popular dating apps and features:

### Desktop
- Left sidebar with user profile and navigation
- Main card area with swipeable product cards
- Premium feature promotion
- Web-exclusive banner

### Mobile
- Full-screen product cards
- Bottom tab navigation
- Swipe gestures for like/dislike
- Touch-optimized action buttons

## Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/lamezati/fashion-finder.git
   cd fashion-finder
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

## Project Structure

- `/src/components` - React components
- `/src/store` - State management
- `/src/types` - TypeScript type definitions
- `/src/lib` - Utility functions and services

## Responsive Design

The application is fully responsive with different layouts for:
- Mobile phones (< 640px)
- Tablets (640px - 1024px)
- Desktop (> 1024px)

## Credits

- Design inspiration from Tinder and other dating apps
- UI adapted for fashion e-commerce use case