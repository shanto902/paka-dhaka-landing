"use client";

import React from "react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { Instagram } from "lucide-react";

const logo = "/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: easeOut },
  }),
};

const staggerList = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
};

const Homepage = () => {
  return (
    <motion.div
      className="bg-[#3B74D2]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="relative max-w-[1350px] pb-20 gap-x-10 gap-y-2 mx-auto px-5 min-h-screen grid md:grid-cols-2 lg:grid-cols-4">
        {/* Left Column */}
        <div className="mx-auto order-3 md:row-span-2 lg:row-span-1 md:order-1 flex items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-3 z-10"
          >
            <motion.div variants={fadeUp}>
              <Image
                src={logo}
                width={200}
                height={150}
                alt="Paka Logo"
                className="w-40 hidden md:block"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{ fontWeight: 500 }}
              className="lemon-font uppercase mb-5 md:mb-10 text-3xl  lg:text-4xl leading-none tracking-widest text-yellow-300"
            >
              Mark your Paka Moments!
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="uppercase leading-relaxed text-white futura-font text-xs"
            >
              BORN IN DHAKA IN 2023. PAKA IS AN ILLUSTRATED WORLD WHERE HUMOR.
              CULTURE. REBELLION. AND SELF-LOVE COLLIDE IN A COLORFUL, CHEEKY
              EXPLOSION. PAKA - MEANING &quot;RIPE&quot; - REMINDS US THAT THE
              JUICIEST. BOLDEST VERSION OF YOURSELF IS YET TO COME, AND IT ONLY
              GETS BETTER WITH TIME [EVEN WHEN IT MAY NOT FEEL LIKE IT!]. <br />
              <br />
              THROUGH PLAYFUL TYPOGRAPHY. BRIGHT PALETTES. LIFE-INSPIRED
              STORYTELLING. EXPLORATION OF OUR RELATIONSHIP WITH OUR CULTURE
              DOWN SOUTH, PAKA BRINGS YOU FASHION, STATIONERY. PRINTS, AND
              EVERYDAY TRINKETS THAT MAKE YOU SMILE. THINK, AND FEEL SEEN.
              <br />
              <br />
              PAKA - RIPE. REBELLIOUS, AND WORK-IN-PROGRESS
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex w-full gap-5 text-sm mt-5"
            >
              <motion.a
                href="https://international.pakadhaka.shop/"
                className="uppercase futura-font transition-all duration-300 cursor-pointer hover:text-[#074666] hover:bg-[#f9c74f] bg-[#ff2d25] text-white rounded-full py-3 px-4"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                International
              </motion.a>
              <motion.a
                href="https://bd.pakadhaka.shop/"
                className="uppercase futura-font transition-all duration-300 cursor-pointer hover:text-[#074666] hover:bg-[#f9c74f] bg-[#ff2d25] text-white rounded-full py-3 px-4"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Bangladesh
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Middle Column (Video) */}
        <div className="lg:col-span-2 order-1">
          <Image
            width={200}
            height={150}
            src={logo}
            alt="Paka Logo"
            className="w-30 md:hidden block"
          />
          <motion.video
            className="md:h-full   mix-blend-normal"
            src="/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        {/* Right Column (List) */}
        <motion.div
          className="text-yellow-300 self-start md:-mt-25 lg:mt-0 lg:self-center order-2 lg:mt-[40vh]"
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <ul className="flex flex-row futura-font flex-wrap lg:flex-col lg:gap-1 gap-3 justify-center">
            {[
              "stationery",
              "bags",
              "t-shirt",
              "art prints",
              "greeting cards",
            ].map((item, idx) => (
              <motion.li key={idx} variants={listItem} className="">
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div className="absolute md:bottom-0 bottom-10 z-99 right-0 md:left-1/2 -translate-x-1/2 pb-10 flex justify-center">
          <a
            href="https://www.instagram.com/paka.dhaka"
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-700 text-white shadow-lg transition-all duration-300 hover:bg-[#f9c74f] hover:text-[#074666]">
              <Instagram className="h-5 w-5" />
            </span>
          </a>
        </div>
      </section>
      {/* Bottom Instagram CTA */}
    </motion.div>
  );
};

export default Homepage;
