import React, { useState } from "react";

type ProductData = {
  name: string;
  description: string;
  price: number;
  countInStock: number;
  sku: string;
  category: string;
  brand: string;
  sizes: string[];
  colors: string[];
  collections: string;
  material: string;
  gender: string;
  images: {
    [x: string]: string;
    url: string;
  }[];
};

const EditProductPage = () => {
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=18",
      },
      {
        url: "https://picsum.photos/150?random=19",
      },
    ],
  });

  const handleProductName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files && files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: imageUrl }],
      }));
    }
    console.log(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(productData);
    
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Products</h2>
      <form action="" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleProductName}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* description */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleProductName}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={5}
            required
          ></textarea>
        </div>

        {/* price */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleProductName}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* count in stock */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Count In Stock
          </label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleProductName}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleProductName}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* colors */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* images */}
        <div className="mb-6 gap-4">
          <label htmlFor="" className="block font-bold mb-2">
            Upload Images
          </label>
          <label
            htmlFor="product-image-upload"
            className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer"
          >
            Choose Files
          </label>
          <input
            id="product-image-upload"
            type="file"
            onChange={handleImageUpload}
            className="hidden"
          />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
