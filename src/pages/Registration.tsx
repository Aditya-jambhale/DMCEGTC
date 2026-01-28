import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ExternalLink,
  Building,
  Users,
  Laptop,
  GraduationCap,
  Briefcase,
  QrCode,
  CheckCircle2,
  ArrowRight,
  Info,
  Globe,
  MapPin,
  Wifi,
  Receipt,
  Download
} from "lucide-react";

const registrationFees = {
  rows: [
    {
      category: "Students (UG category)",
      icon: GraduationCap,
      indian: "₹2,500",
      indianCSI: "₹2,000",
      international: "$100",
      internationalCSI: "$75",
    },
    {
      category: "PG, Research Scholars, and Academicians",
      icon: Users,
      indian: "₹4,000",
      indianCSI: "₹3,500",
      international: "$200",
      internationalCSI: "$175",
    },
    {
      category: "Industry Professionals",
      icon: Briefcase,
      indian: "₹6,000",
      indianCSI: "₹5,500",
      international: "$250",
      internationalCSI: "$225",
    },
  ],
};

const Registration = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-8 sm:py-12 md:py-16 text-white border-b border-white/10 overflow-hidden">
        <div className="container px-4">
          <Reveal className="max-w-3xl mx-auto text-center" delay={100}>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 uppercase tracking-tight">
              Registration
            </h1>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-medium">
              Join the technological convergence. Secure your seat at DMCE-GTC 2026.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CRITICAL INFO: Mode of Participation */}
      <section className="py-10 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6">

              {/* Offline Card */}
              <Reveal className="w-full md:w-1/2" delay={200}>
                <div className="h-full p-0.5 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:border-primary/20 transition-all">
                  <div className="bg-navy rounded-[1.4rem] p-6 sm:p-8 text-center text-white h-full relative overflow-hidden flex flex-col items-center">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full -mr-10 -mt-10 blur-2xl pointer-events-none" />
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
                      <MapPin className="text-[#FFD700]" size={24} />
                    </div>
                    <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-1.5">DMCE Students</h3>
                    <h2 className="text-xl font-black uppercase tracking-tight mb-3">OFFLINE MODE</h2>
                    <p className="text-white/50 text-[11px] leading-relaxed max-w-[240px]">In-person attendance at the Airoli campus mandatory for internal participants.</p>
                  </div>
                </div>
              </Reveal>

              {/* Online Card */}
              <Reveal className="w-full md:w-1/2" delay={300}>
                <div className="h-full p-0.5 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:border-secondary/20 transition-all">
                  <div className="bg-white rounded-[1.4rem] p-6 sm:p-8 text-center h-full relative overflow-hidden flex flex-col items-center border border-slate-50">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full -mr-10 -mt-10 blur-2xl pointer-events-none" />
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4">
                      <Wifi className="text-secondary" size={24} />
                    </div>
                    <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1.5">Non-DMCE Participants</h3>
                    <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-3">ONLINE MODE</h2>
                    <p className="text-slate-500 text-[11px] leading-relaxed max-w-[240px]">Virtual participation through our digital platform for global researchers.</p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* Main Registration Content */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 max-w-7xl mx-auto">

            {/* Left Side: Process and Fees */}
            <div className="lg:col-span-12 xl:col-span-8 space-y-12 sm:space-y-16">

              {/* How to Register */}
              <div className="space-y-8 sm:space-y-10">
                <Reveal className="flex items-center gap-4">
                  <h2 className="text-xl sm:text-2xl font-black text-navy uppercase tracking-tighter shrink-0">
                    Registration Process
                  </h2>
                  <div className="h-0.5 flex-1 bg-slate-100 rounded-full" />
                </Reveal>

                <div className="grid gap-0">
                  {[
                    {
                      step: "Step 01",
                      title: "Manuscript Submission",
                      desc: "Submit your research via the official Google Form portal. Ensure all author details are accurate.",
                      link: "https://forms.gle/CkNg8muFreP2CHYW6",
                      btnText: "Registration Form"
                    },
                    {
                      step: "02",
                      title: "Peer Review & Acceptance",
                      desc: "Your work will undergo a rigorous review. Final acceptance status will be shared by 9th April 2026."
                    },
                    {
                      step: "03",
                      title: "Fee Fulfillment",
                      desc: "Complete the payment based on your category and upload the transaction proof for final confirmation."
                    }
                  ].map((item, idx) => (
                    <Reveal key={idx} delay={idx * 100} className="flex gap-4 sm:gap-10 group">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-[10px] sm:text-xs transition-all duration-300 border-2 ${idx === 0 ? 'bg-primary border-primary text-white shadow-md' : 'bg-white border-slate-100 text-slate-300 group-hover:border-primary/20 group-hover:text-primary'}`}>
                          {idx + 1}
                        </div>
                        {idx !== 2 && <div className="w-[1px] flex-1 bg-slate-100 my-2" />}
                      </div>
                      <div className="pb-8 last:pb-0 pt-1">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-1 block">{item.step}</span>
                        <h3 className="font-bold text-navy h-auto text-base sm:text-lg mb-1.5">{item.title}</h3>
                        <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-2xl">{item.desc}</p>
                        {item.link && (
                          <div className="mt-4">
                            <Button asChild size="sm" className="h-8 sm:h-9 bg-primary hover:bg-navy text-white text-[9px] font-black uppercase tracking-widest rounded-full px-5">
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.btnText} <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Fee Structure Table */}
              <div className="space-y-8">
                <Reveal className="flex items-center gap-4">
                  <h2 className="text-xl sm:text-2xl font-black text-navy uppercase tracking-tighter shrink-0">
                    Fee Structure
                  </h2>
                  <div className="h-0.5 flex-1 bg-slate-100 rounded-full" />
                </Reveal>

                <Reveal className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                  <Card className="border-slate-100 shadow-xl overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] relative bg-white">
                    <CardContent className="p-0">
                      <div className="overflow-x-auto scrollbar-hide">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-navy hover:bg-navy border-none">
                              <TableHead className="text-white font-bold py-4 sm:py-6 pl-6 sm:pl-8 text-[10px] uppercase tracking-[0.15em]">Participant Category</TableHead>
                              <TableHead className="text-white/60 font-bold py-4 sm:py-6 text-center text-[9px] uppercase tracking-tighter leading-tight">Indian<br />(Non-CSI)</TableHead>
                              <TableHead className="text-[#FFD700] font-black py-4 sm:py-6 text-center text-[9px] uppercase tracking-tighter leading-tight bg-white/5 border-x border-white/5">Indian<br />(CSI Member)</TableHead>
                              <TableHead className="text-white/60 font-bold py-4 sm:py-6 text-center text-[9px] uppercase tracking-tighter leading-tight">Foreign<br />(Non-CSI)</TableHead>
                              <TableHead className="text-[#FFD700] font-black py-4 sm:py-6 text-center text-[9px] uppercase tracking-tighter leading-tight bg-white/5 border-l border-white/5">Foreign<br />(CSI Member)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {registrationFees.rows.map((row, index) => (
                              <TableRow key={index} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <TableCell className="py-4 sm:py-6 pl-6 sm:pl-8">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                                      <row.icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-bold text-navy text-[13px] sm:text-sm">{row.category}</span>
                                  </div>
                                </TableCell>
                                <TableCell className="text-center font-bold text-slate-500 text-xs sm:text-sm whitespace-nowrap">{row.indian}</TableCell>
                                <TableCell className="text-center font-black text-secondary text-sm sm:text-base bg-secondary/5 border-x border-slate-100 whitespace-nowrap px-4">{row.indianCSI}</TableCell>
                                <TableCell className="text-center font-bold text-slate-500 text-xs sm:text-sm whitespace-nowrap">{row.international}</TableCell>
                                <TableCell className="text-center font-black text-secondary text-base bg-secondary/5 border-l border-slate-100 whitespace-nowrap px-4">{row.internationalCSI}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
                <Reveal className="flex items-center gap-3 p-4 bg-secondary/5 rounded-2xl border-l-4 border-l-secondary" delay={400}>
                  <Info size={14} className="text-secondary shrink-0" />
                  <p className="text-[11px] font-bold text-navy italic">
                    * CSI Members validation requires a valid membership proof during registration.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Right Side: QR & Bank Details */}
            <div className="lg:col-span-12 xl:col-span-4 space-y-8 sm:space-y-10">
              <div className="lg:sticky lg:top-24">

                {/* Registration QR & Link */}
                <Reveal delay={200}>
                  <Card className="border-none bg-navy text-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-navy/20 mb-8 sm:mb-10 text-center p-6 sm:p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6 sm:mb-8">Official Link / QR</h3>

                    <div className="bg-white p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] inline-block shadow-inner mb-6 sm:mb-8 transition-transform hover:scale-105 cursor-pointer">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
                        {/* Visual Placeholder for QR */}
                        <QrCode size={64} className="text-slate-300 sm:hidden" />
                        <QrCode size={80} className="text-slate-300 hidden sm:block" />
                      </div>
                    </div>

                    <Button asChild className="w-full bg-[#FFD700] hover:bg-white text-navy font-black text-[11px] uppercase tracking-[0.2em] rounded-full py-6 sm:py-7 shadow-xl shadow-black/20 hover:-translate-y-1 transition-all">
                      <a href="https://forms.gle/CkNg8muFreP2CHYW6" target="_blank">Registration Portal</a>
                    </Button>
                  </Card>
                </Reveal>

                {/* CRITICAL INFO: Bank Details (Passbook Style) */}
                <div className="space-y-6">
                  <Reveal className="flex items-center gap-3">
                    <Receipt className="text-primary" size={18} />
                    <h4 className="text-[11px] font-black text-navy uppercase tracking-widest">Bank Details</h4>
                  </Reveal>

                  <Reveal delay={400}>
                    <Card className="border-none shadow-xl rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group bg-white">
                      <div className="p-5 sm:p-6 bg-gradient-to-br from-navy to-navy/95 text-white border-b border-white/5 relative h-full">
                        <div className="flex justify-between items-start mb-8 sm:mb-10">
                          <Building size={20} className="text-secondary/60" />
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">Payment Info</span>
                        </div>
                        <p className="text-[8px] font-black uppercase tracking-widest text-[#FFD700]/60 mb-1">Beneficiary Name</p>
                        <h4 className="text-[13px] font-bold uppercase tracking-tight mb-2">MISS DMCE STUDENT BRANCH CSI</h4>
                      </div>
                      <CardContent className="p-6 sm:p-8 space-y-5 text-navy">
                        <div className="grid grid-cols-1 gap-5">
                          <div>
                            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1.5">Account Number</p>
                            <p className="text-[15px] font-black font-mono tracking-tight leading-none">520101005225171</p>
                          </div>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div>
                              <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1.5">IFSC Code</p>
                              <p className="text-xs font-black font-mono">UBIN0904716</p>
                            </div>
                            <div>
                              <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1.5">Bank Name</p>
                              <p className="text-[9px] font-bold leading-tight">Union Bank of India</p>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-slate-50">
                            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1.5">Airoli, Mumbai 400708</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                </div>

                <Reveal className="mt-8" delay={600}>
                  <Button variant="ghost" className="w-full text-slate-300 hover:text-primary text-[9px] font-black uppercase tracking-widest gap-2">
                    <Download size={14} /> Download Receipt Guide
                  </Button>
                </Reveal>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final Support Block */}
      <Reveal className="pb-16 pt-8 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-slate-50 rounded-[2rem] sm:rounded-[3rem] text-center border border-slate-100 relative overflow-hidden group">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-3 relative z-10">
              Need assistance?
            </h3>
            <p className="text-slate-500 text-[13px] mb-8 font-medium relative z-10">
              Our hospitality team is available to assist you with offline logistics or online connectivity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a href="/committees" className="px-8 py-2.5 bg-white border border-slate-200 text-navy font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-navy hover:text-white transition-all">
                View Support Team
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Layout>
  );
};

export default Registration;
