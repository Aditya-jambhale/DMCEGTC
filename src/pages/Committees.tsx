import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

const committees = [
  {
    title: "Chief Patrons",
    members: [
      {
        name: "Hon'ble Dr. Subir Kumar Banerjee",
        role: "Founder President & Trustee, NYSS, Airoli",
      },
      {
        name: "Hon'ble Mrs. Suvra Banerjee",
        role: "Former President & Trustee, NYSS, Airoli",
      },
    ],
  },
  {
    title: "Patrons",
    members: [
      {
        name: "Hon'ble Mrs. Gauri Bhattacharya",
        role: "President, NYSS, Airoli",
      },
      {
        name: "Hon'ble Shri. Sreejit Bhattacharya",
        role: "Treasurer, NYSS, Airoli",
      },
      {
        name: "Hon'ble Dr. Rituparna Banerjee",
        role: "Secretary, NYSS, Airoli",
      },
      { name: "Dr. A.R. Katti", role: "Managing Director, NYSS, Airoli" },
      { name: "Dr. S.D. Sawarkar", role: "Executive Director, NYSS Airoli" },
    ],
  },
  {
    title: "Conference Convenor",
    members: [{ name: "Dr. P. A. Dode", role: "Principal, DMCE, Airoli" }],
  },
  {
    title: "Conference Chair and CSI CATT Representative",
    members: [
      {
        name: "Dr. A. P. Pande",
        role: "Vice Principal and Head of Department of Computer Engineering, DMCE, Airoli",
      },
    ],
  },
  {
    title: "Organizing Chair",
    members: [
      {
        name: "Dr. C. M. Raut",
        role: "Professor, Department of Computer Engineering, DMCE, Airoli",
      },
      {
        name: "Dr. B. B. Meshram",
        role: "Professor, Department of Computer Engineering, DMCE, Airoli",
      },
      {
        name: "Dr. S. A. Mithbavkar",
        role: "Assistant Professor, Department of Computer Engineering, DMCE, Airoli",
      },
    ],
  },
  {
    title: "CSI CATT Coordinator",
    members: [
      {
        name: "Dr. J. R. Nandwalkar",
        role: "Assistant Professor, Department of Computer Engineering, DMCE, Airoli",
      },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      { name: "Mr. S. S. Karve", role: "" },
      { name: "Dr. J. D Sawarkar", role: "" },
      { name: "Mrs. Pranita Chavan", role: "" },
      { name: "Mrs. Sonali Ramteke", role: "" },
      { name: "Mr. Hemant Chaudhari", role: "" },
      { name: "Mr. N. N. Tidke", role: "" },
    ],
  },
  {
    title: "Reviewer Appointing Committee",
    members: [
      { name: "Dr. P.Y. Itankar", role: "" },
      { name: "Mr. J. Mathew", role: "" },
      { name: "Mrs. J. A. Gaikawad", role: "" },
      { name: "Mr. R.N. Mendhe", role: "" },
      { name: "Dr. Shailaja Mohite", role: "" },
      { name: "Mrs. Saranaya Vinod", role: "" },
    ],
  },
  {
    title: "Publication Committee",
    members: [
      { name: "Mrs. S. N. Chaudhari", role: "" },
      { name: "Dr. S. A. Mithbavkar", role: "" },
      { name: "Ms. A. Rakshe", role: "" },
      { name: "Mrs. Prajakta Lad", role: "" },
    ],
  },
  {
    title: "Finance Committee",
    members: [
      { name: "Dr. A. P. Pande", role: "" },
      { name: "Dr. C. M. Raut", role: "" },
      { name: "Dr. J. R. Nandwalkar", role: "" },
      { name: "Mrs. Sushma Rathi", role: "" },
      { name: "Ms. Neha Kukade", role: "" },
    ],
  },
  {
    title: "Certificate Committee",
    members: [
      { name: "Mr. R.N. Mendhe", role: "" },
      { name: "Mrs. Pranita Chavan", role: "" },
      { name: "Dr. Shailaja Mohite", role: "" },
      { name: "Ms. Neha Kukade", role: "" },
      { name: "Mrs. Saranaya Vinod", role: "" },
    ],
  },
  {
    title: "Advisory Committee",
    members: [
      { name: "Dr. D. J. Pete", role: "Dean Academics" },
      { name: "Dr. A. P. Patil", role: "Director T & P" },
      { name: "Dr. U. Pawar", role: "VP & HOD, Mech Engg" },
      { name: "Dr. A. V. Dubewar", role: "HOD, H & S" },
      { name: "Dr. S. M. Patil", role: "HOD, AI and DS Engg" },
      { name: "Mr. S. R. Jajoo", role: "HOD, E & T Engg" },
      { name: "Dr. S. B. Patil", role: "HOD, Civil Engg" },
      { name: "Dr. S. M. Deshmukh", role: "HOD, Chem Engg" },
      { name: "Dr. V. S. Kubde", role: "HOD, IT" },
    ],
  },
];

const Committees = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Conference Committees
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Meet the dedicated team behind DMCE-GTC 2026
            </p>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="grid gap-6 lg:gap-8">
            {committees.map((committee, index) => (
              <Card
                key={index}
                className={`shadow-elegant ${
                  index < 4 ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-lg sm:text-xl text-foreground flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    {committee.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`grid gap-3 ${
                      committee.members.length > 4
                        ? "sm:grid-cols-2 lg:grid-cols-3"
                        : committee.members.length > 2
                        ? "sm:grid-cols-2"
                        : ""
                    }`}
                  >
                    {committee.members.map((member, mIndex) => (
                      <div
                        key={mIndex}
                        className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <p className="font-medium text-foreground text-sm sm:text-base">
                          {member.name}
                        </p>
                        {member.role && (
                          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                            {member.role}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <SectionHeader
            title="Contact Persons"
            subtitle="For any queries regarding the conference"
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  Dr. S. A. Mithbavkar
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Assistant Professor, Department of Computer Engineering
                </p>
                <a
                  href="tel:7715850099"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  7715850099
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  Dr. J. R. Nandwalkar
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Assistant Professor, Department of Computer Engineering
                </p>
                <a
                  href="tel:9833373994"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  9833373994
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Committees;
