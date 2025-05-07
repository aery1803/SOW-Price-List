import React from "react";
import {
  FcAlphabeticalSortingZa,
  FcAlphabeticalSortingAz,
  FcDeleteDatabase,
} from "react-icons/fc";
import { deletePriceList, updatePriceList } from "../utils/api";
import { toast } from "react-toastify";

const Table = ({
  products,
  setProducts,
  sortColumn,
  handleSort,
  sortDirection,
  advancedMode,
  fetchPriceList,
}) => {
  const menuDropdownRefs = React.useRef([]);
  React.useEffect(() => {
    menuDropdownRefs.current = products.map(
      (_, i) => menuDropdownRefs.current[i] || React.createRef()
    );
  }, [products]);
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      menuDropdownRefs.current.forEach((ref) => {
        if (ref && !ref.contains(event.target)) {
          ref.style.height = 0; // Collapse the dropdown
        }
      });
    };

    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const columns = advancedMode
    ? [
        { key: "", label: "", width: "0%" },
        {
          key: "articleNo",
          type: "number",
          label: "Article No.",
          width: "12%",
        },
        {
          key: "productOrService",
          type: "text",
          label: "Product/Service",
          width: "25%",
        },
        { key: "inPrice", type: "float", label: "In Price", width: "9%" },
        { key: "price", type: "float", label: "Price", width: "9%" },
        { key: "unit", type: "text", label: "Unit", width: "9%" },
        { key: "inStock", type: "number", label: "In Stock", width: "9%" },
        {
          key: "description",
          type: "text",
          label: "Description",
          width: "25%",
        },
        { key: "action", label: "", width: "2rem" },
      ]
    : [
        { key: "articleNo", label: "Article No." },
        { key: "productOrService", label: "Product/Service" },
        { key: "price", label: "Price" },
        { key: "unit", label: "Unit" },
        { key: "inStock", label: "In Stock" },
      ];

  return (
    <table className="product-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => handleSort(col.key)}
              style={{ width: col?.width }}
            >
              <div className="title">
                {col.label}
                {sortColumn === col.key &&
                  (sortDirection === "asc" ? (
                    <FcAlphabeticalSortingAz />
                  ) : (
                    <FcAlphabeticalSortingZa />
                  ))}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            {columns.map((col) =>
              col.key === "" ? (
                <td
                  key={"acive"}
                  className="table-arrow-pointer"
                  style={{ width: col?.width }}
                >
                  <div className="arrow-icon">
                    <span className="left-bar"></span>
                    <span className="right-bar"></span>
                  </div>
                </td>
              ) : col.key === "action" ? (
                <td
                  key={col.key}
                  style={{ width: col?.width }}
                  onClick={() => {
                    if (menuDropdownRefs.current[index]) {
                      menuDropdownRefs.current[index].style.height = "2rem";
                    }
                  }}
                >
                  <div className="action-dots menu-dropdown">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <div
                    className="dropdown-content"
                    ref={(el) => (menuDropdownRefs.current[index] = el)}
                  >
                    <div
                      className="delete-wrapper"
                      onClick={() => {
                        setProducts(() => {
                          const updatedProducts = [...products];
                          updatedProducts.splice(index, 1);

                          return updatedProducts;
                        });
                        deletePriceList(product.id);
                      }}
                    >
                      Delete <FcDeleteDatabase />
                    </div>
                  </div>
                </td>
              ) : (
                <td
                  key={col.key}
                  title={product[col.key]}
                  style={{ width: col?.width }}
                >
                  <div className="input-wrapper">
                    <input
                      value={product[col.key] || ""}
                      onChange={({ target: { value } }) => {
                        if (
                          col.type === "text" ||
                          (col.type === "number" && /^\d*$/.test(value)) ||
                          (col.type === "float" && /^\d*\.?\d*$/.test(value))
                        ) {
                          setProducts(() => {
                            const updatedProducts = [...products];
                            updatedProducts[index] = {
                              ...updatedProducts[index],
                              [col.key]:
                                col.type === "text" ? value : Number(value),
                            };
                            return updatedProducts;
                          });
                        }
                      }}
                      onBlur={async ({ target: { value } }) => {
                        try {
                          await updatePriceList(product.id, {
                            [col.key]:
                              col.type === "text" ? value : Number(value),
                          });
                          toast.success("PriceList update successfully!");
                        } catch (err) {
                          console.log("Error :", err);
                          toast.error("Failed to update PriceList!");
                          fetchPriceList();
                        }
                      }}
                    />
                  </div>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
