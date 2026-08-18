"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Quote,
  Star,
  Maximize2,
  X,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { getWhatsAppUrl } from "@/config/contact";

type SelectedImage = {
  image: string;
  name: string;
} | null;

export default function Testimonials() {
  const [selectedImage, setSelectedImage] =
    useState<SelectedImage>(null);

  /* =========================
     ESCAPE KEY + BODY LOCK
  ========================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="testimonials"
        className="testimonials-section"
      >
        <div className="container">

          {/* =========================
              SECTION HEADER
          ========================= */}

          <div className="section-header testimonials-header">
            <div>
              <div className="section-eyebrow dark-eyebrow">
                <span />
                CLIENT FEEDBACK
              </div>

              <h2>
                What Our
                <br />
                <span>Clients Say.</span>
              </h2>
            </div>

          </div>

          {/* =========================
              TESTIMONIAL CARDS
          ========================= */}

          {testimonials.length > 0 ? (
            <div className="testimonials-grid">

              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.id}
                  className="testimonial-card"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >

                  {/* =========================
                      CLIENT IMAGE
                  ========================= */}

                  {testimonial.image ? (
                    <button
                      type="button"
                      className="testimonial-image"
                      onClick={() =>
                        setSelectedImage({
                          image: testimonial.image,
                          name: testimonial.name,
                        })
                      }
                      aria-label={`View ${testimonial.name}'s testimonial photo`}
                    >
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} testimonial`}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 25vw"
                        className="testimonial-image-photo"
                      />

                      {/* Image overlay */}
                      <div className="testimonial-image-overlay" />

                      {/* View image */}
                      <span className="testimonial-image-view">
                        <Maximize2 size={13} />
                        View Photo
                      </span>

                      {/* Rating badge */}
                      <div
                        className="testimonial-rating"
                        aria-label="5 out of 5 stars"
                      >
                        <span>5.0</span>

                        <div className="testimonial-stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={12}
                              fill="currentColor"
                              strokeWidth={1.5}
                            />
                          ))}
                        </div>
                      </div>
                    </button>
                  ) : (
                    <div className="testimonial-image testimonial-image-placeholder">
                      <span>
                        {testimonial.name
                          .charAt(0)
                          .toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* =========================
                      CARD CONTENT
                  ========================= */}

                  <div className="testimonial-card-content">

                    <Quote
                      className="testimonial-quote-icon"
                      size={25}
                    />

                    <p className="testimonial-review">
                      “{testimonial.review}”
                    </p>

                    <div className="testimonial-person">
                      <div className="testimonial-person-info">

                        <strong>
                          {testimonial.name}
                        </strong>

                        {testimonial.role && (
                          <span>
                            {testimonial.role}
                          </span>
                        )}

                        {testimonial.service && (
                          <small>
                            {testimonial.service}
                          </small>
                        )}

                      </div>
                    </div>

                  </div>

                </motion.article>
              ))}

            </div>
          ) : (

            /* =========================
               EMPTY STATE
            ========================= */

            <motion.div
              className="testimonials-empty"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="empty-quote">
                <Quote size={28} />
              </div>

              <h3>
                Our Clients&apos; Stories Are Coming Soon.
              </h3>

              <p>
                We&apos;re building great relationships with
                businesses across Pakistan. As more clients share
                their experience with BizUp, their stories will
                appear here.
              </p>

              <a
                href={getWhatsAppUrl(
                  "Hi BizUp! I would like to work with you and grow my business."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Become Our Next Success Story
                <ArrowUpRight size={17} />
              </a>

            </motion.div>
          )}

        </div>
      </section>

      {/* =========================
          TESTIMONIAL IMAGE LIGHTBOX
      ========================= */}

      {selectedImage && (
        <div
          className="testimonial-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.name} testimonial photo`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="testimonial-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              className="testimonial-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="testimonial-lightbox-image">
              <Image
                src={selectedImage.image}
                alt={`${selectedImage.name} testimonial`}
                fill
                sizes="95vw"
                className="testimonial-lightbox-photo"
                priority
              />
            </div>

            {/* Caption */}
            <div className="testimonial-lightbox-caption">
              <span>CLIENT TESTIMONIAL</span>
              <strong>{selectedImage.name}</strong>
            </div>

          </div>
        </div>
      )}
    </>
  );
}