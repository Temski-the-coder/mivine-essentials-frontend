
import Hero from '../Components/Layout/Hero'
import GenderCollection from '../Components/Products/GenderCollection'
import NewArrivals from '../Components/Products/NewArrivals'
import ProductDetails from '../Components/Products/ProductDetails'
import ProductGrid from '../Components/Products/ProductGrid'
import FeaturedCollections from '../Components/Products/FeaturedCollections'
import FeaturesSection from '../Components/Products/FeaturesSection'
import GBVintage from "../assets/Men's wears/download (1).jpg"
import DLVintage from "../assets/Men's wears/download (2).jpg"
import GuinnessVintage from "../assets/Men's wears/download (6).jpg"
import GeoPrintVintage from "../assets/Men's wears/Men Geo Print Shirt & Drawstring Waist Shorts Without Tee.jpg"
import PaisleyVintage from "../assets/Men's wears/Men Paisley Scarf Print Shirt & Shorts Without Tee.jpg"
import Manfinity from "../assets/Men's wears/Manfinity RSRT Men Graphic Print Shirt & Drawstring Waist Shorts Without Tee _ SHEIN USA.jpg"
import StyleFit from "../assets/Men's wears/Teen Boys' Casual Street Style Short Sleeve Shirt And Long Pants Two Piece Set, Urban College Style.jpg"
import TropicalVintage from "../assets/Men's wears/Men Tropical Print Shirt & Drawstring Waist Shorts Without Tee.jpg"
import WideLeg from "../assets/Women's wears/Wide leg crop top two piece loose fit.jpg"
import EnsembleFit from "../assets/Women's wears/Ensemble tee-shirt à manches.jpg"
import SHEINFit from "../assets/Women's wears/SHEIN.jpg"
import SHEINFit2 from "../assets/Women's wears/Welcome to SHEIN.jpg"
import SHEINFit3 from "../assets/Women's wears/2pcs Women Plus Size Asymmetric Hem Top & Wide Leg Pants Set, Floral Design.jpg"
import SHEINFit4 from "../assets/Women's wears/SHEIN VCAY Plus Button Front Blouse & Tie Waist Shorts _ SHEIN USA.jpg"
import SHEINFit5 from "../assets/Women's wears/set due pezzi top a maniche lunghe stampa plus - Temu Italy.jpg"
import FloralFit from "../assets/Women's wears/Plus Size Floral Printed Short Sleeve Jumpsuit.jpg"


const MenWears = [
  {
    _id: 1,
    name: "Gray and Brown Vintage Shirt",
    price: 10000,
    originalPrice: 15000,
    description: "A Vintage shirt for Unique Events.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Gray", "Brown"],
    Images: [
      {
        url: GBVintage,
        alt: "Gray and Brown Vintage Shirt Image",
      },
    ],
  },

  {
    _id: 2,
    name: "dark brown and light Brown Vintage",
    price: 9000,
    originalPrice: 15000,
    description: "A Vintage shirt for Unique Events.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Dark Brown", "Light Brown"],
    Images: [
      {
        url: DLVintage,
        alt: "Dark Brown and Light Brown Vintage Shirt Image",
      },
    ],
  },

  {
    _id: 3,
    name: "Guinness Designed Vintage Shirt",
    price: 10000,
    originalPrice: 15000,
    description: "A Vintage shirt for Guinness Events.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Black", "White"],
    Images: [
      {
        url: GuinnessVintage,
        alt: "Guinness Designed Vintage Shirt Image",
      },
    ],
  },

  {
    _id: 4,
    name: "Geo Print Vintage Fit",
    price: 18000,
    originalPrice: 24000,
    description: "A Stylish Geo Print Vintage Fit For Men.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Brown", "White"],
    Images: [
      {
        url: GeoPrintVintage,
        alt: "Geo Print Vintage Fit Image",
      },
    ],
  },

  {
    _id: 5,
    name: "Men's Paisley Fit",
    price: 17000,
    originalPrice: 24000,
    description: "A stylish paisley fit shirt for men.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Green", "White"],
    Images: [
      {
        url: PaisleyVintage,
        alt: "Men's Paisley Fit Image",
      },
    ],
  },

  {
    _id: 6,
    name: "Manfinity full fit for men",
    price: 18000,
    originalPrice: 26000,
    description: "A cool fit for stylish men.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["yellow", "White"],
    Images: [
      {
        url: Manfinity,
        alt: "Manfinity full fit for men Image",
      },
    ],
  },

  {
    _id: 7,
    name: "Casual Street Style Fit",
    price: 15000,
    originalPrice: 20000,
    description: "A casual fine fit for occassional wear.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Green"],
    Images: [
      {
        url: StyleFit,
        alt: "Casual Street Style Image",
      },
    ],
  },

  {
    _id: 8,
    name: "Tropical vintage fit for men",
    price: 15000,
    originalPrice: 24000,
    description: "A Summer Time Fit.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Black", "White"],
    Images: [
      {
        url: TropicalVintage,
        alt: "Tropical Vintage Fit Image",
      },
    ],
  }, 
]

