import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4 text-gold">
              DMCE-GTC 2026
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Global Tech Convergence: International Conference on Computing and
              IT Advancements 2026
            </p>
            <p className="text-sm text-primary-foreground/80 mt-2">
              In association with Computer Society of India (CSI) Student Branch
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/call-for-papers"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link
                  to="/important-dates"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Important Dates
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/paper-submission"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Paper Submission
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gold" />
                <div>
                  <p className="text-primary-foreground/80">Dr. S. A. Mithbavkar</p>
                  <p className="text-primary-foreground/60">7715850099</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gold" />
                <div>
                  <p className="text-primary-foreground/80">Dr. J. R. Nandwalkar</p>
                  <p className="text-primary-foreground/60">9833373994</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Venue */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">
              Venue
            </h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <div className="text-primary-foreground/80">
                <p className="font-medium">Datta Meghe College of Engineering</p>
                <p>Airoli, Navi Mumbai</p>
                <p className="text-primary-foreground/60 mt-1">
                  NAAC 'A' Grade | NBA Accredited (Civil Engg. & Chem Engg.)
                </p>
                <p className="text-primary-foreground/60">
                  Affiliated to University of Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © 2026 DMCE-GTC. Department of Computer Engineering, DMCE Airoli.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
