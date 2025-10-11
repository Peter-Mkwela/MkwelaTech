/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

const portfolioData = {
  web: {
    name: "Web Development",
    projects: "25+",
    color: "from-blue-400 to-cyan-400",
    description: "Professional websites and responsive web applications built with modern technologies.",
    images: ["/portfolio/web-1.jpg", "/portfolio/web-2.jpg", "/portfolio/web-3.jpg","/portfolio/web-4.jpg"],
  },
  software: {
    name: "Software Solutions",
    projects: "18+",
    color: "from-purple-400 to-pink-400",
    description: "Custom software solutions designed for efficiency, scalability, and innovation.",
    images: ["/portfolio/web-1.jpg", "/portfolio/web-2.jpg", "/portfolio/web-3.jpg","/portfolio/web-4.jpg"],
  },
  graphics: {
    name: "Graphics Design",
    projects: "42+",
    color: "from-orange-400 to-red-400",
    description: "Creative visuals, branding, and logo designs that capture your identity.",
    images: ["/portfolio/graphics-1.jpg", "/portfolio/graphics-2.jpg", "/portfolio/graphics-3.jpg", "/portfolio/graphics-4.jpg", "/portfolio/graphics-5.jpg", "/portfolio/graphics-6.jpg"],
  },
  recovery: {
    name: "Data Recovery",
    projects: "156+",
    color: "from-green-400 to-emerald-400",
    description: "Reliable data recovery services for all storage devices and formats.",
    images: ["/portfolio/recovery-1.jpg", "/portfolio/recovery-2.jpg"],
  },
  os: {
    name: "OS Installations",
    projects: "89+",
    color: "from-indigo-400 to-violet-400",
    description: "Optimized OS installations and maintenance for smooth performance.",
    images: ["/portfolio/os-1.jpg", "/portfolio/os-2.jpg"],
  },
  it: {
    name: "IT Support",
    projects: "200+",
    color: "from-yellow-400 to-amber-400",
    description: "Comprehensive IT support and troubleshooting for businesses and individuals.",
    images: ["/portfolio/it-1.jpg", "/portfolio/it-2.jpg", "/portfolio/it-3.jpg"],
  },
};

export default function PortfolioCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const categoryData = portfolioData[category as keyof typeof portfolioData];

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000066] via-[#330099] to-[#FFA500] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#FFA500]">Category Not Found</h1>
          <Link href="/#portfolio" className="text-[#FFE5B4] hover:text-[#FFA500] underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000066] via-[#330099] to-[#FFA500] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-[#FFA500] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div
            className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${categoryData.color} rounded-2xl flex items-center justify-center shadow-xl shadow-[#FFA500]/30`}
          >
            <Sparkles size={36} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#FFA500] to-[#FFE5B4] bg-clip-text text-transparent drop-shadow-md">
            {categoryData.name}
          </h1>
          <p className="text-lg text-[#FFE5B4]/90 max-w-2xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>
          <div className="mt-4">
            <span className="text-2xl font-bold text-[#FFA500]">{categoryData.projects}</span>
            <span className="text-[#FFE5B4] ml-2">Projects Completed</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categoryData.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative group overflow-hidden rounded-2xl shadow-lg shadow-black/40 border border-white/10 backdrop-blur-md"
            >
              <img
                src={image}
                alt={`${categoryData.name} project ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold tracking-wide">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {categoryData.images.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#FFE5B4] text-lg">Portfolio images coming soon!</p>
            <p className="text-[#FFE5B4]/60 mt-2">We’re currently updating our portfolio with recent projects.</p>
          </div>
        )}
      </div>
    </div>
  );
}
