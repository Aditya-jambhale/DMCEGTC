import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Radio, Target, Users, Lightbulb, Globe } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About the Conference
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              DMCE-GTC 2026: A Premier International Platform for Research and
              Innovation
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant mb-12">
              <CardContent className="p-6 sm:p-10">
                <p className="text-foreground leading-relaxed text-base sm:text-lg mb-6">
                  <span className="font-semibold text-primary">DMCE-GTC 2026</span>{" "}
                  is an international platform for researchers, academicians,
                  industry professionals, and students to present innovative
                  research, exchange knowledge, and discuss emerging technologies
                  in Computing and IT Advancements, with a focus on
                  interdisciplinary convergence and industry relevance.
                </p>
                <p className="text-foreground leading-relaxed text-base sm:text-lg">
                  This conference is co-sponsored by{" "}
                  <span className="font-semibold text-secondary">
                    Computer Society of India (CSI)
                  </span>{" "}
                  Student Chapter, bringing together the brightest minds from
                  academia and industry to share their latest findings and
                  innovations.
                </p>
              </CardContent>
            </Card>

            {/* Objectives */}
            <div className="mb-12">
              <SectionHeader
                title="Conference Objectives"
                subtitle="What we aim to achieve through DMCE-GTC 2026"
              />

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Innovative Research
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Present and discuss cutting-edge research in computing and
                      IT advancements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Knowledge Exchange
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Foster collaboration between researchers, academicians, and
                      industry professionals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Emerging Technologies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Explore and discuss the latest trends and technologies
                      shaping the future.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Industry Relevance
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Bridge the gap between academic research and industry
                      applications.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Interdisciplinary Convergence
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Bring together experts from Computer Engineering and
                      Electronics Engineering for cross-domain collaboration.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <SectionHeader
            title="Conference Tracks"
            subtitle="Two exciting tracks covering the latest in technology"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-elegant border-t-4 border-t-primary">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Cpu className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Track 1</span>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Recent Trends in Computer Engineering
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    AI & Machine Learning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Deep Learning & Data Science
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Big Data Analytics & Cloud Computing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Internet of Things (IoT)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Cyber Security & Blockchain
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Computer Networks & Software Engineering
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Web & Mobile Technologies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Computer Vision & NLP
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Human-Computer Interaction (HCI)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Green Computing & Smart Systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-t-4 border-t-secondary">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Radio className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Track 2</span>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Recent Trends in Electronics Engineering
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Communication Systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Signal Processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    VLSI & Embedded Systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Robotics & Automation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Sensors & Instrumentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Control Systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Power Electronics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    Smart & Intelligent Devices
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizing Institution */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Organized By"
            subtitle="Department of Computer Engineering"
          />

          <Card className="max-w-3xl mx-auto shadow-elegant">
            <CardContent className="p-6 sm:p-10 text-center">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Datta Meghe College of Engineering (DMCE)
              </h3>
              <p className="text-lg text-primary font-medium mb-4">
                Airoli, Navi Mumbai
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
                  NAAC 'A' Grade
                </span>
                <span className="px-4 py-1.5 bg-secondary/20 text-secondary-foreground rounded-full font-medium">
                  NBA Accredited (Civil Engg. & Chem Engg.)
                </span>
                <span className="px-4 py-1.5 bg-muted text-muted-foreground rounded-full font-medium">
                  Affiliated to University of Mumbai
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
