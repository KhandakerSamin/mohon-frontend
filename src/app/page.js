import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import Hero from '@/components/HomePage/Hero';
import ProjectSection from '@/components/HomePage/ProjectSection';
import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar />
      <Hero />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default HomePage;