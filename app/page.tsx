import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FounderSection from "@/components/FounderSection";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      {/* =========================
          CEO — MUHAMMAD TAHA AHMAD
      ========================= */}

      <FounderSection
        variant="light"
        role="CEO"
        name="Muhammad Taha"
        eyebrow="LEADERSHIP"
        headline="Building Digital Foundations for Business Growth."
        image="/images/founders/muhammad-taha-ahmad.jpeg"
        imageAlt="Muhammad Taha Ahmad — CEO of BizUp"
        description={[
          "Muhammad Taha Ahmad leads the business growth and digital development side of BizUp. He helps businesses establish a strong digital presence and build the systems they need to grow.",

          "From Google Business Profile setup and business websites to website management, maintenance and digital content, Taha turns business requirements into practical digital solutions.",
        ]}
        expertise={[
          "Google Business Profile",
          "Website Development",
          "Website Management",
          "Website Maintenance",
          "Digital Presence",
          "Content Management",
          "Business Solutions",
          "Video Creation",
        ]}
      />

      {/* =========================
          CO-FOUNDER — TALHA SHAHID
      ========================= */}

      <FounderSection
  variant="dark"
  role="CO-FOUNDER"
  name="Talha Shahid"
  eyebrow="CREATIVE & MARKETING"
  headline="Turning Creative Ideas Into Business Growth."
  image="/images/founders/talha-shahid.png"
  imageAlt="Talha Shahid — Co-Founder of BizUp"
  reverse
  description={[
    "Talha Shahid leads the creative and marketing side of BizUp, helping businesses attract attention, strengthen customer engagement and build a more professional brand presence.",

    "His work covers Google Review Card design, NFC and QR solutions, graphic design, Meta Ads and TikTok Ads — creating practical marketing solutions built around each business.",

    "He also develops creative concepts, video ideas and marketing content that help businesses communicate their value and connect with the right audience.",
  ]}
  expertise={[
    "Google Review Card Design",
    "NFC + QR Solutions",
    "Graphic Design",
    "Meta Ads",
    "TikTok Ads",
    "Creative Campaigns",
    "Video Ideas",
    "Marketing Creatives",
  ]}
/>

      <Portfolio />

      <Services />

      <Testimonials />

      <Contact />

      {/* =========================
{/* =========================
    BRAND STATEMENT
========================= */}

<section className="brand-statement">
  {/* Decorative transparent PNG */}
  <div className="brand-statement-art" aria-hidden="true">
    <img
      src="/images/brand-statement-bg.png"
      alt=""
    />
  </div>

  {/* Content */}
  <div className="container brand-statement-inner">

    <div className="section-eyebrow dark-eyebrow">
      <span />
      THE BIZUP APPROACH
    </div>

    <h2>
      Your Business Has Potential.
      <span>Let&apos;s Build It.</span>
    </h2>

    <p>
      Whether you&apos;re starting from zero, improving an existing
      business or preparing for your next level, BizUp can help you
      build the digital foundation to move forward.
    </p>

    <a
      href="https://wa.me/923401728809?text=Hi%20BizUp%2C%20I%27d%20like%20to%20discuss%20growing%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-dark"
    >
      Talk to BizUp
      <span>↗</span>
    </a>

  </div>
</section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}