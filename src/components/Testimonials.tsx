import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Suriya",
      company: "Mechimed technologies Pvt Ltd",
      role: "COO",
      rating: 5,
      text: "PCB FOR YOU delivered our PCB design in just 2 days! The quality was exceptional and their team was incredibly responsive throughout the process.",
      avatar: "SU"
    },
    {
      name: "Karthikesh",
      company: "KKR Robotics Pvt Ltd",
      role: "Founder",
      rating: 5,
      text: "Outstanding service! They helped optimize our design for manufacturability and saved us both time and money. Highly recommend for any PCB needs.",
      avatar: "KA"
    },
    {
      name: "Santhosh",
      company: "Spinacle Technologies Pvt Ltd",
      role: "CEO",
      rating: 5,
      text: "As a growing tech company, we needed fast and reliable PCB solutions. PCB FOR YOU exceeded our expectations with their speed and quality. Game changer!",
      avatar: "SA"
    },
    {
      name: "Sanjay",
      company: "Agri CMSD",
      role: "Founder",
      rating: 5,
      text: "Their design services are top-notch. From layout to optimization, everything was perfect. The 2-day design turnaround helped us meet our critical deadlines.",
      avatar: "SJ"
    }
  ];

  const partners = [
    "Mechimed Technologies", "KKR Robotics", "Nsquare Bros", "Spinacle Technologies", "Agri CMSD", "Quazr Motors"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-background via-muted/20 to-primary/5"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trusted Partners Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trusted by Leading Companies
            </h3>
            <p className="text-muted-foreground">
              Join hundreds of companies who rely on our PCB solutions for their critical projects.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="text-lg font-bold text-primary">
                    {partner.substring(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">{partner}</div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.8%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;