import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="pesan"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold mb-18 text-primary">
          Kirim Pesan
        </h2>

        {/* Form Contact */}
        <div className="max-w-3xl mx-auto">
          <form className="grid grid-cols-1 gap-9">
            {/* Pesan */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-4 text-xl font-medium">
                Kirim pesan anonim :
              </label>
              <textarea
                rows="10"
                placeholder="Tulis pesan..."
                className="bg-dark-400 p-6 text-xl rounded-2xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            {/* Tombol kirim */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex place-items-end justify-center gap-4 bg-primary px-14 py-5 rounded-2xl text-xl font-semibold hover:bg-primary/70 transition"
              >
                Kirim Pesan <FaPaperPlane size={26} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
