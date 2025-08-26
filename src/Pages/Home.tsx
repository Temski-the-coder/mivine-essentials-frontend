
import Hero from '../Components/Layout/Hero'
import GenderCollection from '../Components/Products/GenderCollection'
import NewArrivals from '../Components/Products/NewArrivals'
import ProductDetails from '../Components/Products/ProductDetails'
import ProductGrid from '../Components/Products/ProductGrid'
import FeaturedCollections from '../Components/Products/FeaturedCollections'
import FeaturesSection from '../Components/Products/FeaturesSection'



const womenWears = [
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
]


const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollection />
        <NewArrivals />

        {/* best seller */}
        <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>

        <ProductDetails />

        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wears For Women
          </h2>
          <ProductGrid products={womenWears} />
        </div>

        <FeaturedCollections />

        <FeaturesSection />
    </div>
  )
}

export default Home