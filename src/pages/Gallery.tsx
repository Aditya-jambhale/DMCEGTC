import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { Trophy, Medal, Award, Cpu, Radio } from "lucide-react";

interface Achiever {
  rank: "Winner" | "1st Runner Up" | "2nd Runner Up";
  name: string;
  paperId: string;
  paperTitle: string;
  affiliation: string;
}

const track1Achievers: Achiever[] = [
  {
    rank: "Winner",
    name: "Rohan Tavade, Aditya Thanage, Riya Tiwari, Sanjana Saw, Dr. Bandu Meshram",
    paperId: "Paper ID: #GTC-T1-01",
    paperTitle:
      '"Stake-Aware Learning with False Alarm Reduction: A Modular Framework for Risk-Sensitive Prediction"',
    affiliation: "Datta Meghe College of Engineering",
  },
  {
    rank: "1st Runner Up",
    name: "Mehnaz Ali, Atharva Khond, Payal Bombe, Gaurang Gadhari, Mrs. Jyoti Gaikwad",
    paperId: "Paper ID: #GTC-T1-02",
    paperTitle:
      '"A Heterogeneous Ensemble Framework for Predicting Multi-Factor College Admission Cutoffs"',
    affiliation: "Datta Meghe College of Engineering",
  },
];

const track2Achievers: Achiever[] = [
  {
    rank: "Winner",
    name: "Javeshvi Rawat, Rahul Vitthal Patil, Vaishnavi Avinash Dhole, Shreya Mahendra Waghmare",
    paperId: "Paper ID: #GTC-T2-01",
    paperTitle:
      '"Stake-Aware Learning with False Alarm Reduction: A Modular Framework for Risk-Sensitive Prediction"',
    affiliation: "A.C. Patil College of Engineering, Kharghar",
  },
  {
    rank: "1st Runner Up",
    name: "Tanisha Pakki, Sai Pawar, Neha Singh, Seema Mishra",
    paperId: "Paper ID: #GTC-T2-02",
    paperTitle: '"AI-Powered Legal Aid Chatbot for Women Safety"',
    affiliation: "Pillai College of Engineering",
  },
];

const AchieverCard = ({ achiever }: { achiever: Achiever }) => {
  const getRankStyles = () => {
    switch (achiever.rank) {
      case "Winner":
        return {
          icon: Trophy,
          iconColor: "text-amber-500",
          bgColor: "bg-gradient-to-br from-amber-50 to-white border-amber-200",
          badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        };
      case "1st Runner Up":
        return {
          icon: Medal,
          iconColor: "text-slate-400",
          bgColor: "bg-gradient-to-br from-slate-50 to-white border-slate-200",
          badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
        };
      case "2nd Runner Up":
        return {
          icon: Award,
          iconColor: "text-amber-700/80",
          bgColor: "bg-gradient-to-br from-orange-50/40 to-white border-orange-200/60",
          badgeColor: "bg-orange-100/60 text-orange-800 border-orange-200/50",
        };
    }
  };

  const styles = getRankStyles();
  const Icon = styles.icon;

  return (
    <div className={`relative p-6 sm:p-8 rounded-[2rem] border shadow-md flex flex-col sm:flex-row items-start gap-4 transition-all duration-300 hover:shadow-lg w-full ${styles.bgColor}`}>
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border flex items-center justify-center shrink-0 shadow-sm ${styles.iconColor}`}>
        <Icon size={24} />
      </div>
      <div className="space-y-1.5 min-w-0 flex-1">
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${styles.badgeColor}`}>
          {achiever.rank}
        </span>
        <h4 className="text-sm sm:text-base font-black text-navy leading-normal break-words">
          {achiever.name}
        </h4>
        <p className="text-xs text-slate-500 font-semibold italic break-words">
          {achiever.affiliation}
        </p>
        <div className="pt-2 border-t border-slate-100/60 mt-2">
          <p className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-widest">
            {achiever.paperId}
          </p>
          <p className="text-xs sm:text-[13px] text-slate-600 font-bold leading-normal mt-1 break-words">
            {achiever.paperTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/20 pointer-events-none" />
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal delay={100}>
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
                Conference Gallery
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 font-medium max-w-xl mx-auto tracking-tight">
                Capturing the key moments, presentations, and achievements of DMCE-GTC 2026.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Achievers Section */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="container px-4">
          <Reveal>
            <SectionHeader
              title="GTC 2026 Achievers"
              subtitle="Honoring the Winners and Runner-Ups of Best Paper Awards"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mt-12">
            {/* Track 1 Box */}
            <Reveal className="space-y-6" delay={150}>
              <div className="flex items-center gap-4 border-b border-slate-150 pb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Track 01</span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-navy">
                    Recent Trends in Computer Engineering
                  </h3>
                </div>
              </div>
              <div className="grid gap-4">
                {track1Achievers.map((achiever, i) => (
                  <AchieverCard key={i} achiever={achiever} />
                ))}
              </div>
            </Reveal>

            {/* Track 2 Box */}
            <Reveal className="space-y-6" delay={300}>
              <div className="flex items-center gap-4 border-b border-slate-150 pb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Radio size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Track 02</span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-navy">
                    Recent Trends in Electronics Engineering
                  </h3>
                </div>
              </div>
              <div className="grid gap-4">
                {track2Achievers.map((achiever, i) => (
                  <AchieverCard key={i} achiever={achiever} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container px-4">
          <Reveal>
            <SectionHeader
              title="Media Highlights"
              subtitle="Glimpses of the conference sessions, discussions, and award presentations"
            />
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
