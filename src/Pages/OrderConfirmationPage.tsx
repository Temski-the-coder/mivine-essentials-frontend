const Checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "xl",
      price: 300,
      quantity: "1",
      image: "https://picsum.photos/150?random=1",
    },

    {
      productId: "2",
      name: "Dildo",
      color: "brown",
      size: "xl",
      price: 200,
      quantity: "2",
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "New London fashion street",
    city: "Lagos",
    Country: "Nigeria",
  },
};

const OrderConfirmationPage = () => {
  const calculateEstimatedDelivery = (createdAt: Date | string) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for your Purchase!
      </h1>

      {Checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order Id and Date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {Checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(Checkout.createdAt).toLocaleString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(Checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* ordered items */}
          <div className="mb-20">
            {Checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>{" "}
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>

                <div className="ml-auto text-right">
                 <p className="text-md">${item.price}</p>
                 <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        {/* Payment and delivery info */}
        <div className="grid grid-cols-2 gap-8">
        {/* payment info */}
        <div>
            <h4 className="text-lg font-semibold mb-2">Payment</h4>
            <p className="text-gray-700">Paystack</p>
        </div>

        {/* Delivery info */}
        <div>
            <h4 className="text-lg font-semibold mb-2">Delivery</h4>
            <p className="text-gray-500">{Checkout.shippingAddress.address}</p>
            <p className="text-gray-500">{Checkout.shippingAddress.city}, {""} {Checkout.shippingAddress.Country}</p>
        </div>

        </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
