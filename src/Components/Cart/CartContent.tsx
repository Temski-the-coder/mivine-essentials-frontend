import React from "react";
import { IoPricetags } from "react-icons/io5";
import { useCart } from "../Cart/CartContext";

const CartContent: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useCart();

const cartTotal = cartItems.reduce((sum, product) => {
  return sum + product.price * product.quantity;
}, 0);

return (
  <div>
    {cartItems.length === 0 ? (
      <div className="text-center py-10 text-gray-500">Your cart is empty.</div>
    ) : (
      <>
        {cartItems.map((product) => {
          return (
            <div
              key={product._id}
              className="flex items-start justify-between py-4 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4 rounded"
                />
                <div>
                  <h3>{product.name}</h3>
                  <p className="text-sm text-gray-500">Size: {product.Size}</p>
                  <div className="flex items-start mt-2 gap-0.5">
                    <button
                      className="border rounded px-2 py-1 text-xl font-medium"
                      onClick={() => decreaseQuantity(product._id)}
                    >
                      -
                    </button>
                    <span className="mx-4 mt-2">{product.quantity}</span>
                    <button
                      className="border rounded px-2 py-1 text-xl font-medium"
                      onClick={() => increaseQuantity(product._id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product._id)}
                    className="mt-3 text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p>
                  ₦{(product.price * product.quantity).toLocaleString("en-NG", {
                    minimumFractionDigits: 0,
                  })}
                </p>
                <IoPricetags className="h-6 w-6 mt-2 ml-auto" />
              </div>
            </div>
          );
        })}
        <div className="mt-6 border-t pt-4 text-right">
          <p className="text-lg font-semibold">
            Total: ₦
            {cartTotal.toLocaleString("en-NG", {
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
      </>
    )}
  </div>
);
};

export default CartContent;
