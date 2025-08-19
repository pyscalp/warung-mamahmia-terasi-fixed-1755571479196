import React from 'react';
import MenuItemCard from '../components/MenuItemCard';
import { motion } from 'framer-motion';
import { Package, Truck, CreditCard } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Nasi Goreng Terasi Spesial',
    description: 'Nasi goreng dengan bumbu terasi khas, telur, ayam suwir, dan kerupuk. Pedasnya bisa disesuaikan!',
    price: 25000,
    image: '/images/nasi-goreng-terasi.svg',
    category: 'Makanan Utama'
  },
  {
    id: 2,
    name: 'Ayam Bakar Terasi Madu',
    description: 'Ayam bakar empuk dengan olesan bumbu terasi madu yang meresap sempurna.',
    price: 35000,
    image: '/images/ayam-bakar-terasi.svg',
    category: 'Makanan Utama'
  },
  {
    id: 3,
    name: 'Sambal Terasi Juara',
    description: 'Sambal terasi pedas nampol, dibuat dari cabai segar dan terasi pilihan. Wajib coba!',
    price: 10000,
    image: '/images/sambal-terasi.svg',
    category: 'Pelengkap'
  },
  {
    id: 4,
    name: 'Lele Goreng Sambal Terasi',
    description: 'Ikan lele goreng renyah disajikan dengan sambal terasi segar.',
    price: 28000,
    image: '/images/lele-goreng-terasi.svg', // Placeholder, create this SVG
    category: 'Makanan Utama'
  },
  {
    id: 5,
    name: 'Tahu Tempe Penyet Terasi',
    description: 'Tahu dan tempe goreng penyet dengan sambal terasi pedas.',
    price: 20000,
    image: '/images/tahu-tempe-penyet.svg', // Placeholder, create this SVG
    category: 'Makanan Utama'
  },
  {
    id: 6,
    name: 'Es Teh Manis',
    description: 'Minuman pelepas dahaga yang segar.',
    price: 8000,
    image: '/images/es-teh.svg',
    category: 'Minuman'
  },
  {
    id: 7,
    name: 'Jus Jeruk Segar',
    description: 'Jus jeruk asli tanpa tambahan pengawet.',
    price: 15000,
    image: '/images/jus-jeruk.svg', // Placeholder, create this SVG
    category: 'Minuman'
  },
];

const ServicesPage = () => {
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
        Menu & Layanan Kami
      </motion.h1>

      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-secondary text-center mb-8"
        >
          Daftar Menu
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl font-bold text-primary text-center mb-8"
        >
          Layanan Tambahan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Package size={60} className="text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Catering Acara</h3>
            <p className="text-gray-600">
              Sajikan kelezatan Mamahmia Terasi di acara spesial Anda. Kami melayani pesanan catering untuk berbagai acara. Hubungi kami untuk penawaran khusus!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Truck size={60} className="text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Delivery Service</h3>
            <p className="text-gray-600">
              Nikmati hidangan favorit Anda dari kenyamanan rumah. Tersedia layanan antar melalui aplikasi pesan antar online.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <CreditCard size={60} className="text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Pembayaran Mudah</h3>
            <p className="text-gray-600">
              Kami menerima berbagai metode pembayaran, termasuk tunai, kartu debit/kredit, dan pembayaran digital.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;