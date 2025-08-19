import React from 'react';
import { motion } from 'framer-motion';

const MenuItemCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-secondary text-lg font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
          <button className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors duration-300">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;