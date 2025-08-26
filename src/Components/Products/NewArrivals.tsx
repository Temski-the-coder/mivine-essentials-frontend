import { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      Images: [
        {
          url: "https://images.riverisland.com/image/upload/t_ProductImagePortraitSmall/f_auto/q_auto/377183_alt1?_a=BATAV5AA0",
          alt: "Stylish Jacket Image",
        },
      ],
    },

    {
      _id: "2",
      name: "Cargo Shorts",
      price: 120,
      Images: [
        {
          url: "https://png.pngtree.com/png-vector/20240801/ourmid/pngtree-men-s-casual-cargo-cut-pants-shorts-png-image_13321361.png",
          alt: "Cargo Shorts Image",
        },
      ],
    },

    {
      _id: "3",
      name: "Crop Tops",
      price: 120,
      Images: [
        {
          url: "https://media.istockphoto.com/id/1457860785/photo/white-crop-top-mockup-with-round-neckline-3d-rendering-female-t-shirt-with-label-isolated-on.jpg?s=612x612&w=0&k=20&c=pUEaMzO-a5Bjj6C6vqFbOIuizGX3erl2DCRu0G1qfD0=",
          alt: "Crop Tops Image",
        },
      ],
    },

    {
      _id: "4",
      name: "Wide-brimmed Hats & Bucket Hats",
      price: 120,
      Images: [
        {
          url: "https://www.shutterstock.com/shutterstock/videos/3589563953/thumb/1.jpg?ip=x480",
          alt: "Wide-brimmed Hats & Bucket Hats Image",
        },
      ],
    },

    {
      _id: "5",
      name: "Two-Piece Outfits",
      price: 120,
      Images: [
        {
          url: "https://m.media-amazon.com/images/I/51d3tzt98sL._SY1000_.jpg",
          alt: "Two-Piece Outfits Image",
        },
      ],
    },

    {
      _id: "6",
      name: "Lightweight Kimonos",
      price: 120,
      Images: [
        {
          url: "https://m.media-amazon.com/images/I/71aY3sV3HHL._AC_SX679_.jpg",
          alt: "Lightweight Kimonos Image",
        },
      ],
    },

    {
      _id: "7",
      name: "Linen Shirts",
      price: 120,
      Images: [
        {
          url: "https://m.media-amazon.com/images/I/71NuqQbi1FL._AC_SY879_.jpg",
          alt: "Linen Shirts Image",
        },
      ],
    },

    {
      _id: "8",
      name: "Cargo pants",
      price: 120,
      Images: [
        {
          url: "https://m.media-amazon.com/images/I/61pco5jZ4wL._AC_UL480_FMwebp_QL65_.jpg",
          alt: "Cargo pants Image",
        },
      ],
    },
  ];

  const handleMouseDown = (e: { pageX: number; }) => {
    setIsScrolling(true);
    if (scrollRef.current) {
      setScrollPosition(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsScrolling(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isScrolling || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - scrollPosition) * 2; // Adjust scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: string) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="w-full max-w-6xl mx-auto text-center mb-10 relative">
        <h1 className="text-3xl font-bold mb-4">Explore New Arrivals</h1>
        <p className="text-lg text-gray-600 mb-8">
          Check out the latest additions to our collection to find your perfect
          fit for the summer!
        </p>

        {/* Scroll Button */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 mx-auto w-full md:w-[100px]">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`bg-white text-black rounded-full border ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IoIosArrowDropleftCircle className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`bg-white text-black rounded-full border ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IoIosArrowDroprightCircle className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollable content */}
      <div ref={scrollRef} className={`w-full max-w-6xl mx-auto overflow-x-auto ${isScrolling ? "cursor-grabbing" : "cursor-grab"}`}>
        <div
          className="flex space-x-6 py-2"
          onMouseUp={handleMouseUpOrLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {newArrivals.map((product) => (
            <div key={product._id} className="relative w-72 flex-shrink-0">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.Images[0]?.url}
                  alt={product.Images[0]?.alt || product.name}
                  className="w-full h-full object-cover rounded-lg"
                  draggable="false"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 text-white bg-black/50 backdrop-blur-md p-4 rounded-b-lg">
                <Link to={`/products/${product._id}`} className="block">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-300">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
