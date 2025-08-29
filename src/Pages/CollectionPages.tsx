import { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../Components/Products/FilterSideBar";
import ProductGrid from "../Components/Products/ProductGrid";
import SortOptions from "../Components/Products/SortOptions";
import MensPlainTwoPieceFit from "../assets/Men's wears/download (10).jpg"
import VintageFit from "../assets/Women's wears/download (17).jpg"
import SummerFit from "../assets/Women's wears/download (16).jpg"
import GrooveVintage from "../assets/Men's wears/Ensemble deux pièces .jpg"
import HommensCamisa from "../assets/Men's wears/Homens Camisa Alce Bordado Bloco de cores Sem Camiseta.jpg"
import CargoFit from "../assets/Men's wears/download (9).jpg"
import VintagePalm from "../assets/Men's wears/Men's Palm Tree Print Short Sleeve Shirt And Shorts Casual Vacation Suit.jpg"
import VintageSHEIN from "../assets/Men's wears/WishList _ SHEIN.jpg"
import ApricotFit from "../assets/Women's wears/Apricot Plaid Shirt Collar Bow Tie Ladies Two-Piece Set.jpg"
import TropicalFit from "../assets/Women's wears/Plus Tropical Print Drop Shoulder Top With Shorts.jpg"
import HawaiiFit from "../assets/Women's wears/Search WoMens Hawaiian button _ SHEIN USA.jpg"
import SheinFit from "../assets/Women's wears/SHEIN VCAY Plus Button Front Blouse & Tie Waist Shorts _ SHEIN USA.jpg"

type Product = {
  _id: number;
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
          _id: 1,
          name: "Men's Plain two piece fit",
          price: 15000,
          originalPrice: 20000,
          description: "A Fine piece for outings.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Black", "Brown"],
          Images: [
            {
              url: MensPlainTwoPieceFit,
              alt: "Men's Plain two piece fit Image",
            },
          ],
        },

        {
          _id: 2,
          name: "Women's Vintage fit",
          price: 15000,
          originalPrice: 17000,
          description: "A Complete vintage fit for women during the summer.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Green"],
          Images: [
            {
              url: VintageFit,
              alt: "Summer Vintage Fit for women",
            },
          ],
        },

        {
          _id: 3,
          name: "Summer fit",
          price: 15000,
          originalPrice: 17000,
          description: "A fine fit for any outing.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Black", "Orange"],
          Images: [
            {
              url: SummerFit,
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: 4,
          name: "vintage fit with palm groove design",
          price: 10000,
          originalPrice: 20000,
          description: "The perfect fit for beach hangouts.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Black", "White"],
          Images: [
            {
              url: GrooveVintage,
              alt: "Casual Shirt Image",
            },
          ],
        },

        {
          _id: 5,
          name: "Hommens Vintage Shirt design",
          price: 15000,
          originalPrice: 20000,
          description: "A stylish vintage shirt for men.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Gray", "Red", "Black"],
          Images: [
            {
              url: HommensCamisa,
              alt: "Hommens Vintage Shirt design Image",
            },
          ],
        },

        {
          _id: 6,
          name: "Cargo Fit",
          price: 16000,
          originalPrice: 23000,
          description: "The perfect fit for any occasion.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Blue", "White"],
          Images: [
            {
              url: CargoFit,
              alt: "Cargo Fit Image",
            },
          ],
        },

        {
          _id: 7,
          name: "Men's Palm Tree Vintage Fit",
          price: 11000,
          originalPrice: 18000,
          description: "The Right Fit for Summer Days.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Brown"],
          Images: [
            {
              url: VintagePalm,
              alt: "Men's Palm Tree Vintage Fit Image",
            },
          ],
        },

        {
          _id: 8,
          name: "Apricot Fit for Women",
          price: 16000,
          originalPrice: 24000,
          description: "A chic apricot fit for women.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Brown", "White"],
          Images: [
            {
              url: ApricotFit,
              alt: "Apricot Fit for Women Image",
            },
          ],
        },

        {
          _id: 9,
          name: "Vintage SHEIN shirt",
          price: 10000,
          originalPrice: 18000,
          description: "A stylish vintage shirt for men.",
          brand: "SHEIN",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Brown", "White"],
          Images: [
            {
              url: VintageSHEIN,
              alt: "Vintage SHEIN Shirt Image",
            },
          ],
        },

        {
          _id: 10,
          name: "Tropical Vintage Fit",
          price: 18000,
          originalPrice: 24000,
          description: "A stylish tropical shirt fit for women.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Brown"],
          Images: [
            {
              url: TropicalFit,
              alt: "Tropical Vintage Fit Image",
            },
          ],
        },

        {
          _id: 11,
          name: "Vintage Hawaii Fit",
          price: 15000,
          originalPrice: 25000,
          description: "A Beautiful Vintage Hawaii Fit for Women.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Orange"],
          Images: [
            {
              url: HawaiiFit,
              alt: "Vintage Hawaii Fit Image",
            },
          ],
        },

        {
          _id: 12,
          name: "SHEIN Women's Fit",
          price: 17000,
          originalPrice: 25000,
          description: "A Stylish SHEIN Women's Fit.",
          brand: "Mivine Essentials",
          material: "Cotton",
          sizes: ["M", "L"],
          colors: ["Green"],
          Images: [
            {
              url: SheinFit,
              alt: "SHEIN Women's Fit Image",
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
