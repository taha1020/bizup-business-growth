export type Testimonial = {
  id: string;
  name: string;
  business?: string;
  role?: string;
  image: string;
  review: string;
  service?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "al-rehman-led-laptops",
    name: "Al Rehman LED & Laptops",
    business: "Al Rehman LED & Laptops",
    role: "Business Client",
    image: "/images/testimonial/customer-1.png",
    service: "Google Review Card + NFC",
    review:
      "Great service from BizUp. The Review Card looks professional, and the NFC and QR experience is simple and easy to use.",
  },
];