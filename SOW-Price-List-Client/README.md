# SOW Price List Client (Vite + React)

This project is a client-side application built with React. It provides a user-friendly interface for interacting with the backend API to display price lists.

## Project Structure

```
SOW-Price List-Client
├── public
│   ├── avatar.png          # Avatar logo
├── src
│   ├── index.jsx           # Application entry point
│   ├── App.jsx             # Main application component
│   ├── components
│   │   ├── Header.jsx      # Header component with navigation and user info
│   │   ├── MainContent.jsx # Main content component for displaying price lists
│   │   ├── Menu.jsx        # Dropdown menu for navigation links
│   │   ├── NewPricList.jsx # To add new price list
│   │   ├── Table.jsx       # Table to show the price list
│   │   ├── Loading.jsx     # Loader component for loading states
│   ├── utils
│   │   └── api.js          # Utility for API calls
│   ├── assets              # Static assets like images and icons
│   ├── styles              # Application styles
├── .env                    # Environment variables
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
```
git clone <repository-url>
cd SOW-Price-List-Client
```

2. Install dependencies:
```
npm install
```

3. Create a .env file in the root directory and add the backend API URL:
```
VITE_BASE_URL=http://localhost:3000
```
Replace http://localhost:3000 with the actual backend URL if deployed.

## Usage

1. Start the development server:
```
npm run dev
```
2. Open the application in your browser at http://localhost:5173 (default Vite development server URL).

## Components

- **Header**:               Displays the application logo, navigation menu, and language selection dropdown.
- **MainContent**:          Renders the Price List.
- **Menu**:                 Provides a dropdown menu for navigation links.
- **Table**:                Renders the Price List in tabular form.
- **Loader**:               Displays a loading animation while fetching data.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.