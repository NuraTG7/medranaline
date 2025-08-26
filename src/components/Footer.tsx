import { Mail, MapPin, Instagram, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Details of Academic Secretary */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academic Secretary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>acadsec@kmcchennai.edu.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>+91 9876543211</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <div>
                <p>Govt. Kilpauk Medical College</p>
                <p>Poonamallee High Road</p>
                <p>Kilpauk, Chennai - 600010</p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Instagram className="h-4 w-4" />
                <a href="#" className="hover:text-violet-light transition-colors">
                  @medrenaline_kmc
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <a href="#" className="hover:text-violet-light transition-colors">
                  medrenaline2025@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4" />
                <a href="#" className="hover:text-violet-light transition-colors">
                  WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Medrenaline'25 - Govt. Kilpauk Medical College. All rights reserved.</p>
          <p className="mt-2 text-violet-light">Feel the rush!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;