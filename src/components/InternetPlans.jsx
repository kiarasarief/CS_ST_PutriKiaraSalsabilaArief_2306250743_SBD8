import React from "react";

export default function InternetPlans() {
  const plans = [
    {
      name: "Value",
      speed: "30 Mbps",
      promotedSpeed: "40 Mbps",
      price: "Rp 235.000",
      description: "Narga belum termasuk PPN 11K",
      features: [
        "Chat Sales",
        "Flur dan Benefit",
        "Internet UNLIMITED",
        "Include ONT/Modem",
        "Gratis Instalasi Rp500,000",
        "Ideal untuk 1-3 Device",
        "DL & UL up to 30 Mbps",
      ],
      highlight: false,
    },
    {
      name: "Fast",
      speed: "50 Mbps",
      price: "Rp 250.000",
      description: "Narga belum termasuk PPN 11K",
      features: [
        "Chat Sales",
        "Flur dan Benefit",
        "Internet UNLIMITED",
        "Include ONT/Modem",
        "Gratis Instalasi Rp500,000",
        "Ideal untuk 1-5 Device",
        "DL & UL up to 50 Mbps",
      ],
      highlight: false,
    },
    {
      name: "Nova",
      speed: "100 Mbps",
      price: "Rp 300.000",
      description: "Narga belum termasuk PPN 11K",
      features: [
        "Chat Sales",
        "Flur dan Benefit",
        "Vuldr/Pathvm Lie",
        "Internet UNLIMITED",
        "Include ONT/Modem",
        "Gratis Instalasi Rp500,000",
        "Ideal untuk 1-7 Device",
      ],
      highlight: true,
    },
    {
      name: "MyGamer",
      speed: "250 Mbps",
      price: "Rp 400.000",
      description: "Narga belum termasuk PPN 11K",
      features: [
        "Chat Sales",
        "Flur dan Benefit",
        "Vuldr/Pathvm Lie",
        "Internet UNLIMITED",
        "Include ONT/Modem",
        "Gratis Instalasi Rp500,000",
        "Public Static",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Internetan Super Lancar dan Unlimited!
          </h2>
          <p className="text-xl text-gray-600">
            Hemat Besar Mulai Rp 235.000 – Streaming Lancar, Gaming Tanpa Lag
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Internet + TV
            </button>
            <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-6 py-2 rounded-full font-medium transition-colors">
              Internet + Streaming
            </button>
            <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-6 py-2 rounded-full font-medium transition-colors">
              Add On
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6 ${
                plan.highlight
                  ? "border-purple-500 border-2 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-purple-900">
                  {plan.name}
                </h3>
                <div className="flex items-end mt-2">
                  <span className="text-2xl font-bold">{plan.speed}</span>
                  {plan.promotedSpeed && (
                    <span className="ml-2 text-purple-700 font-medium line-through">
                      {plan.promotedSpeed}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-purple-900">
                  {plan.price}
                </p>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-2 px-4 rounded-full mb-6 transition-colors">
                Langganan Sekarang
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-purple-100">
          <h4 className="font-bold text-purple-900 mb-3">
            Syarat dan Ketentuan
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>
              Promo berlaku untuk pelanggan baru yang berlangganan pada tanggal
              1 - 30 April 2025
            </li>
            <li>Promo berlaku untuk paket Internet Only dan Combo TV</li>
            <li>Promo berlaku selama 12 bulan berlangganan</li>
            <li>Harga tertera diatas belum termasuk PPN 11K</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
