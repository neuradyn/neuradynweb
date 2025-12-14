import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-heading font-bold tracking-tight">
                                <span className="text-slate-900">Neura</span>
                                <span className="text-royal-blue">Dyn</span>
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            Enterprise-grade automation systems that think, adapt, and scale. Built for the future of work.
                        </p>
                        <p className="text-xs text-slate-400 mt-8">
                            © 2025 NeuraDyn AI Systems. All rights reserved.
                        </p>
                    </div>

                    {/* Column 2: Solutions */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 font-heading">Solutions</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li>
                                <a
                                    href="/#marketing-section"
                                    onClick={(e) => {
                                        const element = document.getElementById('marketing-section');
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="hover:text-royal-blue transition-colors cursor-pointer block"
                                >
                                    Marketing Automation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#finance-section"
                                    onClick={(e) => {
                                        const element = document.getElementById('finance-section');
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="hover:text-royal-blue transition-colors cursor-pointer block"
                                >
                                    Finance Operation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#chatbot-section"
                                    onClick={(e) => {
                                        const element = document.getElementById('chatbot-section');
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="hover:text-royal-blue transition-colors cursor-pointer block"
                                >
                                    Chatbot Customization
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#hr-section"
                                    onClick={(e) => {
                                        const element = document.getElementById('hr-section');
                                        if (element) {
                                            e.preventDefault();
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="hover:text-royal-blue transition-colors cursor-pointer block"
                                >
                                    HR Automation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 font-heading">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link to="/about" className="hover:text-royal-blue transition-colors cursor-pointer block">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-royal-blue transition-colors cursor-pointer block">Contact Support</Link></li>
                            <li><Link to="/demo" className="hover:text-royal-blue transition-colors cursor-pointer block">Book a Demo</Link></li>
                            <li><Link to="/privacy" className="hover:text-royal-blue transition-colors cursor-pointer block">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-royal-blue transition-colors cursor-pointer block">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
