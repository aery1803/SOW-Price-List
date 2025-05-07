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
