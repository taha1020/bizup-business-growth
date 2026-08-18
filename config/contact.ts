// config/contact.ts

export const contact = {
  whatsapp: "+923401728809",
  email: "",
  phone: "",
  address: "",
};

export const whatsappMessages = {
  general:
    "Hi BizUp! I would like to discuss how you can help grow my business.",

  default:
    "Hi BizUp! I would like to discuss how you can help grow my business.",

  hero:
    "Hi BizUp! I want to grow my business. I would like to discuss your services.",

  navbar:
    "Hi BizUp! I would like to learn more about your business growth services.",

  services:
    "Hi BizUp! I am interested in your business growth services.",

  contact:
    "Hi BizUp! I would like to get a quote for my business.",

  work:
    "Hi BizUp! I saw your work and would like to discuss a project.",

  reviewCards:
    "Hi BizUp! I am interested in Google Review Cards with NFC.",

  website:
    "Hi BizUp! I am interested in getting a professional website for my business.",

  marketing:
    "Hi BizUp! I am interested in Meta Ads and TikTok Ads for my business.",
};

export function getWhatsAppUrl(
  message: string = whatsappMessages.general
): string {
  const phoneNumber = contact.whatsapp.replace(/\D/g, "");

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}