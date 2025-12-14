import { motion } from 'framer-motion';

const stats = [
    {
        label: "Same-Day Launch",
        value: "< 24 Hrs",
        context: "Pre-configured workflows"
    },
    {
        label: "Manual Work Reduction",
        value: "90%",
        context: "From automated nurturing"
    },
    {
        label: "Faster Reporting",
        value: "10x",
        context: "Real-time API aggregation"
    },
    {
        label: "SOC2 Compliant Tech Stack",
        value: "AES-256",
        context: "Bank-Level Security"
    }
];

const Credibility = () => {
    return (
        <section className="py-12 border-y border-white/10 bg-deep-void">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-electric-cyan mb-2 font-mono text-glow">
                                {stat.value}
                            </div>
                            <div className="text-sm text-starlight-white uppercase tracking-wider font-bold mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-mist-grey font-light opacity-80 max-w-[150px] mx-auto leading-tight">
                                {stat.context}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Credibility;
