import { useState } from "react";

const NewPriceList = ({ setShowNewProductForm, addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    articleNo: "",
    productOrService: "",
    inPrice: "",
    price: "",
    unit: "",
    inStock: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    addProduct(newProduct);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form>
          <h2>Add New Product</h2>
          <label>
            Article No.:{" "}
            <input
              name="articleNo"
              value={newProduct.articleNo}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  handleChange(e);
                }
              }}
            />
          </label>
          <label>
            Product/Service:{" "}
            <input
              type="text"
              name="productOrService"
              value={newProduct.productOrService}
              onChange={handleChange}
            />
          </label>
          <label>
            In Price:{" "}
            <input
              name="inPrice"
              value={newProduct.inPrice}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*\.?\d*$/.test(value)) {
                  handleChange(e);
                }
              }}
            />
          </label>
          <label>
            Price:{" "}
            <input
              name="price"
              value={newProduct.price}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*\.?\d*$/.test(value)) {
                  handleChange(e);
                }
              }}
            />
          </label>
          <label>
            Unit:{" "}
            <input
              type="text"
              name="unit"
              value={newProduct.unit}
              onChange={handleChange}
            />
          </label>
          <label>
            In Stock:{" "}
            <input
              name="inStock"
              value={newProduct.inStock}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  handleChange(e);
                }
              }}
            />
          </label>
          <label>
            Description:{" "}
            <input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
            />
          </label>
          <button
            type="button"
            disabled={loading}
            className={`${loading ? "cancel" : ""} submit`}
            onClick={handleSubmit}
          >
            Add Product
            {loading && <div class="loader"></div>}
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => setShowNewProductForm(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPriceList;
