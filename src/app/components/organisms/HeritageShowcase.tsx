"use client";
import { motion } from "framer-motion";
import { Spot } from "@/types";
import GenericCarousel from "./GenericCarousel";
import { HeritageCard } from "../molecules/HeritageCard";
interface HomeHeritageProps {
  spots: Spot[];
}
const HomeHeritage = ({ spots }: HomeHeritageProps) => {
  if (!spots) return null;
  return (
    <section
      id="heritage"
      className="bg-white py-24 [container-type:inline-size] lg:py-40"
    >
      <div className="container mx-auto">
        <div className="mb-10 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-6xl font-black tracking-tight text-slate-900"
            style={{
              lineHeight: "0.95",
              fontSize: "clamp(2.5rem, 7cqw + 0.5rem, 7.5rem)",
            }}
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="block"
              >
                A Journey Through
              </motion.span>
            </span>
            <span className="relative mt-2 block overflow-hidden text-blue-600">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block italic"
              >
                Time & Tradition.
              </motion.span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-1 left-0 h-[0.05em] w-1/3 origin-left bg-blue-600/30"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl font-medium leading-relaxed text-slate-500"
            style={{
              marginTop: "clamp(1.5rem, 3cqw, 2.5rem)",
              fontSize: "clamp(1rem, 2cqw + 0.5rem, 1.5rem)",
            }}
          >
            Explore the architectural wonders and natural landscapes that define
            the rich history of Pangasinan.
          </motion.p>
        </div>
        <GenericCarousel
          title="See Pangasinan’s open destinations"
          badge="Where to Go?"
        >
          {spots.map((spot) => (
            <div key={spot.id} style={{ scrollSnapAlign: "start" }}>
              <HeritageCard spot={spot} />
            </div>
          ))}
        </GenericCarousel>
      </div>
    </section>
  );
};
export default HomeHeritage;
