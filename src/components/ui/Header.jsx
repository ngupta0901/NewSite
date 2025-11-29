import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/ai-solutions', label: 'AI Solutions' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-custom border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/homepage" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
              <Icon name="Cpu" strokeWidth={1} size={36} color="var(--color-primary)" />
            </div>
            <span className="text-xl font-headline font-bold text-primary">
              KritiBodh Solutions
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="default" size="sm" className="btn-gradient">
              Get Started
            </Button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              color="var(--color-foreground)" 
            />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-custom py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {item?.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="default" size="sm" fullWidth className="btn-gradient">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;