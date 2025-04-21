import { 
  FaGamepad, 
  FaUsersCog, 
  FaMusic, 
  FaComments, 
  FaGift, 
  FaCrown 
} from "react-icons/fa";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-discord-dark p-6 rounded-xl shadow-lg hover:shadow-discord-blurple/30 transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="w-14 h-14 bg-discord-blurple/20 rounded-lg flex items-center justify-center mb-6 text-discord-blurple">
        {icon}
      </div>
      <h3 className="feature-heading text-xl font-bold mb-3">{title}</h3>
      <p className="text-discord-lightGray">{description}</p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaGamepad className="text-2xl" />,
      title: "Gaming Tournaments",
      description: "Regular tournaments with prizes for popular games. Compete and show off your skills!"
    },
    {
      icon: <FaUsersCog className="text-2xl" />,
      title: "Active Moderation",
      description: "Our dedicated team ensures a safe, friendly environment for everyone at all times."
    },
    {
      icon: <FaMusic className="text-2xl" />,
      title: "Music & Media",
      description: "Dedicated music bots and media channels for sharing your favorite content."
    },
    {
      icon: <FaComments className="text-2xl" />,
      title: "Active Community",
      description: "Engage in lively discussions, make new friends, and find gaming partners."
    },
    {
      icon: <FaGift className="text-2xl" />,
      title: "Regular Giveaways",
      description: "Frequent giveaways for games, subscriptions, and other exciting prizes."
    },
    {
      icon: <FaCrown className="text-2xl" />,
      title: "Custom Roles",
      description: "Earn unique roles and perks as you become more active in our community."
    }
  ];

  return (
    <section id="features" className="py-20 bg-discord-gray relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Our Server?</h2>
          <p className="text-xl text-discord-lightGray max-w-2xl mx-auto">
            Discover all the amazing features and benefits our community has to offer
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
