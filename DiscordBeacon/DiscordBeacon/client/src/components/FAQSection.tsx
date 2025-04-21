import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, toggleOpen, index }: FAQItemProps) {
  return (
    <motion.div 
      className="bg-discord-gray rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <button 
        className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="font-bold text-lg">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="transition-transform duration-300" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <p className="text-discord-lightGray">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I join the server?",
      answer: "Simply click on the \"Join Server\" button on this page. It will redirect you to Discord, where you can accept the invitation. If you don't have Discord yet, you'll need to create an account first."
    },
    {
      question: "What kind of events do you host?",
      answer: "We host a variety of events including gaming tournaments, movie nights, art contests, music listening parties, and casual game nights. Our event schedule is posted weekly in the #announcements channel."
    },
    {
      question: "Are there rules I need to follow?",
      answer: "Yes, we have community guidelines to ensure everyone has a positive experience. The main rules include being respectful to others, no hate speech or harassment, no spamming, and following Discord's Terms of Service. The complete rules can be found in the #rules channel."
    },
    {
      question: "How can I get roles in the server?",
      answer: "Roles are earned through activity and participation. We have both self-assignable roles in the #role-assignment channel and special roles that are awarded by moderators for contributing to the community. Some roles also unlock as you level up by chatting and participating."
    },
    {
      question: "Can I suggest new features or channels?",
      answer: "Absolutely! We welcome community input. You can post your suggestions in the #suggestions channel, and if they receive enough support from other members, our staff team will consider implementing them."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-discord-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-discord-lightGray max-w-2xl mx-auto">
            Find answers to common questions about our server
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
