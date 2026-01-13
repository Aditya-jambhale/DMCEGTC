import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  ExternalLink,
  Users,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const PaperSubmission = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Paper Submission
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Guidelines for submitting your research paper
            </p>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Author Guidelines"
            subtitle="Please follow these important guidelines when preparing your paper"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="shadow-elegant border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Paper Template
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Download and use the official conference paper template for
                      your submission. All papers must follow this format.
                    </p>
                    <Button asChild>
                      <a
                        href="https://docs.google.com/document/d/1TABtQDZa7sEhSwmTX2qWEtzzxrPZbizy/edit?usp=sharing&ouid=109566136825878448708&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Author Limit
                    </h3>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Maximum five authors
                      </span>{" "}
                      are allowed per paper. Please ensure all author details are
                      accurate before submission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Originality Requirements
                    </h3>
                    <p className="text-muted-foreground">
                      Paper should cover{" "}
                      <span className="font-medium text-foreground">
                        original research work
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-destructive">
                        similarity index should be less than 10%
                      </span>
                      . Papers with higher similarity will be rejected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <SectionHeader
            title="Submission Process"
            subtitle="Step-by-step guide to submit your paper"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                <div className="relative flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <Card className="flex-1 shadow-md">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-2">
                        Prepare Your Paper
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Download the template and prepare your paper following the
                        format guidelines. Ensure originality and check similarity
                        index.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <Card className="flex-1 shadow-md">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-2">
                        Submit via Registration Form
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Submit your paper through the official registration form.
                        Fill in all required details accurately.
                      </p>
                      <Button asChild size="sm">
                        <a
                          href="https://forms.gle/CkNg8muFreP2CHYW6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Submit Paper
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-secondary-foreground font-bold">3</span>
                  </div>
                  <Card className="flex-1 shadow-md">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-2">
                        Peer Review
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Your paper will undergo peer review by experts in the
                        field. This process ensures quality and relevance.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-secondary-foreground font-bold">4</span>
                  </div>
                  <Card className="flex-1 shadow-md">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-2">
                        Acceptance Notification
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        You will receive notification of acceptance on{" "}
                        <span className="font-medium text-primary">
                          9th April 2026
                        </span>
                        .
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 z-10">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <Card className="flex-1 shadow-md">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-2">
                        Camera-Ready Submission
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Submit the final camera-ready version and complete
                        registration by{" "}
                        <span className="font-medium text-primary">
                          17th April 2026
                        </span>
                        .
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Ready to Submit?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Check the important dates and register to submit your paper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-secondary-foreground"
            >
              <a
                href="https://forms.gle/CkNg8muFreP2CHYW6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/important-dates">View Deadlines</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaperSubmission;
