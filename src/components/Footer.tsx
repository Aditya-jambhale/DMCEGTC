import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, ExternalLink, User } from "lucide-react";
// import dmceLogo from "@/assets/website-dmce.png";
import confLogo from "@/assets/conference-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96  rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Logo & About Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFD700] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <img
                  src={confLogo}
                  alt="DMCE-GTC 2026"
                  className="h-20 w-auto bg-white p-2 rounded-full relative z-10 "
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-extrabold text-[#FFD700] tracking-tight mb-0.5">
                  DMCE-GTC 2026
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/50">
                  Academic Excellence
                </p>
              </div>
            </div>
            <p className="text-[15px] text-white/70 leading-relaxed font-medium max-w-md">
              DMCE-GTC 2026 is an international platform for researchers, academicians, industry professionals, and students to present innovative research, exchange knowledge, and discuss emerging technologies in Computing and IT Advancements, with a focus on interdisciplinary convergence and industry relevance. This conference is associated with Computer Society of India (CSI) student branch
            </p>
            <div className="flex gap-4">
              {/* Optional Social Icons could go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-lg font-bold mb-8 text-[#FFD700] relative inline-block uppercase tracking-widest">
              Quick Links
              <span className="absolute -bottom-3 left-0 w-12 h-0.5 bg-[#FFD700] rounded-full" />
              <span className="absolute -bottom-3 left-14 w-2 h-0.5 bg-[#FFD700]/30 rounded-full" />
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Call for Papers", path: "/cfp" },
                { name: "Registration", path: "/registration" },
                { name: "Committees", path: "/committees" },
                { name: "Speakers", path: "/speakers" },
                // { name: "Exhibition", path: "#" },
                // { name: "Reach Us", path: "#" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[15px] text-white/60 hover:text-[#FFD700] flex items-center gap-3 group transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all shadow-[0_0_8px_#FFD700]" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-lg font-bold mb-8 text-[#FFD700] relative inline-block uppercase tracking-widest">
              Contact Us
              <span className="absolute -bottom-3 left-0 w-12 h-0.5 bg-[#FFD700] rounded-full" />
              <span className="absolute -bottom-3 left-14 w-2 h-0.5 bg-[#FFD700]/30 rounded-full" />
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700]/30 transition-all duration-300 shadow-xl">
                  <User className="h-5 w-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.15em] mb-1.5">Dr. S. A. Mithbavkar</p>
                  <p className="text-[15px] font-bold text-white/90 group-hover:text-white transition-colors">+91 7715850099</p>
                  <p className="text-[11px] text-white/50 leading-tight">Assistant Professor, Dept of Comp. Engg.</p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700]/30 transition-all duration-300 shadow-xl">
                  <User className="h-5 w-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.15em] mb-1.5">Dr. J. R. Nandwalkar</p>
                  <p className="text-[15px] font-bold text-white/90 group-hover:text-white transition-colors">+91 9833373994</p>
                  <p className="text-[11px] text-white/50 leading-tight">Assistant Professor, Dept of Comp. Engg.</p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700]/30 transition-all duration-300 shadow-xl">
                  <MapPin className="h-5 w-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.15em] mb-1.5">Official Venue</p>
                  <p className="text-[15px] font-bold leading-relaxed text-white/90 group-hover:text-white transition-colors">
                    Plot No. 98, Sector-3, Airoli, Navi Mumbai 400708, Maharashtra, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modern Copyright Bar */}
      <div className="relative border-t border-white/5 bg-[#FFD700] py-8 text-[#0B0D17]">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm font-black uppercase tracking-wider">
              Copyright © 2026 CSI CATT DMCE
            </p>
            <span className="hidden md:block w-px h-4 bg-[#0B0D17]/20" />
            <p className="text-sm font-bold opacity-80">All rights reserved</p>
          </div>
          <div className="flex items-center gap-8 text-sm font-black uppercase tracking-wider">
            <div className="flex items-center gap-3 group cursor-default">
              <span className="text-[10px] font-bold opacity-60">Engineered by</span>
              <span className="relative">
                CSI CATT DMCE
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0B0D17] scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

