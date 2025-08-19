import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
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
        Hubungi Kami
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-secondary mb-6 text-center md:text-left">Informasi Kontak</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <div className="flex items-center">
              <MapPin size={28} className="mr-4 text-accent" />
              <div>
                <p className="font-semibold">Alamat Kami:</p>
                <p>Jl. Kenangan Indah No. 123, RT.001/RW.002</p>
                <p>Kel. Bahagia, Kec. Sentosa, Jakarta 12345</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone size={28} className="mr-4 text-accent" />
              <div>
                <p className="font-semibold">Telepon:</p>
                <p>(021) 123-4567</p>
                <p>+62 812 3456 7890 (WhatsApp)</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail size={28} className="mr-4 text-accent" />
              <div>
                <p className="font-semibold">Email:</p>
                <p>info@mamahmiaterasi.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock size={28} className="mr-4 text-accent" />
              <div>
                <p className="font-semibold">Jam Buka:</p>
                <p>Setiap Hari: 10:00 - 22:00 WIB</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl font-bold text-primary text-center mb-6"
        >
          Lokasi Kami
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="aspect-video w-full rounded-lg overflow-hidden shadow-md"
        >
          {/* Placeholder for Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.360187807769!2d106.820986314769!3d-6.21608699550017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4d9b0f0f1%3A0x2e69f3e4d9b0f0f1!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Warung Mamahmia Terasi Fixed"
          ></iframe>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ContactPage;