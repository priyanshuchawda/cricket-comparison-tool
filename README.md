# Cricket Player Comparison Tool

This project is a web application that allows users to compare cricket players based on various statistics. It is built using React and utilizes the Create React App framework.

## Features
- Compare multiple cricket players.
- Fetch player statistics from an external API.
- Display player stats in a visually appealing chart.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```bash
   git clone  https://github.com/priyanshuchawda/cricket-comparison-tool.git
   cd cricket-comparison-tool
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
In the project directory, you can run:
    ```bash
    npm start
    ```

This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts
- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm run eject`**: Removes the single build dependency from your project.

## API Integration
The application fetches player data from the Cricket Data API. You will need to set up an API key. Create a `.env` file in the root of the project and add your API key:
REACT_APP_API_KEY=your_api_key_here


## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.
