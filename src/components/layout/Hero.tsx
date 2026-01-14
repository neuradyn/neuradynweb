import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../assets/hero-bg.png';

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
                <img
                    src={heroBg}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
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
                        Enterprise-Grade Automation for Marketing, HR, Finance, and Support.
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md mb-10">
                        From AI-driven ad insights and content factories to end-to-end employee lifecycle management. We build systems that think, adapt, and scale.
                    </p>

                    <button
                        onClick={scrollToServices}
                        className="group px-8 py-3 bg-royal-blue hover:bg-blue-600 text-white rounded-full transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-blue-500/25"
                    >
                        View Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
