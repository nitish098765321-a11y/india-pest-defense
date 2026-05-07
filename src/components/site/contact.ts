export const PHONE_PRIMARY = "8985740048";
export const PHONE_SECONDARY = "7095755301";
export const WHATSAPP = "918985740048";
export const waLink = (msg = "Hi, I would like to book pest control service.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
export const telLink = (n = PHONE_PRIMARY) => `tel:+91${n}`;
