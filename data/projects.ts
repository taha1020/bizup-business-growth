export type Project = {
  id: string;
  client: string;
  industry: string;
  image: string;
  services: string[];
  description: string;
};

export const projects: Project[] = [
  {
    id: "bh-gaming-store",
    client: "BH Gaming Store",
    industry: "Gaming & Electronics",
    image: "/images/portfolio/bh-gaming-store1.png",
    services: ["Google Review Card", "NFC", "QR"],
    description:
      "Custom-branded Google Review Card solution created to strengthen customer feedback and engagement.",
  },

  {
    id: "al-rehman",
    client: "Al Rehman LED & Laptops",
    industry: "Electronics & Computers",
    image: "/images/portfolio/al-rehman-store1.png",
    services: ["Google Review Card", "NFC", "QR"],
    description:
      "Branded Google Review Card solution designed around the business identity and customer experience.",
  },

  {
    id: "best-care-pharmacy",
    client: "Best Care Pharmacy",
    industry: "Pharmacy",
    image: "/images/portfolio/best-care1.png",
    services: ["Google Review Card", "NFC", "QR"],
    description:
      "Professional customer review solution designed for a pharmacy environment and its customer journey.",
  },

  {
    id: "welcome-computer",
    client: "Welcome Computer",
    industry: "Computers & IT",
    image: "/images/portfolio/welcome-computer.png",
    services: ["Google Review Card", "NFC", "QR"],
    description:
      "Custom Google Review solution created to help the business collect customer feedback more easily.",
  },

  {
    id: "soft-solution",
    client: "Soft Solution Laptop",
    industry: "Laptops & Accessories",
    image: "/images/portfolio/soft-solution.png",
    services: ["Google Review Card", "NFC", "QR"],
    description:
      "Branded NFC and QR review card solution created for a laptop and accessories retailer.",
  },

  {
    id: "raza-optical",
    client: "Raza Optical",
    industry: "Optical",
    image: "/images/portfolio/raza-optical.png",
    services: ["Google Review Card", "NFC", "QR"],
    description:
      "Custom Google Review Card experience designed to complement the optical store's brand identity.",
  },

  {
    id: "student-electronics",
    client: "Student Electronics Trading",
    industry: "Electronics",
    image: "/images/portfolio/student-electronics.png",
    services: ["Google Review Card", "NFC", "QR"],
    description:
      "Clean and professional Google Review solution designed for an electronics business.",
  },

  {
    id: "google-review-cards",
    client: "Google Review Cards",
    industry: "Google Review Solutions",
    image: "/images/portfolio/all-cards.png",
    services: ["Google Review Card", "NFC", "QR"],
    description:
      "A collection of branded Google Review Card solutions combining NFC and QR for easier customer feedback.",
  },
];