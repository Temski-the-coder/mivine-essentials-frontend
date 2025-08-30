
import MyOrderPage from './MyOrderPage'

const ProfilePage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow mx-auto w-full md:max-w-6xl p-4 md:p-6'>
        <div className='flex flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0'>
            {/* left section */}
            <div className='w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md rouded-lg p-6 space-y-5'>
                <h1 className='text-2xl md:text-3xl font-bold mb-4'>John Doe</h1>
                <p className='text-lg text-gray-600 mb-4'>JohnDoe@example.com</p>
                <button className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
                    Edit Profile
                </button>

                 <button className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
                    Logout
                </button>
            </div>

            {/* right section */}
            <div className='w-full md:w-2/3 lg:w-3/4'>
               <MyOrderPage />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage