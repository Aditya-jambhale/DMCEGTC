import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar } from "lucide-react";

const importantDates = [
  {
    event: "Online Paper Submission Starts",
    date: "1st February 2026",
    status: "upcoming",
  },
  {
    event: "Last date of paper submission",
    date: "27th March 2026",
    status: "upcoming",
  },
  {
    event: "Notification of Acceptance",
    date: "9th April 2026",
    status: "upcoming",
  },
  {
    event: "Author Registration and Camera Ready Paper Submission Starts",
    date: "10th April 2026",
    status: "upcoming",
  },
  {
    event: "Last date of Author Registration and Submission of Camera Ready Paper",
    date: "17th April 2026",
    status: "upcoming",
  },
  {
    event: "DMCE-GTC 2026 Conference",
    date: "28th - 29th April 2026",
    status: "upcoming",
  },
];

const ImportantDates = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Important Dates
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Mark your calendar for these key deadlines
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Conference Timeline"
            subtitle="Click on each event to learn more"
          />
          <div className="max-w-4xl mx-auto">
            <InteractiveTimeline />
          </div>
        </div>
      </section>

      {/* Dates Table */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <SectionHeader
            title="All Important Dates"
            subtitle="Complete schedule at a glance"
          />

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary hover:bg-primary">
                      <TableHead className="text-primary-foreground font-semibold py-4">
                        Event
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold text-right py-4">
                        Date
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {importantDates.map((item, index) => (
                      <TableRow
                        key={index}
                        className={
                          index === importantDates.length - 1
                            ? "bg-secondary/10"
                            : ""
                        }
                      >
                        <TableCell className="py-4">
                          <div className="flex items-center gap-3">
                            <Calendar
                              className={`h-4 w-4 flex-shrink-0 ${
                                index === importantDates.length - 1
                                  ? "text-secondary"
                                  : "text-primary"
                              }`}
                            />
                            <span
                              className={
                                index === importantDates.length - 1
                                  ? "font-semibold text-foreground"
                                  : "text-foreground"
                              }
                            >
                              {item.event}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell
                          className={`text-right py-4 font-medium ${
                            index === importantDates.length - 1
                              ? "text-secondary font-bold"
                              : "text-primary"
                          }`}
                        >
                          {item.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-background">
        <div className="container">
          <Card className="max-w-2xl mx-auto border-l-4 border-l-secondary">
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold text-foreground">Note:</span> All
                deadlines are at 11:59 PM IST (Indian Standard Time). Authors are
                advised to submit their papers well before the deadline to avoid
                last-minute technical issues.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ImportantDates;
