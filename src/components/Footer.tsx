import { Linkedin, Github, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-sm opacity-50" />
              </div>
              <span className="font-orbitron font-bold text-xl gradient-text">DSSA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Data Science Student Association - Empowering the next generation of data scientists through innovation and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-rajdhani font-semibold text-lg text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Events', path: '/events' },
                { name: 'Workshops', path: '/workshops' },
                { name: 'Committee', path: '/committee' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-rajdhani font-semibold text-lg text-foreground">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>dssa@college.edu</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Engineering College, Tech City</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-rajdhani font-semibold text-lg text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/dssa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/50 rounded-full flex items-center justify-center border border-primary/20 hover:border-primary/50 transition-all duration-300 neon-glow group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/dssa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/50 rounded-full flex items-center justify-center border border-secondary/20 hover:border-secondary/50 transition-all duration-300 neon-glow group"
              >
                <Github className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:dssa@college.edu"
                className="w-10 h-10 bg-card/50 rounded-full flex items-center justify-center border border-accent/20 hover:border-accent/50 transition-all duration-300 neon-glow group"
              >
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Data Science Student Association. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="/feedback"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Feedback
              </Link>
              <span className="text-muted-foreground text-sm">•</span>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;