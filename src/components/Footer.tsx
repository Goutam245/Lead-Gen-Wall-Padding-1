import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Products', href: '#gallery' },
    { label: 'Case Studies', href: '#testimonials' },
    { label: 'Certifications', href: '#specs' },
    { label: 'Contact', href: '#contact' },
  ];

  const resources = [
    { label: 'Installation Guide', href: '#' },
    { label: 'Maintenance Tips', href: '#' },
    { label: 'Safety Standards', href: '#specs' },
    { label: 'Download Brochure', href: '#' },
    { label: 'Request Sample', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-display font-bold">
                <span className="text-secondary">SAFE</span>WALL
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              British Safety Engineering Since 2003. Protecting athletes and elevating performance across the UK.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+441onal234567890" className="flex items-start gap-3 text-white/70 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>01onal 234 567890</span>
                </a>
              </li>
              <li>
                <a href="mailto:enquiries@safewalluk.com" className="flex items-start gap-3 text-white/70 hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>enquiries@safewalluk.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  SAFEWALL UK Ltd<br />
                  Manchester, M1 1AA<br />
                  United Kingdom
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <div className="text-sm text-white/70 mb-1">Business Hours</div>
              <div className="text-white font-medium">Mon - Fri: 8:00 AM - 6:00 PM GMT</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} Balco Global. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
            
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Made with pride in the UK
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
