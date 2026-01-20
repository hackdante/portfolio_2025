export const getWhatsAppUrl = (
  message: string, 
  phone: string = "573136211448" 
): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};