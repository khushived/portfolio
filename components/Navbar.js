import { useState, useEffect } from 'react';
import Link from 'next/link';
import siteContent from '../data/siteContent';
import VisitCounter from './VisitCounter';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom px-6 py-4 flex justify-between items-center gap-4">
        <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
          {siteContent.profile.name}
        </Link>
        
        <div className="flex gap-4 md:gap-8 overflow-x-auto max-w-[52vw] md:max-w-none whitespace-nowrap">
          <Link href="/about" className="text-gray-300 hover:text-green-500 transition-colors">
            About
          </Link>
          <Link href="/skills" className="text-gray-300 hover:text-green-500 transition-colors">
            Skills
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-green-500 transition-colors">
            Projects
          </Link>
          <Link href="/achievements" className="text-gray-300 hover:text-green-500 transition-colors">
            Achievements
          </Link>
          <Link href="/experience" className="text-gray-300 hover:text-green-500 transition-colors">
            Experience
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-green-500 transition-colors">
            Contact
          </Link>
        </div>

        <VisitCounter />
      </div>
    </nav>
  );
}