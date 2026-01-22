import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/Layout";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  FileText,
  Users,
  MapPin,
  ArrowRight,
  Cpu,
  Radio,
} from "lucide-react";

import heroBg from "@/assets/image.png";

const Index = () => {
  const conferenceDate = new Date("2026-04-28T09:00:00");

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative text-white py-24 sm:py-32 lg:py-40 overflow-hidden bg-navy"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Subtle Animated Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 glass-dark rounded-full px-6 py-3 mb-10 animate-fade-in shadow-xl border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Calendar size={18} className="text-secondary" />
                <span className="text-sm font-bold tracking-wide">28-29 April 2026</span>
              </div>
              <div className="w-px h-5 bg-white/20" />
              <div className="flex items-center gap-2 text-white">
                <MapPin size={18} className="text-secondary" />
                <span className="text-sm font-bold tracking-wide">Navi Mumbai, India</span>
              </div>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight animate-slide-up">
              Global Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary bg-[length:200%_auto] animate-shimmer">Convergence</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-white/90 font-medium tracking-tight animate-fade-in delay-300">
              International Conference on Computing and IT Advancements 2026
            </p>

            <div className="inline-block px-4 py-1 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 mb-10 animate-fade-in delay-500">
              <p className="text-lg font-bold text-secondary uppercase tracking-[0.2em]">
                DMCE-GTC 2026
              </p>
            </div>

            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-12 font-medium">
              In association with {" "}
              <span className="text-secondary font-bold underline decoration-secondary/30 underline-offset-4">
                Computer Society of India (CSI)
              </span>{" "}
              Student Branch
            </p>

            {/* Countdown Timer */}
            <div className="mb-8 p-4 glass-dark rounded-2xl border-white/10 shadow-2xl animate-scale-in">
              <p className="text-[10px] font-bold  uppercase tracking-[0.3em] text-white/50 mb-3">
                Countdown to Convergence
              </p>
              <CountdownTimer targetDate={conferenceDate} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="h-16 px-10 bg-secondary hover:bg-secondary/90 text-navy font-bold text-lg rounded-2xl shadow-xl shadow-secondary/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Link to="/registration">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-16 px-10 border-white/20 bg-white/5 text-white hover:bg-white/10 text-lg rounded-2xl backdrop-blur-sm hover:scale-105 active:scale-95 transition-all"
              >
                <Link to="/call-for-papers">Submit Paper</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Venue Info Bar */}
      <section className="bg-navy border-y border-white/10 py-5 overflow-hidden whitespace-nowrap">
        <div className="flex items-center animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="font-bold text-white uppercase tracking-wider text-sm">
                  Organized by Department of Computer Engineering, Datta Meghe College of Engineering, Airoli
                </span>
              </div>
              <span className="text-white/30 font-black">•</span>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-black text-sm uppercase">NAAC 'A' Grade</span>
              </div>
              <span className="text-white/30 font-black">•</span>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-black text-sm uppercase">NBA Accredited (civil & Chemical Engineering)</span>
              </div>
              <span className="text-white/30 font-black">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy mb-6">
              Conference Tracks
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
            <Card className="group relative overflow-hidden border-none shadow-elegant hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-navy">
                      Track 1
                    </h3>
                    <p className="text-primary font-bold text-sm">Computing Excellence</p>
                  </div>
                </div>
                <h4 className="text-xl font-extrabold text-foreground mb-4">
                  Recent Trends in Computer Engineering
                </h4>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  AI & ML, Deep Learning, Data Science, Big Data Analytics,
                  Cloud Computing, IoT, Cyber Security, Blockchain, Computer
                  Networks, Software Engineering, Web & Mobile Technologies,
                  Computer Vision, NLP, HCI, Green Computing, Smart Systems.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-none shadow-elegant hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-gold" />
              <CardContent className="p-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-secondary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Radio className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-navy">
                      Track 2
                    </h3>
                    <p className="text-secondary font-bold text-sm">Electronics Innovation</p>
                  </div>
                </div>
                <h4 className="text-xl font-extrabold text-foreground mb-4">
                  Recent Trends in Electronics Engineering
                </h4>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Communication Systems, Signal Processing, VLSI & Embedded
                  Systems, Robotics & Automation, Sensors & Instrumentation,
                  Control Systems, Power Electronics, Smart & Intelligent
                  Devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { path: "/important-dates", icon: Calendar, title: "Important Dates", desc: "Submission: 27th March 2026", color: "primary" },
              { path: "/paper-submission", icon: FileText, title: "Paper Submission", desc: "Submit your research papers", color: "accent" },
              { path: "/registration", icon: Users, title: "Registration", desc: "Register for the conference", color: "secondary" },
              { path: "/speakers", icon: Users, title: "Keynote Speakers", desc: "Meet our distinguished speakers", color: "navy" }
            ].map((item, idx) => (
              <Link key={idx} to={item.path} className="group">
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-[2rem] overflow-hidden group-hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={cn(
                      "w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-300",
                      item.color === "primary" ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white" :
                        item.color === "accent" ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white" :
                          item.color === "secondary" ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white" :
                            "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white"
                    )}>
                      <item.icon className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    <h3 className="font-heading font-extrabold text-navy text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-muted-foreground/70">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy z-0" />
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] z-0" />

        <div className="container relative z-10 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-8">
            Ready to Share Your Research?
          </h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg font-medium">
            Submit your innovative research papers and be part of the global
            convergence of technology and ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="h-16 px-12 bg-secondary hover:bg-secondary/90 text-navy font-bold text-lg rounded-2xl shadow-xl shadow-secondary/20"
            >
              <Link to="/call-for-papers">View Call for Papers <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 px-12 border-white/20 bg-white/5 text-white hover:bg-white/10 text-lg rounded-2xl backdrop-blur-sm"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
