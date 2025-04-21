import { FaUsers, FaHashtag, FaCalendarCheck, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function StatCard({ icon, value, label, delay }: StatCardProps) {
  return (
    <motion.div 
      className="bg-discord-gray/50 backdrop-blur-sm p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-center mb-3 text-discord-blurple">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-discord-lightGray">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    { icon: <FaUsers className="text-3xl" />, value: "2,000+", label: "Members", delay: 0 },
    { icon: <FaHashtag className="text-3xl" />, value: "20+", label: "Channels", delay: 0.1 },
    { icon: <FaCalendarCheck className="text-3xl" />, value: "Weekly", label: "Events", delay: 0.2 },
    { icon: <FaRobot className="text-3xl" />, value: "10+", label: "Custom Bots", delay: 0.3 }
  ];

  return (
    <section className="py-16 bg-discord-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
