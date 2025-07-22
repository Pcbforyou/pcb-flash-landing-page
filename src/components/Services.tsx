import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Cog, Wrench, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "PCB Designing",
      description: "Professional schematic design and PCB layout with industry-standard tools and best practices.",
      features: ["Multi-layer PCB Design", "High-Speed Design", "RF & Analog Design", "Component Placement"],
      color: "tech-green"
    },
    {
      icon: Cog,
      title: "PCB Manufacturing",
      description: "State-of-the-art manufacturing facilities ensuring precision and quality in every board.",
      features: ["Quick Prototyping", "Volume Production", "Quality Testing", "Multiple Substrates"],
      color: "deep-blue"
    },
    {
      icon: Wrench,
      title: "Assembly Support",
      description: "Complete assembly services with expert technicians and automated placement systems.",
      features: ["SMT Assembly", "Through-hole Assembly", "Testing & QC", "Packaging & Shipping"],
      color: "tech-green"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial design concepts to final assembly, we provide comprehensive PCB solutions 
            tailored to your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/50"
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 rounded-full bg-${service.color}/10 mb-4 mx-auto`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <span className="text-primary font-semibold">✨ Complete PCB Solutions Under One Roof</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No need to coordinate with multiple vendors. We handle everything from design to delivery, 
            ensuring seamless communication and faster turnaround times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;