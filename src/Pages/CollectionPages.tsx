import { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../Components/Products/FilterSideBar";
import ProductGrid from "../Components/Products/ProductGrid";
import SortOptions from "../Components/Products/SortOptions";

type Product = {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  brand: string;
  material: string;
  sizes: string[];
  colors: string[];
  Images: { url: string; alt: string }[];
};

const CollectionPages = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.stopPropagation();
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isSidebarOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: "1",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "2",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=9",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "3",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=10",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "4",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=11",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "5",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=12",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "6",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=13",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "7",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=14",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "8",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=15",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "9",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=16",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "10",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=17",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "11",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=18",
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: "12",
          name: "Casual Shirt",
          price: 50,
          originalPrice: 70,
          description: "A casual shirt for everyday wear.",
          brand: "Versace",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: "https://picsum.photos/500/500?random=19",
              alt: "Casual Shirt Image",
            },
          ],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter /> Filter
      </button>

      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && <div className="fixed inset-0 z-40 lg:hidden" />}

      {/* Desktop Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 z-50 lg:translate-x-0 lg:static`}
      >
        <FilterSideBar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* ProductGrid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPages;
