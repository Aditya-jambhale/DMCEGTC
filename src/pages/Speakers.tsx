import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mic2, Star, BadgeCheck } from "lucide-react";

const speakers = [
  {
    name: "Speaker Name",
    designation: "Designation / Institution",
    topic: "Keynote Topic",
    image: null, // To be added later
  },
  {
    name: "Speaker Name",
    designation: "Designation / Institution",
    topic: "Keynote Topic",
    image: null, // To be added later
  },
  {
    name: "Speaker Name",
    designation: "Designation / Institution",
    topic: "Keynote Topic",
    image: null, // To be added later
  },
];

const Speakers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-10 sm:py-12 md:py-16 text-white border-b border-white/10 overflow-hidden">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 uppercase tracking-tighter">
              Keynote Speakers
            </h1>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium">
              Engaging with visionary leaders and researchers at the forefront of technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Speakers Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                  <Star size={14} className="fill-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Invited Experts</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-navy uppercase tracking-tighter">
                  Distinguished Speakers
                </h2>
              </div>
              <p className="text-slate-500 text-sm max-w-md font-medium leading-relaxed">
                Confirming prominent voices from global industry and academia. Announcements will be updated periodically.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <Card key={index} className="group border-none shadow-none bg-transparent overflow-visible">
                  <CardContent className="p-0 space-y-6">
                    {/* Speaker Image Placeholder */}
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                      {speaker.image ? (
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                          <User className="w-20 h-20 text-slate-200 group-hover:text-primary/20 transition-colors duration-500" />
                          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-[10px] font-black uppercase tracking-widest text-center text-slate-400">Profile coming soon</p>
                          </div>
                        </div>
                      )}

                      {/* Decorative Element */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <Mic2 size={16} className="text-primary" />
                      </div>
                    </div>

                    {/* Speaker Info */}
                    <div className="text-center sm:text-left space-y-2 px-2">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <h3 className="font-bold text-xl text-navy group-hover:text-primary transition-colors">
                          {speaker.name}
                        </h3>
                        <BadgeCheck size={16} className="text-primary/40 group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-widest leading-none mb-1">
                        {speaker.designation}
                      </p>
                      <p className="text-sm text-slate-500 font-medium italic">
                        "{speaker.topic}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Alert */}
            <div className="mt-20 p-8 sm:p-12 bg-navy rounded-[3rem] text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -ml-24 -mb-24" />

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4 relative z-10">
                More Speakers to be Announced
              </h3>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-0 relative z-10 font-medium">
                We are finalizing the list of session chairs and plenary speakers. Check back regularly for the complete lineup of global tech leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-navy uppercase tracking-tighter">
              Interested in Presenting?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              Become a part of the conversation. If you wish to present your research at DMCE-GTC 2026,
              please explore our submission guidelines and submit your manuscript today.
            </p>
            <div className="pt-4">
              <a
                href="/registration"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-lg shadow-primary/20 hover:bg-navy hover:-translate-y-1 transition-all"
              >
                Submit Your Paper
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
