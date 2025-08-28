import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import Hero from '@/components/HomePage/Hero';
import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;