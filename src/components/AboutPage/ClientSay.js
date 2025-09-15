import Image from "next/image";
import React from "react";

export default function ClientSay() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Mohon Is Really Talented, Creative And Also Incredibly Analytical. He So Easily Knocked Out Some Of The Most Challenging Designs We Had To Work On. I Recommend Him To Anyone Who Looking For Someone They Can Trust To Take Any Task Under Their Wing And Find Solutions That Work",
      clientName: "Daniella Uchendu-Oji",
      position: "CEO @ Tintype",
      location: "USA",
      date: "Aug 2025",
      avatar: "/avatar.png",
      companyLogo: "/tinitypeLogo.png",
    },
    {
      id: 2,
      quote:
        "Mohon's Design Work At CloudSphere Media Was Outstanding, Spanning UX, Website Development, Marketing Collateral, And PowerPoint Presentations. He Brought A Keen Eye For Detail And A User-Centric Approach To Every Project, Ensuring Our Digital And Printed Materials Were Both Visually Appealing And Highly Effective...",
      clientName: "Emmanuel K.",
      position: "CEO @ CloudSphere",
      location: "UK",
      date: "Aug 2025",
      avatar: "/avatar.png",
      companyLogo: "/tinitypeLogo.png",
    },
    {
      id: 3,
      quote:
        "Great Experience Working Together! The Work Was Delivered On Time And Showed Strong Creativity, Communication Was Always Prompt, And He Was Open To Feedback. Would Definitely Recommend For Any Creative Project.",
      clientName: "Mert Tokan",
      position: "UX Designer",
      location: "Australia",
      date: "Aug 2025",
      avatar: "/avatar.png",
      companyLogo: "/tinitypeLogo.png",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-[1230px] mx-auto">
        {/* Section Headers */}
        <div className="flex justify-center md:justify-between items-center mb-16">
          <div className="inline-block px-8 py-3 rounded-full rounded-bl-none border border-black hover:text-white hover:bg-black text-gray-900 text-lg font-medium">
            Clients Say
          </div>
          <div className="hidden sm:inline-block px-8 py-3 rounded-full rounded-bl-none border border-black hover:text-white hover:bg-black text-gray-900 text-lg font-medium">
            Clients Say
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:hidden">
          {/* Mobile slider */}
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#EBEBEB] flex flex-col justify-between p-8 min-h-[350px] rounded-lg border border-gray-100 flex-shrink-0 w-80 snap-start"
              >
                {/* Quote Icon and Company Logo */}
                <div className="flex justify-between items-start mb-6">
                  <Image
                    src="/clientQute.svg"
                    alt="Quote Icon"
                    width={32}
                    height={32}
                  />
                  {testimonial.companyLogo && (
                    <Image
                      src={testimonial.companyLogo}
                      alt="Company Logo"
                      width={70}
                      height={35}
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium flex-grow">
                  {testimonial.quote}
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.clientName}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                        <span className="text-gray-600 font-medium text-xs">
                          {testimonial.clientName
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonial.clientName}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-900 font-medium text-sm">
                      {testimonial.location}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#EBEBEB] flex flex-col justify-between p-8 min-h-[350px] rounded-lg border border-gray-100"
            >
              {/* Quote Icon and Company Logo */}
              <div className="flex justify-between items-start mb-6">
                <Image
                  src="/clientQute.svg"
                  alt="Quote Icon"
                  width={48}
                  height={48}
                />
                {testimonial.companyLogo && (
                  <Image
                    src={testimonial.companyLogo}
                    alt="Company Logo"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                )}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium flex-grow">
                {testimonial.quote}
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.clientName}
                      width={48}
                      height={48}
                      className="rounded-full mr-3"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-sm">
                        {testimonial.clientName
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.clientName}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-900 font-medium text-sm">
                    {testimonial.location}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
