import React from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Phone, MapPin, User, Mail } from "lucide-react";

const ContactCard = ({ name, role, phone, email, icon: Icon }: { name: string; role: string; phone?: string; email?: string; icon: any }) => (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon size={24} />
            </div>
            <div>
                <h3 className="font-heading text-lg font-bold text-navy mb-1 group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-sm text-slate-500 mb-3 font-medium uppercase tracking-wider">{role}</p>

                {phone && (
                    <a href={`tel:${phone}`} className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors mb-2">
                        <Phone size={16} />
                        <span className="text-sm">{phone}</span>
                    </a>
                )}

                {email && (
                    <a href={`mailto:${email}`} className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
                        <Mail size={16} />
                        <span className="text-sm">{email}</span>
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Contact = () => {
    return (
        <Layout>
            <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <SectionHeader
                            title="Contact Us"
                            subtitle="Get in touch with our team for any queries regarding the conference."
                        />
                    </Reveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                        {/* Contact Details Column */}
                        <div className="space-y-12">
                            {/* Official Representatives */}
                            <Reveal delay={100}>
                                <div>
                                    <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                                        <span className="h-8 w-1 bg-primary rounded-full" />
                                        Official Representatives
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <ContactCard
                                            name="Dr. S. A. Mithbavkar"
                                            role="Assistant Professor, Dept of Comp. Engg."
                                            phone="+91 7715850099"
                                            icon={User}
                                        />
                                        <ContactCard
                                            name="Dr. J. R. Nandwalkar"
                                            role="Assistant Professor, Dept of Comp. Engg."
                                            phone="+91 9833373994"
                                            icon={User}
                                        />
                                    </div>
                                </div>
                            </Reveal>

                            {/* Student Representatives */}
                            <Reveal delay={200}>
                                <div>
                                    <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                                        <span className="h-8 w-1 bg-primary rounded-full" />
                                        Student Representatives
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <ContactCard
                                            name="Aditya Jambhale"
                                            role="Student Representative"
                                            phone="+91 8108765751"
                                            icon={User}
                                        />
                                        <ContactCard
                                            name="Rupesh Yadav"
                                            role="Student Representative"
                                            phone="+91 7498 467 001"
                                            icon={User}
                                        />
                                    </div>
                                </div>
                            </Reveal>

                            {/* Address Section */}
                            <Reveal delay={300}>
                                <div className="bg-navy text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                        <MapPin size={120} />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <span className="h-8 w-1 bg-secondary rounded-full" />
                                        Our Location
                                    </h2>
                                    <p className="text-slate-300 mb-4 leading-relaxed max-w-md">
                                        Plot No. 98, Sector-3, Airoli, Navi Mumbai 400708, Maharashtra, India
                                    </p>
                                    <div className="flex items-center gap-4 text-secondary font-semibold">
                                        <MapPin size={20} />
                                        <span>Airoli, Navi Mumbai</span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Map Column */}
                        <Reveal delay={400}>
                            <div className="h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                             
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7997265244603!2d72.99319562466724!3d19.160241949323503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf4b7a73c0ab%3A0xcfeb8b94503749f3!2sDatta%20Meghe%20College%20Of%20Engineering%2C%20Sector%203%2C%20Airoli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400708!5e0!3m2!1sen!2sin!4v1769999587232!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Datta Meghe College of Engineering Location"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
