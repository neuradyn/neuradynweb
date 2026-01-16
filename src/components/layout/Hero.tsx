import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Hero = () => {
    const scrollToServices = () => {
        const element = document.getElementById('solutions-section'); // Start at the first pillar
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://pub-8c26ff9ad2d341368b81038803388707.r2.dev/Untitled%20video%20-%20Made%20with%20Clipchamp%20(15).mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay: Fade to Black at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050510]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6 tracking-tight text-white drop-shadow-lg">
                        Your Time Is Valuable. Let's Automate the Rest.
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md mb-10">
                        We build custom AI ecosystems that adapt to your existing workflows. Eliminate manual tasks, reduce operational costs, and scale without increasing headcount.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={scrollToServices}
                            className="group px-8 py-3 bg-royal-blue hover:bg-blue-600 text-white rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-500/25"
                        >
                            See Our Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full transition-all backdrop-blur-sm"
                        >
                            Book a Strategy Call
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
