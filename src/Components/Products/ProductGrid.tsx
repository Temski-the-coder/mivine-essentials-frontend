import React from "react";
import { Link } from "react-router-dom";

interface ProductImage {
  url: string;
  alt?: string;
}

interface Product {
  _id: string;
  Images: ProductImage[];
  name?: string;
  price?: number | string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link key={index} to={`/products/${product._id}`} className="block">
          <div className="bg-white rounded-lg p-4">
            <div className="w-full h-96 mb-4">
              <img
                src={product.Images[0].url}
                alt={product.Images[0].alt || "Product Image"}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2">{product.name || "Product Name"}</h3>
            <p className="text-sm text-gray-600 font-medium tracking-tighter">${product.price || "Product Price"}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
