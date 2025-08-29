import { Card, CardContent } from "@/components/ui/card";
import { Zap, DollarSign, Award, Clock, Users, Shield } from "lucide-react";
const WhyChooseUs = () => {
  const reasons = [{
    icon: Zap,
    title: "Lightning Fast",
    description: "2-day design delivery guarantee with our streamlined design process",
    stat: "2 Days",
    statLabel: "Design Delivery"
  }, {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality or service",
    stat: "30% Less",
    statLabel: "Than Competitors"
  }, {
    icon: Award,
    title: "Premium Quality",
    description: "Premium manufacturing standards with 99.8% success rate",
    stat: "99.8%",
    statLabel: "Quality Rate"
  }, {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support and project tracking",
    stat: "24/7",
    statLabel: "Support Available"
  }, {
    icon: Users,
    title: "Expert Team",
    description: "15+ years of combined experience in PCB design and manufacturing",
    stat: "15+",
    statLabel: "Years Experience"
  }, {
    icon: Shield,
    title: "Guaranteed Results",
    description: "100% satisfaction guarantee with free revisions if needed",
    stat: "100%",
    statLabel: "Satisfaction"
  }];
  return <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">PCB FOR YOU</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine speed, quality, and affordability to deliver exceptional PCB solutions 
            that exceed your expectations every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background via-muted/20 to-primary/5 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {reason.description}
                </p>
                <div className="border-t border-border pt-6">
                  <div className="text-3xl font-bold text-primary mb-1">{reason.stat}</div>
                  <div className="text-sm text-muted-foreground font-medium">{reason.statLabel}</div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Trusted by <span className="text-primary">300+</span> Companies Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2 Days</div>
                <div className="text-sm text-muted-foreground">Design Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;