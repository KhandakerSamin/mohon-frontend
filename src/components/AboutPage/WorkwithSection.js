"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const WorkwithSection = () => {
  // Company data with their websites
  const companies = [
    { id: 1, name: 'Qarby', website: 'https://qarby.com' },
    { id: 2, name: 'Company 2', website: 'https://example2.com' },
    { id: 3, name: 'Aga', website: 'https://aga.com' },
    { id: 4, name: 'BurgerBuddy', website: 'https://burgerbuddy.com' },
    { id: 5, name: 'Company 5', website: 'https://example5.com' },
    { id: 6, name: 'EasyWear', website: 'https://easywear.com' },
    { id: 7, name: 'Gatherlance', website: 'https://gatherlance.com' },
    { id: 8, name: 'Tintype', website: 'https://tintype.com' },
    { id: 9, name: 'We-Pilot.AI', website: 'https://we-pilot.ai' },
    { id: 10, name: 'HD Nexus', website: 'https://hdnexus.com' },
    { id: 11, name: 'Lanceboard', website: 'https://lanceboard.com' },
    { id: 12, name: 'Qumlong', website: 'https://qumlong.com' },
    { id: 13, name: 'Go Fast', website: 'https://gofast.com' }
  ];

  const handleCompanyClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <div className="w-full max-w-[1230px] mx-auto py-5 md:py-12">
      {/* Header */}
      <div className=" flex justify-between items-center mb-12">
        <button className="px-6 hidden md:block py-3 border  rounded-full rounded-bl-none  border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium">
          Previously Worked With
        </button>
        <div className='hidden md:block'>
          <button className=" px-6  py-3 border  rounded-full rounded-bl-none  border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium flex items-center gap-2">
          More On LinkedIn 
          <ArrowUpRight className='pl-1 w-8 h-8' />
        </button>
        </div>
      </div>

      {/* Company Logos Grid - Desktop Layout */}
      <div className="hidden md:flex flex-col gap-6 md:gap-12 bg-[#EBEBEB] p-8 rounded-2xl">
        {/* First Row - 5 companies */}
        <div className="flex justify-between items-center">
          {companies.slice(0, 5).map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className="group cursor-pointer p-4 rounded-lg transition-all duration-300 flex items-center justify-center w-48 h-20"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={`/work-${company.id}.png`}
                  alt={company.name}
                  width={200}
                  height={85}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  unoptimized
                />
                
                <div className="hidden absolute inset-0 items-center justify-center  rounded-lg">
                  <span className="text-xs text-gray-500 text-center font-medium">
                    {company.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 4 companies */}
        <div className="flex justify-between items-center w-full">
          {companies.slice(5, 9).map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className="group cursor-pointer p-4 rounded-lg  transition-all duration-300 flex items-center justify-center w-48 h-20"
            >
              <div className="relative w-full h-full flex items-center justify-center">

                <Image
                  src={`/work-${company.id}.png`}
                  alt={company.name}
                  width={200}
                  height={85}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  unoptimized
                />
                
                <div className="hidden absolute inset-0 items-center justify-center  rounded-lg">
                  <span className="text-xs text-gray-500 text-center font-medium">
                    {company.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 4 companies */}
        <div className="flex justify-between items-center w-full">
          {companies.slice(9, 13).map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className="group cursor-pointer p-4 rounded-lg transition-all duration-300 flex items-center justify-center w-48 h-20"
            >
              <div className="relative w-full h-full flex items-center justify-center">

                <Image
                  src={`/work-${company.id}.png`}
                  alt={company.name}
                  width={200}
                  height={80}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  unoptimized
                />
                
                <div className="hidden absolute inset-0 items-center justify-center rounded-lg">
                  <span className="text-xs text-gray-500 text-center font-medium">
                    {company.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Logos Grid - Mobile Layout */}
      <div className="md:hidden flex flex-col gap-8 bg-[#EBEBEB] mx-2  p-6 rounded-2xl">
        {/* First Row - 4 companies */}
        <div className="flex justify-between items-center">
          {companies.slice(0, 4).map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className="group cursor-pointer p-2 rounded-lg  transition-all duration-300 flex items-center justify-center w-20 h-16"
            >
              <div className="relative w-full h-full flex items-center justify-center">

                <Image
                  src={`/work-${company.id}.png`}
                  alt={company.name}
                  width={80}
                  height={64}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  unoptimized
                />
                
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 companies */}
        <div className="flex justify-between items-center max-w-[470px] mx-auto">
          {companies.slice(4, 7).map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className="group cursor-pointer p-1 rounded-lg transition-all duration-300 flex items-center justify-center w-33 h-16"
            >
              <div className="relative w-full h-full flex items-center justify-center">

                <Image
                  src={`/work-${company.id}.png`}
                  alt={company.name}
                  width={80}
                  height={64}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  unoptimized
                />
                
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 3 companies */}
        <div className="flex justify-between items-center max-w-[470px] mx-auto">
          {companies.slice(7, 10).map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className="group cursor-pointer p-2 rounded-lg  transition-all duration-300 flex items-center justify-center w-33 h-16"
            >
              <div className="relative w-full h-full flex items-center justify-center">

                <Image
                  src={`/work-${company.id}.png`}
                  alt={company.name}
                  width={80}
                  height={64}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  unoptimized
                />
                
              </div>
            </div>
          ))}
        </div>

        {/* Fourth Row - 3 companies */}
        <div className="flex justify-between items-center max-w-[470px] mx-auto">
          {companies.slice(10, 13).map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className="group cursor-pointer p-2 rounded-lg  transition-all duration-300 flex items-center justify-center w-33 h-16"
            >
              <div className="relative w-full h-full flex items-center justify-center">

                <Image
                  src={`/work-${company.id}.png`}
                  alt={company.name}
                  width={80}
                  height={64}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  unoptimized
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkwithSection;