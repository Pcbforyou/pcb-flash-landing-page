import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your PCB project? Contact us today for a free quote and consultation. 
            Our experts are here to help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Phone className="w-5 h-5 mr-3" />
                  Call Us Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground mb-2">+91 9025487664</p>
                <p className="text-muted-foreground mb-4">Available 24/7 for urgent projects</p>
                <Button className="w-full bg-primary hover:bg-tech-green-dark">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Quick support via WhatsApp</p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Mail className="w-5 h-5 mr-3" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-2">info@pcbforyou.com</p>
                <p className="text-muted-foreground mb-4">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="w-5 h-5 mr-3" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-2">Mumbai, Maharashtra</p>
                <p className="text-muted-foreground">India</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Get Your Free Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2 hours with a detailed quote.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                    <Input placeholder="Enter your full name" className="border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company Name</label>
                    <Input placeholder="Your company name" className="border-border focus:border-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <Input type="email" placeholder="your.email@company.com" className="border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                    <Input type="tel" placeholder="+91 9876543210" className="border-border focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Service Required</label>
                  <select className="w-full p-3 border border-border rounded-md bg-background focus:border-primary focus:outline-none">
                    <option>Select a service</option>
                    <option>PCB Design Only</option>
                    <option>PCB Manufacturing Only</option>
                    <option>PCB Assembly Only</option>
                    <option>Complete PCB Solution</option>
                    <option>Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Project Details</label>
                  <Textarea 
                    placeholder="Please describe your PCB requirements, specifications, quantity, timeline, and any special requirements..."
                    className="min-h-[120px] border-border focus:border-primary resize-none"
                  />
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-center text-primary mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">Quick Response Guarantee</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 2 hours during business hours. 
                    For urgent projects, call us directly for immediate assistance.
                  </p>
                </div>

                <Button className="w-full bg-primary hover:bg-tech-green-dark text-lg py-6">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message & Get Quote
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Have Gerber Files Ready?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Skip the form and upload your files directly for an instant quote. 
              Our automated system will analyze your files and provide pricing immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                Upload Gerber Files
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;