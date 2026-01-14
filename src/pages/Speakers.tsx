import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

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

      {/* Speakers Coming Soon */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Keynote Speakers"
            subtitle="Distinguished speakers will be announced soon"
          />

          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-muted-foreground">
              We are in the process of confirming distinguished keynote speakers from 
              industry and academia for DMCE-GTC 2026. Stay tuned for exciting announcements!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="shadow-elegant overflow-hidden">
                <div className="bg-gradient-hero h-20" />
                <CardContent className="p-6 -mt-10 relative">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto border-4 border-card shadow-lg">
                    <User className="h-10 w-10 text-secondary-foreground" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-medium text-primary">To Be Announced</p>
                    <p className="text-sm text-muted-foreground">Speaker details coming soon</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Interested in Speaking?
            </h2>
            <p className="text-muted-foreground">
              If you are interested in presenting your research or sharing your expertise 
              at DMCE-GTC 2026, please submit your paper through our paper submission portal.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
