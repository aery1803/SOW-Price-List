import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { createPriceList, fetchAllPriceLists } from "./utils/api";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MainContent from "./components/MainContent";
import NewPriceList from "./components/NewPriceList";

const PriceListPage = () => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [searchArticle, setSearchArticle] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [sortColumn, setSortColumn] = useState("articleNo");
  const [sortDirection, setSortDirection] = useState("asc");
  const [advancedMode, setAdvancedMode] = useState(true);
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  // Filter products based on search
  const filteredProducts = products.filter(
    (product) =>
      product.articleNo.toString().includes(searchArticle) &&
      product.productOrService
        .toLowerCase()
        .includes(searchProduct.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (column) => {
    setSortColumn(column);
    setSortDirection(
      sortColumn === column ? (sortDirection === "asc" ? "desc" : "asc") : "asc"
    );
  };

  const addProduct = async (newProduct) => {
    newProduct = {
      articleNo: Number(newProduct.articleNo),
      productOrService: newProduct.productOrService,
      inPrice: Number(newProduct.inPrice),
      price: Number(newProduct.price),
      unit: newProduct.unit,
      inStock: Number(newProduct.inStock),
      description: newProduct.description,
    };
    await createPriceList(newProduct);
    await fetchPriceList();
    setShowNewProductForm(false);
  };

  const fetchPriceList = async () => {
    setLoadingProducts(true);
    const products = await fetchAllPriceLists();
    setProducts(products);
    setLoadingProducts(false);
    return products;
  };

  useEffect(() => {
    fetchPriceList();
  }, []);

  return (
    <div className="main-container">
      <Header />
      {loadingProducts && (
        <div className="loader-wrapper">
          <Loading />
        </div>
      )}
      <div className="main-content-wrapper">
        <Menu />
        <MainContent
          searchArticle={searchArticle}
          setSearchArticle={setSearchArticle}
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
          products={sortedProducts}
          setProducts={setProducts}
          sortColumn={sortColumn}
          handleSort={handleSort}
          sortDirection={sortDirection}
          advancedMode={advancedMode}
          setAdvancedMode={setAdvancedMode}
          fetchPriceList={fetchPriceList}
          setShowNewProductForm={setShowNewProductForm}
        />
      </div>
      {showNewProductForm && (
        <NewPriceList
          setShowNewProductForm={setShowNewProductForm}
          addProduct={addProduct}
        />
      )}
    </div>
  );
};

export default PriceListPage;
