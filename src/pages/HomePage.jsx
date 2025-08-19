import React from 'react';
import HeroSection from '../components/HeroSection';
import MenuItemCard from '../components/MenuItemCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const featuredMenu = [
  {
    id: 1,
    name: 'Nasi Goreng Terasi Spesial',
    description: 'Nasi goreng dengan bumbu terasi khas, telur, ayam suwir, dan kerupuk.',
    price: 25000,
    image: '/images/nasi-goreng-terasi.svg',
  },
  {
    id: 2,
    name: 'Ayam Bakar Terasi Madu',
    description: 'Ayam bakar empuk dengan olesan bumbu terasi madu yang meresap.',
    price: 35000,
    image: '/images/ayam-bakar-terasi.svg',
  },
  {
    id: 3,
    name: 'Sambal Terasi Juara',
    description: 'Sambal terasi pedas nampol, cocok untuk teman makan apa saja.',
    price: 10000,
    image: '/images/sambal-terasi.svg',
  },
];

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection
        title="Warung Mamahmia Terasi Fixed"
        subtitle="Nikmati Kelezatan Terasi Otentik dalam Setiap Hidangan!"
        imageUrl="/images/hero-mamahmia.svg"
        buttonText="Lihat Menu Kami"
        buttonLink="/services"
      />

      <section className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-primary text-center mb-12"
        >
          Mengapa Mamahmia Terasi?
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <img src="/images/terasi-udang.svg" alt="Terasi Udang" className="w-full h-auto rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Di Warung Mamahmia Terasi, kami percaya bahwa rahasia kelezatan sejati terletak pada bahan baku berkualitas dan resep turun-temurun. Terasi pilihan kami diolah dengan cermat, menghasilkan aroma dan rasa yang tak tertandingi. Setiap hidangan kami adalah perpaduan sempurna antara tradisi dan inovasi, siap memanjakan lidah Anda.
            </p>
            <Link
              to="/about"
              className="inline-block bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
            >
              Pelajari Lebih Lanjut
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-4xl font-bold text-primary text-center mb-12"
          >
            Menu Unggulan Kami
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMenu.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Lihat Semua Menu
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;