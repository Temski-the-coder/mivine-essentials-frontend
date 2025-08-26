import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  _id: "1",
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "A stylish jacket perfect for all seasons.",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  Quantity: 1,
  colors: ["Red", "Black"],
  Images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      alt: "Stylish Jacket Image",
    },

    {
      url: "https://picsum.photos/500/500?random=2",
      alt: "Stylish Jacket Image 2",
    },
  ],
};

const relatedProducts = [
  {
    _id: "1",
    name: "Casual Shirt",
    price: 50,
    originalPrice: 70,
    description: "A casual shirt for everyday wear.",
    brand: "Versace",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        alt: "Casual Shirt Image",
      },
    ],
  },

  {
    _id: "2",
    name: "Casual Shirt",
    price: 50,
    originalPrice: 70,
    description: "A casual shirt for everyday wear.",
    brand: "Versace",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        alt: "Casual Shirt Image",
      },
    ],
  },

  {
    _id: "3",
    name: "Casual Shirt",
    price: 50,
    originalPrice: 70,
    description: "A casual shirt for everyday wear.",
    brand: "Versace",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        alt: "Casual Shirt Image",
      },
    ],
  },

  {
    _id: "4",
    name: "Casual Shirt",
    price: 50,
    originalPrice: 70,
    description: "A casual shirt for everyday wear.",
    brand: "Versace",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        alt: "Casual Shirt Image",
      },
    ],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct.Images.length > 0) {
      setMainImage(selectedProduct.Images[0].url);
    }
  }, [selectedProduct]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to Cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart successfully!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 5000); // Re-enable button after 5 seconds
    // Add the product to the cart logic here
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.Images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `thumbnail ${index}`}
                className={`w-32 h-32 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt={selectedProduct.Images[0].alt || "Main Product Image"}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          {/* mobile thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.Images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `thumbnail ${index}`}
                className={`w-32 h-32 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* right side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl font-bold mb-2">{selectedProduct.name}</h1>
            <p className="text-lg text-gray-700 mb-4">
              ${selectedProduct.price}{" "}
              <span className="line-through text-gray-500">
                ${selectedProduct.originalPrice}
              </span>
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold">Brand:</h3>
              <p>{selectedProduct.brand}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Material:</h3>
              <p>{selectedProduct.material}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Sizes:</h3>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 rounded border ${
                      selectedSize === size
                        ? "border-blue-500 bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Colors:</h3>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full ${
                      selectedColor === color
                        ? "ring-2 ring-blue-500"
                        : "ring-2 ring-gray-500"
                    }`}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.8)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-800">Quantity</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black w-full text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ${
                isButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-80"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "Add To Cart"}
            </button>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2> 
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
