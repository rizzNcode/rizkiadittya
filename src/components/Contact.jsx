import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/anon-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setMessage("");
        setTimeout(() => setSuccess(false), 3000);
      } else {
        console.error(data);
        alert("Gagal mengirim pesan!");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengirim pesan!");
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="pesan"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px- max-w-3xl">
        <h2 className=" text-3xl font-bold text-center mb-12">
          Pesan <span className="text-primary">Anonim</span>
        </h2>

        <div className="bg-dark-300 p-8 rounded-2xl shadow-xl border border-dark-100/20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="text-gray-300 mb-3 block text-lg font-semibold">
                Kirim pesan anonim
              </label>

              <textarea
                rows="8"
                placeholder="Tulis pesan...."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
                  bg-dark-400 w-full p-5 text-lg rounded-xl text-gray-200
                  placeholder-gray-500
                  outline-none border border-dark-100/30
                  focus:border-primary focus:ring-1 focus:ring-primary
                  transition-all duration-200
                  resize-none
                "
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex items-center justify-center gap-3
                  bg-primary px-10 py-4 rounded-xl text-lg font-semibold
                  hover:bg-primary/70 transition
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}
                <FaPaperPlane size={20} />
              </button>

              {success && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 mt-5 text-base font-medium"
                >
                  Pesan berhasil dikirim!
                </motion.p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
