import { useState } from "react";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-purple-900 text-white text-sm py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4 lg:space-x-6">
            <span className="hover:text-yellow-300 cursor-pointer transition-colors">
              Residensial
            </span>
            <span className="hover:text-yellow-300 cursor-pointer transition-colors">
              Apartemen
            </span>
            <span className="hover:text-yellow-300 cursor-pointer transition-colors">
              Bisnis
            </span>
          </div>
          <div className="flex items-center space-x-3 lg:space-x-6">
            <span className="hover:text-yellow-300 cursor-pointer transition-colors flex items-center">
              <i className="fas fa-download mr-1"></i> MyRep App
            </span>
            <span className="hover:text-yellow-300 cursor-pointer transition-colors">
              Bantuan
            </span>
            <span className="hover:text-yellow-300 cursor-pointer transition-colors">
              Roketin Teman
            </span>
            <span className="hover:text-yellow-300 cursor-pointer transition-colors">
              Cek Pesanan
            </span>
            <button className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
              <span>Login</span>
              <i className="fas fa-lock text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Main Nav */}
          <div className="flex items-center space-x-4 lg:space-x-10">
            <a href="/" className="flex-shrink-0">
              <img src={Logo} alt="MyRepublic" className="h-8 md:h-10" />
            </a>

            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              <a
                href="#"
                className="text-purple-900 font-medium hover:text-purple-700 px-2 py-1"
              >
                Paket
              </a>
              <a
                href="#"
                className="text-purple-900 font-medium hover:text-purple-700 px-2 py-1"
              >
                Promo
              </a>
              <a
                href="#"
                className="text-purple-900 font-medium hover:text-purple-700 px-2 py-1"
              >
                Berita
              </a>
              <a
                href="#"
                className="text-purple-900 font-medium hover:text-purple-700 px-2 py-1"
              >
                Tentang Kami
              </a>
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="#"
              className="hidden lg:block text-purple-900 font-medium hover:text-purple-700 whitespace-nowrap"
            >
              Cek Lokasi Kamu di sini
            </a>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-1 md:px-6 md:py-2 rounded-full font-medium transition-colors text-sm md:text-base whitespace-nowrap">
              Langganan Sekarang
            </button>

            {/* Mobile Login Button */}
            <button className="md:hidden text-purple-900 ml-2">
              <i className="fas fa-user text-lg"></i>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-purple-900 ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white border-t border-gray-200">
            {/* Mobile Top Links */}
            <div className="pt-4 px-4 space-y-3 text-sm">
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Residensial
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Apartemen
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Bisnis
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100 flex items-center"
              >
                <i className="fas fa-download mr-2"></i> Download MyRep App
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Bantuan
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Roketin Teman
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Cek Pesanan
              </a>
            </div>

            {/* Main Mobile Navigation */}
            <div className="pt-4 px-4 space-y-3">
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Paket
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Promo
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Berita
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Tentang Kami
              </a>
              <a
                href="#"
                className="block py-2 text-purple-900 font-medium border-b border-gray-100"
              >
                Cek Lokasi
              </a>
            </div>

            {/* Mobile Login */}
            <div className="pt-4 px-4">
              <button className="w-full bg-purple-100 text-purple-900 font-medium py-2 px-4 rounded-lg">
                <i className="fas fa-lock mr-2"></i> Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
