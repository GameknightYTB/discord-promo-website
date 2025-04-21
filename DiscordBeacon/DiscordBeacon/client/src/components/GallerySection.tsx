import { motion } from "framer-motion";

interface GalleryItemProps {
  image: string;
  caption: string;
  index: number;
}

function GalleryItem({ image, caption, index }: GalleryItemProps) {
  return (
    <motion.div 
      className="overflow-hidden rounded-lg shadow-lg aspect-square group relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
    >
      <img 
        src={image} 
        alt={caption} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white p-4 font-medium">{caption}</p>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=2050",
      caption: "Game Night Tournament"
    },
    {
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
      caption: "Voice Chat Session"
    },
    {
      image: "https://images.unsplash.com/photo-1560253023-3ec5085cffc8?q=80&w=2070",
      caption: "Community Event"
    },
    {
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071",
      caption: "Art Contest Winner"
    },
    {
      image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073",
      caption: "Bot Commands"
    },
    {
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070",
      caption: "Music Channel"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
      caption: "Development Channel"
    },
    {
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069",
      caption: "Meme Channel"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-discord-gray relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Server Gallery</h2>
          <p className="text-xl text-discord-lightGray max-w-2xl mx-auto">
            Take a peek at what's happening in our community
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              image={item.image}
              caption={item.caption}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
