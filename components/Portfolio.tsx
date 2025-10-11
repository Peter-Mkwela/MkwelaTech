// components/Portfolio.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function PortfolioSection() {
  const categories = [
    { id: "web", name: "Web Development", projects: "25+", color: "from-blue-500 to-cyan-500" },
    { id: "software", name: "Software Solutions", projects: "18+", color: "from-purple-500 to-pink-500" },
    { id: "graphics", name: "Graphics Design", projects: "42+", color: "from-orange-500 to-red-500" },
    
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h2>
          <p className="text-xl text-[#FFE5B4] max-w-2xl mx-auto">
            Discover our latest projects and successful implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Link href={`/portfolio/${item.id}`} className="block">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white`}
                >
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-[#FFA500]">{item.projects}</p>
                <p className="text-[#FFE5B4]/60 text-sm">Projects Completed</p>
                <div className="mt-4">
                  <span className="text-[#FFA500] text-sm font-medium hover:text-orange-400 transition-colors">
                    View Projects →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}