# Fashion Finder App

A modern fashion discovery application with Tinder-like swiping interface to help users find clothing based on their style preferences.

## Live Demo

You can access the live application at: [https://lamezati.github.io/fashion-finder-app/](https://lamezati.github.io/fashion-finder-app/)

## Features

- **User Authentication**: Secure login and registration with Firebase
- **Style Preferences Setup**: Personalized fashion recommendations based on:
  - Style types (Casual, Business Casual, Formal, etc.)
  - Favorite colors
  - Size information
  - Shopping occasions
  - Budget range
  - Physical attributes
- **Swipeable Product Interface**: Intuitive swipe left (reject) and right (like) interface
- **Modern UI**: Clean and responsive design using Tailwind CSS

## Tech Stack

- **Frontend**: React with TypeScript
- **State Management**: Zustand
- **Authentication & Database**: Firebase (Authentication, Firestore)
- **Styling**: Tailwind CSS
- **Animations**: React Spring
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/lamezati/fashion-finder-app.git
   cd fashion-finder-app
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```
npm run build
```

## Deployment

The project is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

MIT
