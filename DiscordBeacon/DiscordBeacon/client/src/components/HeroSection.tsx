import { Button } from "@/components/ui/button";
import { FaDiscord, FaInfoCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { serverName } from "@/lib/constants";

export default function HeroSection() {
  const memberAvatars = [
    "https://i.pravatar.cc/100?img=1", 
    "https://i.pravatar.cc/100?img=2", 
    "https://i.pravatar.cc/100?img=3", 
    "https://i.pravatar.cc/100?img=4"
  ];

  return (
    <section className="hero-section min-h-screen pt-24 pb-16 relative overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">{serverName}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-xl">
              Join our thriving community of gamers, creators, and friends. The ultimate place to connect, chat, and game together.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-discord-blurple hover:bg-opacity-80 px-8 py-7 rounded-full font-semibold text-lg flex items-center transition-all duration-300 shadow-lg hover:shadow-discord-blurple/50 transform hover:scale-105 animate-glow">
                <a href="#join">
                  <FaDiscord className="mr-2 text-xl" /> Join Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-discord-dark hover:bg-opacity-90 px-8 py-7 rounded-full font-semibold text-lg flex items-center transition-all duration-300 transform hover:scale-105">
                <a href="#features">
                  <FaInfoCircle className="mr-2 text-xl" /> Learn More
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                {memberAvatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    src={avatar}
                    className="w-10 h-10 rounded-full border-2 border-discord-gray"
                    alt="Community Member"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  />
                ))}
                <motion.span 
                  className="w-10 h-10 rounded-full bg-discord-blurple flex items-center justify-center border-2 border-discord-gray text-sm font-bold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  +2k
                </motion.span>
              </div>
              <motion.p 
                className="text-gray-200"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                Join <span className="font-bold">2,000+</span> members
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-discord-blurple rounded-full filter blur-[80px] opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6] 
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-5 -left-5 w-40 h-40 bg-purple-500 rounded-full filter blur-[80px] opacity-60"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.7, 0.6] 
              }}
              transition={{ 
                duration: 4,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
            <motion.img 
              src="https://i.imgur.com/ux6XmJX.png" 
              alt="Discord Server Preview" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="scroll-indicator cursor-pointer"
            animate={{ y: [0, 6, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FaChevronDown className="text-2xl opacity-80" />
          </motion.div>
          <span className="text-sm text-gray-300">Scroll to discover</span>
        </motion.div>
      </div>
    </section>
  );
}
