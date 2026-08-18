"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Send,
} from "lucide-react";
import { getWhatsAppUrl } from "@/config/contact";

const serviceOptions = [
  "Google Review Cards",
  "Google Business Profile",
  "Website Development",
  "Website Management",
  "Meta Ads",
  "TikTok Ads",
  "Complete Growth Solution",
  "Not Sure Yet",
];

const businessTypes = [
  "Retail",
  "Electronics",
  "Pharmacy",
  "Restaurant",
  "Salon",
  "Clinic",
  "Optical",
  "Service Business",
  "Startup",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const business = String(formData.get("business") || "");
    const phone = String(formData.get("phone") || "");
    const businessType = String(
      formData.get("businessType") || ""
    );
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `
Hi BizUp! I'd like to discuss growing my business.

Name: ${name}
Business: ${business}
WhatsApp: ${phone}
Business Type: ${businessType}
Interested In: ${service}

About My Business:
${message || "I'd like to discuss my business requirements with you."}
    `.trim();

    const whatsappUrl = getWhatsAppUrl(whatsappMessage);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-layout">

          {/* =========================
              LEFT — CONTACT COPY
          ========================= */}

          <div className="contact-copy">

            <div className="section-eyebrow">
              <span />
              GET IN TOUCH
            </div>

            <h2>
              Let&apos;s Grow
              <br />
              <span>Your Business.</span>
            </h2>

            <p>
              Tell us about your business, your goals, or the
              challenge you&apos;re trying to solve. We&apos;ll
              help you find the right next step.
            </p>

            <div className="contact-methods">

              {/* WhatsApp */}

              <a
                href={getWhatsAppUrl(
                  "Hi BizUp! I'd like to discuss growing my business."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <MessageCircle size={20} />
                </div>

                <span>
                  <small>WHATSAPP</small>
                  <strong>+92 340 1728809</strong>
                </span>

                <ArrowUpRight
                  className="contact-method-arrow"
                  size={18}
                />
              </a>

              {/* Response information */}

              <div className="contact-method contact-info">

                <div className="contact-method-icon">
                  <Send size={19} />
                </div>

                <span>
                  <small>QUICK RESPONSE</small>
                  <strong>Let&apos;s discuss your business</strong>
                </span>

              </div>

            </div>
          </div>


          {/* =========================
              RIGHT — CONTACT FORM
          ========================= */}

          <div className="contact-form-wrapper">

            {submitted ? (

              <div className="form-success">

                <div className="success-icon">
                  <Send size={24} />
                </div>

                <h3>
                  Your conversation is ready.
                </h3>

                <p>
                  WhatsApp has been opened with your
                  business details. Send the message to
                  start the conversation with BizUp.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-yellow"
                >
                  Send Another Inquiry
                  <ArrowUpRight size={17} />
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* Name + Business */}

                <div className="form-row">

                  <label>
                    Full Name

                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    Business Name

                    <input
                      name="business"
                      type="text"
                      placeholder="Enter your business name"
                      required
                    />
                  </label>

                </div>


                {/* WhatsApp + Business Type */}

                <div className="form-row">

                  <label>
                    WhatsApp Number

                    <input
                      name="phone"
                      type="tel"
                      placeholder="+92 3XX XXXXXXX"
                      required
                    />
                  </label>

                  <label>
                    Business Type

                    <select
                      name="businessType"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your business type
                      </option>

                      {businessTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                        >
                          {type}
                        </option>
                      ))}
                    </select>

                  </label>

                </div>


                {/* Service */}

                <label>
                  What do you need?

                  <select
                    name="service"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {serviceOptions.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>

                </label>


                {/* Message */}

                <label>
                  Tell us about your business

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us what you'd like to build, improve, or grow..."
                  />

                </label>


                {/* CTA */}

                <button
                  type="submit"
                  className="btn btn-yellow form-submit"
                >
                  Start the Conversation
                  <ArrowUpRight size={18} />
                </button>


                <p className="form-note">
                  Your information is used only to respond
                  to your business inquiry.
                </p>

              </form>

            )}

          </div>

        </div>
      </div>
    </section>
  );
}