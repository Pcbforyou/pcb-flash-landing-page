import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import heroPcb from "@/assets/hero-pcb.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroPcb})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 via-deep-blue/70 to-tech-green/20"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_40%,transparent_20%,rgba(0,200,83,0.1)_21%,rgba(0,200,83,0.1)_40%,transparent_41%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center bg-tech-green/20 backdrop-blur-sm border border-tech-green/30 rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 mr-2 text-tech-green" />
            <span className="text-tech-green font-medium">India's Fastest PCB Solution</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get Your <span className="text-tech-green">PCB Design</span>
            <br />
            in Just <span className="text-tech-green">2 Days!</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">India's fastest PCB designing company. From concept to design – we make it happen with lightning speed and uncompromising quality.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-tech-green hover:bg-tech-green-dark text-white px-8 py-6 text-lg font-semibold group">
              Submit Gerber Files
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-deep-blue px-8 py-6 text-lg font-semibold text-[#064cff]">
              Get Free Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Clock className="w-8 h-8 text-tech-green mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold">2 Days</div>
                <div className="text-sm text-gray-300">Design Time</div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="w-8 h-8 text-tech-green mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold">99.8%</div>
                <div className="text-sm text-gray-300">Quality Rate</div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Zap className="w-8 h-8 text-tech-green mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-gray-300">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 100">
          <path d="M0,50 Q300,10 600,50 T1200,50" stroke="currentColor" fill="none" strokeWidth="2" className="text-tech-green animate-pulse" />
          <path d="M0,70 Q300,30 600,70 T1200,70" stroke="currentColor" fill="none" strokeWidth="1" className="text-tech-green/50 animate-pulse" style={{
          animationDelay: '0.5s'
        }} />
        </svg>
      </div>
    </section>;
};
export default Hero;