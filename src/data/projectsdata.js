const projectsData = [
  {
    id: 1,
    homepage: {
      homepageThumbnail: "/p1.png",
      projectTitle: "Golpo",
      homepageDetail: "",
      keywords: ["Audiobook", "Storytelling"],
    },

    detailPage: {
      projectTitle: "Golpo",
      projectInfo: "Audiobook & Storytelling App",
      
      projectSubtitles: [
        { label: "Client", value: "Golpo" },
        { label: "Role", value: "Product Designer" },
        { label: "Industry", value: "Media & Entertainment" },
        { label: "Timeline", value: "Nov 2023" }
      ],

      sections: [
        {
          type: "text-grid",
          title: "Objective",
          titleBreakLine: false, 
          description: "Golpo is a mobile app that enables users to listen to their favorite books in audio format, share stories instantly through QR codes, support artists using stickers, take notes while listening, and organize audios into a personalized library.",
          images: [
            { src: "/cs1-1.png", alt: "Golpo app objective" }
          ]
        },
        {
          type: "text-grid",
          title: "Problem Statement",
          titleBreakLine: true,
          description: "Create an audiobook platform that is simple for listeners and empowering for creators.",
          images: [
            { src: "/cs1-2.png", alt: "Problem statement visualization" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Project Goals",
          titleBreakLine: true,
          description: [
            "Provide a smooth, distraction-free listening experience",
            "Create a frictionless sharing system using QR codes",
            "Enable users to emotionally support creators with stickers",
            "Offer personalized audio organization in a dedicated library",
            "Integrate note-taking while listening",
            "Build an interface that is modern, minimal, and accessible"
          ],
          images: [
            { src: "/cs1-3.png", alt: "Project goals overview" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Primary Users",
          titleBreakLine: true,
          description: [
            "Young professionals with limited reading time.",
            "Students who prefer listening to books on the go.",
            "Local artists/authors who want to publish audiobooks."
          ],
          images: [
            { src: "/cs1-4.png", alt: "User persona 1" },
            { src: "/cs1-5.png", alt: "User persona 2" },
            { src: "/cs1-6.png", alt: "User persona 3" }
          ]
        },
        {
          type: "text-grid-list",
          title: "User Flow",
          titleBreakLine: false,
          description: [
            "Onboarding: Splash Screen→ Sign In / Sign Up → Choose Interests → Home Screen",
            "Audio Player: Recommended→ Sign In / Sign Up → Choose Interests → Home Screen",
          ],
          images: [
            { src: "/cs1-7.png", alt: "User flow diagram" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Core Features",
          titleBreakLine: true,
         description: [
            "Modern Audio Player: Minimal layout, big controls, quick-access notes.",
            "QR Code Sharing: One scan → story shared instantly.",
            "Support Stickers:  Listeners can support artists with fun stickers + animations.",
            "Note-Taking: Take time-synced notes without leaving the player.",
          ],
          images: [
            { src: "/cs1-8.png", alt: "QR sharing feature" },
            { src: "/cs1-9.png", alt: "Sticker support feature" },
            { src: "/cs1-10.png", alt: "Note-taking feature" },
            { src: "/cs1-11.png", alt: "Library organization" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Design System",
          titleBreakLine: true,
          description: [
            "Typography: Clean, readable sans-serif",
            "Color Palette: Warm tones for storytelling, deep accents for controls",
            "Components: Cards, buttons, audio controls, sticky player",
            "Icons: Rounded, friendly, consistent"
          ],
          images: [
            { src: "/cs1-12.png", alt: "Design system colors" },
            { src: "/cs1-13.png", alt: "Design components" }
          ]
        },
        {
          type: "text-grid",
          title: "Final Product",
          titleBreakLine: true,
          description: "The final product reflects my goal to create an effortless audio-storytelling experience simple, human, and focused on meaningful engagement. Every interaction, from listening to sharing via QR, was shaped through continuous iteration and user-centric decision-making.",
          images: [
            { src: "/cs1-14.png", alt: "Final product showcase" }
          ],
          figmaLink: "https://rebrand.ly/figma-5816f5",
          figmaLinkText: "Explore the Full Golpo App Design"
        },
        {
          type: "text-only-list",
          title: "Outcomes & Impact",
          titleBreakLine: true,
          description: [
            "30% faster sharing flow",
            "Higher creator engagement via stickers",
            "Improved experience with note-taking"
          ]
        },
        {
          type: "text-only-list",
          title: "What I Learned",
          titleBreakLine: true,
          description: [
            "Balancing simplicity with feature-rich design",
            "Importance of micro-interactions in audio experiences",
            "QR sharing dramatically improves app virality",
            "Focus on both sides: creators & listeners",
            "Next improvements: Smart recommendations, collaborative playlists, creator dashboard"
          ]
        }
      ]
    }
  },

  {
    id: 2,
    homepage: {
      homepageThumbnail: "/TripKing.png",
      projectTitle: "TripKing",
      homepageDetail: "",
      keywords: ["Travel", "Planning"],
    },

    detailPage: {
      projectTitle: "TripKing",
      projectInfo: "AI-Powered Travel Planning Platform",
      
      projectSubtitles: [
        { label: "Client", value: "TripKing" },
        { label: "Role", value: "Product Designer" },
        { label: "Industry", value: "Media & Entertainment" },
        { label: "Timeline", value: "Nov 2023" }
      ],

      sections: [
        {
          type: "text-grid",
          title: "Objective",
          titleBreakLine: false,
          description: "TripKing is an all-in-one travel booking platform that brings hotel reservations, flight booking, and a fully integrated travel accessories shop under one unified experience. Built for both local and international travelers, TripKing simplifies the entire journey — from trip planning to booking to shopping — ensuring that users no longer need to switch between multiple apps or websites.",
          images: [
            { src: "/cs2-1.png", alt: "TripKing objective" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Major Pain Points",
          titleBreakLine: true,
          description: [
            "Users visit multiple platforms to book hotels, flights, and buy travel items.",
            "Comparing prices feels overwhelming and inconsistent.",
            "No unified wallet or reward system exists in most travel booking platforms.",
            "International users face currency conversion issues and lack of localization.",
            "Users want a faster, visually appealing, and modern booking experience."
          ],
          images: [
            { src: "/cs2-2.png", alt: "Travel planning challenges" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Project Goals",
          titleBreakLine: true,
          description: [
            "Build a unified booking experience for hotels, flights, and travel products.",
            "Create a modern, clean, and intuitive interface that increases conversion.",
            "Add a user wallet for instant checkouts, refunds, and cashback.",
            "Provide AI-powered suggestions for hotels, flights, and accessories.",
            "Integrate multi-currency and language localization.",
            "Ensure a responsive system across Web and Mobile App."
          ],
          images: [
            { src: "/cs2-3.png", alt: "Project goals" }
          ]
        },
        {
          type: "text-grid",
          title: "Research",
          titleBreakLine: false,
          description: [
            "Users struggle with juggling multiple apps, comparing bookings, and finding essentials in one place. Research shows that smart filtering, cross-selling, and a centralized wallet significantly improve the booking flow. Personalized recommendations further boost user satisfaction and increase conversion rates."
          ],
          images: [
            { src: "/cs2-4.png", alt: "Business traveler persona" }
          ]
        },
        {
          type: "text-grid",
          title: "Information Architecture",
          titleBreakLine: true,
          description: "The platform is structured with a simple, intuitive navigation system that connects Hotels, Flights, Shop, Offers, Wallet, and Account under one seamless experience. Each booking flow from hotels to flights and shopping—is designed for quick discovery, smooth comparison, and fast checkout. With an integrated multi-currency wallet, users enjoy instant payments, rewards, and a unified travel management experience.",
          images: [
            { src: "/cs2-5.png", alt: "Complete user flow" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Solution",
          titleBreakLine: false,
          description: [
            "Discover and book hotels with dynamic filters",
            "Book international and local flights with transparent pricing",
            "Shop travel essentials through a structured e-commerce shop",
            "Save and use balance via a built-in TripKing Wallet",
            "Enjoy personalized offers based on preferences and behavior",
            "Browse the platform in their preferred currency and language"
          ],
          images: [
            { src: "/cs2-6.png", alt: "Itinerary builder" },
            { src: "/cs2-7.png", alt: "Itinerary builder" },
            { src: "/cs2-8.png", alt: "Itinerary builder" },
            { src: "/cs2-9.png", alt: "Itinerary builder" },
            { src: "/cs2-10.png", alt: "Itinerary builder" },
          ]
        },
        {
          type: "text-grid-list",
          title: "Design System",
          titleBreakLine: true,
          description: [
            "Typography: Clean, readable sans-serif (Poppins) with strong visual hierarchy.",
            "Color Palette: Warm neutrals for storytelling paired with rich accents for controls and highlights",
            "Components: Smart filters, card-based listings, segmented tabs, dynamic map view, floating booking widgets, and a fully integrated wallet module.",
            "Icons: Rounded, friendly, and consistently styled to support clarity and modern aesthetics."
          ],
          images: [
            { src: "/cs2-11.png", alt: "Design system overview" },
            { src: "/cs2-12.png", alt: "Component library" },
            { src: "/cs2-13.png", alt: "Component library" }
          ]
        },
        {
          type: "text-grid",
          title: "Final Product",
          titleBreakLine: true,
          description: "The final product delivers a seamless, all-in-one travel experience—simple, intuitive, and designed to help users book, shop, and manage their trips effortlessly. Every feature was refined through user-focused iteration to ensure a smooth and enjoyable journey.",
          images: [
            { src: "/cs2-14.png", alt: "Final product screens" }
          ],
          figmaLink: "https://rebrand.ly/figma-af1865",
          figmaLinkText: "Explore the Full TripKing Design"
        },
        // {
        //   type: "text-only-list",
        //   title: "Outcomes & Impact",
        //   titleBreakLine: true,
        //   description: [
        //     "Reduced planning time by 60% compared to traditional multi-app approach",
        //     "Achieved 78% user retention rate within first 6 months",
        //     "Users saved average of $300 per trip through smart recommendations"
        //   ]
        // },
        {
          type: "text-only-list",
          title: "What I Learned",
          titleBreakLine: true,
          description: [
            "TripKing transforms the traditional travel booking experience into a complete travel ecosystem. By merging hotel and flight bookings with a travel accessories shop and integrating a digital wallet with multi-currency support, TripKing becomes a powerful super-app for both local and international travelers.",
            "The design focuses on clarity, speed, and personalization — making travel planning easier, smarter, and more enjoyable."
          ]
        }
      ]
    }
  },

  {
    id: 3,
    homepage: {
      homepageThumbnail: "/p2.png",
      projectTitle: "FactWatch",
      homepageDetail: "",
      keywords: ["News Media", "Fact-Checking"],
    },

    detailPage: {
      projectTitle: "FactWatch",
      projectInfo: "Fact-Checking & Media Literacy Platform",
      
      projectSubtitles: [
        { label: "Client", value: "FactWatch" },
        { label: "Role", value: "Product Designer" },
        { label: "Industry", value: "News Media" },
        { label: "Timeline", value: "Feb 2025" }
      ],

      sections: [
        {
          type: "text-grid",
          title: "Objective",
          titleBreakLine: false,
          description: "Strengthen audience trust, increase content consumption, and boost repeat visits through UX improvements.",
          images: [
            { src: "/cs3-1.png", alt: "FactWatch objective" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Challenge",
          titleBreakLine: true,
          description: [
            "Visitors didn’t engage deeply with articles.",
            "Navigation friction limited exploration.",
            "Content presentation lacked the clarity and structure needed for credibility and retention.",
          ],
          images: [
            { src: "/cs3-2.png", alt: "Problem analysis" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Research & Key Insights",
          titleBreakLine: true,
          description: [
            "User Behavior Analysis: Bounce rate was high, session times were short.",
            "User Needs: Quick access to trending checks, better readability, and mobile-friendly access.",
            "Competitive Benchmarking: Global fact-checking platforms (e.g., Reuters, Boom) emphasized trust signals, structured layouts, and discovery features."
          ],
          images: [
            { src: "/cs3-3.png", alt: "Project goals framework" },
            { src: "/cs3-4.png", alt: "Project goals framework" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Solutions ",
          titleBreakLine: false,
          description: [
            "Enhance readability for long-form content.",
            "Provide seamless navigation and easy topic discovery.",
            "Build trustworthiness through design consistency.",
            "Encourage longer and repeated engagement."
          ],
          images: [
            { src: "/cs3-5.png", alt: "General user persona" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Design System",
          titleBreakLine: true,
          description: [
            "Typography: Clean, readable sans-serif (Poppins) with strong visual hierarchy.",
            "Color Palette: Warm neutrals for storytelling paired with rich accents for controls and highlights",
            "Components: Smart filters, card-based listings, segmented tabs, dynamic map view, floating booking widgets, and a fully integrated wallet module.",
            "Icons: Rounded, friendly, and consistently styled to support clarity and modern aesthetics."
          ],
          images: [
            { src: "/cs3-6.png", alt: "User journey map" },
            { src: "/cs3-7.png", alt: "User journey map" }
          ]
        },
        {
          type: "text-grid",
          title: "Final Product",
          titleBreakLine: true,
          description: "The final FactWatch design offers a clean, credible, and easy-to-navigate platform for verifying information. With structured fact-check cards, clear labels, and a modern layout, users can quickly explore and confirm facts with confidence.",
          images: [
            { src: "/cs3-8.png", alt: "Final platform design" }
          ],
          figmaLink: "https://rebrand.ly/figma-a0374f",
          figmaLinkText: "Explore the Full FactWatch Design"
        },
        {
          type: "text-only-list",
          title: "Outcomes & Impact",
          titleBreakLine: true,
          description: [
            "User Visits: Increased significantly (30–40% in the first months).",
            "Engagement: Average session time grew by 40%.",
            "Trust Factor: User feedback highlighted stronger perception of reliability",
            "Bounce Rate: Reduced as visitors explored multiple articles."
          ]
        }
      ]
    }
  }
];

export default projectsData;