import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayStackButton from "./PayStackButton";
import { useCart } from "./CartContext";


const CheckOut = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [shippingAddress, setShippingAddress] = useState({
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
  });

  const handleCreateCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate checkout creation
    setCheckoutId("checkout_12345");
  };

  const handlePaymentSuccess = (details: unknown) => {
    console.log("Payment successful:", details);
    // Navigate to order confirmed page or handle payment logic
    navigate("/order-confirmation");
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // PayStackButton props are defined in its own file or via TypeScript types elsewhere.
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl uppercase mb-6">Checkout</h1>
        <form action="" onSubmit={handleCreateCheckout}>
          <h2>Contact Details</h2>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={shippingAddress.email}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  email: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label htmlFor="" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="block text-gray-700">
                City
              </label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="" className="block text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Country
            </label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={shippingAddress.phoneNumber}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phoneNumber: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                {/* paystack component */}
                <PayStackButton
                  amount={subtotal}
                  onSuccess={() => handlePaymentSuccess({})}
                  onError={() =>
                    alert("Payment Failed, Try Again after 1 minute")
                  }
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* Right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg mb-4 font-semibold">Order Summary</h2>

      <div className="border-t py-4 mb-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in your cart.</p>
        ) : (
          cartItems.map((product) => (
            <div
              key={product._id}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4 rounded"
                />
                <div>
                  <h3 className="text-md font-medium">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.Size}</p>
                  <p className="text-gray-500">Qty: {product.quantity}</p>
                </div>
              </div>
              <p className="text-xl">
                ₦{(product.price * product.quantity).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between items-center text-lg mb-2">
        <p>Subtotal</p>
        <p>₦{subtotal.toLocaleString()}</p>
      </div>

      <div className="flex justify-between items-center text-lg mb-2">
        <p>Shipping</p>
        <p className="text-green-600 font-medium">Free</p>
      </div>

      <div className="flex justify-between items-center text-lg mt-4 border-t pt-4 font-semibold">
        <p>Total</p>
        <p>₦{subtotal.toLocaleString()}</p>
      </div>
    </div>
    </div>
  );
};

export default CheckOut;
