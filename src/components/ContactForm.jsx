import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Mail, User, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Kirim Pesan</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Nama wajib diisi' })}
              className="shadow appearance-none border rounded-lg w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Nama Anda"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email wajib diisi',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Format email tidak valid'
                }
              })}
              className="shadow appearance-none border rounded-lg w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="email@contoh.com"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Nomor Telepon (Opsional)</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="shadow appearance-none border rounded-lg w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+62 812 3456 7890"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan Anda</label>
          <textarea
            id="message"
            rows="5"
            {...register('message', { required: 'Pesan wajib diisi' })}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tulis pesan Anda di sini..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          Kirim Pesan
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;