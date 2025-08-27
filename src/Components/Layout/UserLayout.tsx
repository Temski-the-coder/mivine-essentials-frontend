import React from "react";
import Header from "../Common/Header";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
import CartDrawer from "../Layout/CartDrawer";

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

const UserLayout = () => {
  const [openCart, setOpenCart] = React.useState(false);

  const toggleCartDrawer = () => setOpenCart(!openCart);

  return (
    <div>
      <Header />
      <NavBar cartProducts={cartProducts} />
      <Outlet />
      <Footer />
      <CartDrawer
        openCart={openCart}
        toggleCartDrawer={toggleCartDrawer}
        cartProducts={cartProducts}
      />
    </div>
  );
};

export default UserLayout;
