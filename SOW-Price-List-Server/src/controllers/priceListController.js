/**
 * Controller to handle operations for the PriceList.
 */
module.exports = {
  // Create a new PriceList entry
  async createPriceList(request, reply) {
    const { PriceList } = request.server.models;
    try {
      const newPriceList = await PriceList.create(request.body);
      reply.code(201).send(newPriceList);
    } catch (error) {
      reply.code(500).send({
        error: "Failed to create PriceList entry",
        details: error.message,
      });
    }
  },

  // Get all PriceList entries
  async getAllPriceLists(request, reply) {
    const { PriceList } = request.server.models;

    try {
      const priceLists = await PriceList.findAll();
      reply.code(200).send(priceLists);
    } catch (error) {
      reply.code(500).send({
        error: "Failed to fetch PriceList entries",
        details: error.message,
      });
    }
  },

  // Get a single PriceList entry by Id.
  async getPriceListByArticleNo(request, reply) {
    const { PriceList } = request.server.models;

    try {
      const { id } = request.params;
      const priceList = await PriceList.findOne({ where: { id } });
      if (!priceList) {
        reply.code(404).send({ error: "PriceList entry not found" });
      } else {
        reply.code(200).send(priceList);
      }
    } catch (error) {
      reply.code(500).send({
        error: "Failed to fetch PriceList entry",
        details: error.message,
      });
    }
  },

  // Update a PriceList entry by Id.
  async updatePriceList(request, reply) {
    const { PriceList } = request.server.models;

    try {
      const { id } = request.params;
      const [updated] = await PriceList.update(request.body, {
        where: { id },
      });
      if (updated) {
        const updatedPriceList = await PriceList.findOne({
          where: { id },
        });
        reply.code(200).send(updatedPriceList);
      } else {
        reply.code(404).send({ error: "PriceList entry not found" });
      }
    } catch (error) {
      reply.code(500).send({
        error: "Failed to update PriceList entry",
        details: error.message,
      });
    }
  },

  // Delete a PriceList entry by Id.
  async deletePriceList(request, reply) {
    const { PriceList } = request.server.models;

    try {
      const { id } = request.params;
      const deleted = await PriceList.destroy({ where: { id } });
      if (deleted) {
        reply
          .code(200)
          .send({ message: "PriceList entry deleted successfully" });
      } else {
        reply.code(404).send({ error: "PriceList entry not found" });
      }
    } catch (error) {
      reply.code(500).send({
        error: "Failed to delete PriceList entry",
        details: error.message,
      });
    }
  },
};
