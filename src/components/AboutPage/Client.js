import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    logo: "Tintype",
    text: "Mohan is really talented, creative and also incredibly analytical. He so easily knocked out some of the most challenging designs we had to work on. I recommend him to anyone who looking for someone they can trust to take any task under their wing and find solutions that work.",
    name: "Danielle Uchendu-Oj",
    role: "CEO @ Tintype",
    country: "USA",
    date: "Aug 2023",
    avatar: "/avatars/1.png", // replace with actual avatar image
  },
  {
    id: 2,
    logo: "Cloudsphere Media",
    text: "Mohan’s design work at CloudSphere Media was outstanding, spanning UX, website development, marketing collateral, and PowerPoint presentations. He brought a keen eye for detail and a user-centric approach to every project, ensuring our digital and printed materials were both visually appealing and highly effective.",
    name: "Emmanuel K.",
    role: "CEO @ Cloudsphere",
    country: "UK",
    date: "Aug 2023",
    avatar: "/avatars/2.png",
  },
  {
    id: 3,
    logo: "",
    text: "Great experience working together! The work was delivered on time and showed strong creativity. Communication was always prompt, and he was open to feedback. Would definitely recommend for any creative project.",
    name: "Me’r Tekan",
    role: "UX Designer",
    country: "Australia",
    date: "Aug 2023",
    avatar: "/avatars/3.png",
  },
];

export default function Client() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-10">
        Clients Say
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className="rounded-2xl shadow-md border border-gray-200"
          >
            <CardContent className="p-6 space-y-4">
              <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>

              <div className="flex items-center gap-3 pt-4 border-t">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                  <p className="text-gray-400 text-xs">
                    {t.country} • {t.date}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
