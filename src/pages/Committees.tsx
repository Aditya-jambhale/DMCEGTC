import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, User, Users, ShieldCheck, GraduationCap, Building2 } from "lucide-react";

const committees = [
  {
    title: "Chief Patrons",
    icon: ShieldCheck,
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
    icon: Users,
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
    icon: User,
    members: [{ name: "Dr. P. A. Dode", role: "Principal, DMCE, Airoli" }],
  },
  {
    title: "Conference Chair & CSI CATT Representative",
    icon: GraduationCap,
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
      { name: "Dr. S. D. Sawarkar", role: "Executive Director, NYSS, Airoli" },
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
  {
    title: "Reviewer Committee",
    members: [
      { name: "Er. N. M. Patil", role: "Senior Consultant, ICE Data Services, London, UK" },
      { name: "Dr. Laltkumar Singh", role: "Scientist, NPCIL, BARC" },
      { name: "Er. Vikas Mendhe", role: "Senior Consultant, USA" },
      { name: "Dr. Sayad Munir", role: "Asst. Vice President, Reliance Jio, Navi Mumbai" },
      { name: "Dr. S. K. Shinde", role: "Principal, LTCOE, Navi Mumbai" },
      { name: "Dr. S. B. Wankhade", role: "Professor, RGIT, Mumbai" },
      { name: "Mr. Kishor Ahire", role: "Associate Director, Capgemini, Sydney, Australia" },
      { name: "Dr. Surendra Bhosale", role: "Former Head, Electrical Engineering, VJTI" },
      { name: "Dr. Pramod Watekar", role: "Lead & CEO, National Quantum Mission, IIT Kharagpur" },
      { name: "Dr. Kamini Sirsath", role: "Vice Principal, Sandip Institute of Engineering, Nashik" },
      { name: "Dr. Madhuri Gedam", role: "Dean Research, CSE, Tiwari College of Engg, Mumbai" },
      { name: "Dr. D. R. Ingale", role: "Professor & Head, CE, BVCE Navi Mumbai" },
      { name: "Dr. M.R. Shirole", role: "Asso. Prof., Computer Engg. & IT Dept, VJTI, Mumbai" },
      { name: "Prof. B. V. Patel", role: "Principal, Shah and Anchor Kutchhi Engg College, Mumbai" },
      { name: "Er. T. M. Bansod", role: "Industry Consultant" },
      { name: "Dr. Varshapriya J.N.", role: "Computer Engg. & IT Dept, VJTI, Mumbai" },
    ],
  },
];

const Committees = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-10 sm:py-12 md:py-16 text-white border-b border-white/10 overflow-hidden">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 uppercase tracking-tighter">
              Conference Committees
            </h1>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium">
              The esteemed leadership and expert panels guiding DMCE-GTC 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            {committees.map((committee, index) => (
              <div key={index} className="space-y-6 sm:space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 group">
                  <div className="h-0.5 w-8 sm:w-12 bg-primary group-hover:w-16 transition-all duration-500" />
                  <h2 className="text-xl sm:text-2xl font-black text-navy uppercase tracking-tighter">
                    {committee.title}
                  </h2>
                </div>

                <div className={`grid gap-4 sm:gap-6 ${committee.members.length > 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  }`}>
                  {committee.members.map((member, mIndex) => (
                    <Card key={mIndex} className="group border-slate-100 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden bg-slate-50/30">
                      <CardContent className="p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                            <User className="h-5 w-5 text-primary/40 group-hover:text-primary transition-colors" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-bold text-navy text-sm sm:text-base leading-tight">
                              {member.name}
                            </h4>
                            {member.role && (
                              <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-relaxed uppercase tracking-wide">
                                {member.role}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
        <div className="container px-4">
          <SectionHeader
            title="Convening Support"
            subtitle="Connect with our organizing team for assistance"
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8 sm:mt-12">
            {[
              {
                name: "Dr. S. A. Mithbavkar",
                role: "Assistant Professor, Dept. of Computer Engineering",
                phone: "7715850099"
              },
              {
                name: "Dr. J. R. Nandwalkar",
                role: "Assistant Professor, Dept. of Computer Engineering",
                phone: "9833373994"
              }
            ].map((contact, i) => (
              <Card key={i} className="shadow-elegant border-none rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform">
                <CardContent className="p-8 sm:p-10 text-center bg-white">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-navy/5 rounded-full flex items-center justify-center group">
                    <User className="h-8 w-8 sm:h-10 sm:w-10 text-navy/20 group-hover:text-navy transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-navy mb-2">
                    {contact.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mb-8 leading-relaxed px-4">
                    {contact.role}
                  </p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-navy transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    +91 {contact.phone}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Committees;
