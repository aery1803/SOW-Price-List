import { FcSearch, FcAddRow, FcPrint, FcSupport } from "react-icons/fc";
import Table from "./Table";

const MainContent = ({
  searchArticle,
  setSearchArticle,
  searchProduct,
  setSearchProduct,
  products,
  setProducts,
  sortColumn,
  handleSort,
  sortDirection,
  advancedMode,
  setShowNewProductForm,
  fetchPriceList,
}) => {
  return (
    <div className="main-content">
      <div className="filter-actions-wrapper">
        <div className="search-fields">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search Article No..."
              value={searchArticle}
              onChange={(e) => setSearchArticle(e.target.value)}
            />
            <FcSearch />
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
            />
            <FcSearch />
          </div>
        </div>
        <div className="buttons">
          <button
            className="new-product"
            onClick={() => setShowNewProductForm(true)}
          >
            <span>New Product</span> <FcAddRow />
          </button>
          <button className="print-list" onClick={() => window.print()}>
            <span>Print List</span> <FcPrint />
          </button>
          <button className="advanced-mode">
            <span>Advanced mode</span> <FcSupport />
          </button>
        </div>
      </div>

      <Table
        products={products}
        setProducts={setProducts}
        sortColumn={sortColumn}
        handleSort={handleSort}
        sortDirection={sortDirection}
        advancedMode={advancedMode}
        fetchPriceList={fetchPriceList}
      />
    </div>
  );
};

export default MainContent;
