import { useCart } from "../Components/Cart/CartContext";



const OrderConfirmationPage = () => {
  const { cartItems } = useCart();

  const Checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: cartItems,
  shippingAddress: {
      address: "New London Fashion Street",
      city: "Lagos",
      Country: "Nigeria",
    },
    paymentMethod: "Paystack", // ✅ dynamic later if you support multiple gateways
  };

  const subtotal = Checkout.checkoutItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const calculateEstimatedDelivery = (createdAt: Date | string) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); //10 days delivery window
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for your Purchase!
      </h1>

      {Checkout && (
        <div className="p-6 rounded-lg border shadow-sm">
          {/* Order Info */}
          <div className="flex justify-between mb-10">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {Checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(Checkout.createdAt).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(Checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-10">
            {Checkout.checkoutItems.map((item) => (
              <div key={item._id} className="flex items-center mb-4 border-b pb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.Size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md font-semibold">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment & Delivery */}
          <div className="grid grid-cols-2 gap-8">
            {/* Payment */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-700">{Checkout.paymentMethod}</p>
              <p className="font-medium">
                Total Paid: ₦{subtotal.toLocaleString()}
              </p>
            </div>

            {/* Delivery */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-500">{Checkout.shippingAddress.address}</p>
              <p className="text-gray-500">
                {Checkout.shippingAddress.city}, {Checkout.shippingAddress.Country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
