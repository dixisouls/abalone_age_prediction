# Abalone Age Detector Frontend

A React-based frontend for the Abalone Age Detection System, providing an intuitive interface for submitting abalone measurements and visualizing prediction results.

## Project Structure

```
frontend/
├── public/               # Static assets and HTML template
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── LoadingSpinner.js
│   │   ├── PredictionForm.js
│   │   └── ResultDisplay.js
│   ├── pages/            # Page components
│   │   ├── LandingPage.js
│   │   └── InferencePage.js
│   ├── utils/            # Utility functions
│   │   └── api.js        # API client
│   ├── App.js            # Main application component
│   ├── GlobalStyle.js    # Global styles
│   ├── index.js          # Application entry point
│   └── theme.js          # Theme configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Interactive UI**: Form with validation for abalone measurements
- **Visualization**: Clear presentation of prediction results
- **API Integration**: Seamless communication with the backend API

## Getting Started

### Prerequisites

- Node.js 19.x or higher
- npm or yarn
- Backend API running (see backend README)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Configure the API endpoint (if needed):

Edit `src/utils/api.js` to set the correct backend API URL:

```javascript
const API_BASE_URL = "http://localhost:8000"; // Change if needed
```

### Running the Development Server

```bash
npm start
```

This will start the development server and open the application in your default browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Component Overview

### Key Components

- **PredictionForm**: Form for entering abalone measurements
- **ResultDisplay**: Visualizes prediction results (rings and age)
- **Card**: Reusable card container component
- **Button**: Reusable button component with variants
- **LoadingSpinner**: Loading indicator for async operations
- **Header**: Application navigation header
- **Footer**: Application footer with links

### Pages

- **LandingPage**: Home page with information about the project
- **InferencePage**: Page with the prediction form and results display

### Theme

The application uses a styled-components theme defined in `theme.js` with an ocean-inspired color palette:

- Deep Blue (#003366)
- Teal (#008080)
- Light Blue (#66b2b2)
- Coral (#ff7f50)
- Sand (#f5f5dc)

## API Integration

The frontend communicates with the backend API using the functions defined in `src/utils/api.js`:

- `checkHealth()`: Check if the API is running
- `getModelInfo()`: Get information about the model
- `predictAge(measurements)`: Submit measurements for prediction

## Testing

Run the test suite with:

```bash
npm test
```

## Deployment

The application can be deployed to various hosting platforms:

### Static Hosting (e.g., Netlify, Vercel)

1. Build the application:
```bash
npm run build
```

2. Deploy the contents of the `build` directory to your hosting provider

## Customization

### Adding New Components

1. Create a new component file in `src/components/`
2. Import and use the component as needed

### Modifying the Theme

Edit `src/theme.js` to change colors, fonts, and other theme properties.

## Browser Support

The application supports modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Created by [Divya Panchal](https://github.com/dixisouls)