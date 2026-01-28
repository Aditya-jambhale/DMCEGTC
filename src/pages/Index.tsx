import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/Layout";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import brochurePdf from "@/assets/brochure.pdf";
import {
  Calendar,
  FileText,
  Users,
  MapPin,
  ArrowRight,
  Download,
  ExternalLink,
  BookOpen,
  Trophy,
  ShieldCheck,
  Building2,
  GraduationCap,
  Microscope,
  Globe,
  Award,
  Clock,
  ChevronRight,
  Mic2,
  User,
  Eye,
  CheckCircle2
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ConferenceTracks } from "@/components/ConferenceTracks";

import heroBg from "@/assets/image.png";
import posterImg from "@/assets/Poster.png";
import dmceLogo from "@/assets/website-dmce.png";

const Index = () => {
  const conferenceDate = new Date("2026-04-28T09:00:00");

  const quickDates = [
    { label: "Paper Submission Starts", date: "1st Feb 2026" },
    { label: "Final Submission Deadline", date: "27th March 2026" },
    { label: "Notification Date", date: "9th April 2026" },
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "WoS Indexed",
      desc: "Selected papers forwarded to Web of Science journals.",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Cash Awards",
      desc: "Best paper awards with cash prizes for every track.",
      color: "text-amber-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "In association with CSI Student Branch & global experts.",
      color: "text-primary"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative text-white py-24 sm:py-32 lg:py-40 overflow-hidden bg-navy"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal delay={100}>
              <div className="inline-flex items-center gap-4 glass-dark rounded-full px-5 py-2.5 mb-10 shadow-xl border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Calendar size={16} className="text-[#FFD700]" />
                  <span className="text-[12px] font-black uppercase tracking-widest">28-29 April 2026</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2 text-white">
                  <MapPin size={16} className="text-[#FFD700]" />
                  <span className="text-[12px] font-black uppercase tracking-widest">Airoli, Navi Mumbai</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tighter">
                Global Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-white to-[#FFD700] bg-[length:200%_auto] animate-shimmer">Convergence</span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 font-medium tracking-tight">
                International Conference on Computing and IT Advancements 2026
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <div className="px-5 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <p className="text-sm font-bold text-[#FFD700] uppercase tracking-[0.2em] mb-0.5">DMCE-GTC 2026</p>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Users size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">In association with CSI Student Branch</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mb-12 max-w-2xl mx-auto">
                <CountdownTimer targetDate={conferenceDate} />
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-10 bg-[#FFD700] hover:bg-white text-navy font-black text-xs uppercase tracking-widest rounded-full shadow-xl shadow-black/20 transition-all border-none"
                >
                  <Link to="/registration">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 border-white/20 bg-white/5 text-white hover:bg-white/10 text-xs font-black uppercase tracking-widest rounded-full backdrop-blur-sm transition-all"
                >
                  <Link to="/cfp">Submit Paper</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Moving Venue Info Bar */}
      <section className="bg-navy border-y border-white/10 py-5 overflow-hidden whitespace-nowrap relative z-20">
        <div className="flex items-center animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#FFD700]" />
                <span className="font-bold text-white uppercase tracking-[0.2em] text-[10px]">
                  Organized by Department of Computer Engineering, DMCE, Airoli
                </span>
              </div>
              <span className="text-white/30 font-black">•</span>
              <div className="flex items-center gap-3">
                <span className="text-[#FFD700] font-black text-[10px] uppercase tracking-widest">NAAC 'A' Grade</span>
              </div>
              <span className="text-white/30 font-black">•</span>
              <div className="flex items-center gap-3">
                <span className="text-[#FFD700] font-black text-[10px] uppercase tracking-widest">NBA Accredited (Civil & Chemical)</span>
              </div>
              <span className="text-white/30 font-black">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Legacy & Vision */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <Reveal className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Academic Excellence</span>
                </div>
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-black text-navy uppercase tracking-tighter leading-tight">
                  A Legacy of Research <br />& Innovation
                </h2>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-lg">
                  Established in 1988, <span className="font-bold text-navy">Datta Meghe College of Engineering</span> has been a pioneer in technical education for over three decades.
                  DMCE-GTC 2026 continues this tradition by converging global thinkers on a single platform.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-primary">34+</div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years of Prestige</p>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-secondary">A Grade</div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">NAAC Accreditation</p>
                </div>
              </div>

              <div className="pt-2">
                <Button asChild variant="link" className="text-primary font-black text-xs uppercase tracking-widest p-0 group">
                  <Link to="https://dmce.ac.in/">
                    Learn about our institute
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal className="relative group" delay={200}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-[3rem] blur-2xl opacity-50 transition-opacity group-hover:opacity-100" />
              <Card className="relative border-slate-100 rounded-[2.5rem] shadow-2xl overflow-hidden bg-white">
                <CardContent className="p-8 sm:p-10 space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                      <Microscope className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-base mb-1">Cutting-Edge Research</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Focusing on high-impact disciplines in Computer & Electrical Engineering.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                      <ShieldCheck className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-base mb-1">Quality Assurance</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Rigorous peer-review process ensuring standard-compliant publication.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center shrink-0 shadow-lg">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-base mb-1">Student Centric</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">Special tracks and discounted registration for CSI student members.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Conference Poster & Brochure - Optimized Height & Preview */}
      {/* 2. Conference Poster & Brochure */}
      {/* 2. Conference Poster & Brochure */}
      <section className="py-16 bg-gradient-to-b from-navy via-[#0f1729] to-navy relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[150px] animate-pulse delay-1000" />
        </div>

        <div className="container px-4 relative z-10">
          <Reveal className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] rounded-full backdrop-blur-sm">
              <FileText size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Official Documentation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter leading-tight">
              Conference Materials
            </h2>
            <p className="text-white/50 text-xs sm:text-sm max-w-2xl mx-auto font-medium">
              View and download official conference assets for submission and information.
            </p>
          </Reveal>

          {/* GRID FIXED — NO MORE STRETCHING */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

            {/* POSTER CARD */}
            <Reveal delay={100}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group relative cursor-zoom-in border-white/10 bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700">
                    <CardContent className="p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#FFD700]/10 flex items-center justify-center">
                            <FileText className="text-[#FFD700]" size={18} />
                          </div>
                          <h3 className="text-sm font-black text-white uppercase tracking-tight">Official Poster</h3>
                        </div>
                        <div className="px-3 py-1 bg-white/5 rounded-full text-[9px] text-white/40 font-bold uppercase tracking-widest">Full View</div>
                      </div>

                      {/* POSTER RATIO FIX */}
                      <div className="relative w-full h-[370px] rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                        <img
                          src={posterImg}
                          alt="Conference Poster"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                    </CardContent>
                  </Card>
                </DialogTrigger>

                {/* FULLSCREEN MODAL */}
                <DialogContent className="max-w-3xl w-[90vw] p-4 border-none bg-transparent shadow-none outline-none">
                  <div className="bg-[#0f172a] rounded-2xl p-4 shadow-2xl flex justify-center">
                    <img
                      src={posterImg}
                      alt="Conference Poster"
                      className="w-full max-h-[70vh] object-contain rounded-xl"
                    />
                  </div>
                </DialogContent>



              </Dialog>
            </Reveal>

            {/* BROCHURE CARD */}
            {/* BROCHURE CARD */}
<Reveal delay={200}>
  <Card className="border-white/10 bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">
    <CardContent className="p-6 sm:p-8 flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center shadow-lg shadow-[#FFD700]/20">
          <BookOpen size={24} className="text-navy" />
        </div>
        <div>
          <h3 className="text-base font-black text-white uppercase tracking-tight">Conference Brochure</h3>
          <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Full Event Guide</p>
        </div>
      </div>

      {/* LOCAL PDF PREVIEW */}
      <div className="relative h-64 max-h-64 w-full bg-black/40 rounded-xl overflow-hidden border border-white/5 shadow-inner">
        <iframe
          src="https://drive.google.com/file/d/1bNetxjDVRVb9dL1XXY7o3jgfIHSwhRZu/preview"
          className="w-full h-full border-none"
          title="Conference Brochure"
          loading="lazy"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2">
        <Button asChild className="h-11 bg-[#FFD700] hover:bg-white text-navy font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg shadow-[#FFD700]/10">
          <a href="https://drive.google.com/file/d/1bNetxjDVRVb9dL1XXY7o3jgfIHSwhRZu/view?usp=sharing" download>
            <Download className="mr-2 h-4 w-4" /> Download
          </a>
        </Button>
        <Button asChild variant="outline" className="h-11 border-white/20 bg-white/5 text-white hover:bg-white/10 text-[10px] font-black uppercase tracking-widest rounded-full">
          <a href="https://drive.google.com/file/d/1bNetxjDVRVb9dL1XXY7o3jgfIHSwhRZu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-3 w-3" /> View PDF
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
</Reveal>


          </div>
        </div>
      </section>



      {/* 3. Conference Tracks Content */}
      <ConferenceTracks />

      {/* 4. Publication & Recognition (Prestige) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container px-4">
          <Reveal className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full">
              <Award size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Prestige & Recognition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter">
              Publication & Recognition
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium">
              Your contribution at DMCE-GTC 2026 is coupled with prestigious publication channels and rewards.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="border-none shadow-xl rounded-[2.5rem] bg-white group hover:-translate-y-2 transition-all duration-500 h-full">
                  <CardContent className="p-10 text-center space-y-6 flex flex-col h-full">
                    <div className={cn("w-16 h-16 mx-auto rounded-3xl bg-slate-50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform", item.color)}>
                      <item.icon size={32} />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h4 className="text-lg font-black text-navy uppercase tracking-tight">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                    <Link to="/publication" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors justify-center">
                      View Details <ArrowRight size={12} />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Keynote Speakers (Authority)
      <section className="py-20 bg-white overflow-hidden border-t border-slate-50">
        <div className="container px-4">
          <Reveal className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/50 text-amber-600 rounded-full">
                <Mic2 size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Voices</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter leading-none">
                Keynote Speakers
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-sm font-medium leading-relaxed">
              Engage with visionary leaders and top-tier researchers from industry and academia.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <Reveal key={i} delay={i * 100}>
                <Link to="/speakers" className="group block">
                  <div className="relative aspect-[4/5] rounded-[2.5rem] bg-slate-50 overflow-hidden border border-slate-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <User className="w-12 h-12 text-slate-200 group-hover:text-white/20 transition-colors" />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <p className="text-[9px] font-black text-[#FFD700] uppercase tracking-widest mb-1">Speaker Announcement</p>
                      <p className="text-sm font-bold text-white uppercase tracking-tight">Eminent Scientist</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={500}>
            <Button asChild variant="outline" className="border-slate-200 text-navy font-black text-[10px] uppercase tracking-widest rounded-full px-10 h-12 hover:bg-white hover:border-primary/20">
              <Link to="/speakers">Explore All Speakers</Link>
            </Button>
          </Reveal>
        </div>
      </section> */}

      {/* 6. Timeline Summary & Procedure (How-to) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-start">

            {/* Procedure Steps */}
            <div className="lg:col-span-7 space-y-12">
              <Reveal className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full">
                  <ChevronRight size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Protocol</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter">
                  Conference Procedure
                </h2>
                <p className="text-slate-500 text-sm font-medium">Follow these streamlined steps to participate in DMCE-GTC 2026.</p>
              </Reveal>

              <div className="grid gap-0">
                {[
                  { step: "01", title: "Review Themes", desc: "Align your research with our technical tracks.", path: "/about" },
                  { step: "02", title: "Paper Submission", desc: "Submit through our official registration portal.", path: "/registration" },
                  { step: "03", title: "Wait for Review", desc: "Expert assessment of your submission status.", path: "/important-dates" },
                  { step: "04", title: "Participation", desc: "Register and join us in Airoli or virtually.", path: "/registration" }
                ].map((item, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <Link to={item.path} className="group relative flex gap-6 pb-12 last:pb-0">
                      {idx !== 3 && <div className="absolute left-6 top-14 bottom-0 w-px bg-slate-200 group-hover:bg-primary/20 transition-colors" />}
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[11px] font-black text-navy border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all z-10">
                        {item.step}
                      </div>
                      <div className="pt-2">
                        <h4 className="font-bold text-navy text-base mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Timely Alerts / Deadlines */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal delay={200}>
                <Card className="border-none shadow-2xl rounded-[2.5rem] bg-navy text-white overflow-hidden p-8 sm:p-10 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-3 mb-10">
                    <Clock className="text-[#FFD700]" size={20} />
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#FFD700]">Upcoming Deadlines</h3>
                  </div>
                  <div className="space-y-8">
                    {quickDates.map((d, i) => (
                      <div key={i} className="flex flex-col gap-1 border-b border-white/5 pb-6 last:border-0 last:pb-0">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{d.label}</span>
                        <span className="text-base font-black text-white">{d.date}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-12 h-12 bg-white/5 hover:bg-white text-navy font-black text-[10px] uppercase tracking-widest rounded-full transition-all">
                    <Link to="/important-dates">View Full Timeline</Link>
                  </Button>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Institutional Branding */}
      <Reveal className="py-12 bg-white border-t border-slate-50">
        <div className="container px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <img src={dmceLogo} alt="DMCE Logo" className="h-16 md:h-16 mx-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
            <div className="space-y-1">
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">Nagar Yuwak Shikshan Sanstha's</p>
              <h3 className="text-base font-black text-navy/30 uppercase tracking-tighter">Datta Meghe College of Engineering, Airoli</h3>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 8. Global Call to Action */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy z-0" />
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] z-0" />

        <div className="container relative z-10 text-center px-4">
          <Reveal>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
              Ready to Shape the Future <br className="hidden sm:block" /> of Global Technology?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/40 mb-12 max-w-lg mx-auto text-xs sm:text-sm font-medium leading-relaxed">
              Join a global community of researchers and innovators at DMCE-GTC 2026. Submit your original research before the final deadline.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-12 bg-[#FFD700] hover:bg-white text-navy font-black text-[11px] uppercase tracking-widest rounded-full shadow-2xl shadow-black/20"
              >
                <Link to="/registration">Submit Your Research <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-12 border-white/20 bg-white/5 text-white hover:bg-white/10 text-[11px] font-black uppercase tracking-widest rounded-full backdrop-blur-sm"
              >
                <Link to="/about">About Conference</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;