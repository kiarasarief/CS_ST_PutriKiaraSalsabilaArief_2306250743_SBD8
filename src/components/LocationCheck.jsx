export default function LocationCheck({ city, setCity, address, setAddress }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Lokasi yang dicek: ${city}, ${address}`);
  };

  return (
    <section className="py-16 px-4 bg-purple-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-purple-100">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-900">
          Cek Ketersediaan di Lokasi Anda
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Pilih Kota/Kabupaten
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">-- Pilih Kota/Kabupaten --</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Bali">Bali</option>
              <option value="Medan">Medan</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Tulis nama jalan/gedung/perumahan
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Contoh: Jl. Sudirman No. 1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Cek Ketersediaan
          </button>
        </form>
      </div>
    </section>
  );
}
