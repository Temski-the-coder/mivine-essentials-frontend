import React from "react";
import { IoPricetags } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";

type cartProducts = {
  productId: number;
  name: string;
  Size: string;
  quantity: string;
  price: string;
  image: string;
};

type CartContentProps = {
  cartProducts: cartProducts[];
};

const cartProducts = [
  {
    productId: 1,
    name: "Mens Classic Retro shirt CR-1",
    Size: "M",
    quantity: "1",
    price: "15,000",
    image:
      "https://charlieharpershirts.com/wp-content/uploads/2024/02/gold.jpg",
  },
  {
    productId: 2,
    name: "Baggy Jeans",
    Size: "L",
    quantity: "1",
    price: "10,000",
    image:
      "https://media.weekday.com/assets/003/65/93/6593b955567dee13ac6250b67d92756351134910_lg-1.jpg?imwidth=768",
  },
  {
    productId: 3,
    name: "Hawaiian Hibiscus Tribal Vintage Motif Family Matching Tank Maxi Dress and Hawaiian Shirt Ver 8 LT9",
    Size: "M",
    quantity: "1",
    price: "35,000",
    image:
      "https://www.polynesianpride.co/cdn/shop/files/lt09-08052411_family-matching-tank-maxi-dress-and-hawaiian-shirt-3_1200x.jpg?v=1715249520",
  },
  {
    productId: 4,
    name: "PICKUR MIND Casual 3d Digital Print Vintage Beach Shirt Men",
    Size: "M",
    quantity: "1",
    price: "28,600",
    image:
      "https://img.fantaskycdn.com/de70a1af3c1313a32eceba5003ab82df_750x.jpeg",
  },
];
const CartContent: React.FC<CartContentProps> = ({ cartProducts }) => {
  return (
    <div>
      {cartProducts.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Your cart is empty.
        </div>
      ) : (
        cartProducts.map((product, index) => (
          <div
            key={index}
            className="flex items-start justify-between py-4 border-b"
          >
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover mr-4 rounded"
              />

              <div>
                <h3 className="w-25">{product.name}</h3>
                <p className="text-sm text-gray-500"> size: {product.Size}</p>
                <div className="flex items-start mt-2 gap-0.5">
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    -
                  </button>
                  <span className="mx-4 mt-2">{product.quantity}</span>
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="flex">
                <TbCurrencyNaira className="mt-0.5 text-xl" />
                {product.price.toLocaleString()}
              </p>
              <button>
                <IoPricetags className="h-6 w-6 mt-2 ml-6" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartContent;
