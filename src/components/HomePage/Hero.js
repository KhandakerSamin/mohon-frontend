"use client"
import React from "react"

const Hero = () => {
  return (
    <section className="h-screen max-w-7xl mx-auto flex items-center justify-center bg-background text-foreground px-8 py-10 lg:py-24 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-2 md:space-y-6 relative">
          {/* Greeting Badge */}
          <div className="inline-block absolute left-6 -top-6 lg:left-32 lg:-top-8">
            <span className="py-1.5 md:py-2 lg:py-2.5 px-5 md:px-6 lg:px-8 bg-transparent border border-foreground rounded-full rounded-bl-none text-foreground hover:bg-foreground hover:text-background text-sm lg:text-2xl tracking-wide transition-colors duration-200">
              Hey! I&apos;m
            </span>
          </div>
          
          {/* Main Title with CSS-based gradient */}
          <h1 className="gradient-text text-[clamp(4rem,12vw,8rem)] font-bold leading-none tracking-tight mb-[2rem]">
            Product
            <br />
            Designer
          </h1>
          
          {/* CTA Button */}
          <div className="absolute right-0 -bottom-12 lg:-bottom-14">
            <a
              href="https://api.whatsapp.com/send/?phone=8801879449690&text&type=phone_number&app_absent=0"
              className="group inline-flex items-center py-1 md:py-2 lg:py-2.5 px-3 md:px-6 lg:px-8  
             bg-transparent border border-foreground rounded-full rounded-tr-none 
             text-foreground text-sm lg:text-2xl tracking-wide  
             transition-all duration-200 hover:bg-foreground hover:text-background"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* WhatsApp Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="mr-2 w-6 h-6 text-foreground group-hover:text-background transition-colors duration-200"
                fill="currentColor"
              >
                <path d="M16 .667C7.84.667 1.007 7.5 1.007 15.667c0 2.763.743 5.442 2.155 7.79L1 31.333l8.09-2.12c2.27 1.25 4.84 1.91 7.41 1.91 8.16 0 14.993-6.833 14.993-15S24.16.667 16 .667zm0 27.333c-2.27 0-4.48-.61-6.41-1.77l-.46-.27-4.8 1.26 1.28-4.68-.3-.48c-1.3-2.06-1.99-4.42-1.99-6.77 0-7.04 5.71-12.75 12.75-12.75s12.75 5.71 12.75 12.75-5.71 12.75-12.75 12.75zm7.1-9.62c-.39-.2-2.3-1.14-2.66-1.28-.36-.13-.62-.2-.88.2s-1.01 1.28-1.24 1.54c-.23.26-.46.29-.85.1-.39-.2-1.64-.61-3.12-1.94-1.15-1.03-1.92-2.3-2.14-2.69-.22-.39-.02-.6.17-.79.18-.18.39-.46.58-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.12-1.21-2.9-.32-.77-.65-.67-.88-.68h-.75c-.26 0-.68.1-1.04.49-.36.39-1.37 1.34-1.37 3.26s1.4 3.77 1.59 4.03c.2.26 2.76 4.2 6.7 5.89.94.41 1.67.65 2.24.83.94.3 1.79.26 2.46.16.75-.11 2.3-.94 2.63-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
              </svg>
              Let&apos;s Chat
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Previously @ and My Clients From */}
      <div className="absolute bottom-10 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row justify-between md:items-end text-sm text-foreground/70">
        {/* Previously @ Section */}
        <div className="text-center md:text-left  mb-5 md:mb-0 ">
          <p className="mb-1 font-medium ">Previously @</p>
          <p className="leading-relaxed">
            Programming Hero, Codeflexs, <br className="hidden md:block"/>
            Gameohacker360
          </p>
        </div>

        {/* My Clients From Section */}
        <div className="text-center md:text-right">
          <p className="mb-1 font-medium">My Clients From</p>
          <p className="leading-relaxed">
            USA, Germany, Colombia, UK<br br className="hidden md:block"/>
            Australia, Finland,<br className="md:hidden" /> South Africa, France
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero