import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Award,
  BookOpen,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Publication = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Publication
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Publication opportunities for accepted papers
            </p>
          </div>
        </div>
      </section>

      {/* Publication Details */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Publication Opportunities"
            subtitle="Your research will reach a global audience"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Conference Proceedings */}
            <Card className="shadow-elegant overflow-hidden">
              <div className="bg-primary p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-foreground/20 rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-foreground">
                      Conference Proceedings
                    </h3>
                    <p className="text-primary-foreground/80">
                      All accepted papers
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      All accepted and presented papers will be published in the{" "}
                      <span className="font-semibold">
                        conference proceedings
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      Conference proceedings will be shared on the registered
                      email ID
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Web of Science Publication */}
            <Card className="shadow-elegant overflow-hidden">
              <div className="bg-secondary p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary-foreground/20 rounded-lg">
                    <Award className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-secondary-foreground">
                      Web of Science Indexed Journal
                    </h3>
                    <p className="text-secondary-foreground/80">
                      Selected best papers
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      Selected papers will be considered for publication in a{" "}
                      <span className="font-semibold text-secondary">
                        Web of Science–indexed journal
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      Subject to journal review and quality standards
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Additional publication charges, if any, must be paid by the
                      authors
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* E-Certificate */}
            <Card className="shadow-elegant border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      E-Certificate
                    </h3>
                    <p className="text-muted-foreground">
                      E-Certificate will be given to{" "}
                      <span className="font-medium text-foreground">
                        all authors
                      </span>{" "}
                      after successful completion of the conference.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                  What You'll Receive
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Proceedings
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Paper published in conference proceedings
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                      <Award className="h-7 w-7 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      WoS Journal*
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Selected papers in indexed journal
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-7 w-7 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      E-Certificate
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Official participation certificate
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-6">
                  *Subject to journal norms and quality standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Get Your Research Published
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Submit your paper now and get the opportunity to publish in
            prestigious platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-secondary-foreground"
            >
              <Link to="/paper-submission">Submit Your Paper</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/call-for-papers">View Call for Papers</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publication;
