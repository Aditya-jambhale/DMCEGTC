import { Layout } from "@/components/Layout";
import {
  Calendar,
  Clock,
  FileText,
  CheckCircle,
  BookOpen,
  Award,
  Globe,
  Dot
} from "lucide-react";

const schedule = [
  {
    event: "Online Paper Submission Starts",
    date: "1st Feb 2026",
    icon: FileText,
  },
  {
    event: "Last date of paper submission",
    date: "27th March 2026",
    icon: Clock,
  },
  {
    event: "Notification of Acceptance",
    date: "9th April 2026",
    icon: CheckCircle,
  },
  {
    event: "Author Registration and Camera Ready Paper Submission Starts",
    date: "10th April 2026",
    icon: BookOpen,
  },
  {
    event: "Last date of Author Registration and Submission of Camera Ready Paper",
    date: "17th April 2026",
    icon: CheckCircle,
  },
  {
    event: "(DMCE-GTC 2026) Conference",
    date: "28th - 29th April 2026",
    icon: Calendar,
    highlight: true
  },
];

const ImportantDates = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-10 sm:py-12 md:py-16 text-white border-b border-white/10 overflow-hidden">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 uppercase tracking-tighter">
              Dates & Guidelines
            </h1>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium">
              Global Tech Convergence 2026: Reference for key deadlines and submission protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 md:py-16 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto">

            {/* Timeline Column */}
            <div className="lg:col-span-12 xl:col-span-7">
              <div className="mb-10 sm:mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter flex items-center gap-4">
                  Conference Timeline
                  <div className="h-1 flex-1 bg-slate-100 rounded-full hidden sm:block" />
                </h2>
              </div>

              <div className="space-y-0 relative">
                {schedule.map((item, idx) => (
                  <div key={idx} className="group relative flex gap-6 sm:gap-10 pb-10 last:pb-0">
                    {/* Continuous Line */}
                    {idx !== schedule.length - 1 && (
                      <div className="absolute left-[23px] sm:left-[27px] top-12 bottom-0 w-[2px] bg-slate-100 group-hover:bg-primary/20 transition-colors" />
                    )}

                    {/* Date/Icon Bubble */}
                    <div className="relative shrink-0 z-10">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm border-2 ${item.highlight ? 'bg-secondary border-secondary text-white' : 'bg-white border-slate-100 text-primary group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5'}`}>
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1 sm:pt-2 flex-1">
                      <span className={`block text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] mb-1.5 sm:mb-2 ${item.highlight ? 'text-secondary' : 'text-primary'}`}>
                        {item.date}
                      </span>
                      <h3 className={`font-bold text-base sm:text-lg md:text-xl leading-snug max-w-xl transition-colors ${item.highlight ? 'text-navy' : 'text-navy/80 group-hover:text-navy'}`}>
                        {item.event}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines Column */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="lg:sticky lg:top-24 mt-12 lg:mt-0">
                <div className="mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter flex items-center gap-4">
                    Guidelines
                    <div className="h-1 flex-1 bg-slate-100 rounded-full hidden sm:block" />
                  </h2>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100">
                    <h4 className="font-bold text-navy text-sm uppercase tracking-widest border-b border-slate-200 pb-3 mb-6 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Paper Submission & Publication
                    </h4>

                    <ul className="space-y-4 sm:space-y-5">
                      {[
                        "Original, unpublished research papers are invited",
                        "All papers will undergo rigorous peer review",
                        "Accepted and presented papers will be published in Conference Proceedings",
                        "Selected high-quality papers will be forwarded to a Web of Science indexed journal",
                        "Journal acceptance subject to norms; additional charges handled by authors"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-4 group">
                          <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                          <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                            {text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deadline Notice */}
                  <div className="p-6 bg-navy text-white rounded-3xl shadow-xl shadow-navy/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                    <div className="flex gap-4 items-center relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Timing Protocol</p>
                        <p className="text-xs text-white/90 font-bold leading-relaxed">
                          All deadlines are at 11:59 PM IST. Please submit well in advance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImportantDates;
