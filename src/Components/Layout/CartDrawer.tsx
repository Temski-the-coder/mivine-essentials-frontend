import { BsCartCheck } from "react-icons/bs";
import { IoEnter } from "react-icons/io5";
import CartContent from "../Cart/CartContent";
// import { useNavigate } from "react-router-dom";

type cartProducts = {
  productId: number;
  name: string;
  Size: string;
  quantity: string;
  price: string;
  image: string;
};

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


interface CartDrawerProps {
  openCart: boolean;
  toggleCartDrawer: () => void;
  cartProducts: cartProducts[];
}

const CartDrawer = ({ openCart, toggleCartDrawer, cartProducts }: CartDrawerProps) => {
  // const navigate = useNavigate();

  // const handleCheckout = () => {
  //   toggleCartDrawer();
  //   navigate("/checkout");
  // };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[23rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        openCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoEnter className="h-6 w-6 text-gray-600 hover:text-blue-600" />
        </button>
      </div>
      {/* close button */}

      {/* Scrollable cart contents */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 cart">Your Cart</h2>
        {/* Components for cart contents */}
        <CartContent cartProducts={cartProducts} />
        {/* Components for cart contents */}
      </div>

      {/* check out button at the button */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-gray-800 py-2 text-white rounded-lg font-semibold hover:bg-black hover:text-blue-100 items-center space-x-1 transition flex justify-center">
          <BsCartCheck /> <span className="mt-0.5">Checkout</span>
        </button>
        <p className="text-xs tracking-tighter text-gray-900 font-serif mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
      {/* check out button at the button */}
    </div>
  );
};

export default CartDrawer;
