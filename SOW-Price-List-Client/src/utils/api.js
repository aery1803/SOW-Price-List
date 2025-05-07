/**
 * Fetch all PriceList entries from the backend API.
 *
 * @returns {Promise<Array>} The list of PriceList entries.
 * @throws {Error} Throws an error if the network response is not successful.
 */
export const fetchAllPriceLists = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/pricelist`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching PriceList entries:", error);
    throw error;
  }
};

/**
 * Fetch a single PriceList entry by Id.
 *
 * @param {number} id - The Id. of the PriceList entry to fetch.
 * @returns {Promise<Object>} The PriceList entry data.
 * @throws {Error} Throws an error if the network response is not successful.
 */
export const fetchPriceListByArticleNo = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/pricelist/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching PriceList entry:", error);
    throw error;
  }
};

/**
 * Create a new PriceList entry.
 *
 * @param {Object} priceListData - The data for the new PriceList entry.
 * @returns {Promise<Object>} The created PriceList entry.
 * @throws {Error} Throws an error if the network response is not successful.
 */
export const createPriceList = async (priceListData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/pricelist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(priceListData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating PriceList entry:", error);
    throw error;
  }
};

/**
 * Update an existing PriceList entry by Id.
 *
 * @param {number} id - The Id of the PriceList entry to update.
 * @param {Object} priceListData - The updated data for the PriceList entry.
 * @returns {Promise<Object>} The updated PriceList entry.
 * @throws {Error} Throws an error if the network response is not successful.
 */
export const updatePriceList = async (id, priceListData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/pricelist/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(priceListData),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating PriceList entry:", error);
    throw error;
  }
};

/**
 * Delete a PriceList entry by Id.
 *
 * @param {number} id - The Id of the PriceList entry to delete.
 * @returns {Promise<Object>} A success message if the deletion is successful.
 * @throws {Error} Throws an error if the network response is not successful.
 */
export const deletePriceList = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/pricelist/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Error deleting PriceList entry:", error);
    throw error;
  }
};
