import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Radio,
  FileText,
  CheckCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const CallForPapers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Call for Papers
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Submit your innovative research for DMCE-GTC 2026
            </p>
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full">
              <span className="text-gold font-semibold">
                Conference Dates: 28–29 April 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant mb-12">
              <CardContent className="p-6 sm:p-10">
                <p className="text-foreground leading-relaxed text-base sm:text-lg mb-4">
                  Department of Computer Engineering of{" "}
                  <span className="font-semibold">
                    Datta Meghe College of Engineering (DMCE)
                  </span>
                  , Airoli, Navi Mumbai (NAAC 'A' Grade | NBA Accredited (Civil Engg. & Chem Engg.) |
                  Affiliated to University of Mumbai) invites research papers for
                </p>
                <p className="text-xl sm:text-2xl font-heading font-bold text-primary text-center">
                  Global Tech Convergence: International Conference on Computing
                  and IT Advancements 2026
                </p>
                <p className="text-center text-secondary font-semibold mt-2">
                  (DMCE-GTC 2026)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <SectionHeader
            title="Conference Tracks"
            subtitle="Choose from two exciting research tracks"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-elegant border-l-4 border-l-primary">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Cpu className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-secondary">
                      Track 1
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Recent Trends in Computer Engineering
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "AI & ML",
                    "Deep Learning",
                    "Data Science",
                    "Big Data Analytics",
                    "Cloud Computing",
                    "IoT",
                    "Cyber Security",
                    "Blockchain",
                    "Computer Networks",
                    "Software Engineering",
                    "Web & Mobile Tech",
                    "Computer Vision",
                    "NLP",
                    "HCI",
                    "Green Computing",
                    "Smart Systems",
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-1.5 text-muted-foreground"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-l-4 border-l-secondary">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Radio className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">
                      Track 2
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Recent Trends in Electronics Engineering
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Communication Systems",
                    "Signal Processing",
                    "VLSI & Embedded Systems",
                    "Robotics & Automation",
                    "Sensors & Instrumentation",
                    "Control Systems",
                    "Power Electronics",
                    "Smart & Intelligent Devices",
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-1.5 text-muted-foreground"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Submission & Publication */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Paper Submission & Publication"
            subtitle="Guidelines for submitting your research"
          />

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-6 sm:p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      Original, unpublished research papers are invited
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      All papers will undergo peer review
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      Accepted and presented papers will be published in the{" "}
                      <span className="font-semibold">Conference Proceedings</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      Selected best papers will be forwarded to a{" "}
                      <span className="font-semibold text-secondary">
                        Web of Science indexed
                      </span>{" "}
                      peer-reviewed journal
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="ml-8">
                      Journal acceptance is subject to journal norms; additional
                      publication charges, if any, will be borne by authors
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Ready to Submit Your Paper?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Check our submission guidelines and important dates before submitting
            your research paper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold"
            >
              <Link to="/paper-submission">
                Submission Guidelines
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/important-dates">View Important Dates</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CallForPapers;
