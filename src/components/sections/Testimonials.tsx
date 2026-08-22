"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Icons } from "../ui/Icons";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface Review {
  name: string;
  role: string;
  rating: number;
  message: string;
  date: string;
}

const initialReviews: Review[] = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechFlow Inc.",
    rating: 5,
    message: "AkiraDev completely transformed our backend architecture. The new API is lighting fast and our frontend developers love working with the updated endpoints. True professional.",
    date: "August 2026",
  },
  {
    name: "David Chen",
    role: "Founder, LaunchPad",
    rating: 5,
    message: "I've worked with many developers, but very few have the full-stack mastery to take a complex database migration and seamlessly wire it up to a gorgeous Next.js frontend.",
    date: "July 2026",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Engineering, ScaleUp",
    rating: 5,
    message: "Exceptional problem solver. We had a critical performance bottleneck in our React app that was costing us users. It was diagnosed and fixed in less than 48 hours.",
    date: "June 2026",
  },
];

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", rating: 5, message: "" });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      (window as any).lenis?.stop();
    } else {
      document.body.style.overflow = "unset";
      (window as any).lenis?.start();
    }
    return () => {
      document.body.style.overflow = "unset";
      (window as any).lenis?.start();
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const newReview: Review = {
      ...formData,
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    };

    setReviews([newReview, ...reviews]);
    setIsModalOpen(false);
    setFormData({ name: "", role: "", rating: 5, message: "" });
  };

  return (
    <section id="reviews" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ willChange: "transform, opacity", z: 0 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What they say.</h2>
            <p className="text-neutral-400 text-lg max-w-xl">Don't just take my word for it. Read what clients have to say about my work.</p>
          </m.div>
          
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ willChange: "transform, opacity", z: 0 }}
          >
            <Button onClick={() => setIsModalOpen(true)} variant="outline" className="gap-2">
              <Icons.message className="w-4 h-4" aria-hidden="true" />
              Leave a Review
            </Button>
          </m.div>
        </div>

        <div 
          className="relative w-full overflow-hidden"
          style={{ 
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
          }}
        >
          <div className="flex w-max animate-marquee gap-6 py-4">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div 
                key={`${review.name}-${index}`} 
                className="w-[350px] md:w-[400px] glass rounded-2xl p-6 md:p-8 flex flex-col justify-between flex-shrink-0"
              >
                <Icons.message className="absolute top-6 right-6 w-8 h-8 text-white/5" aria-hidden="true" />
                
                <div className="mb-6 relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icons.star 
                        key={i} 
                        className={cn("w-4 h-4", i < review.rating ? "text-brand-purple fill-brand-purple" : "text-neutral-700")} 
                      />
                    ))}
                  </div>
                  <p className="text-neutral-300 leading-relaxed text-sm md:text-base italic whitespace-pre-wrap">
                    "{review.message}"
                  </p>
                </div>

                <div className="mt-auto relative z-10 flex items-center justify-between gap-4 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-red to-brand-purple flex items-center justify-center text-white font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{review.name}</div>
                      <div className="text-neutral-500 text-xs font-medium">{review.role}</div>
                    </div>
                  </div>
                  <div className="text-neutral-600 text-xs">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              style={{ willChange: "opacity", z: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{ willChange: "transform, opacity", z: 0 }}
              className="relative w-full max-w-lg glass rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors p-2"
              >
                <Icons.close className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">Leave a Review</h3>
              <p className="text-neutral-400 mb-6 text-sm">Share your experience working with me.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-purple transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Role / Company (Optional)</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-purple transition-colors"
                    placeholder="CEO at TechCorp"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Icons.star 
                          className={cn("w-6 h-6", formData.rating >= star ? "text-brand-purple fill-brand-purple" : "text-neutral-600")} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-purple transition-colors min-h-[100px] resize-y"
                    placeholder="How was your experience?"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="gradient" className="w-full h-12">
                    Submit Review
                  </Button>
                </div>
              </form>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
