import Footer from '@/components/Global/Footer'
import FooterXtra from '@/components/Global/FooterXtra'
import Navbar from '@/components/Global/Navbar'
import NavbarXtra from '@/components/Global/NavbarXtra'
import AllProjects from '@/components/XTraPage/AllProjects'
import AllProjects2 from '@/components/XTraPage/AllProjects2'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
     {/* <NavbarXtra /> */}
     {/* <AllProjects /> */}
     <AllProjects2 />
     {/* <FooterXtra /> */}
     <Footer />
    </div>
  )
}

export default page