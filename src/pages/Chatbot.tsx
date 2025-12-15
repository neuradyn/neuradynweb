import { motion } from 'framer-motion';
import { Search, PenTool, Network, TrendingUp, MessageSquare, Database, Calendar, ShoppingBag, Headphones, Globe } from 'lucide-react';

const Chatbot = () => {
    const steps = [
        {
            title: "Discovery",
            desc: "We map your customer journey and technical infrastructure.",
            icon: Search
        },
        {
            title: "Custom Build",
            desc: "We design conversation flows that match your brand voice.",
            icon: PenTool
        },
        {
            title: "Deep Integration",
            desc: "We connect the bot to your CRM, Booking System, and Inventory.",
            icon: Network
        },
        {
            title: "Optimization",
            desc: "Continuous training based on real conversation data.",
            icon: TrendingUp
        }
    ];

    const metrics = [
        { label: "Response Time", value: "Instant 24/7" },
        { label: "Workload Reduction", value: "60-80%" },
        { label: "Channels", value: "Multi-Channel" }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-deep-void overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            More Than a Bot. <span className="text-royal-blue">A Business Agent.</span>
                        </h1>
                        <p className="text-xl text-mist-grey mb-8 leading-relaxed">
                            We don't just deploy generic bots. We consult, design, and integrate conversational agents into your specific workflows.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Section 1: The "Workflow-First" Approach */}
            <section id="approach" className="py-24 bg-[#0B0F29]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
                                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 flex items-center justify-center aspect-square">
                                    <MessageSquare className="w-32 h-32 text-purple-500" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                We Don't Just Build Bots. <span className="text-purple-500">We Build Agents.</span>
                            </h2>
                            <p className="text-lg text-mist-grey mb-8 leading-relaxed">
                                Most chatbots fail because they are generic. We consult with you to map your specific customer journey, creating a bespoke agent that understands your unique business logic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Deep Integration Ecosystem */}
            <section className="py-24 bg-deep-void">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Connected to Your <span className="text-royal-blue">Core Systems.</span></h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { icon: Database, title: "CRM", desc: "Salesforce, HubSpot" },
                            { icon: Calendar, title: "Booking", desc: "Calendly, Acuity" },
                            { icon: ShoppingBag, title: "Inventory", desc: "Shopify, ERP" },
                            { icon: Headphones, title: "Support", desc: "Zendesk, Freshdesk" },
                            { icon: Globe, title: "Channels", desc: "WhatsApp, Web, Social" }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-6 rounded-2xl hover:border-royal-blue/30 transition-all text-center group">
                                <div className="w-12 h-12 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-royal-blue group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-xs text-mist-grey">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Consulting Process (Timeline) */}
            <section className="py-24 bg-[#0B0F29]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Consulting Process</h2>
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
                                            0{index + 1}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">
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

            {/* Impact Metrics */}
            <section className="py-20 bg-deep-void border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {metrics.map((metric, index) => (
                            <div key={index} className="pt-8 md:pt-0 px-4">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.value}</div>
                                <div className="text-royal-blue font-medium uppercase tracking-wider text-sm">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chatbot;
