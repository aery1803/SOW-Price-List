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

- **Header**: Displays the application logo, navigation menu, and language selection dropdown.
- **MainContent**: Renders the Price List.
- **Menu**: Provides a dropdown menu for navigation links.
- **Table**: Renders the Price List in tabular form.
- **Loader**: Displays a loading animation while fetching data.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

# SOW-Price-List-Server (Fastify, Node, Sequelize + PostgreSQL)

This project is a backend application built with Fastify and Sequelize. It provides a RESTful API and integrates with a relational database using Sequelize ORM.

## Project Structure

```
SOW-Terms-Server
├── src
│   ├── app.js               # Entry point of the application
│   ├── plugins
│   │   └── sequelize.js     # Fastify plugin for Sequelize integration
│   ├── routes
│   │   ├── index.js         # Consolidated route definitions
│   │   ├── PricListRoute.js # Routes for price-list-related operations
│   ├── models
│   │   └── priceList.js       # Sequelize model for price-list
│   ├── controllers
│   │   ├── priceListController.js # Business logic for price-list routes
├── .env                      # Environment variables
├── .sequelizerc              # Sequelize CLI configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd SOW-Price-List-Server
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your database connection details:

   ```properties
   PORT=3000
   NODE_ENV=development
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

## Usage

1. Start the Fastify server:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000` by default.

## API Endpoints

- **Price List Routes**: Defined in `src/routes/priceListRoute.js` and implemented in `src/controllers/priceListController.js`.

## Sequelize Models

- **Price List Model**: Defined in `src/models/priceList.js`. Represents the `PriceList` table in the database, storing prices of various product and services.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
