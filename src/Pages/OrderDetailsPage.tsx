import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type OrderDetails = {
  _id: string | undefined;
  createdAt: Date;
  isPaid: boolean;
  isDelivered: boolean;
  paymentMethod: string;
  shippingMethod: string;
  shippingAddress: { city: string; country: string };
  orderItems: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
};

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Paystack",
      shippingMethod: "standard",
      shippingAddress: { city: "Lagos", country: "Nigeria" },
      orderItems: [
        {
          productId: "1",
          name: "jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },

        {
          productId: "2",
          name: "skirt",
          price: 150,
          quantity: 1,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No order details found</p>
      ) : (
        <div className="p-6 md:p-4 rounded-lg border">
          {/* order info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                ORDERDETAILS: #{orderDetails._id}
              </h3>
              <p className="text-gray-400">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col sm:items-end items-start mt-0 md:mt-4">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-500"
                    : "bg-red-100 text-red-600"
                } py-1 px-3 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "pending"}
              </span>

              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-500"
                    : "bg-yellow-100 text-yellow-700"
                } py-1 px-3 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered
                  ? "Order Delivered"
                  : "pending Delivery"}
              </span>
            </div>
          </div>
          {/* customer, Payment, Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Not Yet Paid"}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>
          {/* product list */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link to={`/product/${item.productId}`} className="text-blue-600 hover:underline">
                      {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Back to Orders Link */}
          <Link to="/my-orders" className="text-blue-500 hover:underline hover:text-blue-800">
          Back To My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
