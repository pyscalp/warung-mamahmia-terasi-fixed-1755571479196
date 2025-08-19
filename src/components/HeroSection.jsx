import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle, imageUrl, buttonText, buttonLink }) => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <Link
              to={buttonLink}
              className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
            >
              {buttonText}
            </Link>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={imageUrl}
            alt="Warung Mamahmia Terasi"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;