import { Mail, MapPin, Instagram, MessageSquare, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <div>
                <p>Kilpauk Medical College</p>
                <p>822, Poonamallee High Rd, Kilpauk</p>
                <p>Chennai, Tamil Nadu 600010</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Naresh R : 8939276895</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Mahashwethha Y : 7448833936</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:studentcouncilkmc@gmail.com"
                  className="hover:text-violet-light transition-colors"
                >
                  studentcouncilkmc@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://instagram.com/medrenaline.kmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-light transition-colors"
                >
                  @medrenaline.kmc
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:medrenaline.2025@gmail.com"
                  className="hover:text-violet-light transition-colors"
                >
                  medrenaline.2025@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4" />
                <a
                  href="https://chat.whatsapp.com/Lly7U7rZaXYD8LnRpZeITM?mode=ems_copy_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-light transition-colors"
                >
                  WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Govt Kilpauk Medical College and Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
