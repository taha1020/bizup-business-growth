import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/contact";
import { socialLinks } from "@/config/social";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Image
              src="/images/brand/bizup-logo2.png"
              alt="BizUp"
              width={145}
              height={65}
            />

            <p>
              Business growth solutions designed to help businesses build
              their presence, attract customers and grow.
            </p>

            <strong>Build. Grow. Scale.</strong>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h4>Navigate</h4>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#team">Our Team</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Services</h4>

            <a href="#services">Google Review Cards</a>
            <a href="#services">Google Business Profile</a>
            <a href="#services">Websites</a>
            <a href="#services">Website Management</a>
            <a href="#services">Meta Ads</a>
            <a href="#services">TikTok Ads</a>
          </div>

          {/* Connect */}
          <div className="footer-column">
            <h4>Connect</h4>

            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <ArrowUpRight size={13} />
            </a>

            {/* Instagram */}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <ArrowUpRight size={13} />
              </a>
            )}

            {/* Facebook */}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
                <ArrowUpRight size={13} />
              </a>
            )}

            {/* TikTok */}
            {socialLinks.tiktok && (
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
                <ArrowUpRight size={13} />
              </a>
            )}

            {/* LinkedIn */}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={13} />
              </a>
            )}

            {/* Future social accounts */}
            {!socialLinks.instagram &&
              !socialLinks.facebook &&
              !socialLinks.tiktok &&
              !socialLinks.linkedin && (
                <span className="social-coming">
                  More social channels coming soon.
                </span>
              )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>© 2026 BizUp. All rights reserved.</span>

          <span>Serving businesses across Pakistan</span>

          {/* Social Icons */}
          <div className="footer-social-icons">
            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            {/* Instagram */}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                IG
              </a>
            )}

            {/* Facebook */}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                FB
              </a>
            )}

            {/* TikTok */}
            {socialLinks.tiktok && (
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
              >
                TK
              </a>
            )}

            {/* LinkedIn */}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                IN
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}