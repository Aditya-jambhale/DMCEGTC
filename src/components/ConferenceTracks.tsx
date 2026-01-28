import { Cpu, Radio } from "lucide-react";
import { Reveal } from "./Reveal";

export const ConferenceTracks = () => {
    return (
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
            <div className="container relative z-10">
                <Reveal className="text-center mb-16 px-4">
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-navy mb-4">
                        Conference Tracks
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-medium leading-relaxed">
                        Exploring the frontiers of technology through two specialized tracks of innovation and research.
                    </p>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
                    {/* Track 1 */}
                    <Reveal className="group relative" delay={100}>
                        <div className="h-full bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-3xl transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Cpu className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                                </div>
                                <div>
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-1">Track 01</span>
                                    <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-navy">
                                        Recent Trends in Computer Engineering
                                    </h3>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-base font-bold text-navy/80 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Recent Trends
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "AI & ML", "Deep Learning", "Data Science", "Big Data Analytics",
                                        "Cloud Computing", "IoT", "Cyber Security", "Blockchain",
                                        "Computer Networks", "Software Engineering", "Web & Mobile Technologies",
                                        "Computer Vision", "NLP", "HCI", "Green Computing", "Smart Systems"
                                    ].map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:border-primary/30 hover:text-primary transition-all cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Track 2 */}
                    <Reveal className="group relative" delay={200}>
                        <div className="h-full bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-3xl transition-all duration-300 hover:shadow-xl hover:border-secondary/20">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Radio className="h-7 w-7 sm:h-8 sm:w-8 text-secondary" />
                                </div>
                                <div>
                                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full mb-1">Track 02</span>
                                    <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-navy">
                                        Recent Trends in Electrical Engineering
                                    </h3>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-base font-bold text-navy/80 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                    Innovative Frontiers
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Communication Systems", "Signal Processing", "VLSI & Embedded Systems",
                                        "Robotics & Automation", "Sensors & Instrumentation", "Control Systems",
                                        "Power Electronics", "Smart & Intelligent Devices"
                                    ].map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:border-secondary/30 hover:text-secondary transition-all cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
