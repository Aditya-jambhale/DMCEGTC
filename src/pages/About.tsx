import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import {
  Building2,
  GraduationCap,
  Info,
  Users,
  Trophy,
  ShieldCheck,
  Network
} from "lucide-react";
import { ConferenceTracks } from "@/components/ConferenceTracks";
import dmceLogo from "@/assets/website-dmce.png";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="about-hero" className="bg-gradient-hero text-primary-foreground py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/20 pointer-events-none" />
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal delay={100}>
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
                About DMCE-GTC 2026
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 font-medium max-w-xl mx-auto tracking-tight">
                A Premier International Platform for Research, Innovation, and Global Tech Convergence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="py-12 sm:py-20 bg-background relative">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
            <Reveal className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full mb-1">
                <Info size={14} className="font-bold" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">The Main Event</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-navy">
                About the Conference
              </h2>
              <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  The Department of Computer Engineering at <span className="font-bold text-primary">Datta Meghe College of Engineering</span> is proud to organize the <span className="font-bold underline decoration-secondary/30 underline-offset-4">Global Tech Convergence: International Conference on Computing and IT Advancements 2026 (DMCE-GTC 2026)</span>.
                </p>
                <p>
                  Scheduled for <span className="font-semibold text-navy">28th and 29th April 2026</span>, this conference serves as an international platform for researchers, academicians, and industry professionals to exchange knowledge and discuss emerging frontiers in technology.
                </p>
                <div className="flex items-center gap-3 p-3 sm:p-4 bg-secondary/5 border-l-4 border-secondary rounded-r-xl mt-4">
                  <Network className="text-secondary shrink-0 h-5 w-5" />
                  <p className="text-xs sm:text-sm font-medium text-navy">
                    Organized in association with the <span className="font-bold italic">Computer Society of India (CSI)</span> Student Branch.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal className="relative group mt-8 lg:mt-0" delay={200}>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />
              <Card className="relative bg-white border-slate-200 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-elegant">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-5 sm:mb-6">Key Objectives</h3>
                  <div className="space-y-5 sm:space-y-6">
                    {[
                      { icon: Trophy, title: "Innovation", desc: "Showcasing cutting-edge research in Computing and IT." },
                      { icon: Users, title: "Collaboration", desc: "Fostering interdisciplinary convergence and academic exchange." },
                      { icon: ShieldCheck, title: "Relevance", desc: "Bridging the gap between academic findings and industry needs." }
                    ].map((item, id) => (
                      <div key={id} className="flex gap-3 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-navy text-xs sm:text-sm">{item.title}</h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <hr className="border-slate-100 mb-16 sm:mb-24" />

          {/* About Department Section */}
          <div className="mb-16 sm:mb-24 text-left">
            <Reveal className="max-w-3xl mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 text-secondary rounded-full mb-3">
                <GraduationCap size={14} />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Academic Excellence</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy mb-4 sm:mb-6">
                Department of Computer Engineering
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Established in 1992, the department has grown into a prestigious hub for technical education, now offering UG (intake 180), PG, and Ph.D. programs under the University of Mumbai.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Reveal delay={100}>
                <Card className="hover:shadow-lg h-full transition-all border-slate-200 rounded-2xl">
                  <CardContent className="p-6 sm:p-8">
                    <h4 className="font-bold text-navy mb-3 flex items-center gap-2 text-sm sm:text-base">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Advanced Infrastructure
                    </h4>
                    <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed">
                      Well-equipped laboratories specializing in Cloud Computing, Cybersecurity, Advanced Databases, and Network Infrastructure.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delay={200}>
                <Card className="hover:shadow-lg h-full transition-all border-slate-200 rounded-2xl">
                  <CardContent className="p-6 sm:p-8">
                    <h4 className="font-bold text-navy mb-3 flex items-center gap-2 text-sm sm:text-base">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      CATT & CSI Initiatives
                    </h4>
                    <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed">
                      The department actively conducts Skill Development Programs through CATT and organizes "Technitude", our flagship annual technical fest.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delay={300} className="sm:col-span-2 lg:col-span-1">
                <Card className="hover:shadow-lg h-full transition-all border-slate-200 rounded-2xl">
                  <CardContent className="p-6 sm:p-8">
                    <h4 className="font-bold text-navy mb-3 flex items-center gap-2 text-sm sm:text-base">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Outcome-Based Education
                    </h4>
                    <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed">
                      Consistently producing high-performing students who secure prestigious placements and higher education opportunities globally.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>

          <hr className="border-slate-100 mb-16 sm:mb-24" />

          {/* About DMCE Section */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
            <Reveal className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy/10 text-navy rounded-full mb-3">
                <Building2 size={14} />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Our Foundation</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-navy">
                About DMCE
              </h2>
              <p className="mt-4 text-slate-500 italic text-sm sm:text-base">
                "A Pioneer in Engineering Education since 1988."
              </p>
            </Reveal>
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <Reveal className="bg-slate-50 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200">
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Datta Meghe College of Engineering (DMCE) is a leading private engineering institution managed by Nagar Yuwak Shikshan Sanstha (NYSS) in Navi Mumbai. Accredited by <span className="font-bold">NAAC, AICTE</span>, and <span className="font-bold">DTE</span>, it has established itself as a hub for excellence, blending academic rigor with industry relevance.
                </p>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { title: "Diverse Programs", desc: "Offering B.E., M.E., and Ph.D. programs in Civil, Mechanical, Computer, Electronics & Telecommunication, Chemical, IT, and AI&DS." },
                  { title: "Holistic Development", desc: "Focusing on ethical leadership and societal values through the UHV Cell, nurturing professionals who are ready for the future." },
                  { title: "Industry Ties", desc: "Strong connections and an expansive alumni network ensure students gain practical expertise and global career opportunities." },
                  { title: "Modern Campus", desc: "Features advanced laboratories, a vast library, and collaborative spaces for research and industry engagement." }
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 100} className="space-y-2 sm:space-y-3">
                    <h4 className="font-bold text-navy uppercase tracking-widest text-[10px] sm:text-xs">{item.title}</h4>
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks (Reusable Component) */}
      <ConferenceTracks />

      {/* Organizing Institution (Kept as requested) */}
      <section className="py-12 sm:py-20 bg-slate-50 overflow-hidden">
        <div className="container px-4">
          <Reveal>
            <SectionHeader
              title="Organized By"
              subtitle="Department of Computer Engineering"
            />
          </Reveal>

          <Reveal delay={200}>
            <Card className="max-w-2xl mx-auto shadow-elegant border-none rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
              <CardContent className="p-6 sm:p-10 text-center bg-white">
                <div className="flex justify-center mb-6 relative group">
                  <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={dmceLogo}
                    alt="DMCE Logo"
                    className="h-16 sm:h-20 w-auto relative z-10 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-1 sm:mb-2 text-center">
                  Datta Meghe College of Engineering (DMCE)
                </h3>
                <p className="text-base sm:text-lg text-primary font-semibold mb-6 sm:mb-8 text-center">
                  Airoli, Navi Mumbai
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {[
                    { label: "NAAC 'A' Grade", color: "bg-primary/10 text-primary" },
                    { label: "NBA Accredited (Civil & Chemical)", color: "bg-secondary/20 text-secondary-foreground" },
                    { label: "University of Mumbai", color: "bg-slate-100 text-slate-600" }
                  ].map((tag, id) => (
                    <span key={id} className={`px-4 sm:px-5 py-1.5 rounded-full font-bold text-[9px] sm:text-[10px] uppercase tracking-widest ${tag.color}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
