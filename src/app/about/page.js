
import HeroAbout from '@/components/AboutPage/HeroAbout';
import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='bg-[#F5F5F5] '>
     <Navbar />
      <HeroAbout />
      <Footer />
    </div>
  );
};

export default AboutPage;