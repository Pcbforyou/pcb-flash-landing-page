import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Cog, Truck, ArrowRight } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    icon: Upload,
    step: "01",
    title: "Submit Your Files",
    description: "Upload your Gerber files, schematics, or design requirements through our secure portal.",
    details: ["Gerber files", "BOM (Bill of Materials)", "Assembly drawings", "Special requirements"]
  }, {
    icon: Cog,
    step: "02",
    title: "We Design & Manufacture",
    description: "Our expert team reviews, designs (if needed), and manufactures your PCBs with precision.",
    details: ["Design review & optimization", "DFM analysis", "Production planning", "Quality control testing"]
  }, {
    icon: Truck,
    step: "03",
    title: "Fast Delivery",
    description: "Your high-quality PCBs are manufactured and delivered to your doorstep within 2 days.",
    details: ["Express manufacturing", "Quality packaging", "Real-time tracking", "Secure delivery"]
  }];
  return <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined 3-step process ensures you get your PCBs faster than ever, 
            without compromising on quality or service.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Connection Lines for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2 z-0"></div>
            
            {steps.map((step, index) => <Card key={index} className="relative z-10 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/50">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2 mb-8 text-sm">
                    {step.details.map((detail, idx) => <li key={idx} className="flex items-center justify-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {detail}
                      </li>)}
                  </ul>

                  {/* Arrow for Flow (except last step) */}
                  {index < steps.length - 1 && <div className="lg:hidden flex justify-center mt-8">
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                    </div>}
                </CardContent>
              </Card>)}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their PCB needs. 
                Upload your files now and get your quote instantly!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                  Upload Gerber Files
                  <Upload className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:bg-white px-8 py-6 text-lg font-semibold text-[#0372f9]">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;