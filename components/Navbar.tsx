"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

import {
  getWhatsAppUrl,
  whatsappMessages,
} from "@/config/contact";

/* =========================================================
   BIZUP NAVIGATION ORDER
========================================================= */

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Our Team",
    href: "#team",
  },
  {
    label: "Our Work",
    href: "#work",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =========================================================
     SCROLLED NAVBAR
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     INITIAL URL HASH
  ========================================================= */

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    const validSection = navItems.some(
      (item) => item.href.replace("#", "") === hash
    );

    if (validSection) {
      setActiveSection(hash);
    }
  }, []);

  /* =========================================================
     ACTIVE SECTION / SCROLL SPY

     Website order:
     Home
     Our Team
     Our Work
     Services
     Testimonials
     Contact
  ========================================================= */

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const navbarOffset = 120;
      const currentPosition =
        window.scrollY + navbarOffset;

      let currentSection = "home";
      let closestDistance = Infinity;

      navItems.forEach((item) => {
        const id = item.href.replace("#", "");
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        const distance = Math.abs(
          currentPosition - sectionTop
        );

        if (
          sectionTop <= currentPosition + 20 &&
          distance < closestDistance
        ) {
          closestDistance = distance;
          currentSection = id;
        }
      });

      /* Bottom of page */
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (reachedBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateActiveSection
        );

        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, []);

  /* =========================================================
     MOBILE BODY LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     NAVIGATION CLICK
  ========================================================= */

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (!section) {
      console.warn(
        `BizUp Navbar: #${id} section not found`
      );

      return;
    }

    /* Immediately show active state */
    setActiveSection(id);

    /* Close mobile menu */
    setMobileOpen(false);

    /* Navbar height offset */
    const navbarHeight = 82;

    /* Exact section position */
    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY;

    const targetPosition =
      sectionTop - navbarHeight;

    /* Smooth scroll */
    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    /* Update URL without page jump */
    window.history.replaceState(
      null,
      "",
      href
    );
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <header
        className={`site-navbar ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-shell">

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#home"
            className="navbar-logo"
            aria-label="BizUp Home"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("#home");
            }}
          >
            <Image
              src="/images/brand/bizup-logo2.png"
              alt="BizUp"
              width={150}
              height={68}
              priority
            />
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="navbar-links"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const id = item.href.replace("#", "");

              const isActive =
                activeSection === id;

              return (
                <button
                  key={item.href}
                  type="button"
                  className={`navbar-link ${
                    isActive
                      ? "navbar-link-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick(item.href)
                  }
                  aria-current={
                    isActive ? "page" : undefined
                  }
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="navbar-active-dot" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* =================================================
              WHATSAPP CTA
          ================================================= */}

          <a
            href={getWhatsAppUrl(
              whatsappMessages.general
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            <MessageCircle size={16} />

            <span>Chat on WhatsApp</span>

            <ArrowUpRight size={15} />
          </a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="navbar-mobile-toggle"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(
                (previous) => !previous
              )
            }
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`mobile-nav-overlay ${
          mobileOpen
            ? "mobile-nav-open"
            : ""
        }`}
      >
        <div className="mobile-nav-content">

          {/* Label */}

          <div className="mobile-nav-label">
            <span />
            NAVIGATION
          </div>

          {/* Links */}

          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => {
              const id =
                item.href.replace("#", "");

              const isActive =
                activeSection === id;

              return (
                <button
                  key={item.href}
                  type="button"
                  className={`mobile-nav-link ${
                    isActive
                      ? "mobile-nav-link-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick(item.href)
                  }
                >
                  <span className="mobile-nav-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span>{item.label}</span>

                  <ArrowUpRight size={18} />
                </button>
              );
            })}
          </nav>

          {/* Mobile WhatsApp */}

          <a
            href={getWhatsAppUrl(
              whatsappMessages.general
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-whatsapp"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <MessageCircle size={18} />

            <span>Start a Conversation</span>

            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </>
  );
}