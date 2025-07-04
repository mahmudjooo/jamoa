import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="bg-green-50 py-16 px-4 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
            Bring Nature <br /> Into Your Home
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Discover a variety of beautiful and easy-to-care-for plants to
            brighten up your space.
          </p>

          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 text-lg rounded-2xl shadow">
            Shop Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2021/03/indoor-plant-secculant-600x600.jpg"
            alt="Plant in pot"
            className="w-full max-w-md rounded-3xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
