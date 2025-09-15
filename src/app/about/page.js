
import ClientSay from '@/components/AboutPage/ClientSay';
import ContentCreator from '@/components/AboutPage/ContentCreator';
import HeadingSection from '@/components/AboutPage/HeadingSection';
import ImageSection from '@/components/AboutPage/ImageSection';
import WorkwithSection from '@/components/AboutPage/WorkwithSection';
import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='bg-[#F5F5F5] '>
     <Navbar />
      <ImageSection />
      <HeadingSection />
      <WorkwithSection />
      <ClientSay />
      <ContentCreator />
      <Footer />
    </div>
  );
};

export default AboutPage;