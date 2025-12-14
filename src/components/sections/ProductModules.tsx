import { motion } from 'framer-motion';
import { CheckCircle2, Zap, FileText, MessageSquare, Users, ChevronRight } from 'lucide-react';

const services = [
    {
        id: "marketing-section",
        title: "Marketing Automation Suite",
        desc: "A comprehensive engine that combines content creation, lead nurturing, and market intelligence.",
        icon: Zap,
        color: "text-electric-cyan",
        shadow: "shadow-[0_0_30px_rgba(0,255,255,0.2)]",
        capabilities: [
            { title: "Content Management", desc: "Generate on-brand images and copy in minutes." },
            { title: "Lead Nurturing", desc: "Automated multi-stage follow-ups to recover lost leads." },
            { title: "Competitor Monitoring", desc: "Real-time analysis of rival strategies." },
            { title: "Ads Insight", desc: "Instant ROI reporting for Meta, TikTok, and Google Ads." }
        ]
    },
    {
        id: "finance-section",
        title: "Finance Operation",
        desc: "Safeguard your cash flow with automated financial tracking and compliance.",
        icon: FileText,
        color: "text-royal-blue",
        shadow: "shadow-[0_0_30px_rgba(65,105,225,0.2)]",
        capabilities: [
            { title: "Invoice OCR", desc: "Extract payment details automatically from any document." },
            { title: "Payment Tracking", desc: "Monitor due dates and automate vendor reminders." }
        ]
    },
    {
        id: "chatbot-section",
        title: "Chatbot Customization",
        desc: "Tailored conversational agents that handle customer support and sales 24/7.",
        icon: MessageSquare,
        color: "text-purple-400",
        shadow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
        capabilities: [
            { title: "Instant Support", desc: "Reduce support workload by 60-80%." },
            { title: "Smart Integration", desc: "Seamlessly connects with your existing knowledge base." }
        ]
    },
    {
        id: "hr-section",
        title: "HR Automation",
        desc: "Streamline workforce management to focus on people, not paperwork.",
        icon: Users,
        color: "text-emerald-400",
        shadow: "shadow-[0_0_30px_rgba(52,211,153,0.2)]",
        capabilities: [
            { title: "Smart Onboarding", desc: "Automate document collection and new-hire setups." },
            { title: "Leave & Claims", desc: "Instant processing for employee requests." },
            { title: "Internal Helpdesk", desc: "AI agents to answer policy questions 24/7." }
        ]
    }
];

const ProductModules = () => {
    return (
        <section className="py-32 relative bg-deep-void" id="solutions">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-32">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Intelligent Business Solutions
                    </h2>
                    <p className="text-xl text-mist-grey font-light max-w-3xl mx-auto">
                        End-to-end automation suites designed to modernize your specific operational needs.
                    </p>
                </div>

                {/* Interactive Feature Stack */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} className="scroll-mt-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-8 md:p-12 rounded-3xl transition-all duration-500 hover:bg-white/[0.02]"
                            >
                                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                                    {/* Left: Icon & Core Info */}
                                    <div className="lg:w-1/3 flex-shrink-0 relative">
                                        <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${service.color} ${service.shadow} group-hover:scale-105 transition-transform duration-500`}>
                                            <service.icon className="w-10 h-10" />
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 group-hover:to-white transition-all">
                                            {service.title}
                                        </h3>
                                        <p className="text-lg text-mist-grey leading-relaxed group-hover:text-white/80 transition-colors">
                                            {service.desc}
                                        </p>

                                        {/* Mobile Arrow */}
                                        <div className="mt-6 flex items-center gap-2 text-electric-cyan lg:hidden opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-sm font-bold uppercase tracking-wide">Explore</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Right: Capabilities Grid */}
                                    <div className="lg:w-2/3 w-full">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                            {service.capabilities.map((cap, i) => (
                                                <div key={i} className="flex gap-4 group/item">
                                                    <div className="mt-1">
                                                        <CheckCircle2 className={`w-6 h-6 ${service.color} opacity-60 group-hover/item:opacity-100 transition-opacity`} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-semibold text-lg mb-2">{cap.title}</h4>
                                                        <p className="text-mist-grey/70 group-hover/item:text-mist-grey transition-colors leading-relaxed">
                                                            {cap.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Desktop Arrow Indicator */}
                                    <div className="hidden lg:flex absolute top-12 right-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/50">
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Gradient Divider */}
                            {index !== services.length - 1 && (
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductModules;
