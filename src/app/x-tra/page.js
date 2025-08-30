import FooterXtra from '@/components/Global/FooterXtra'
import NavbarXtra from '@/components/Global/NavbarXtra'
import AllProjects from '@/components/XTraPage/AllProjects'
import React from 'react'

const page = () => {
  return (
    <div>
     <NavbarXtra />
     <AllProjects />
     <FooterXtra />
    </div>
  )
}

export default page