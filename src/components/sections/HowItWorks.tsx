import { motion } from 'framer-motion';
import { Search, PenTool, Network } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Discovery & Analysis",
        desc: "We map your current workflows and technical infrastructure.",
        icon: Search
    },
    {
        id: "02",
        title: "Custom Design",
        desc: "We build automation architectures tailored to your unique goals.",
        icon: PenTool
    },
    {
        id: "03",
        title: "Integration & Training",
        desc: "We connect to your existing stack and train your team.",
        icon: Network
    }
];

const HowItWorks = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-deep-void">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-starlight-white">
                        Our <span className="text-royal-blue">Consulting Approach</span>
                    </h2>
                    <p className="text-mist-grey max-w-2xl mx-auto text-lg font-light">
                        We don't just sell software. We design, build, and integrate custom automation systems that fit your business perfectly.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <div className="glass-card p-8 rounded-2xl relative z-10 hover:border-royal-blue/50 transition-all duration-300 h-full bg-[#050510]">
                                    <div className="w-12 h-12 bg-royal-blue/20 rounded-full flex items-center justify-center mb-6 text-royal-blue group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div className="absolute top-8 right-8 text-4xl font-bold text-white/5 font-mono">
                                        {step.id}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-starlight-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-mist-grey leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
