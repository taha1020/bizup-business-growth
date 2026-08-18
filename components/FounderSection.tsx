"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ExpertiseTags from "./ExpertiseTags";


type FounderSectionProps = {
  variant: "light" | "dark";
  role: string;
  name: string;
  eyebrow: string;
  headline: string;
  image: string;
  imageAlt: string;
  description: string[];
  expertise: string[];
  reverse?: boolean;
};

export default function FounderSection({
  variant,
  role,
  name,
  eyebrow,
  headline,
  image,
  imageAlt,
  description,
  expertise,
  reverse = false,
}: FounderSectionProps) {
  return (
    <section
      id={role === "CEO" ? "team" : undefined}
      className={`founder-section ${
      variant === "dark"
      ? "founder-dark"
      : "founder-light"
    } ${
  role === "CEO"
    ? "founder-ceo"
    : role === "CO-FOUNDER"
    ? "founder-cofounder"
    : ""
  }`}
    >
      <div
        className={`container founder-grid ${
          reverse ? "founder-reverse" : ""
        }`}
      >
        <motion.div
          className="founder-image"
          initial={{
            opacity: 0,
            x: reverse ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="founder-image-frame">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="founder-photo"
            />
          </div>

          <div className="founder-image-accent" />
        </motion.div>

        <motion.div
          className="founder-content"
          initial={{
            opacity: 0,
            x: reverse ? -50 : 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="section-eyebrow">
            <span />
            {eyebrow}
          </div>

          <div className="founder-role">{role}</div>

          <h2>{name}</h2>

          <h3>{headline}</h3>

          <div className="founder-description">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="expertise-wrapper">
            <span className="expertise-title">
              CORE EXPERTISE
            </span>

            <div className="expertise-list">
              <ExpertiseTags items={expertise} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}