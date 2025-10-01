'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import conditions from '@/lib/conditions';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 justify-between">
          {/* Logo */}
          <div className="relative z-10 flex px-2 lg:px-0">
            <Link href="/" className="flex shrink-0 items-center gap-2.5 no-underline">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#0e3a75]">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 13c3 3 7 3 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-bold text-[#0e3a75] text-lg">AfterDerm</span>
                <span className="text-xs text-gray-500 hidden sm:block">Dermatologist recommended</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="relative z-10 flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-600"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`size-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`size-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Conditions" className="hidden lg:flex lg:space-x-4 lg:py-2 lg:overflow-x-auto">
          {conditions.map(c => {
            const href = `/conditions/${c.slug}`;
            const isActive = pathname === href || pathname === `/conditions/${c.slug}/`;
            return (
              <Link
                key={c.slug}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                {c.shortTitle || c.title}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav aria-label="Conditions" className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {conditions.map(c => {
              const href = `/conditions/${c.slug}`;
              const isActive = pathname === href || pathname === `/conditions/${c.slug}/`;
              return (
                <Link
                  key={c.slug}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {c.shortTitle || c.title}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
