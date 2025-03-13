# FashionFinder

A modern fashion discovery application with Tinder-like swiping interface to help users find clothing based on their style preferences.

## Live Demo

You can access the live application at: [https://lamezati.github.io/fashion-finder/](https://lamezati.github.io/fashion-finder/)

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
   git clone https://github.com/lamezati/fashion-finder.git
   cd fashion-finder
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Environment Setup
   ```
   # Copy the example environment file
   cp src/.env.example .env
   
   # Edit the .env file with your Firebase configuration
   # Replace the placeholder values with your actual Firebase project details
   ```

4. Run the development server
   ```
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Environment Variables

The application uses environment variables to store sensitive information like API keys. To set up your environment:

1. Create a `.env` file in the project root (you can copy from `.env.example`)
2. Add the following variables with your Firebase project details:

```
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_domain.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**IMPORTANT:** Never commit your `.env` file to version control. It contains sensitive information.

## Building for Production

```
npm run build
```

## Deployment

The project is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

MIT