import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Users } from 'lucide-react';

const AboutPage = () => {
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
        Tentang Warung Mamahmia Terasi Fixed
      </motion.h1>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2">
            <img src="/images/hero-mamahmia.svg" alt="Warung Mamahmia" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-secondary mb-4">Kisah Kami</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Warung Mamahmia Terasi Fixed bermula dari kecintaan mendalam Mamahmia terhadap kuliner Indonesia, khususnya hidangan yang kaya akan cita rasa terasi. Berawal dari dapur rumahan, resep-resep warisan keluarga yang telah disempurnakan selama bertahun-tahun kini kami sajikan untuk Anda. Kami berkomitmen untuk menghadirkan pengalaman bersantap yang otentik dan tak terlupakan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nama "Fixed" sendiri adalah janji kami untuk selalu menyajikan kualitas yang konsisten dan rasa yang "fix" enak, tidak berubah dari waktu ke waktu. Kami ingin setiap kunjungan Anda menjadi momen yang selalu dinanti.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-bold text-primary text-center mb-8"
        >
          Filosofi Kami
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Star size={48} className="text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Kualitas Terbaik</h3>
            <p className="text-gray-600">
              Kami hanya menggunakan bahan-bahan segar dan terasi pilihan terbaik untuk menjamin cita rasa yang superior.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Check size={48} className="text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Resep Otentik</h3>
            <p className="text-gray-600">
              Setiap hidangan dibuat berdasarkan resep turun-temurun Mamahmia yang telah teruji kelezatannya.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Users size={48} className="text-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Pelayanan Ramah</h3>
            <p className="text-gray-600">
              Kami melayani setiap pelanggan dengan senyum dan keramahan, membuat Anda merasa seperti di rumah.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-3xl font-bold text-primary text-center mb-8"
        >
          Visi & Misi
        </motion.h2>
        <div className="text-center text-gray-700 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-4"
          >
            <span className="font-semibold text-secondary">Visi:</span> Menjadi warung makan terasi terkemuka yang dikenal akan kelezatan otentik dan pengalaman bersantap yang hangat.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <span className="font-semibold text-secondary">Misi:</span>
            <ul className="list-disc list-inside mt-2 mx-auto max-w-xl">
              <li>Menyajikan hidangan terasi berkualitas tinggi dengan resep tradisional.</li>
              <li>Mempertahankan standar kebersihan dan pelayanan terbaik.</li>
              <li>Menciptakan suasana yang nyaman dan ramah bagi setiap pengunjung.</li>
              <li>Terus berinovasi dalam menu tanpa meninggalkan akar tradisi.</li>
            </ul>
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;