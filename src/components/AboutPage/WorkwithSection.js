"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const WorkwithSection = () => {
  // Company data with their websites
  const companies = [
    { id: 1, name: 'Qarby', website: '#' },
    { id: 2, name: 'Company 2', website: '#' },
    { id: 3, name: 'Aga', website: '#' },
    { id: 4, name: 'BurgerBuddy', website: '#' },
    { id: 5, name: 'Company 5', website: '#' },
    { id: 6, name: 'EasyWear', website: '#' },
    { id: 7, name: 'Gatherlance', website: '#' },
    { id: 8, name: 'Tintype', website: '#' },
    { id: 9, name: 'We-Pilot.AI', website: '#' },
    { id: 10, name: 'HD Nexus', website: '#' },
    { id: 11, name: 'Lanceboard', website: '#' },
    { id: 12, name: 'Qumlong', website: '#' },
    { id: 13, name: 'Go Fast', website: '#' }
  ];

  const handleCompanyClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <div className="w-full max-w-[1230px] mx-auto pb-20 md:pb-40">
      {/* Header */}
      <div className=" flex flex-col md:flex-row justify-between items-center mb-12">
        <button className="px-6  py-3 border  rounded-full rounded-bl-none  border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium">
          Previously Worked With
        </button>
        <Link href="https://rebrand.ly/30752c" target="_blank" >
          <div className='hidden md:block'>
            <button className=" px-6  py-3 border  rounded-full rounded-bl-none  border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium flex items-center gap-2">
              More On LinkedIn
              <ArrowUpRight className='pl-1 w-8 h-8' />
            </button>
          </div>
          </Link>
      </div>

      {/* Company Logos Grid - Desktop Layout */}
      <div className="hidden md:flex flex-col gap-6 md:gap-12 bg-[#EBEBEB] p-8 rounded-md">
        {/* First Row - 5 companies */}
        <div className="flex justify-between items-center">
          {companies.slice(0, 5).map((company) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className="group cursor-pointer p-4 rounded-md transition-all duration-300 flex items-center justify-center w-48 h-20"
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

                <div className="hidden absolute inset-0 items-center justify-center  rounded-md">
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
              className="group cursor-pointer p-4 rounded-md  transition-all duration-300 flex items-center justify-center w-48 h-20"
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

                <div className="hidden absolute inset-0 items-center justify-center  rounded-md">
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
              className="group cursor-pointer p-4 rounded-md transition-all duration-300 flex items-center justify-center w-48 h-20"
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

                <div className="hidden absolute inset-0 items-center justify-center rounded-md">
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
              className="group cursor-pointer p-2 rounded-md  transition-all duration-300 flex items-center justify-center w-20 h-16"
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
              className="group cursor-pointer p-1 rounded-md transition-all duration-300 flex items-center justify-center w-33 h-16"
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
              className="group cursor-pointer p-2 rounded-md  transition-all duration-300 flex items-center justify-center w-33 h-16"
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
              className="group cursor-pointer p-2 rounded-md  transition-all duration-300 flex items-center justify-center w-33 h-16"
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