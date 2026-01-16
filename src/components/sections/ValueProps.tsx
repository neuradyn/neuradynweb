import { motion } from 'framer-motion';
import { Settings, Brain, MessageSquare, BarChart3, Rocket } from 'lucide-react';

const features = [
    {
        title: "Tailored to Your Workflow",
        desc: "We don't force you to change how you work. We design automation that fits your existing processes.",
        icon: Settings,
        color: "text-electric-cyan",
        bg: "bg-electric-cyan/10"
    },
    {
        title: "Content Factory Engine",
        desc: "Generates on-brand marketing assets and copy at scale, cutting production time by 90%.",
        icon: Brain,
        color: "text-royal-blue",
        bg: "bg-royal-blue/10"
    },
    {
        title: "Smart Engagement Agents",
        desc: "24/7 chatbots that nurture leads and handle customer support instantly.",
        icon: MessageSquare,
        color: "text-electric-cyan",
        bg: "bg-electric-cyan/10"
    },
    {
        title: "Real-Time ROI Analytics",
        desc: "Instant visibility into Ad performance and competitor movements across all channels.",
        icon: BarChart3,
        color: "text-royal-blue",
        bg: "bg-royal-blue/10"
    },
    {
        title: "Deep System Integration",
        desc: "We connect the dots between your CRM, ERP, Inventory, and Payment systems so data flows automatically.",
        icon: Rocket,
        color: "text-electric-cyan",
        bg: "bg-electric-cyan/10"
    }
];

const ValueProps = () => {
    return (
        <section className="py-24 relative z-10 bg-deep-void" id="solutions">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-starlight-white">
                        Why Businesses Choose Neuradyn
                    </h2>
                    <p className="text-mist-grey max-w-2xl mx-auto text-lg font-light">
                        A complete suite of AI tools designed to integrate seamlessly into your business operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-white/5"
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${feature.bg} ${feature.color}`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-starlight-white group-hover:text-electric-cyan transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-mist-grey leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
