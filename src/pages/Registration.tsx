import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ExternalLink,
  CreditCard,
  Building,
  Users,
  Laptop,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const registrationFees = {
  headers: [
    "Category",
    "Indian (Non-CSI)",
    "Indian (CSI)",
    "International (Non-CSI)",
    "International (CSI)",
  ],
  rows: [
    {
      category: "Students (UG category)",
      icon: <GraduationCap className="h-4 w-4" />,
      indian: "₹2,500",
      indianCSI: "₹2,000",
      international: "$100",
      internationalCSI: "$75",
    },
    {
      category: "PG, Research Scholars, and Academicians",
      icon: <Users className="h-4 w-4" />,
      indian: "₹4,000",
      indianCSI: "₹3,500",
      international: "$200",
      internationalCSI: "$175",
    },
    {
      category: "Industry Professionals",
      icon: <Briefcase className="h-4 w-4" />,
      indian: "₹6,000",
      indianCSI: "₹5,500",
      international: "$250",
      internationalCSI: "$225",
    },
  ],
};

const Registration = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Registration
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Register now to participate in DMCE-GTC 2026
            </p>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="How to Register"
            subtitle="Follow these simple steps to complete your registration"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card className="shadow-elegant border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Submit Your Paper
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Use the registration form link below to submit your paper
                        and fill in your details. Any author can complete the
                        registration.
                      </p>
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <a
                          href="https://forms.gle/CkNg8muFreP2CHYW6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Registration Form
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary-foreground font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Wait for Acceptance Notification
                      </h3>
                      <p className="text-muted-foreground">
                        After paper submission, your paper will undergo peer
                        review. You will receive notification of acceptance on{" "}
                        <span className="font-medium text-primary">
                          9th April 2026
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Pay Registration Fees
                      </h3>
                      <p className="text-muted-foreground">
                        After notification of acceptance, pay the registration
                        fees and upload proof of transaction on the form which you
                        will receive during notification.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Mode */}
      <section className="py-12 bg-secondary/10">
        <div className="container">
          <Card className="max-w-3xl mx-auto border-2 border-secondary">
            <CardContent className="p-6 text-center">
              <Laptop className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Hybrid Conference Mode
              </h3>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  DMCE students:
                </span>{" "}
                OFFLINE (In-person attendance)
                <br />
                <span className="font-medium text-foreground">
                  Non-DMCE participants:
                </span>{" "}
                ONLINE (Virtual attendance)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Fees */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <SectionHeader
            title="Registration Fees"
            subtitle="CSI members enjoy discounted registration rates"
          />

          <div className="max-w-5xl mx-auto">
            <Card className="shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary hover:bg-primary">
                        <TableHead className="text-primary-foreground font-semibold py-4">
                          Category
                        </TableHead>
                        <TableHead className="text-primary-foreground font-semibold text-center py-4">
                          Indian
                          <br />
                          <span className="text-xs font-normal opacity-80">
                            (Non-CSI)
                          </span>
                        </TableHead>
                        <TableHead className="text-primary-foreground font-semibold text-center py-4 bg-primary/80">
                          Indian
                          <br />
                          <span className="text-xs font-normal opacity-80">
                            (CSI Members)
                          </span>
                        </TableHead>
                        <TableHead className="text-primary-foreground font-semibold text-center py-4">
                          International
                          <br />
                          <span className="text-xs font-normal opacity-80">
                            (Non-CSI)
                          </span>
                        </TableHead>
                        <TableHead className="text-primary-foreground font-semibold text-center py-4 bg-primary/80">
                          International
                          <br />
                          <span className="text-xs font-normal opacity-80">
                            (CSI Members)
                          </span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {registrationFees.rows.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="py-4">
                            <div className="flex items-center gap-2">
                              <span className="text-primary">{row.icon}</span>
                              <span className="font-medium text-foreground">
                                {row.category}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-4 font-medium">
                            {row.indian}
                          </TableCell>
                          <TableCell className="text-center py-4 font-medium bg-secondary/10 text-secondary">
                            {row.indianCSI}
                          </TableCell>
                          <TableCell className="text-center py-4 font-medium">
                            {row.international}
                          </TableCell>
                          <TableCell className="text-center py-4 font-medium bg-secondary/10 text-secondary">
                            {row.internationalCSI}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Payment Details"
            subtitle="Bank account details for registration fee payment"
          />

          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardHeader className="bg-primary/5 border-b">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Building className="h-5 w-5 text-primary" />
                Bank Account Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-muted-foreground text-sm w-32 flex-shrink-0">
                    Account Name:
                  </span>
                  <span className="font-medium text-foreground">
                    MISS DMCE STUDENT BRANCH CSI
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-muted-foreground text-sm w-32 flex-shrink-0">
                    Account No.:
                  </span>
                  <span className="font-mono font-medium text-foreground">
                    520101005225171
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-muted-foreground text-sm w-32 flex-shrink-0">
                    IFSC Code:
                  </span>
                  <span className="font-mono font-medium text-foreground">
                    UBIN0904716
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-muted-foreground text-sm w-32 flex-shrink-0">
                    Bank:
                  </span>
                  <span className="font-medium text-foreground">
                    Union Bank of India, Maharashtra, India
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-muted-foreground text-sm w-32 flex-shrink-0">
                    Branch:
                  </span>
                  <span className="font-medium text-foreground">
                    Panchasheel Commercial Complex, 1st Floor, Sector 4, Airoli,
                    Mumbai 400708
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Registration;