const WomenWears = [
  {
    _id: 1,
    name: "Wide leg crop top two piece loose fit",
    price: 18000,
    originalPrice: 27000,
    description: "A stylish wide-leg crop top two-piece set for women.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Black", "White", "Brown"],
    Images: [
      {
        url: WideLeg,
        alt: "Wide leg crop top two piece loose fit Image",
      },
    ],
  },

  {
    _id: 2,
    name: "Ensemble Fit",
    price: 18000,
    originalPrice: 25000,
    description: "A stylish ensemble fit for women.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: EnsembleFit,
        alt: "Ensemble Fit Image",
      },
    ],
  },

  {
    _id: 3,
    name: "SHEIN Fit",
    price: 20000,
    originalPrice: 25000,
    description: "A stylish SHEIN fit for women.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: SHEINFit,
        alt: "SHEIN Fit Image",
      },
    ],
  },

  {
    _id: 4,
    name: "SHEIN Fit 2",
    price: 17000,
    originalPrice: 24000,
    description: "A stylish SHEIN fit for women.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: SHEINFit2,
        alt: "SHEIN Fit 2 Image",
      },
    ],
  },

  {
    _id: 5,
    name: "SHEIN Fit for Women",
    price: 18000,
    originalPrice: 24000,
    description: "A stylish SHEIN fit for women.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: SHEINFit3,
        alt: "SHEIN Fit for Women Image",
      },
    ],
  },

  {
    _id: 6,
    name: "SHEIN Fit for Women",
    price: 18000,
    originalPrice: 24000,
    description: "A stylish SHEIN fit for women.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Blue", "White"],
    Images: [
      {
        url: SHEINFit4,
        alt: "SHEIN Fit for Women Image",
      },
    ],
  },

  {
    _id: 7,
    name: "SHEIN Fit for Women",
    price: 18000,
    originalPrice: 24000,
    description: "A stylish SHEIN fit for women.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Green", "White"],
    Images: [
      {
        url: SHEINFit5,
        alt: "SHEIN Fit for Women Image",
      },
    ],
  },

  {
    _id: 8,
    name: "Floral Fit for Women",
    price: 17000,
    originalPrice: 25000,
    description: "A stylish floral fit for women.",
    brand: "Mivine Essentials",
    material: "Cotton",
    sizes: ["M", "L"],
    colors: ["Orange", "White"],
    Images: [
      {
        url: FloralFit,
        alt: "Floral Fit for Women Image",
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
            Top Wears For Men
          </h2>
          <ProductGrid products={MenWears} />
        </div>

        <div className='container max-w-6xl mx-auto mt-15'>
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wears For Women
          </h2>
          <ProductGrid products={WomenWears} />
        </div>

        <FeaturedCollections />

        <FeaturesSection />
    </div>
  )
}

export default Home