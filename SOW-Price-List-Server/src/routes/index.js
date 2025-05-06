const PriceListRoute = require("./priceListRoute");

/**
 * Registers all routes for the application.
 * This function is used to register individual route modules with the Fastify instance.
 *
 * @param {Object} fastify - The Fastify instance.
 */
module.exports = async (fastify) => {
  await PriceListRoute(fastify); // Register PriceListRoute
};
