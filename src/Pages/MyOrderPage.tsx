import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Order = {
  _id: string;
  createdAt: string;
  shippingAddress: {
    city: string;
    country: string;
    address: string;
  };
  orderItems: {
    name: string;
    price: number;
    image: string;
  }[];
  totalPrice: number;
  isDelivered: boolean;
  isPaid: boolean;
};

const MyOrderPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "1",
          createdAt: new Date().toISOString(),
          shippingAddress: {
            city: "Lagos",
            country: "Nigeria",
            address: "123 Street",
          },
          orderItems: [
            {
              name: "Product 1",
              price: 50,
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 50,
          isDelivered: false,
          isPaid: true,
        },

        {
          _id: "2",
          createdAt: new Date().toISOString(),
          shippingAddress: {
            city: "Lagos",
            country: "Nigeria",
            address: "123 Street",
          },
          orderItems: [
            {
              name: "Product 2",
              price: 150,
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 150,
          isDelivered: false,
          isPaid: true,
        },
      ];
        setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId: string) => {
    navigate(`/order/${orderId}`)
  }
  return (
  <div className="max-w-8xl mx-auto p-7 sm:p-6">
    <h2 className="text-2xl md:text-xl font-bold mb-6">My Orders</h2>
    <div className="relative shadow-md sm:rounded-lg overflow-hidden"></div>
    <table className="min-w-full text-left text-gray-500">
        <thead className="bg-gray-200 text-xs uppercase text-gray-700">
            <tr>
                <th className="py-3 md:py-2 px-8">Image</th>
                <th className="py-3 md:py-2 px-8">Order ID</th>
                <th className="py-3 md:py-2 px-8">Created</th>
                <th className="py-3 md:py-2 px-8">Shipping Address</th>
                <th className="py-3 md:py-2 px-8">Items</th>
                <th className="py-3 md:py-2 px-8">Total Price</th>
                <th className="py-3 md:py-2 px-8">Status</th>
            </tr>
        </thead>
        <tbody>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <tr key={order._id} 
                    onClick={() => handleRowClick(order._id)}
                    className="border-b hover:bg-gray-50">
                        <td className="py-3 md:py-2 px-8">
                            <img
                                src={order.orderItems[0].image}
                            alt={order.orderItems[0].name}
                            className="w-16 h-16 object-cover rounded"
                        />
                    </td>
                    <td className="py-4 md:py-2 px-8 font-medium text-gray-600 whitespace-nowrap">#{order._id}</td>
                    <td className="py-3 md:py-2 px-8">
                        {new Date(order.createdAt).toLocaleDateString()}
                        {""} <br />
                        {new Date(order.createdAt).toLocaleTimeString()}
                    </td>
                    <td className="py-3 md:py-2 px-8">
                        {`${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.country}`}
                    </td>
                    <td className="py-3 md:py-2 px-8">
                        {order.orderItems.map((item, index) => (
                            <div key={index}>{item.name}</div>
                        ))}
                    </td>
                    <td className="py-3 md:py-2 px-8">${order.totalPrice}</td>
                    <td className="py-3 md:py-2 px-8">
                        <span className={`${order.isPaid ? ' text-green-600' : 'text-red-600'}`}>
                        {order.isPaid ? "Paid" : "Not Paid"}
                        </span>
                    </td>
                </tr>
            )
            )) : (
                <tr>
                    <td colSpan={7} className="py-3 md:py-2 px-4 text-center">
                        No orders found
                    </td>
                </tr>
            )}
        </tbody>
    </table>
  </div>
  );
};

export default MyOrderPage;
