import { Link } from "react-router-dom";
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

const Index = () => {
  const conferenceDate = new Date("2026-04-28T09:00:00");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-gold/20 rounded-full">
              <span className="text-gold text-sm font-medium">
                28-29 April 2026 • Navi Mumbai, India
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Global Tech Convergence
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-2 text-primary-foreground/90">
              International Conference on Computing and IT Advancements 2026
            </p>

            <p className="text-base sm:text-lg text-gold font-semibold mb-8">
              DMCE-GTC 2026
            </p>

            <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Co-sponsored by{" "}
              <span className="text-gold font-medium">
                Computer Society of India (CSI)
              </span>{" "}
              Student Chapter
            </p>

            {/* Countdown Timer */}
            <div className="mb-10">
              <p className="text-sm text-primary-foreground/70 mb-4">
                Conference begins in
              </p>
              <CountdownTimer targetDate={conferenceDate} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold"
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
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/call-for-papers">Submit Paper</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Info Bar */}
      <section className="bg-secondary py-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-medium text-secondary-foreground">
              Organized by Department of Computer Engineering, Datta Meghe
              College of Engineering, Airoli
            </span>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="text-muted-foreground text-sm">
              NAAC 'A' Grade | NBA Accredited
            </span>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Conference Tracks
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Card className="shadow-elegant hover:shadow-lg transition-shadow border-t-4 border-t-primary">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Track 1
                  </h3>
                </div>
                <h4 className="text-lg font-medium text-foreground mb-3">
                  Recent Trends in Computer Engineering
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI & ML, Deep Learning, Data Science, Big Data Analytics,
                  Cloud Computing, IoT, Cyber Security, Blockchain, Computer
                  Networks, Software Engineering, Web & Mobile Technologies,
                  Computer Vision, NLP, HCI, Green Computing, Smart Systems.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Radio className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Track 2
                  </h3>
                </div>
                <h4 className="text-lg font-medium text-foreground mb-3">
                  Recent Trends in Electronics Engineering
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/important-dates" className="group">
              <Card className="h-full hover:shadow-lg transition-all group-hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Calendar className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    Important Dates
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Submission: 27th March 2026
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/paper-submission" className="group">
              <Card className="h-full hover:shadow-lg transition-all group-hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FileText className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    Paper Submission
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your research papers
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/registration" className="group">
              <Card className="h-full hover:shadow-lg transition-all group-hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Users className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    Registration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Register for the conference
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/speakers" className="group">
              <Card className="h-full hover:shadow-lg transition-all group-hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Users className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    Keynote Speakers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Meet our distinguished speakers
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Share Your Research?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Submit your innovative research papers and be part of the global
            convergence of technology and ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold"
            >
              <Link to="/call-for-papers">View Call for Papers</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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
