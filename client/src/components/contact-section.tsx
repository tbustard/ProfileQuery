import { useState } from "react";
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
  const { toast } = useToast();

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
    <section id="contact" className="apple-section-alt">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="large-title text-foreground mb-4">Get In Touch</h2>
          <p className="callout text-secondary max-w-2xl mx-auto">
            Ready to discuss your next project or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="large-title text-foreground mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group transition-all duration-300 hover:scale-105" data-testid={`contact-info-${index}`}>
                  <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mr-5 transition-all duration-300">
                    <info.icon className="text-primary w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <Card className="apple-card apple-hover border-0">
            <CardContent className="p-12">
              <h3 className="text-xl font-semibold text-foreground mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="What's this about?"
                    required
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project or opportunity..."
                    className="h-32 resize-none"
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full"
                  data-testid="button-send"
                >
                  {contactMutation.isPending ? (
                    <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <IoSend className="mr-2 h-4 w-4" />
                  )}
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
