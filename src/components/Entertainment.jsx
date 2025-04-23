import React from "react";
import { useState } from "react";

export default function Entertainment() {
  const [showAllChannels, setShowAllChannels] = useState(false);

  const featuredChannels = [
    "VISION+",
    "WeTV",
    "BStation",
    "genflix",
    "KULE",
    "JAKTV",
    "Trans7",
    "Lifetime",
  ];

  const allChannels = [
    ...featuredChannels,
    "CGTN",
    "CCTV4",
    "HGTV",
    "GEM",
    "KompasTV",
    "Discovery",
    "Indosiar",
    "MetroTV",
    "Moji",
    "MTV",
    "SportsTV",
    "rtv",
  ];

  const coveredCities = [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Medan",
    "Bekasi",
    "Tangerang",
    "Depok",
    "Bogor",
    "Semarang",
    "Yogyakarta",
    "Malang",
    "Denpasar",
    "Makassar",
    "Palembang",
    "Pekanbaru",
    "Batam",
  ];

  return (
    <section className="py-16 px-4 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* TV Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
            Akses Hiburan Terlengkap
          </h2>
          <p className="text-xl text-center text-gray-600 mb-2">
            Hiburan Terlengkap Untuk Keluarga
          </p>
          <p className="text-center text-gray-600 mb-8">
            Nikmati channel dan platform video streaming terlengkap
          </p>

          <div className="text-center mb-8">
            <p className="text-sm text-gray-500">Mulai dari</p>
            <p className="text-2xl font-bold text-purple-700">
              Rp 20 ribuan / bulan
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100 mb-8">
            <p className="text-gray-600 mb-6">
              Akses ke lebih dari 70+ Channel TV Lokal maupun Internasional dan
              Live Event lainnya
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
              {(showAllChannels ? allChannels : featuredChannels).map(
                (channel, index) => (
                  <div
                    key={index}
                    className="bg-purple-100 text-purple-800 py-2 px-3 rounded-lg text-center font-medium"
                  >
                    {channel}
                  </div>
                )
              )}
            </div>

            <button
              onClick={() => setShowAllChannels(!showAllChannels)}
              className="text-purple-700 font-medium hover:text-purple-900 transition-colors flex items-center mx-auto"
            >
              {showAllChannels
                ? "Lihat Channel Populer"
                : "Lihat Selengkapnya Channel TV →"}
            </button>
          </div>
        </div>

        {/* City Coverage Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
          <h3 className="text-2xl font-bold text-center mb-4 text-purple-900">
            Temukan MyRepublic di Kota Kamu
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Nikmati internet terbaik dengan MyRepublic di Kota Kamu. Cek
            sekarang apakah kotamu sudah tercover oleh jaringan MyRepublic.
          </p>

          <div className="flex flex-col items-center">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-medium transition-colors mb-4">
              Cek kota mu di sini
            </button>
            <p className="text-gray-600">40+ Kota / Kabupaten Tercover</p>

            {/* City list Clicked */}
            <div className="mt-6 w-full max-h-60 overflow-y-auto bg-purple-50 p-4 rounded-lg hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {coveredCities.map((city, index) => (
                  <div key={index} className="text-gray-700">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
