"use client";

import React from "react";
import Image from "next/image";
import { motion, easeOut, easeInOut } from "framer-motion";

import image1 from "@/assets/images/8.TigerForest_Notebook.jpg";
import image2 from "@/assets/images/IMG_9605.jpg";
import image3 from "@/assets/images/bling bag - london-06.jpg";
import image4 from "@/assets/images/paka new bag -insta.jpg";
import image5 from "@/assets/images/social media notebook 2.jpg";
import image6 from "@/assets/images/image2.png";
import logo from "@/assets/images/logo.png";
import sticker1 from "@/assets/stickers/sticker1.png";
import sticker2 from "@/assets/stickers/sticker2.png";
import sticker3 from "@/assets/stickers/sticker3.png";
import sticker4 from "@/assets/stickers/sticker4.png";
import sticker5 from "@/assets/stickers/sticker5.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: easeOut },
  }),
};

const gridStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const gridItem = {
  hidden: { opacity: 0, scale: 0.96, y: 14 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

// Gentle float loop (no hover zoom)
const floatY = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [-4, 4, -4],
    transition: { duration: 3, repeat: Infinity, ease: easeInOut, delay },
  },
});

const Homepage = () => {
  return (
    <section className="md:h-screen bg-white flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 md:gap-5 max-w-7xl mx-auto overflow-hidden">
      {/* LEFT: Image column */}
      <motion.div
        className="columns-2 gap-0"
        variants={gridStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      >
        <motion.div variants={gridItem}>
          <Image placeholder="blur" src={image3} alt="Bling Bag - London" />
        </motion.div>

        <motion.div variants={gridItem} className="relative h-fit w-full">
          <Image
            placeholder="blur"
            src={image1}
            alt="Tiger Forest Notebook"
            className="object-cover border-8 border-red-500"
          />
          <motion.div
            className="absolute inset-0 z-10 px-5"
            initial={{ opacity: 0, rotate: -3, y: -10 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: true }}
          >
            <Image
              placeholder="blur"
              src={image6}
              alt="image2.png"
              className="h-[60%] w-full object-scale-down rotate-[270deg]"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={gridItem}>
          <Image
            placeholder="blur"
            src={image2}
            alt="IMG 9605"
            className="border-8 border-pink-400"
          />
        </motion.div>

        <motion.div variants={gridItem}>
          <Image
            placeholder="blur"
            src={image5}
            alt="Social Media Notebook 2"
          />
        </motion.div>
      </motion.div>

      {/* RIGHT: Copy + CTA + side image + stickers */}
      <div>
        <div className="grid md:grid-cols-3">
          <div className="col-span-2 px-10 md:px-16 space-y-5 md:space-y-2 mb-5 md:mb-0">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <motion.div variants={fadeUp}>
                <Image src={logo} alt="Paka Logo" className="w-28" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={1}
                style={{ fontWeight: 800 }}
                className="font-[var(--font-lemon)] uppercase text-[#074666] text-4xl"
              >
                Mark your Paka Moments!
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="font-[var(--font-futura)] text-sm"
              >
                Born in Dhaka in 2023, Paka is an illustrated world where humor,
                culture, rebellion, and self-love collide in a colorful, cheeky
                explosion. Paka — meaning &quot;ripe&quot; — reminds us that the
                juiciest, boldest version of yourself is yet to come, and it
                only gets better with time. Through playful typography, bright
                palettes, life-inspired storytelling, exploration of our
                relationship with our culture down South, Paka brings you
                fashion, stationery, prints, and everyday trinkets that make you
                smile, think, and feel seen. Paka — ripe, rebellious, and a
                work-in-progress
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex justify-around md:justify-between w-full gap-5 text-sm mt-5"
              >
                <motion.a
                  href="https://international.pakadhaka.shop/"
                  className="uppercase font-[var(--font-mrsiv)] transition-all duration-300 cursor-pointer hover:text-[#074666] hover:bg-[#f9c74f] bg-[#074666] text-[#f9c74f] rounded-full py-3 px-4"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  International
                </motion.a>
                <motion.a
                  href="https://bd.pakadhaka.shop/"
                  className="uppercase font-[var(--font-mrsiv)] transition-all duration-300 cursor-pointer hover:text-[#074666] hover:bg-[#f9c74f] bg-[#074666] text-[#f9c74f] rounded-full py-3 px-4"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Bangladesh
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          >
            <Image
              src={image4}
              alt="Paka New Bag Insta"
              className="h-full object-cover hidden md:block border-8 border-yellow-300"
            />
          </motion.div>
        </div>

        {/* Stickers row: visible + gentle float, NO hover zoom */}
        <motion.div
          className="md:px-16 px-5 overflow-hidden justify-center md:justify-start items-center h-fit flex flex-wrap gap-3 my-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {[sticker1, sticker2, sticker3, sticker4, sticker5].map(
            (sticker, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                {...floatY(i * 0.15)}
                className="w-28 rounded-b-full p-4 overflow-hidden"
              >
                <Image
                  placeholder="blur"
                  src={sticker}
                  alt={`Sticker ${i + 1}`}
                  // Ensures Next/Image reserves space (extra safe for visibility)
                  width={96}
                  height={96}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
