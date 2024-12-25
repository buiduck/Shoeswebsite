import  { useState, useEffect } from "react";

// Mock data
const mockProducts = [
  { id: 1, name: "Product A", category: "Electronics", price: 200 },
  { id: 2, name: "Product B", category: "Clothing", price: 50 },
  { id: 3, name: "Product C", category: "Electronics", price: 300 },
  { id: 4, name: "Product D", category: "Clothing", price: 100 },
  { id: 5, name: "Product E", category: "Furniture", price: 400 },
];

const ProductFilter = () => {
  const [filters, setFilters] = useState({ category: "", maxPrice: "" });
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  // Lọc sản phẩm khi state filters thay đổi
  useEffect(() => {
    const updatedProducts = mockProducts.filter((product) => {
      const matchesCategory =
        !filters.category || product.category === filters.category;
      const matchesPrice =
        !filters.maxPrice || product.price <= parseInt(filters.maxPrice, 10);

      return matchesCategory && matchesPrice;
    });

    setFilteredProducts(updatedProducts);
  }, [filters]);

  // Cập nhật state filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Product Filter</h1>

      {/* Filters */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Category:
          <select name="category" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
          </select>
        </label>

        <label style={{ marginLeft: "20px" }}>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            placeholder="Enter max price"
            onChange={handleFilterChange}
          />
        </label>
      </div>

      {/* Product List */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
