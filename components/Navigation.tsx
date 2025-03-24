"use client"

// components/Navigation.tsx
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Sun, Moon, Search } from 'lucide-react';
import { useTheme } from 'next-themes'; 

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { 
    label: 'Projects', 
    href: '/#projects',
    children: [
      { label: 'Web Development', href: '/#projects' },
      { label: 'Mobile Apps', href: '/#projects' },
      { label: 'Design Work', href: '/#projects' }
    ]
  },
  { label: 'Blog', href: '/' },
  { label: 'Contact', href: '/#contact' }
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchInputRef.current?.value;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setSearchOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Search overlay */}
      <div className={`fixed inset-0 bg-white/95 dark:bg-gray-900/95 z-50 flex items-start pt-32 justify-center transition-all duration-300 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-full max-w-2xl px-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-full p-4 text-lg border-b-2 border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-blue-500 dark:text-white transition-all"
              aria-label="Search"
            />
            <button 
              type="button" 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <X className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>

      <nav 
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group" aria-label="Homepage">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text group-hover:from-blue-500 group-hover:to-purple-500 transition-all">Portfolio</span>
              </Link>
            </div>

            {/* Navigation for Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <div>
                      <button 
                        onClick={() => toggleDropdown(item.label)}
                        className={`px-3 py-2 rounded-md flex items-center transition-all text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          isActive(item.href) 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                        }`}
                        aria-expanded={openDropdown === item.label}
                        aria-controls={`dropdown-${item.label}`}
                      >
                        {item.label}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>

                      {/* Desktop Dropdown */}
                      <div 
                        id={`dropdown-${item.label}`}
                        className={`absolute left-0 mt-2 w-56 rounded-md overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 transition-all duration-200 ${
                          openDropdown === item.label ? 'opacity-100 translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.children.map((child) => (
                            <Link 
                              key={child.label}
                              href={child.href}
                              className={`block w-full text-left px-4 py-2 text-sm ${
                                isActive(child.href)
                                  ? 'bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        isActive(item.href) 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all"
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Main menu"
                >
                  <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
                  {isMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-xl z-50 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="pt-20 pb-6 px-6 h-full overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-200 dark:border-gray-800 pb-2 last:border-b-0">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`w-full flex justify-between items-center py-3 rounded-md text-base font-medium ${
                          isActive(item.href)
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                        }`}
                        aria-expanded={openDropdown === item.label}
                        aria-controls={`mobile-dropdown-${item.label}`}
                      >
                        {item.label}
                        <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      <div 
                        id={`mobile-dropdown-${item.label}`}
                        className={`transition-all duration-300 ease-in-out space-y-1 ml-4 ${
                          openDropdown === item.label ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block py-2 rounded-md text-sm font-medium ${
                              isActive(child.href)
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-3 rounded-md text-base font-medium ${
                        isActive(item.href)
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile theme toggle */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={toggleTheme}
                  className="flex items-center w-full py-3 text-base font-medium text-gray-700 dark:text-gray-200"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-5 w-5 mr-3" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 mr-3" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;