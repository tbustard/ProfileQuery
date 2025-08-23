import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.getAttribute('data-animate-id');
          if (elementId) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(elementId);
              }
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all animatable elements
    const elementsToObserve = sectionRef.current?.querySelectorAll('[data-animate-id]');
    elementsToObserve?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (elementId: string, delay: number = 0) => {
    const isVisible = visibleElements.has(elementId);
    return `transition-all duration-1000 ease-out ${delay > 0 ? `delay-${delay}` : ''} ${
      isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-8 scale-95'
    }`;
  };

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    { icon: HiOutlineMail, label: "Email", value: "tbustard@unb.ca" },
    { icon: HiOutlinePhone, label: "Phone", value: "(613) 985-1223" },
    { icon: HiOutlineLocationMarker, label: "Location", value: "Toronto, Ontario, Canada" },
  ];


  return (
    <section id="contact" ref={sectionRef} className="apple-section-alt">
      <div className="container-width">
        {/* Header Section - Apple's content-first approach */}
        <div 
          className={`text-center mb-20 ${getAnimationClass('contact-header')}`}
          data-animate-id="contact-header"
        >
          <h2 className="large-title text-foreground mb-4 hover:text-primary transition-colors duration-500 ease-out cursor-default">Get In Touch</h2>
          <p className="callout text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-500 ease-out cursor-default">
            Ready to discuss your next project or opportunity? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards Grid - Apple-style asymmetrical layout */}
        <div 
          className={`grid lg:grid-cols-3 gap-8 mb-16 ${getAnimationClass('contact-cards')}`}
          data-animate-id="contact-cards"
        >
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className={`apple-card border-0 text-center hover:shadow-2xl hover:scale-105 hover:bg-white/90 transition-all duration-500 ease-out group cursor-pointer ${getAnimationClass(`contact-card-${index}`, index * 100)}`} 
              data-testid={`contact-card-${index}`}
              data-animate-id={`contact-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{info.label}</h3>
                <p className="body-text text-muted-foreground group-hover:text-foreground transition-colors duration-300">{info.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Contact Form - Apple's hero card design */}
        <div 
          className={`max-w-4xl mx-auto ${getAnimationClass('contact-form')}`}
          data-animate-id="contact-form"
        >
          <Card className="apple-card border-0 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out group">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Form Info Section */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Send a Message</h3>
                    <p className="callout text-muted-foreground">
                      Whether you're looking to discuss investment opportunities, portfolio management, or potential collaboration, I'm here to help.
                    </p>
                  </div>
                  
                  {/* Quick Stats - Apple style */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="body-text text-muted-foreground">Typically responds within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="body-text text-muted-foreground">Available for consulting opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="body-text text-muted-foreground">Open to investment discussions</span>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="apple-label">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                          data-testid="input-name"
                          className="apple-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="apple-label">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          data-testid="input-email"
                          className="apple-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="apple-label">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="What's this about?"
                        required
                        data-testid="input-subject"
                        className="apple-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="apple-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell me about your project or opportunity..."
                        className="apple-input h-32 resize-none"
                        required
                        data-testid="input-message"
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full apple-button-primary text-lg h-14 font-semibold"
                        data-testid="button-send"
                      >
                        {contactMutation.isPending ? (
                          <AiOutlineLoading3Quarters className="mr-3 h-5 w-5 animate-spin" />
                        ) : (
                          <IoSend className="mr-3 h-5 w-5" />
                        )}
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Contact Methods - Apple style */}
        <div className="mt-16 text-center">
          <p className="body-text text-muted-foreground mb-6">
            Prefer a different approach? You can also reach out directly:
          </p>
          <div className="flex justify-center gap-8">
            <a 
              href="mailto:tbustard@unb.ca"
              className="inline-flex items-center gap-2 body-text text-primary hover:text-primary/80 transition-colors"
              data-testid="link-email-direct"
            >
              <HiOutlineMail className="w-4 h-4" />
              Email Direct
            </a>
            <a 
              href="tel:+16139851223"
              className="inline-flex items-center gap-2 body-text text-primary hover:text-primary/80 transition-colors"
              data-testid="link-phone-direct"
            >
              <HiOutlinePhone className="w-4 h-4" />
              Call Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
