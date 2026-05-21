import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { Eye, Award, Calendar, Users, Cpu, Radio } from "lucide-react";

import awardCeremonyImg from "@/assets/gtc-1.jpg";
import presentationImg from "@/assets/gtc-session.jpg";
import discussionImg from "@/assets/gtc-com.jpg";
import networkingImg from "@/assets/gtc-com1.jpg";
import posterImg from "@/assets/Poster.png";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  icon: any;
  featured?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: awardCeremonyImg,
    title: "GTC 2026 Award Ceremony",
    category: "Awards",
    description: "Winners and runner-ups receiving certificates and gold/silver medals from eminent guests on stage.",
    icon: Award,
    featured: true,
  },
  {
    id: 2,
    src: presentationImg,
    title: "Keynote Presentation",
    category: "Sessions",
    description: "Industry and academic leaders presenting cutting-edge advancements in computing.",
    icon: Cpu,
  },
  {
    id: 3,
    src: presentationImg,
    title: "Interactive Panel Discussion",
    category: "Panel",
    description: "Eminent scientists and tech leaders discussing the convergence of IT and Electronics.",
    icon: Radio,
  },
  {
    id: 4,
    src: networkingImg,
    title: "CSI Student Networking",
    category: "Community",
    description: "Research scholars, faculty, and student members exchanging ideas and fostering collaboration.",
    icon: Users,
  },
  {
    id: 5,
    src: posterImg,
    title: "Official Conference Banner",
    category: "Event",
    description: "Official promotional material outlining the agenda, tracks, and dates of DMCE-GTC 2026.",
    icon: Calendar,
  },
];

export const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Awards", "Sessions", "Panel", "Community", "Event"];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="space-y-12">
      {/* Category Filter Controls */}
      <Reveal className="flex flex-wrap justify-center gap-2 sm:gap-3" delay={100}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              filter === cat
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {filteredItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.id}
              delay={150 + index * 50}
              className={`${item.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card 
                    className="group relative overflow-hidden border-slate-200 rounded-[2rem] shadow-elegant hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-zoom-in bg-white h-full"
                    onClick={() => setSelectedItem(item)}
                  >
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Image container */}
                      <div className={`relative overflow-hidden w-full bg-slate-950 ${
                        item.featured ? "h-[300px] sm:h-[400px]" : "h-[250px] sm:h-[300px]"
                      }`}>
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-350">
                            <Eye className="text-primary h-5 w-5" />
                          </div>
                        </div>

                        {/* Category Badge */}
                        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-md">
                          <Icon size={10} className="stroke-[3]" />
                          {item.category}
                        </span>
                      </div>

                      {/* Content panel */}
                      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-heading text-lg font-black text-navy uppercase tracking-tight group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                {/* Lightbox Modal */}
                <DialogContent className="max-w-4xl w-[92vw] p-0 border-none bg-transparent shadow-none outline-none overflow-hidden">
                  {selectedItem && (
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] md:max-h-none">
                      <DialogTitle className="sr-only">{selectedItem.title}</DialogTitle>
                      {/* Image column */}
                      <div className="relative bg-slate-950 flex-grow md:w-3/5 aspect-video md:aspect-auto flex items-center justify-center">
                        <img
                          src={selectedItem.src}
                          alt={selectedItem.title}
                          className="w-full h-full object-contain max-h-[50vh] md:max-h-[75vh]"
                        />
                      </div>
                      
                      {/* Content column */}
                      <div className="p-6 sm:p-8 md:w-2/5 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-slate-100">
                        <div className="space-y-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                            {selectedItem.category}
                          </span>
                          <h2 className="font-heading text-xl sm:text-2xl font-black text-navy uppercase tracking-tight">
                            {selectedItem.title}
                          </h2>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed">
                            {selectedItem.description}
                          </p>
                        </div>
                        
                        <div className="mt-8 pt-4 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          DMCE-GTC 2026 • Official Gallery
                        </div>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
