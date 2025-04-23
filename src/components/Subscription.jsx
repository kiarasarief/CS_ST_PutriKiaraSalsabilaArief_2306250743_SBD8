import React from "react";

export default function Subscription() {
  const steps = [
    {
      title: "Registrasi",
      description:
        "Cek area lokasi pemasangan, pilih paket, dan pilih jadwal pemasangan.",
      cta: "Registrasi Sekarang",
      ctaLink: "#",
    },
    {
      title: "Instalasi",
      description:
        "Lacak proses instalasi kemudian nikmati layanan MyRepublic!",
      cta: "Lacak Proses Pemasangan",
      ctaLink: "#",
    },
    {
      title: "Bayar",
      description: "Bayar tagihan dan nikmati kecepatan layanan MyRepublic.",
      cta: "Lihat Cara Bayar",
      ctaLink: "#",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
          Cara Berlangganan di MyRepublic
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Tiga langkah mudah untuk menggunakan layanan dari kami
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-purple-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-700 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mr-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-purple-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <a
                href={step.ctaLink}
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-2 px-6 rounded-full transition-colors"
              >
                {step.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
