import { useState } from "react";

const UserManagement = () => {
  const user = [
    {
      _id: "User-1",
      name: "john snow",
      email: "johnsnow@gmail.com",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    // reset form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleRoleChange = (userId: string, newRole: string) => {
    console.log({ id: userId, role: newRole });
  };

  const handleDeleteUser = (userId: string) => {
    if(window.confirm("Are you sure you want to delete this account")) {
      console.log(`deleting user with ID: ${userId}`);
      
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl cart mb-4">User Role Management Page</h2>
      {/* Add New User Form */}
      <div className="p-6 rounded-lg mb-6">
        <h3>Add New User</h3>

        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleNameChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* email */}
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleNameChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* password */}
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleNameChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-500">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleNameChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-2 rounded hover:bg-red-600"
          >
            Add User
          </button>
        </form>
      </div>

      {/* registered user list */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full text-center text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <select
                    name="role"
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
