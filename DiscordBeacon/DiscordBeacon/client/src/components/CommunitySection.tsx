import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  name: string;
  since: string;
  avatar: string;
  index: number;
}

function TestimonialCard({ quote, name, since, avatar, index }: TestimonialProps) {
  return (
    <motion.div 
      className="bg-discord-gray rounded-xl p-6 shadow-lg relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="absolute -top-3 left-6 w-10 h-10 flex items-center justify-center bg-discord-blurple text-white rounded-full shadow-lg">
        <FaQuoteLeft />
      </div>
      <div className="pt-6">
        <p className="text-gray-300 mb-6">{quote}</p>
        <div className="flex items-center mt-4">
          <img src={avatar} alt={`${name} Avatar`} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-discord-lightGray text-sm">{since}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CommunitySection() {
  const testimonials = [
    {
      quote: "This is hands down the best community I've ever been a part of. The events are amazing and I've made so many friends!",
      name: "Alex Johnson",
      since: "Member since 2021",
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      quote: "The mods are fantastic and keep the server drama-free. I love participating in the weekly game nights and tournaments!",
      name: "Sophia Williams",
      since: "Member since 2022",
      avatar: "https://i.pravatar.cc/100?img=8"
    },
    {
      quote: "I joined for the gaming but stayed for the community. Everyone is so welcoming and the custom bots make the experience unique.",
      name: "Marcus Chen",
      since: "Member since 2022",
      avatar: "https://i.pravatar.cc/100?img=12"
    }
  ];

  return (
    <section id="community" className="py-20 bg-discord-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-discord-blurple/20 rounded-full filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Community</h2>
          <p className="text-xl text-discord-lightGray max-w-2xl mx-auto">
            Hear what our members have to say about their experience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              since={testimonial.since}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
