import { motion } from 'framer-motion';
import { Upload, Cpu, Globe, Activity } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Connect",
        desc: "Securely link your CRM, Ad Accounts, or Finance software.",
        icon: Upload
    },
    {
        id: "02",
        title: "Select",
        desc: "Choose from pre-built workflows for Marketing, Finance, or Chatbots.",
        icon: Cpu
    },
    {
        id: "03",
        title: "Activate",
        desc: "Launch campaigns or automation agents instantly—no coding required.",
        icon: Globe
    },
    {
        id: "04",
        title: "Scale",
        desc: "Watch your efficiency soar with real-time optimization and reporting.",
        icon: Activity
    }
];

const HowItWorks = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-deep-void">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-starlight-white">
                        From Data to <span className="text-royal-blue">Action</span> in 4 Steps
                    </h2>
                    <p className="text-mist-grey max-w-2xl mx-auto text-lg font-light">
                        We've simplified the complex process of building enterprise AI into a streamlined workflow.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
