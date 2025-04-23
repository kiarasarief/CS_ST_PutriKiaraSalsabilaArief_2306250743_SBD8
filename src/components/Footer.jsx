export default function Footer() {
  const socialMedia = [
    { name: "Facebook", icon: "fab fa-facebook-f" },
    { name: "Twitter", icon: "fab fa-twitter" },
    { name: "Instagram", icon: "fab fa-instagram" },
    { name: "YouTube", icon: "fab fa-youtube" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in" },
  ];

  const quickLinks = [
    { name: "Paket Internet", link: "#" },
    { name: "Promo", link: "#" },
    { name: "Cek Coverage", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Karir", link: "#" },
  ];

  return (
    <footer className="bg-purple-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">MyRepublic</h3>
          <p className="text-purple-200 mb-4">
            Penyedia layanan internet fiber optik tercepat dengan kualitas
            premium.
          </p>
          <div className="flex space-x-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-yellow-300 transition-colors"
                aria-label={social.name}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
          <ul className="space-y-2 text-purple-200">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
          <ul className="space-y-2 text-purple-200">
            <li className="flex items-start space-x-2">
              <i className="fas fa-phone-alt mt-1"></i>
              <span>1500-123 (Residential)</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="fas fa-envelope mt-1"></i>
              <span>info@myrepublic.co.id</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="fas fa-map-marker-alt mt-1"></i>
              <span>Jakarta Office Center</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-purple-200 mb-4">
            Dapatkan info promo dan penawaran terbaik dari MyRepublic
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Anda"
              className="p-3 rounded-l-lg w-full text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-4 rounded-r-lg transition-colors">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-300">
        <p>
          © {new Date().getFullYear()} MyRepublic Indonesia. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">
            Syarat & Ketentuan
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}
