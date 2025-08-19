import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/images/nasi-goreng-terasi.svg', alt: 'Nasi Goreng Terasi', category: 'Makanan' },
  { id: 2, src: '/images/ayam-bakar-terasi.svg', alt: 'Ayam Bakar Terasi', category: 'Makanan' },
  { id: 3, src: '/images/sambal-terasi.svg', alt: 'Sambal Terasi', category: 'Makanan' },
  { id: 4, src: '/images/terasi-udang.svg', alt: 'Bahan Baku Terasi', category: 'Bahan Baku' },
  { id: 5, src: '/images/lele-goreng-terasi.svg', alt: 'Lele Goreng', category: 'Makanan' }, // Placeholder
  { id: 6, src: '/images/tahu-tempe-penyet.svg', alt: 'Tahu Tempe Penyet', category: 'Makanan' }, // Placeholder
  { id: 7, src: '/images/es-teh.svg', alt: 'Es Teh Manis', category: 'Minuman' },
  { id: 8, src: '/images/jus-jeruk.svg', alt: 'Jus Jeruk', category: 'Minuman' }, // Placeholder
  { id: 9, src: '/images/warung-ambience.svg', alt: 'Suasana Warung', category: 'Suasana' }, // Placeholder
];

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-primary text-center mb-12"
      >
        Galeri Mamahmia Terasi
      </motion.h1>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-secondary text-center mb-8"
        >
          Cita Rasa dalam Gambar
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: image.id * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <Image size={40} className="mx-auto mb-2" />
                  <p className="font-semibold text-lg">{image.alt}</p>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;