import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfoSection() {
  const contactInfo = [
    { icon: HiOutlineMail, label: "Email", value: "tbustard@unb.ca" },
    { icon: HiOutlinePhone, label: "Phone", value: "(613) 985-1223" },
    { icon: HiOutlineLocationMarker, label: "Location", value: "Toronto, Ontario, Canada" },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background - inherits Apple grey from parent */}
      
      <div className="container-width">
        <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Contact
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project or opportunity? I'd love to hear from you.
            </p>
          </div>

        {/* Contact Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="relative" data-testid={`contact-card-${index}`}>
              <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{info.label}</h3>
                  <p className="text-base font-semibold text-primary">{info.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}