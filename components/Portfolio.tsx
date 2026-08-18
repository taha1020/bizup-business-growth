"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "@/data/projects";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    client: string;
  } | null>(null);

  // Close modal with Escape key
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
      <section id="work" className="portfolio-section">
        <div className="container">
          <div className="section-header portfolio-header">
            <div>
              <div className="section-eyebrow">
                <span />
                OUR WORK
              </div>

              <h2>
                Real Work.
                <br />
                <span>Real Businesses.</span>
              </h2>
            </div>

            {/* <p>
              Every business is different. So is every solution
              we create.
            </p> */}
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="portfolio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                }}
              >
                <button
                  type="button"
                  className="portfolio-image"
                  onClick={() =>
                    setSelectedImage({
                      image: project.image,
                      client: project.client,
                    })
                  }
                  aria-label={`View ${project.client} project`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.client} project`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="portfolio-photo"
                  />

                  <div className="portfolio-overlay">
                    <span>VIEW WORK</span>
                    <ArrowUpRight size={18} />
                  </div>
                </button>

                <div className="portfolio-info">
                  <div>
                    <span className="portfolio-industry">
                      {project.industry}
                    </span>

                    <h3>{project.client}</h3>
                  </div>

                  <p>{project.description}</p>

                  <div className="portfolio-tags">
                    {project.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="portfolio-lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.client} project preview`}
        >
          <div
            className="portfolio-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="portfolio-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>

            <div className="portfolio-lightbox-image">
              <Image
                src={selectedImage.image}
                alt={`${selectedImage.client} project`}
                fill
                sizes="90vw"
                className="portfolio-lightbox-photo"
                priority
              />
            </div>

            <div className="portfolio-lightbox-caption">
              <span>OUR WORK</span>
              <strong>{selectedImage.client}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}