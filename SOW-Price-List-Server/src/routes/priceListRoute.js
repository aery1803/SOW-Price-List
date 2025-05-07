const priceListController = require("../controllers/priceListController");

/**
 * Registers the price-list-related routes for the application.
 *
 * @param {Object} fastify - The Fastify instance.
 */
module.exports = async (fastify) => {
  // Create a new PriceList entry
  fastify.post("/pricelist", priceListController.createPriceList);

  // Get all PriceList entries
  fastify.get("/pricelist", priceListController.getAllPriceLists);

  // Get a single PriceList entry by Article No.
  fastify.get(
    "/pricelist/:id",
    priceListController.getPriceListByArticleNo
  );

  // Update a PriceList entry by Article No.
  fastify.put("/pricelist/:id", priceListController.updatePriceList);

  // Delete a PriceList entry by Article No.
  fastify.delete("/pricelist/:id", priceListController.deletePriceList);
};
