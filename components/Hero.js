import { useEffect, useState } from 'react';
import siteContent from '../data/siteContent';

export default function Hero() {
  const [binaryText, setBinaryText] = useState('');

  useEffect(() => {
    const generateBinary = () => {
      const length = 500;
      let binary = '';
      for (let i = 0; i < length; i++) {
        binary += Math.random() > 0.5 ? '1' : '0';
      }
      return binary;
    };
    setBinaryText(generateBinary());
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
        <div className="binary-text text-green-500 break-all max-w-7xl px-4">
          {binaryText}
        </div>
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="animate-fade-in">
          <div className="text-6xl mb-6 animate-pulse-slow">{siteContent.hero.greetingEmoji}</div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {siteContent.hero.headlinePrefix} <span className="gradient-text">{siteContent.hero.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            {siteContent.hero.subtitle}
          </p>
          
          <div className="binary-text text-green-500 mb-8">
            0010110100111011010000101001110110011101
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={siteContent.hero.ctas.contactHref} className="btn-primary">
              {siteContent.hero.ctas.contactLabel}
            </a>
            <a href={siteContent.hero.ctas.projectsHref} className="px-6 py-3 border-2 border-green-600 text-green-500 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-all duration-300">
              {siteContent.hero.ctas.projectsLabel}
            </a>
            {siteContent.hero.ctas.resumeHref && siteContent.hero.ctas.resumeHref !== '#' ? (
              <a
                href={siteContent.hero.ctas.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-700 text-gray-200 rounded-lg font-medium hover:border-green-500 hover:text-green-400 transition-all duration-300"
              >
                {siteContent.hero.ctas.resumeLabel}
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-16 flex justify-center animate-slide-up">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-green-500 overflow-hidden shadow-2xl shadow-green-500/20">
              <div className="w-full h-full bg-gradient-to-br from-green-900 to-gray-900 flex items-center justify-center text-6xl">
                👤
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping opacity-20"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}