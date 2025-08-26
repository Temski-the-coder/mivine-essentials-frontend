import { FaPhoneVolume, FaShippingFast } from 'react-icons/fa'
import { FaInstagram, FaMeta, FaXTwitter,  } from 'react-icons/fa6'

const TopBar = () => {
  return (
    <div className='bg-[#E67300] w-full text-white p-2'>
        <div className='container mx-auto flex justify-around md:justify-around items-center text-center'>
            <div className='flex md:flex items-center space-x-7 text-xs md:text-md'>
                <a href="#" className='hover:text-gray-300'>
                    <FaMeta className='w-4 h-4' />
                </a>

                <a href="#" className='hover:text-gray-300'>
                    <FaXTwitter className='w-4 h-4' />
                </a>

                <a href="#" className='hover:text-gray-300'>
                    <FaInstagram className='w-4 h-4' />
                </a>
            </div>
            
            
            <div className='text-xs md:text-sm text-center text-white flex md:flex w-50 md:w-100'>
             <h1 >We ship WorldWide - Fast and reliable shipping!</h1>
             <p className='mt-4.5 md:mt-1'><FaShippingFast className='-ml-13 md:-ml-0' /></p>
            </div>

            <div className='text-xs md:text-sm'>
                <a href="tel:+2349024863242" className='hover:text-gray-300'>
                  <h2 className='flex'><FaPhoneVolume className='mt-0.5'/><span>+234-902-486-3242</span></h2>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopBar