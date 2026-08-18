"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/config/contact";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* =========================
            SERVICES HEADER
        ========================= */}

        <div className="section-header services-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">
              <span />
              WHAT WE DO
            </div>

            <h2>
              Services That Help
              <br />
              <span>Your Business Grow.</span>
            </h2>
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From your Google presence and website to customer
            reviews and digital advertising, BizUp builds the
            digital foundations that help businesses move forward.
          </motion.p> */}
        </div>

        {/* =========================
            COMPLETE GROWTH SERVICE
        ========================= */}

        <motion.article
          className="growth-service"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="growth-service-content">
            <div className="growth-service-top">
              <div className="growth-icon">
                <Sparkles size={23} strokeWidth={1.8} />
              </div>

              <span className="growth-number">00</span>
            </div>

            <div className="growth-copy">
              <h3>Complete Business Growth</h3>

              <h4>Everything You Need to Get Started.</h4>

              <p>
                Starting a new business or rebuilding your digital
                presence? We bring your essential digital solutions
                together — from Google visibility and websites to
                customer reviews and advertising.
              </p>
            </div>

            <div className="growth-path">
              <span>START</span>
              <i />
              <span>BUILD</span>
              <i />
              <span>ATTRACT</span>
              <i />
              <span>GROW</span>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(
              "Hi BizUp, I'd like to discuss building my business from the ground up."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-yellow growth-cta"
          >
            Talk About My Business
            <ArrowUpRight size={17} />
          </a>
        </motion.article>

        {/* =========================
            SERVICES GRID
        ========================= */}

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 2) * 0.08,
                }}
              >
                {/* Top */}
                <div className="service-top">
                  <div className="service-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="service-number">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="service-content">
                  <h3>{service.title}</h3>

                  <h4>{service.headline}</h4>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={getWhatsAppUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  <span>Get Started</span>
                  <ArrowUpRight size={15} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}