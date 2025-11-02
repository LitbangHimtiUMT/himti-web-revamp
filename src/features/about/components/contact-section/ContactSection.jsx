import { Poppins } from "../../../../components/ui/Text";
import { Button } from "../../../../components/ui/Button";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageSquare } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const contactMethods = [
  {
    icon: <MessageSquare size={28} />,
    title: "WhatsApp",
    handle: "+62 858 4040 7463",
    cta: "Chat Sekarang",
    link: "https://wa.me/+6285840407463",
    spotlightColor: "rgba(34, 197, 94, 0.4)",
  },
  {
    icon: <Mail size={28} />,
    title: "Email",
    handle: "himti.umt11@gmail.com",
    cta: "Kirim Email",
    link: "mailto:himti.umt11@gmail.com",
    spotlightColor: "rgba(234, 179, 8, 0.4)",
  },
  {
    icon: <Instagram size={28} />,
    title: "Instagram",
    handle: "@himtiumt",
    cta: "Follow Kami",
    link: "https://instagram.com/himtiumt",
    spotlightColor: "rgba(23, 71, 193, 0.4)",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hubungi Kami
          </h2>
          <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Buka peluang baru dalam belajar, berjejaring, dan berkolaborasi.
            Klik untuk terhubung dengan HIMTI UMT!
          </Poppins>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotlightCard
                spotlightColor={method.spotlightColor}
                className="p-6"
              >
                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                  <div>
                    {method.icon}
                    <h3 className="mt-4 text-xl font-bold">{method.title}</h3>
                    <Poppins className="mt-1 text-gray-100">
                      {method.handle}
                    </Poppins>
                  </div>
                  <div className="mt-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="md" rounded="full">
                      {method.cta}
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
