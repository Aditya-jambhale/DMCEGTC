import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building, MapPin } from "lucide-react";

const Speakers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Keynote Speakers
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Learn from distinguished industry leaders and experts
            </p>
          </div>
        </div>
      </section>

      {/* Featured Speaker */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Featured Speaker"
            subtitle="We are honored to have industry experts share their insights"
          />

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-elegant overflow-hidden">
              <div className="bg-gradient-hero h-32" />
              <CardContent className="p-6 sm:p-8 -mt-16 relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-secondary flex items-center justify-center mx-auto border-4 border-card shadow-lg">
                  <User className="h-16 w-16 text-secondary-foreground" />
                </div>
                <div className="text-center mt-6">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Dr. Sayad Munir
                  </h2>
                  <p className="text-lg font-medium text-primary mb-2">
                    Asst. Vice President
                  </p>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Building className="h-4 w-4" />
                    <span>Reliance Jio</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Ghansoli, Navi Mumbai</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Speakers Coming Soon */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              More Speakers Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8">
              We are in the process of confirming additional distinguished
              speakers for DMCE-GTC 2026. Stay tuned for updates on our lineup of
              industry experts and academic leaders.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <User className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                    <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2" />
                    <div className="h-3 bg-muted rounded w-1/2 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
