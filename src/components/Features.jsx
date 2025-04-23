import React from "react";
import InternetIcon from "../assets/Internet.png";
import InternetTVIcon from "../assets/InternetTV.png";
import GamerIcon from "../assets/Gamer.png";
import PromoIcon from "../assets/Promo.png";
import SpeedTestIcon from "../assets/SpeedTest.png";
import PengaduanIcon from "../assets/Pengaduan247.png";
import FiberOpticIcon from "../assets/Features1.png";
import SimetrisIcon from "../assets/SpeedTest.png";
import UnlimitedIcon from "../assets/Gamer.png";

export default function Features() {
  const features = [
    {
      title: "Fiber Optic",
      value: "100%",
      description: "Koneksi fiber optik tercepat dengan latency terendah",
      icon: FiberOpticIcon,
    },
    {
      title: "Simetris Download - Upload",
      value: "1:1",
      description:
        "Kecepatan upload sama dengan download untuk produktivitas maksimal",
      icon: SimetrisIcon,
    },
    {
      title: "Internet UNLIMITED",
      value: "100%",
      description: "Tanpa FUP, tanpa batas, tanpa khawatir",
      icon: UnlimitedIcon,
    },
  ];

  const serviceIcons = [
    { icon: InternetIcon, name: "Internet" },
    { icon: InternetTVIcon, name: "Internet + TV" },
    { icon: GamerIcon, name: "Gamer" },
    { icon: PromoIcon, name: "Promo" },
    { icon: SpeedTestIcon, name: "Speed Test" },
    { icon: PengaduanIcon, name: "Pengaduan 24/7" },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Icon Row */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
        {serviceIcons.map((service, index) => (
          <div key={index} className="flex flex-col items-center w-16 md:w-20">
            <img
              src={service.icon}
              alt={service.name}
              className="h-12 md:h-16 w-auto object-contain mb-2"
            />
            <span className="text-xs md:text-sm text-center text-purple-900 font-medium">
              {service.name}
            </span>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
        Mengapa Memilih MyRepublic?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg text-center border border-purple-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-16 w-auto object-contain"
              />
            </div>
            <span className="text-4xl font-bold text-purple-700 block mb-2">
              {feature.value}
            </span>
            <h3 className="text-xl font-semibold mb-3 text-purple-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
