import React from 'react'
import Header from '../Common/Header'
import NavBar from '../Common/NavBar'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        {/* Header */}
         <Header />
        {/* Header */}
        

        {/* NavBar */}
        <NavBar />
        {/* NavBar */}
       
        {/* Main Content */}
          <Outlet />
        {/* Main Content */}

        
        {/* Footer */}
            <Footer />
        {/* Footer */}
    </div>
  )
}

export default UserLayout