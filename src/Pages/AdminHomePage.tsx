import { Link } from "react-router-dom";


const AdminHomePage = () => {
     const Orders = [
        {
            _id: 123123,
            user: {
                name: "John Doe",
            },
            totalPrice: 110,
            status: "Processing",
        },

        {
            _id: 123123,
            user: {
                name: "John Doe",
            },
            totalPrice: 110,
            status: "Processing",
        },
     ];


  return (
    <div className="max-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold">Revenue</h2>
                <p className="text-2xl">$100000</p>
            </div>

            <div className="p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold">Total Orders</h2>
                <p className="text-2xl">200</p>
                <Link to="/admin/orders" className="text-blue-500 hover:text-blue-950 underline">
                Manage Orders
                </Link>
            </div>

            <div className="p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold">Total Products</h2>
                <p className="text-2xl">100</p>
                 <Link to="/admin/products" className="text-blue-500 hover:text-blue-950 underline">
                Manage Products
                </Link>
            </div>
        </div>
        <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">User</th>
                            <th className="py-3 px-4">Total Price</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Orders.length > 0 ? (
                            Orders.map((orders) =>(
                                <tr key={orders._id} className="border-b hover:bg-gray-50 cursor-pointer">
                                    <td className="py-2 px-4 border-r-2">{orders._id}</td>
                                    <td className="py-2 px-4 border-r-2">{orders.user.name}</td>
                                    <td className="py-2 px-4 border-r-2">{orders.totalPrice}</td>
                                    <td className="py-4 px-4">{orders.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="p-4 text-center text-gray-500">
                                    No Recent Things Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AdminHomePage