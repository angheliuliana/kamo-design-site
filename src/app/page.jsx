'use client';

import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Zap } from 'lucide-react';

export default function KAMODesign() {
  const [menuOpen, setMenuOpen] = useState(false);'use client';

import React, { useState } from 'react';

export default function KAMODesign() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/40725834386?text=Bună! Mă interesează serviciile de mobilier la comandă.`, '_blank');
  };

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo-section">
            <div className="logo-icon">KA-MO</div>
            <div className="logo-text">KA-MO DESIGN</div>
          </div>
          <button className="btn-whatsapp" onClick={handleWhatsApp}>
            📱 WhatsApp
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>KA-MO DESIGN</h1>
          <h2>Mobilier la Comandă, Personalizat</h2>
          <p>
            Designul tău, calitatea noastră, preț corect. Consiliere, proiectare și montaj complet pentru fiecare proiect.
          </p>
          <button className="btn-primary" onClick={handleWhatsApp}>
            Contactează-ne pe WhatsApp
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Ce Oferim</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>💡 Consiliere & Proiectare</h3>
              <p>
                Analizam spațiul tău și realizam design personalizat care se potrivește perfect nevoilor și stilului dumneavoastra.
              </p>
            </div>

            <div className="service-card">
              <h3>🔨 Construcție Profesională</h3>
              <p>
                Fabricare calitativă cu material care durează. Fiecare piesă e realizată cu atenție la detalii.
              </p>
            </div>

            <div className="service-card">
              <h3>📦 Montaj la Domiciliu</h3>
              <p>
                Instalare profesională și finisare impecabilă. Livrare și montaj în București și Ilfov.
              </p>
            </div>

            <div className="service-card">
              <h3>⚡ Urgență Disponibilă</h3>
              <p>
                Lucram si în regim de urgenta, in functie de complexitatea proiectului. Contacteaza-ne pentru detalii.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="coverage">
        <h3>🗺️ Zone de Lucru</h3>
        <p>București și Ilfov</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card">
            <div className="contact-phone">📱 0725 834 386</div>
            <p className="contact-desc">
              Disponibil pe WhatsApp și telefon pentru consultații, proiectare sau ofertă.
            </p>
            <button className="btn-whatsapp-large" onClick={handleWhatsApp}>
              💬 Scrie-ne pe WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 KA-MO DESIGN. Mobilier Personalizat. Toate drepturile rezervate.</p>
      </footer>
    </>
  );
}
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioImages = [
    { src: "https://via.placeholder.com/600x400?text=Dulap+la+comandă", alt: "Dulap la comandă" },
    { src: "https://via.placeholder.com/600x400?text=Bucătărie", alt: "Bucătărie la comandă" },
    { src: "https://via.placeholder.com/600x400?text=Dormitor", alt: "Dormitor" },
    { src: "https://via.placeholder.com/600x400?text=Living", alt: "Living" }
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/40725834386?text=Bună! Mă interesează serviciile de mobilier la comandă.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-yellow-500 text-xs font-bold">KA-MO</span>
            </div>
            <span className="font-bold text-black text-lg hidden sm:inline">KA-MO DESIGN</span>
          </div>
          <button onClick={handleWhatsApp} className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition">
            <Phone size={18} /> WhatsApp
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">KA-MO DESIGN</h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">Mobilier la Comandă, Personalizat</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Designul tău, calitatea noastră, preț corect. Consiliere, proiectare și montaj complet.
        </p>
        <button onClick={handleWhatsApp} className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition">
          Contactează-ne pe WhatsApp
        </button>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Portofoliu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.map((img, idx) => (
              <button key={idx} onClick={() => setCurrentImageIndex(idx)} className="aspect-square rounded-lg overflow-hidden border-2 border-gray-300 hover:border-yellow-500 transition">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <img src={portfolioImages[currentImageIndex].src} alt={portfolioImages[currentImageIndex].alt} className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
            <p className="text-gray-600 mt-4">{portfolioImages[currentImageIndex].alt}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Ce Oferim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-black mb-4">Consiliere & Proiectare</h3>
              <p className="text-gray-700">Design personalizat care se potrivește nevoilor tale.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-black mb-4">Construcție Profesională</h3>
              <p className="text-gray-700">Fabricare calitativă cu atenție la detaliu.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-black mb-4">Montaj la Domiciliu</h3>
              <p className="text-gray-700">Instalare profesională în București și Ilfov.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-black mb-4">Urgență Disponibilă</h3>
              <p className="text-gray-700">Lucrez și în regim urgent, funcție de complexitate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-2">
            <MapPin size={24} />
            <h3 className="text-2xl font-bold">Zone de Lucru</h3>
          </div>
          <p className="text-lg">București și Ilfov</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Contact</h2>
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="text-yellow-500" size={32} />
              <span className="text-2xl font-bold text-black">0725 834 386</span>
            </div>
            <button onClick={handleWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition">
              💬 Scrie-mi pe WhatsApp
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-8">
        <p>&copy; 2024 KA-MO DESIGN. Mobilier Personalizat.</p>
      </footer>
    </div>
  );
}
