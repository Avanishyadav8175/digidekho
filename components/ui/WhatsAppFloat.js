'use client';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in your digital services. Can you help me?");
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919996821315';
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </button>
  );
};

export default WhatsAppFloat;