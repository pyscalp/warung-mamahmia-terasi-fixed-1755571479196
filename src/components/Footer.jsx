import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold mb-4 text-accent">Mamahmia Terasi</h3>
          <p className="text-center md:text-left">
            Menyajikan hidangan lezat dengan sentuhan terasi khas Mamahmia. Rasa otentik, kualitas terbaik.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MapPin size={20} className="mr-2 text-accent" />
              Jl. Kenangan Indah No. 123, Jakarta
            </li>
            <li className="flex items-center">
              <Phone size={20} className="mr-2 text-accent" />
              (021) 123-4567
            </li>
            <li className="flex items-center">
              <Mail size={20} className="mr-2 text-accent" />
              info@mamahmiaterasi.com
            </li>
            <li className="flex items-center">
              <Clock size={20} className="mr-2 text-accent" />
              Setiap Hari: 10:00 - 22:00 WIB
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-accent transition-colors duration-300">Beranda</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors duration-300">Tentang Kami</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors duration-300">Menu & Layanan</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors duration-300">Galeri</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors duration-300">Kontak</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Warung Mamahmia Terasi Fixed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;