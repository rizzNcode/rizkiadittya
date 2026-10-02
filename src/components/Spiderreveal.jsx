import React, { useEffect } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const wait = (s) => new Promise((res) => setTimeout(res, s * 1000));

const FEATHER = 40; // lebar tepi sapuan (%), makin besar makin lembut
const ANGLES = [0, 45, 90, 135, 180, 225, 270, 315]; // arah sapuan acak

// Warna glow diambil dari currentColor (diisi class "text-primary" di bawah)
const GLOW = "color-mix(in srgb, currentColor 60%, transparent)";

/**
 * Siklus alter ego (versi santai):
 *   wajah asli (diam) -> sapuan pelan dengan cahaya lembut -> topeng (diam)
 *   -> kembali lagi dengan arah sapuan acak, dan seterusnya.
 */
const SpiderReveal = ({ faceSrc, maskSrc, alt = "profile", className = "" }) => {
  const reduceMotion = useReducedMotion();

  const p = useMotionValue(0); // progres transformasi: 0 = wajah, 1 = topeng
  const angle = useMotionValue(90); // arah sapuan (derajat)
  const edge = useMotionValue(0); // kecerahan cahaya di tepi sapuan
  const pulse = useMotionValue(0); // denyut cahaya lembut di seluruh gambar
  const sc = useMotionValue(1); // tarikan napas halus

  // Lapisan topeng muncul mengikuti sapuan
  const maskImage = useTransform([p, angle], ([pv, av]) => {
    const a = pv * (100 + FEATHER) - FEATHER;
    return `linear-gradient(${av}deg, #000 ${a}%, transparent ${a + FEATHER}%)`;
  });

  // Cahaya lebar dan lembut yang berjalan di tepi sapuan
  const edgeImage = useTransform([p, angle], ([pv, av]) => {
    const e = pv * (100 + FEATHER) - FEATHER / 2;
    return `linear-gradient(${av}deg, transparent ${e - 18}%, ${GLOW} ${
      e - 4
    }%, rgba(255,255,255,0.5) ${e}%, ${GLOW} ${e + 4}%, transparent ${e + 18}%)`;
  });

  useEffect(() => {
    if (reduceMotion) {
      p.set(0); // pengguna mematikan animasi: tampilkan wajah saja
      return;
    }

    let cancelled = false;
    const running = new Set();

    const go = (value, to, options) =>
      new Promise((resolve) => {
        const controls = animate(value, to, { ...options, onComplete: resolve });
        running.add(controls);
      });

    const transform = async (toMask) => {
      angle.set(pick(ANGLES));
      const d = rand(2.4, 3.2); // durasi sapuan (detik)

      // Semuanya berjalan bersamaan dan mengalir, tanpa getar atau kilat
      await Promise.all([
        go(p, toMask ? 1 : 0, { duration: d, ease: [0.45, 0, 0.55, 1] }),
        go(edge, [0, 0.3, 0.3, 0], {
          duration: d,
          times: [0, 0.2, 0.3, 1],
          ease: "easeInOut",
        }),
        go(pulse, [0, 0.18, 0], { duration: d, ease: "easeInOut" }),
        go(sc, [1, 1.02, 1], { duration: d, ease: "easeInOut" }),
      ]);
    };

    (async () => {
      while (!cancelled) {
        await wait(rand(0.3, 3)); // diam sebagai wajah asli
        if (cancelled) break;
        await transform(true);
        await wait(rand(0.3, 3)); // diam sebagai topeng
        if (cancelled) break;
        await transform(false);
      }
    })();

    return () => {
      cancelled = true;
      running.forEach((c) => c.stop());
    };
  }, [reduceMotion, p, angle, edge, pulse, sc]);

  return (
    // Wadah luar membawa class dari luar (mis. animate-float),
    // wadah dalam membawa skala agar transform-nya tidak bentrok.
    <div className={`relative w-64 md:w-80 aspect-[736/702] ${className}`}>
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-xl"
        style={{ scale: sc }}
      >
        {/* Lapisan bawah: wajah asli */}
        <img
          src={faceSrc}
          alt={alt}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover select-none"
        />

        {/* Lapisan atas: topeng, terbuka mengikuti sapuan */}
        <motion.img
          src={maskSrc}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ WebkitMaskImage: maskImage, maskImage }}
        />

        {/* Cahaya lembut di tepi sapuan */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none text-primary"
          style={{
            backgroundImage: edgeImage,
            opacity: edge,
            mixBlendMode: "screen",
          }}
        />

        {/* Denyut cahaya primary yang halus */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-primary pointer-events-none"
          style={{ opacity: pulse, mixBlendMode: "screen" }}
        />
      </motion.div>
    </div>
  );
};

export default SpiderReveal;