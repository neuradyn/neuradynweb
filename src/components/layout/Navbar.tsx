import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    // Pages that have a white background where we need dark text
    const isLightPage = ['/about', '/contact', '/demo'].includes(location.pathname);

    // Text color logic:
    // If scrolled (dark navbar) -> White
    // If NOT scrolled + Light Page -> Dark Slate
    // If NOT scrolled + Dark Page -> White
    const textColor = isScrolled || !isLightPage ? 'text-white' : 'text-slate-900';
    const subTextColor = isScrolled || !isLightPage ? 'text-white/80' : 'text-slate-600';
    const subTextColorHover = isScrolled || !isLightPage ? 'hover:text-white' : 'hover:text-royal-blue';
    const burgerColor = isScrolled || !isLightPage ? 'text-white' : 'text-slate-900';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: "Marketing Automation", href: "/marketing" },
        { name: "Finance Operation", href: "/finance" },
        { name: "Chatbot Customization", href: "/chatbot" },
        { name: "HR Automation", href: "/hr" }
    ];

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050510]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer" onClick={handleHomeClick}>
                    <span className="text-xl font-heading font-bold tracking-tight drop-shadow-md transition-colors">
                        <span className={textColor}>Neura</span>
                        <span className="text-royal-blue">Dyn</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        onClick={handleHomeClick}
                        className={`${subTextColor} ${subTextColorHover} transition-colors text-sm font-medium drop-shadow-sm`}
                    >
                        Home
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button
                            className={`flex items-center gap-1 ${subTextColor} ${subTextColorHover} transition-colors text-sm font-medium drop-shadow-sm focus:outline-none`}
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            Solutions <ChevronDown className="w-4 h-4" />
                        </button>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-64 bg-[#0B0F29] border border-white/10 rounded-xl shadow-xl overflow-hidden py-2"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.href}
                                            onClick={() => setServicesOpen(false)}
                                            className="block px-4 py-3 text-sm text-mist-grey hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        to="/about"
                        className={`${subTextColor} ${subTextColorHover} transition-colors text-sm font-medium drop-shadow-sm`}
                    >
                        About Us
                    </Link>

                    <Link
                        to="/contact"
                        className={`${subTextColor} ${subTextColorHover} transition-colors text-sm font-medium drop-shadow-sm`}
                    >
                        Contact
                    </Link>
                </div>

                {/* CTA Buttons - Minimalist */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/demo">
                        <button className="bg-royal-blue hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/25">
                            Get a Demo
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden ${burgerColor}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#050510] border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
                    >
                        <Link
                            to="/"
                            className="text-white text-lg font-medium py-2 border-b border-white/5"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                handleHomeClick();
                            }}
                        >
                            Home
                        </Link>

                        <div className="py-2 border-b border-white/5">
                            <span className="text-white/50 text-sm uppercase tracking-wider font-bold mb-2 block">Solutions</span>
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    to={service.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 text-white/80 hover:text-white pl-4"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>

                        <Link
                            to="/about"
                            className="text-white text-lg font-medium py-2 border-b border-white/5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/contact"
                            className="text-white text-lg font-medium py-2 border-b border-white/5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        <Link
                            to="/demo"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <button className="w-full py-3 bg-royal-blue text-white font-bold rounded-lg mt-4 shadow-lg active:scale-95 transition-all">
                                Get a Demo
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
