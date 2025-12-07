import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);

    const { error } = await supabase.from("messages").insert({
      content: message,
    });

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setMessage("");
      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert("Gagal mengirim pesan!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="kontak"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl font-bold mb-18 text-primary">
          Kirim Pesan
        </h2>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-9">
            <div className="flex flex-col">
              <label className="text-gray-300 mb-4 text-xl font-medium">
                Kirim pesan anonim :
              </label>
              <textarea
                rows="10"
                placeholder="Tulis pesan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-dark-400 p-6 text-xl rounded-2xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex place-items-end justify-center gap-4 bg-primary px-14 py-5 rounded-2xl text-xl font-semibold hover:bg-primary/70 transition disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}{" "}
                <FaPaperPlane size={26} />
              </button>

              {success && (
                <p className="text-green-400 mt-4 text-lg">
                  Pesan berhasil dikirim!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
