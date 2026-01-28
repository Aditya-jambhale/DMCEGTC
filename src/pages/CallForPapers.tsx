import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConferenceTracks } from "@/components/ConferenceTracks";
import {
  FileText,
  CheckCircle,
  Download,
  ArrowRight,
  BookOpen,
  Search,
  Award,
  ShieldCheck,
  Dot
} from "lucide-react";

const CallForPapers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-10 sm:py-14 md:py-16 text-white border-b border-white/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 uppercase tracking-tighter">
              Call for Papers
            </h1>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-medium">
              Join the convergence of global research. Submit your innovative work for presentation and publication.
            </p>
          </div>
        </div>
      </section>

      {/* Official Invitation Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-6">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Official Invitation</span>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6">
              The Department of Computer Engineering at <span className="font-bold text-navy">Datta Meghe College of Engineering (DMCE)</span>, Airoli, Navi Mumbai, cordially invites research papers for:
            </p>
            <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-black text-navy uppercase tracking-tighter max-w-2xl mx-auto leading-tight">
              Global Tech Convergence: International Conference on Computing and IT Advancements 2026
            </h2>
            <p className="text-secondary font-black text-sm sm:text-base mt-3 uppercase tracking-[0.2em]">
              (DMCE-GTC 2026)
            </p>
          </div>
        </div>
      </section>

      {/* Conference Tracks (Reusable Component) */}
      <ConferenceTracks />

      {/* Guidelines & Template Section */}
      <section className="py-12 sm:py-20 bg-slate-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">

            {/* Submission Guidelines */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-navy uppercase tracking-tighter flex items-center gap-4">
                  Submission Guidelines
                  <div className="h-1 flex-1 bg-slate-200 rounded-full" />
                </h2>
                <p className="text-slate-500 text-sm font-medium">Please adhere to the following standards for your manuscript.</p>
              </div>

              <div className="space-y-4">
                {[
                  "Original and unpublished research work only.",
                  "Papers must follow the standard conference template.",
                  "All figures, tables, and equations must be high resolution.",
                  "Proper referencing in designated format is mandatory.",
                  "Similarity index must be within acceptable limits (max 15-20%)."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 group">
                    <Dot className="h-6 w-6 text-primary shrink-0 -mt-1 group-hover:scale-150 transition-transform" />
                    <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Card className="border-2 border-dashed border-slate-200 bg-white hover:border-primary/40 transition-colors shadow-none rounded-[1.5rem] group cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <Download size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-navy group-hover:text-primary transition-colors">Paper Template</p>
                        <p className="text-xs text-slate-400 font-medium">Download latest (.docx / LaTeX)</p>
                      </div>
                    </div>
                    <ArrowRight className="text-slate-200 group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Publication Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-navy uppercase tracking-tighter flex items-center gap-4">
                  Publication Opportunities
                  <div className="h-1 flex-1 bg-slate-200 rounded-full" />
                </h2>
                <p className="text-slate-500 text-sm font-medium">Selected works gain international exposure.</p>
              </div>

              <div className="grid gap-4">
                <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:shadow-md transition-all">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                      <BookOpen size={20} className="text-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm mb-1">Conference Proceedings</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">Accepted and presented papers will be included in the official proceedings.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:shadow-md transition-all border-l-4 border-l-secondary">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Award size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm mb-1">WoS Indexed Journals</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">High-quality papers will be recommended for publication in Web of Science indexed journals.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-navy text-white/90 rounded-2xl">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2">Review Process</p>
                <div className="flex justify-between items-center gap-4">
                  <div className="text-center flex-1">
                    <div className="text-lg font-black leading-none">01</div>
                    <div className="text-[8px] uppercase tracking-tighter mt-1">Submission</div>
                  </div>
                  <div className="h-px bg-white/10 flex-1" />
                  <div className="text-center flex-1">
                    <div className="text-lg font-black leading-none text-[#FFD700]">02</div>
                    <div className="text-[8px] uppercase tracking-tighter mt-1 text-[#FFD700]">Peer Review</div>
                  </div>
                  <div className="h-px bg-white/10 flex-1" />
                  <div className="text-center flex-1">
                    <div className="text-lg font-black leading-none">03</div>
                    <div className="text-[8px] uppercase tracking-tighter mt-1">Resolution</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container px-4 text-center">
          <div className="max-w-4xl mx-auto p-12 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <h2 className="font-heading text-xl sm:text-2xl font-black text-navy uppercase tracking-tighter mb-4 relative z-10">
              Submit Your Manuscript
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mb-10 relative z-10 font-medium">
              Be a part of DMCE-GTC 2026. Every submission is treated with rigorous academic integrity and expert oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-navy text-white font-black text-xs uppercase tracking-[0.2em] rounded-full px-10"
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
                className="border-slate-200 text-slate-600 hover:bg-white hover:border-primary/20 rounded-full font-black text-xs uppercase tracking-[0.2em] px-10"
              >
                <Link to="/important-dates">Critical Dates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CallForPapers;
