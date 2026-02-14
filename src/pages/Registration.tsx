import { Link } from "react-router-dom";
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
  GraduationCap,
  Briefcase,
  ArrowRight,
  Info,
  MapPin,
  Wifi,
  Receipt
} from "lucide-react";
import QRImage from "@/assets/QR.png";


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
      <section className="bg-navy py-12 sm:py-16 md:py-20 text-white border-b border-white/10 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -ml-48 -mb-48" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center" delay={100}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-4xl font-extrabold mb-3 sm:mb-6 uppercase tracking-tight">
              Registration
            </h1>
            <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-medium">
              Join the technological convergence. Secure your seat at DMCE-GTC 2026.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CRITICAL INFO: Mode of Participation */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-8">

              {/* Offline Card */}
              <Reveal className="w-full md:w-1/2" delay={200}>
                <div className="h-full p-0.5 bg-white rounded-[2rem] shadow-sm border border-slate-100 group hover:border-primary/20 transition-all">
                  <div className="bg-navy rounded-[1.8rem] p-6 sm:p-10 text-center text-white h-full relative overflow-hidden flex flex-col items-center">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full -mr-12 -mt-12 blur-2xl pointer-events-none" />
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl mb-4 sm:mb-6">
                      <MapPin className="text-secondary" size={24} />
                    </div>
                    <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-2">DMCE Students</h3>
                    <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight mb-3 sm:mb-4 text-white">OFFLINE MODE</h2>
                    <p className="text-white/50 text-[11px] sm:text-sm leading-relaxed max-w-[280px]">In-person attendance at the Airoli campus mandatory for internal participants.</p>
                  </div>
                </div>
              </Reveal>

              {/* Online Card */}
              <Reveal className="w-full md:w-1/2" delay={300}>
                <div className="h-full p-0.5 bg-white rounded-[2rem] shadow-sm border border-slate-100 group hover:border-secondary/20 transition-all">
                  <div className="bg-white rounded-[1.8rem] p-6 sm:p-10 text-center h-full relative overflow-hidden flex flex-col items-center border border-slate-50">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full -mr-12 -mt-12 blur-2xl pointer-events-none" />
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-2xl mb-4 sm:mb-6">
                      <Wifi className="text-secondary" size={24} />
                    </div>
                    <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2">Non-DMCE Participants</h3>
                    <h2 className="text-lg sm:text-2xl font-black text-navy uppercase tracking-tight mb-3 sm:mb-4">ONLINE MODE</h2>
                    <p className="text-slate-500 text-[11px] sm:text-sm leading-relaxed max-w-[280px]">Virtual participation through our digital platform for global researchers.</p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* Main Registration Content */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">

            {/* Left Side: Process and Fees */}
            <div className="lg:col-span-12 xl:col-span-8 space-y-16 md:space-y-20 min-w-0 w-full">

              {/* How to Register */}
              <div className="space-y-8 sm:space-y-12">
                <Reveal className="flex items-center gap-3 sm:gap-4">
                  <h2 className="text-xl sm:text-3xl font-black text-navy uppercase tracking-tighter shrink-0 max-w-[70%] sm:max-w-none break-words">
                    Registration Process
                  </h2>
                  <div className="h-0.5 sm:h-1 flex-1 bg-slate-100 rounded-full" />
                </Reveal>

                <div className="grid gap-0">
                  {[
                    {
                      step: "Step 01",
                      title: "Manuscript Submission",
                      desc: "Submit your research via the official Google Form portal. Ensure all author details are accurate.",
                      link: "https://forms.gle/vndeiaLQmg5WpjQCA",
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
                        <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black text-[10px] sm:text-sm transition-all duration-300 border-2 ${idx === 0 ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white border-slate-100 text-slate-300 group-hover:border-primary/20 group-hover:text-primary'}`}>
                          {idx + 1}
                        </div>
                        {idx !== 2 && <div className="w-[1px] sm:w-[2px] flex-1 bg-slate-100 my-2 sm:my-3" />}
                      </div>
                      <div className="pb-8 sm:pb-12 last:pb-0 pt-1 sm:pt-2">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-1 sm:mb-2 block">{item.step}</span>
                        <h3 className="font-bold text-navy text-base sm:text-xl mb-1 sm:mb-2 leading-snug">{item.title}</h3>
                        <p className="text-xs sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl">{item.desc}</p>
                        {item.link && (
                          <div className="mt-4 sm:mt-6">
                            <Button asChild className="h-9 sm:h-11 bg-primary hover:bg-navy text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-full px-6 sm:px-8 shadow-md">
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.btnText} <ExternalLink className="ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
              <div className="space-y-8 sm:space-y-12">
                <Reveal className="flex items-center gap-3 sm:gap-4">
                  <h2 className="text-xl sm:text-3xl font-black text-navy uppercase tracking-tighter shrink-0">
                    Fee Structure
                  </h2>
                  <div className="h-0.5 sm:h-1 flex-1 bg-slate-100 rounded-full" />
                </Reveal>

                <Reveal className="relative group overflow-hidden sm:overflow-visible">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 hidden sm:block"></div>
                  <Card className="border-slate-100 shadow-xl sm:shadow-2xl overflow-hidden rounded-[1.5rem] sm:rounded-[3rem] relative bg-white mx-0">
                    <CardContent className="p-0">
                      <div className="overflow-x-auto scrollbar-hide">
                        <div className="min-w-[700px] lg:min-w-full">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-navy hover:bg-navy border-none">
                                <TableHead className="text-white font-bold py-5 sm:py-8 pl-6 sm:pl-10 text-[13px] sm:text-[15px] uppercase tracking-[0.1em] sm:tracking-[0.15em]">Category</TableHead>
                                <TableHead className="text-white/60 font-bold py-5 sm:py-8 text-center text-[10px] sm:text-[12px] uppercase tracking-tighter leading-tight">Indian<br className="sm:hidden" />(Non-CSI)</TableHead>
                                <TableHead className="text-[#FFD700] font-black py-5 sm:py-8 text-center text-[10px] sm:text-[12px] uppercase tracking-tighter leading-tight bg-white/5 border-x border-white/5">Indian<br className="sm:hidden" />(CSI)</TableHead>
                                <TableHead className="text-white/60 font-bold py-5 sm:py-8 text-center text-[10px] sm:text-[12px] uppercase tracking-tighter leading-tight">Foreign<br className="sm:hidden" />(Non-CSI)</TableHead>
                                <TableHead className="text-[#FFD700] font-black py-5 sm:py-8 text-center text-[10px] sm:text-[12px] uppercase tracking-tighter leading-tight bg-white/5 border-l border-white/5">Foreign<br className="sm:hidden" />(CSI)</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {registrationFees.rows.map((row, index) => (
                                <TableRow key={index} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                                  <TableCell className="py-5 sm:py-8 pl-6 sm:pl-10">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                                        <row.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                      </div>
                                      <span className="font-bold text-navy text-[12px] sm:text-base leading-tight max-w-[150px] sm:max-w-none">{row.category}</span>
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-center font-bold text-slate-500 text-[11px] sm:text-sm whitespace-nowrap">{row.indian}</TableCell>
                                  <TableCell className="text-center font-black text-secondary text-[12px] sm:text-lg bg-secondary/5 border-x border-slate-100 whitespace-nowrap px-4 sm:px-6">{row.indianCSI}</TableCell>
                                  <TableCell className="text-center font-bold text-slate-500 text-[11px] sm:text-sm whitespace-nowrap">{row.international}</TableCell>
                                  <TableCell className="text-center font-black text-secondary text-[12px] sm:text-lg bg-secondary/5 border-l border-slate-100 whitespace-nowrap px-4 sm:px-6">{row.internationalCSI}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                      <div className="lg:hidden bg-slate-50/50 py-3 px-6 border-t border-slate-100 flex items-center justify-center gap-2">
                        <ArrowRight size={12} className="text-slate-400 animate-pulse" />
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Swipe for full rates</p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
                <Reveal className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-secondary/5 rounded-2xl border-l-4 border-l-secondary" delay={400}>
                  <Info size={16} className="text-secondary shrink-0 mt-0.5" />
                  <p className="text-[12px] sm:text-sm font-bold text-navy italic leading-relaxed break-words">
                    * CSI Members validation requires a valid membership proof during registration.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Right Side: QR & Bank Details */}
            <div className="lg:col-span-12 xl:col-span-4 space-y-12 min-w-0 w-full">
              <div className="xl:sticky xl:top-24 space-y-12">

                {/* Registration QR & Link */}
                <Reveal delay={200}>
                  <Card className="border-none bg-navy text-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-navy/20 text-center p-6 sm:p-10 relative">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
                    <h3 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-white/40 mb-6 sm:mb-10">Official Link / QR</h3>

                    <div className="bg-white p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2.5rem] inline-block shadow-inner mb-6 sm:mb-10 transition-transform hover:scale-105 cursor-pointer">
                      <div className="w-32 h-32 sm:w-48 sm:h-48 bg-slate-50 rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden p-2 sm:p-3">
                        <img
                          src={QRImage}
                          alt="Registration QR Code"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    <Button asChild className="w-full bg-[#FFD700] hover:bg-white text-navy font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-full py-6 sm:py-8 shadow-xl border-none">
                      <a href="https://forms.gle/vndeiaLQmg5WpjQCA" target="_blank" rel="noopener noreferrer">Registration Portal</a>
                    </Button>
                  </Card>
                </Reveal>

                {/* CRITICAL INFO: Bank Details (Passbook Style) */}
                <div className="space-y-6 sm:space-y-8">
                  <Reveal className="flex items-center gap-3">
                    <Receipt className="text-primary shrink-0" size={18} />
                    <h4 className="text-[10px] sm:text-xs font-black text-navy uppercase tracking-widest">Bank Details</h4>
                  </Reveal>

                  <Reveal delay={400}>
                    <Card className="border-none shadow-xl sm:shadow-2xl rounded-[2rem] sm:rounded-[3rem] overflow-hidden group bg-white">
                      <div className="p-6 sm:p-10 bg-gradient-to-br from-navy to-navy/95 text-white border-b border-white/5 relative h-full">
                        <div className="flex justify-between items-start mb-8 sm:mb-12">
                          <Building size={20} className="text-secondary/60" />
                          <span className="text-[9px] font-black uppercase tracking-[0.25em] opacity-40">Payment Info</span>
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-[#FFD700]/60 mb-1 sm:mb-2">Beneficiary Name</p>
                        <h4 className="text-base sm:text-xl font-bold uppercase tracking-tight mb-2 leading-tight break-words">MISS DMCE STUDENT BRANCH CSI</h4>
                      </div>
                      <CardContent className="p-6 sm:p-10 space-y-6 sm:space-y-8 text-navy">
                        <div className="grid grid-cols-1 gap-6 sm:gap-8">
                          <div>
                            <p className="text-[10px] sm:text-xs font-black text-slate-300 uppercase tracking-widest mb-1 sm:mb-2 text-wrap">Account Number</p>
                            <p className="text-lg sm:text-2xl font-black font-mono tracking-tighter leading-none break-all">520101005225171</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            <div>
                              <p className="text-[10px] sm:text-xs font-black text-slate-300 uppercase tracking-widest mb-1 sm:mb-2">IFSC Code</p>
                              <p className="text-base sm:text-xl font-black font-mono">UBIN0904716</p>
                            </div>
                            <div>
                              <p className="text-[10px] sm:text-xs font-black text-slate-300 uppercase tracking-widest mb-1 sm:mb-2">Bank Name</p>
                              <p className="text-base sm:text-xl font-bold leading-tight">Union Bank of India</p>
                            </div>
                          </div>
                          <div className="pt-4 sm:pt-6 border-t border-slate-50">
                            <p className="text-[9px] sm:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Airoli, Mumbai 400708</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final Support Block */}
      <Reveal className="pb-16 sm:pb-24 pt-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 sm:p-16 bg-slate-50 rounded-[2rem] sm:rounded-[4rem] text-center border border-slate-100 relative overflow-hidden group">
            <h3 className="font-heading text-xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4 relative z-10">
              Need assistance?
            </h3>
            <p className="text-slate-500 text-[13px] sm:text-base mb-8 sm:mb-10 font-medium relative z-10 max-w-2xl mx-auto">
              Our hospitality team is available to assist you with offline logistics or online connectivity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-10">
              <Button asChild variant="outline" className="w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 border-slate-200 text-navy font-black text-[10px] sm:text-xs uppercase tracking-widest rounded-full hover:bg-navy hover:text-white transition-all shadow-sm">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Layout>
  );
};

export default Registration;
