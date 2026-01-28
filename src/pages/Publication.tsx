import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import {
  FileText,
  Award,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Trophy,
  Medal,
  Globe,
  Mail,
  ArrowRight,
  ShieldCheck,
  FileCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const Publication = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-10 sm:py-12 md:py-16 text-white border-b border-white/10 overflow-hidden">
        <div className="container px-4">
          <Reveal className="max-w-3xl mx-auto text-center" delay={100}>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 uppercase tracking-tighter">
              Awards & Publication
            </h1>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-medium">
              Championing research excellence through prestigious awards and global indexing opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Best Paper Awards Section */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                  <Trophy size={14} className="fill-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Excellence Recognition</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter shrink-0">
                  Best Paper Awards
                </h2>
              </div>
              <p className="text-slate-500 text-sm max-w-md font-medium leading-relaxed">
                To encourage high-quality research, DMCE-GTC 2026 will recognize exceptional contributions in each conference track.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* First Prize */}
              <Reveal className="relative group" delay={200}>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-amber-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                <Card className="relative border-slate-100 shadow-xl rounded-[2.2rem] overflow-hidden bg-white">
                  <div className="bg-gradient-to-br from-amber-50 to-white p-8 border-b border-amber-100/50">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-amber-200">
                        <Trophy className="text-amber-500" size={32} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 bg-amber-100/50 px-3 py-1 rounded-full">Primary Award</span>
                    </div>
                    <h3 className="text-xl font-black text-navy mb-1 uppercase tracking-tight">First Best Paper</h3>
                    <p className="text-xs font-bold text-amber-600/80 uppercase tracking-widest">Global Excellence Trophy</p>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-navy">₹4,000</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cash Reward</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Prestigious Excellence Certificate",
                        "Commemorative Conference Medal",
                        "Recommendation for Premium Journal",
                        "Featured Showcase on Website"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <CheckCircle2 className="text-amber-500 shrink-0" size={16} />
                          <span className="text-sm text-slate-600 font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              {/* Second Prize */}
              <Reveal className="relative group" delay={400}>
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-400 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-700"></div>
                <Card className="relative border-slate-100 shadow-xl rounded-[2.2rem] overflow-hidden bg-white">
                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 border-b border-slate-100">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-slate-200">
                        <Medal className="text-slate-400" size={32} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Secondary Award</span>
                    </div>
                    <h3 className="text-xl font-black text-navy mb-1 uppercase tracking-tight">Second Best Paper</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Emerging Researcher Recognition</p>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-navy">₹2,000</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cash Reward</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Official Excellence Certificate",
                        "Commemorative Conference Medal",
                        "Fast-track Review Process",
                        "Public Recognition Plaque"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <CheckCircle2 className="text-slate-400 shrink-0" size={16} />
                          <span className="text-sm text-slate-600 font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Channels Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter">
                Publication Channels
              </h2>
              <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium">
                We offer multiple tiers of publication to ensure every high-quality submission finds its rightful audience.
              </p>
            </Reveal>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">

              {/* Conference Proceedings (All Accepted) */}
              <Reveal className="lg:col-span-5 order-2 lg:order-1" delay={200}>
                <Card className="h-full border-none shadow-xl rounded-[2.5rem] overflow-hidden group bg-white">
                  <div className="p-8 bg-navy text-white relative h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-10 shadow-inner">
                      <BookOpen size={24} className="text-[#FFD700]" />
                    </div>
                    <h4 className="text-sm font-black text-[#FFD700]/60 uppercase tracking-widest mb-2">Standard Channel</h4>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Conference Proceedings</h3>
                    <p className="text-white/60 text-xs font-medium leading-relaxed mb-8">
                      Every paper accepted and presented at DMCE-GTC 2026 is guaranteed a spot in our official digital proceedings.
                    </p>
                    <div className="space-y-4 pt-6 border-t border-white/5">
                      <div className="flex gap-3">
                        <FileCheck className="text-secondary shrink-0" size={18} />
                        <span className="text-[13px] font-bold text-white/80">Soft copy shared via registered Email</span>
                      </div>
                      <div className="flex gap-3">
                        <Globe className="text-secondary shrink-0" size={18} />
                        <span className="text-[13px] font-bold text-white/80">Archived in official DMCE repository</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>

              {/* Journal Publication (WoS Indexed) */}
              <Reveal className="lg:col-span-7 order-1 lg:order-2" delay={400}>
                <Card className="h-full border-white/20 shadow-2xl rounded-[2.5rem] overflow-hidden bg-white border-2">
                  <CardContent className="p-8 sm:p-12 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                        <ShieldCheck size={28} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-navy uppercase tracking-tighter leading-none mb-2">Journal Publication</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-white bg-secondary px-2 py-0.5 rounded uppercase tracking-widest">WoS Indexed</span>
                          <span className="text-[10px] font-bold text-slate-400">High Impact Platform</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-slate-600 text-[13px] sm:text-base font-medium leading-relaxed">
                        Selected high-quality papers will be recommended for publication in <span className="text-navy font-bold">Web of Science (WoS) indexed journals</span>. This provides your work with global visibility and academic credibility.
                      </p>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-500 font-bold leading-relaxed italic">
                            Final acceptance is subject to the review process and quality standards of the respective journal.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-500 font-bold leading-relaxed italic">
                            Additional publication charges levied by the journal (if any) are to be borne by the authors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full">
                  <FileText size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Deliverable</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter">
                  Official Certificates
                </h2>
                <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                  Every author and co-author contributing to DMCE-GTC 2026 will receive an official E-Certificate of Participation.
                </p>
                <div className="space-y-4">
                  {[
                    "Digitally Signed & Verified",
                    "Includes Unique Tracking ID",
                    "Sent to Registered Email Addresses",
                    "Separate Certificate for Every Co-author"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span className="text-[13px] font-bold text-navy/80">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="relative" delay={300}>
                <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <Card className="relative border-none shadow-2xl rounded-[2.5rem] bg-navy p-8 text-center text-white overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary/0" />
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <ShieldCheck size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-center">E-PROCEEDINGS</h3>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-center">Included for all authors</p>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4 text-left">
                    <Mail className="text-secondary shrink-0" size={18} />
                    <p className="text-[11px] font-medium leading-relaxed">Proceedings will be dispatched to your registered email ID within 30 days post-conference.</p>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Reveal className="pb-20 pt-10 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto p-12 bg-slate-50 rounded-[3rem] text-center border border-slate-100 relative overflow-hidden group">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4 relative z-10">
              Transform Your Research into Impact
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-medium relative z-10 max-w-lg mx-auto">
              Join prestegious journals and gain global recognition. Submit your original manuscript today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button asChild size="lg" className="bg-primary hover:bg-navy text-white font-black text-[10px] uppercase tracking-widest rounded-full px-10 h-12 shadow-xl shadow-primary/20">
                <Link to="/registration">Submit Your Paper</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-200 text-navy font-black text-[10px] uppercase tracking-widest rounded-full px-10 h-12 hover:bg-white hover:border-primary/20 bg-white">
                <Link to="/cfp">View Call for Papers</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Layout>
  );
};

export default Publication;
