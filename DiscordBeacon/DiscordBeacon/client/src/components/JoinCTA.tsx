import { Button } from "@/components/ui/button";
import { FaDiscord, FaEnvelope, FaTwitter, FaYoutube, FaInstagram, FaTwitch, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function JoinCTA() {
  const socialLinks = [
    { icon: <FaTwitter className="text-2xl" />, href: "#" },
    { icon: <FaYoutube className="text-2xl" />, href: "#" },
    { icon: <FaInstagram className="text-2xl" />, href: "#" },
    { icon: <FaTwitch className="text-2xl" />, href: "#" },
    { icon: <FaTiktok className="text-2xl" />, href: "#" },
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-r from-discord-blurple to-purple-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-10 text-gray-100">
            Become part of our growing family of gamers, creators, and friends. Connect, chat, and play together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button asChild size="lg" variant="secondary" className="bg-white text-discord-dark px-8 py-6 rounded-full font-bold text-lg flex items-center justify-center hover:shadow-lg w-full sm:w-auto">
                <a href="https://discord.gg/your-invite-code" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="mr-2 text-discord-blurple" /> Join Discord Server
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button asChild size="lg" variant="outline" className="bg-discord-dark/30 backdrop-blur-sm hover:bg-discord-dark/50 border-none px-8 py-6 rounded-full font-bold text-lg flex items-center justify-center w-full sm:w-auto">
                <a href="mailto:contact@example.com">
                  <FaEnvelope className="mr-2" /> Contact Us
                </a>
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-10 pt-10 border-t border-white/20 flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-white hover:text-discord-blurple transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
