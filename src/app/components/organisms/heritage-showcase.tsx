"use client";
import { motion } from "framer-motion";
import { Spot } from "@/types";
import GenericCarousel from "./generic-carousel";
import { HeritageCard } from "../molecules/heritage-card";
interface HomeHeritageProps {
  spots: Spot[];
}
const HomeHeritage = ({ spots }: HomeHeritageProps) => {
  if (!spots) return null;
  return (
    <section id="heritage" className="bg-white py-24 lg:py-40">
      <div className="container mx-auto">
        <div className="mb-24 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-5xl font-black leading-[0.85] tracking-tighter text-slate-900 md:text-7xl lg:text-8xl"
          >
            A Journey Through <br />
            <span className="text-blue-600">Time & Tradition.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 lg:text-2xl"
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
