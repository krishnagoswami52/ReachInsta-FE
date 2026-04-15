import { Link } from 'react-router-dom';
import { Zap, Shield, Lock, Globe, XCircle } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
  ],
  company: [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  legal: [
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Refund Policy', path: '/refund' },
  ],
};

const trustBadges = [
  { icon: Shield, text: 'Secure Payments' },
  { icon: Lock, text: 'GDPR Ready' },
  { icon: Globe, text: 'Trusted by Creators' },
  { icon: XCircle, text: 'Cancel Anytime' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 pb-12 border-b border-border">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-4 h-4 text-[#FF4500]" strokeWidth={1.5} />
              <span className="text-sm">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4500] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-outfit font-bold text-xl tracking-tight">ReachInsta</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Competitor intelligence for Instagram creators. Data-driven content strategies.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-[#FF4500] transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-[#FF4500] transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-[#FF4500] transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 ReachInsta. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Secure payments powered by Paddle
          </p>
        </div>
      </div>
    </footer>
  );
}
