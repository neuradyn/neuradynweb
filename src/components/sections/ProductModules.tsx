import { motion } from 'framer-motion';
import { CheckCircle2, Zap, FileText, MessageSquare, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: "marketing-section",
        title: "Marketing Content Factory",
        desc: "Launch campaigns 10x faster. Automatically generate on-brand images, video, and copy, and track ad ROI across Meta & TikTok instantly.",
        href: "/marketing",
        icon: Zap,
        color: "text-electric-cyan",
        shadow: "shadow-[0_0_30px_rgba(0,255,255,0.2)]",
        capabilities: [
            { title: "Ads Performance AI", desc: "Instant ROI reports for Meta, TikTok, & Google Ads." },
            { title: "Content Factory", desc: "Auto-generate images, videos, and copy on-brand." },
            { title: "Growth Tools", desc: "Automated Lead Nurturing & Competitor Monitoring." }
        ]
    },
    {
        id: "hr-section",
        title: "HR Lifecycle Automation",
        desc: "From hire to retire. Screen 500+ resumes daily, automate onboarding documents, and track attendance without spreadsheet chaos.",
        href: "/hr",
        icon: Users,
        color: "text-emerald-400",
        shadow: "shadow-[0_0_30px_rgba(52,211,153,0.2)]",
        capabilities: [
            { title: "Recruitment", desc: "AI Resume Screening & Candidate Filtering." },
            { title: "Management", desc: "Automated Onboarding, Leave, & Timesheet Tracking." },
            { title: "Compliance", desc: "Document Verification & Structured Offboarding." }
        ]
    },
    {
        id: "finance-section",
        title: "Finance & Payables Pilot",
        desc: "Stop chasing invoices. Capture bills via OCR, automate payment reminders, and ensure 100% accuracy in your cash flow tracking.",
        href: "/finance",
        icon: FileText,
        color: "text-royal-blue",
        shadow: "shadow-[0_0_30px_rgba(65,105,225,0.2)]",
        capabilities: [
            { title: "Invoice Intelligence", desc: "OCR extraction for immediate data entry." },
            { title: "Payment Safeguard", desc: "Automated vendor reminders & due date tracking." }
        ]
    },
    {
        id: "chatbot-section",
        title: "Integrated Business Agents",
        desc: "Not just a chat bot. A fully integrated assistant that checks stock, books appointments, and processes payments in real-time.",
        href: "/chatbot",
        icon: MessageSquare,
        color: "text-purple-400",
        shadow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
        capabilities: [
            { title: "Deep Integration", desc: "Connects with CRM, ERP, and Booking systems." },
            { title: "Multi-Channel", desc: "Deploys across WhatsApp, Website, and Socials." },
            { title: "Consulting First", desc: "Custom-designed conversation flows, not generic bots." }
        ]
    }
];

const ProductModules = () => {
    return (
        <section className="py-32 relative bg-deep-void" id="solutions-section">
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
                                className="group relative p-8 md:p-16 rounded-3xl transition-all duration-500 hover:bg-white/[0.02] border border-transparent hover:border-white/5"
                            >
                                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                                    {/* Left: Icon & Core Info */}
                                    <div className="lg:w-1/3 flex-shrink-0 relative text-center lg:text-left">
                                        <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 mx-auto lg:mx-0 ${service.color} ${service.shadow} group-hover:scale-105 transition-transform duration-500`}>
                                            <service.icon className="w-10 h-10" />
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 group-hover:to-white transition-all">
                                            {service.title}
                                        </h3>
                                        <p className="text-lg text-mist-grey leading-relaxed group-hover:text-white/80 transition-colors mb-8">
                                            {service.desc}
                                        </p>

                                        {/* Explore More Button */}
                                        <Link
                                            to={service.href}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-royal-blue text-royal-blue font-medium text-sm hover:bg-royal-blue hover:text-white transition-all duration-300 group/btn"
                                        >
                                            Explore More
                                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
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
