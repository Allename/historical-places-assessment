# Historical Places App

A React-based application for exploring and tracking visits to historical places around the world. The app allows users to browse historical sites, mark them as visited, and discover new places through an interactive random suggestion feature.

## Features

- **Historical Places List**: Browse a curated collection of historical places with images and descriptions
- **Visited Tracking**: Mark places as visited/unvisited with immediate UI updates
- **Random Suggestion**: Discover new places with the fun random suggestion feature
- **Responsive Design**: Consistent UI/UX across different devices
- **State Management**: Built with Redux and Redux-Observable for efficient state handling
- **Navigation**: Smooth screen transitions and deep linking support

## Tech Stack

- **Frontend**: React Typescript
- **State Management**: Redux with Redux-Observable Epics
- **Navigation**: React Navigation (for React Native) or React Router (for web)
- **Styling**: Tailwindcss
- **Build Tool**: Vite or Create React App

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd historical-places-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port specified in the terminal) to view the application.

### Available Scripts

* `npm run dev` - Starts the development server
* `npm run build` - Builds the app for production
* `npm run test` - Runs the test suite
* `npm run lint` - Runs linting tools

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/       # Data sources and APIs
├── hooks/       # Hooks for reusable logic
├── pages/    # Pages for main application screens
├── store/         # Redux store configuration
```

## Contributing

We welcome contributions to the Historical Places App! Here's how you can help:

### Reporting Issues

1. Check if the issue already exists in the GitHub Issues
2. Create a new issue with a clear description
3. Include steps to reproduce, expected behavior, and actual behavior
4. Add screenshots if applicable

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**

   * Follow the existing code style
   * Add tests for new functionality
   * Update documentation as needed
4. **Commit your changes**

   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**

   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

* Write clear, descriptive commit messages
* Ensure all tests pass before submitting
* Update the README.md if you change functionality
* Follow the existing code style and architecture patterns
* Test your changes on multiple devices/browsers if possible

### Setting Up for Development

1. Follow the installation steps above
2. Run the development server with `npm run dev`
3. Make your changes in the `src` directory
4. Use `npm run test` to run tests
5. Use `npm run lint` to check code quality

## Testing

The app includes comprehensive test coverage as outlined in the test plan. To run tests:

```bash
npm test
```

For test coverage:

```bash
npm test -- --coverage
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` or `build/` directory.

## Support

If you have any questions or need help, please open an issue in the GitHub repository or contact the development team.