import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setOpenMobileNav(!openMobileNav);
  };

  const toggleCartDrawer = () => {
    setOpenCart(!openCart);
  };
  return (
    <>
      <nav className="container flex mx-auto items-center justify-between px-6 py-4 border-b border-gray-700">
        <div>
          <Link to="/" className="text-2xl logo">
            Mivine Essentials
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/collections/all"
            className="text-gray-600 hover:text-black text-sm uppercase list"
          >
            men
          </Link>

          <Link
            to="#"
            className="text-gray-600 hover:text-black text-sm uppercase list"
          >
            women
          </Link>

          <Link
            to="#"
            className="text-gray-600 hover:text-black text-sm uppercase list"
          >
            Children
          </Link>

          <Link
            to="#"
            className="text-gray-600 hover:text-black text-sm uppercase list"
          >
            Top Wears
          </Link>

          <Link
            to="#"
            className="text-gray-600 hover:text-black text-sm uppercase list"
          >
            Bottom Wears
          </Link>
        </div>
        {/* right side */}
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="block bg-black px-3 rounded-lg text-sm text-white hover:bg-blue-800">Click to become Admin</Link>

          <Link to="/profile" className="text-gray-500 hover:text-black">
            <FaRegCircleUser className="h-6 w-6" />
          </Link>

          <button
            onClick={toggleCartDrawer}
            className="relative text-gray-500 hover:text-black cursor"
          >
            <MdOutlineShoppingCartCheckout className="h-6 w-6 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1 py-0.3">
              4
            </span>
          </button>

          {/* Searchbar */}
          <SearchBar />
          {/* Searchbar */}

          <button onClick={toggleMobileNav} className="md:hidden">
            <HiBars3 className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>
      <CartDrawer openCart={openCart} toggleCartDrawer={toggleCartDrawer} />

      {/* mobile navbar */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          openMobileNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileNav}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-xl ">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleMobileNav}
              className="block text-gray-600 hover:text-blue-600"
            >
              Men
            </Link>

            <Link
              to="#"
              onClick={toggleMobileNav}
              className="block text-gray-600 hover:text-blue-600"
            >
              Women
            </Link>

            <Link
              to="#"
              onClick={toggleMobileNav}
              className="block text-gray-600 hover:text-blue-600"
            >
              Children
            </Link>

            <Link
              to="#"
              onClick={toggleMobileNav}
              className="block text-gray-600 hover:text-blue-600"
            >
              Top Wears
            </Link>

            <Link
              to="#"
              onClick={toggleMobileNav}
              className="block text-gray-600 hover:text-blue-600"
            >
              Bottom Wears
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
