import Footer from '@/components/Global/Footer'
import Navbar from '@/components/Global/Navbar'
import AllProjects from '@/components/XTraPage/AllProjects'
import React from 'react'

const page = () => {
  return (
    <div>
     <Navbar />
     <AllProjects />
     <Footer />
    </div>
  )
}

export default page