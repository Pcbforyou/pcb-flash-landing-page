import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-circuit-gray text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-tech-green mb-6">PCB FOR YOU</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's fastest PCB design and manufacturing company. We deliver high-quality 
              PCBs with lightning-fast turnaround times at affordable prices.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-tech-green text-tech-green hover:bg-tech-green hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-tech-green text-tech-green hover:bg-tech-green hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-tech-green text-tech-green hover:bg-tech-green hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-tech-green text-tech-green hover:bg-tech-green hover:text-white">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">PCB Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">PCB Manufacturing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">PCB Assembly</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">Prototyping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">Volume Production</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">Testing & QC</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-tech-green mr-3" />
                <div>
                  <p className="text-white font-medium">+91 9876543210</p>
                  <p className="text-gray-300 text-sm">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-tech-green mr-3" />
                <div>
                  <p className="text-white font-medium">info@pcbforyou.com</p>
                  <p className="text-gray-300 text-sm">Response in 2 hours</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-tech-green mr-3" />
                <div>
                  <p className="text-white font-medium">Mumbai, Maharashtra</p>
                  <p className="text-gray-300 text-sm">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 PCB FOR YOU. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-300">
                <span className="text-tech-green font-medium">2 Days</span> Delivery Guarantee
              </div>
              <div className="text-sm text-gray-300">
                <span className="text-tech-green font-medium">24/7</span> Support
              </div>
              <div className="text-sm text-gray-300">
                <span className="text-tech-green font-medium">99.8%</span> Quality Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circuit Pattern Background */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 100">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0,20 L40,20 M20,0 L20,40" stroke="currentColor" strokeWidth="1" className="text-tech-green"/>
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-tech-green"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;