import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';


const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { label: 'AI Solutions', path: '/ai-solutions' },
        { label: 'Case Studies', path: '/' },
        { label: 'Industries', path: '/industries' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Security', path: '/security' },
        { label: 'Compliance', path: '/compliance' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com' },
    { name: 'Youtube', icon: 'Youtube', url: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
                <Icon name="Zap" size={24} color="var(--color-primary)" />
              </div>
              <span className="text-xl font-headline font-bold text-primary">
                KritiBodh
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Transforming businesses through intelligent AI solutions. 
              Making complex technology accessible and practical for enterprise success.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="font-headline font-semibold text-foreground mb-4">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.path}>
                    <Link
                      to={link?.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} KritiBodh Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;