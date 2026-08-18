"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl, whatsappMessages } from "@/config/contact";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background Grid */}
      <div className="hero-grid" />

      <div className="container hero-container">
        {/* =========================
            LEFT — HERO CONTENT
        ========================= */}
        <div className="hero-content">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We Don&apos;t Just
            <br />
            Market Businesses.
            <br />
            We Build Their
            <br />
            <span>Growth.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From Google presence and review solutions to websites and paid
            advertising, we help businesses build, attract and grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow"
            >
              Start Growing With BizUp
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#work"
              className="btn btn-outline-light"
            >
              View Our Work
            </a>
          </motion.div>

        </div>

        {/* =========================
            RIGHT — HERO IMAGE
        ========================= */}
        <motion.div
          className="hero-image-wrapper"
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
        >
          <div className="hero-image-frame">
            <Image
              src="/images/portfolio/bh-gaming-store.png"
              alt="BH Gaming Store Google Review Card created by BizUp"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className="hero-image"
            />

            <div className="hero-image-shine" />
          </div>

          {/* Service Tags */}
          <div className="hero-image-caption">
            <span>GOOGLE REVIEW</span>
            <span>NFC</span>
            <span>QR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}