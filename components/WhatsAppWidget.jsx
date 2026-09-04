import { FaWhatsapp } from "react-icons/fa";

const phone = "923009073824";

const message =
    "Assalamualaikum, I would like to contact Saeed Ahmed Ashrafi.";

export default function WhatsAppWidget() {
    const whatsappUrl =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Saeed Ahmed Ashrafi on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
            <FaWhatsapp size={29} />
        </a>
    );
}