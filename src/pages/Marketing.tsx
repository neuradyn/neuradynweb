import { motion } from 'framer-motion';
import {
    Image as LucideImage,
    BarChart,
    ShoppingBag,
    Home,
    Briefcase,
    GraduationCap,
    Search,
    MessageSquare
} from 'lucide-react';

const Marketing = () => {
    const metrics = [
        { label: "Faster Production", value: "90%" },
        { label: "Cost Savings", value: "60-85%" },
        { label: "Faster Launch", value: "5-10x" },
        { label: "More Conversions", value: "20-45%" }
    ];

    const workflows = [
        {
            title: "The Content Factory",
            desc: "An end-to-end engine that automatically generates images, videos, and copywriting aligned with your brand voice, then schedules posts across all your digital channels.",
            icon: LucideImage,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Ads Performance Intelligence",
            desc: "Instantly convert data from Meta, TikTok, and Google Ads into actionable insight reports in seconds, highlighting ROI and trends without manual data crunching.",
            icon: BarChart,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Lead Nurturing System",
            desc: "Automated multi-stage email sequences and chatbot re-engagement flows that revive dormant leads and prevent lost opportunities.",
            icon: MessageSquare,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Competitor Monitoring",
            desc: "Instantly capture and summarize competitor profiles and strategies from the web to give you faster market visibility.",
            icon: Search,
            color: "text-orange-600",
            bg: "bg-orange-50"
        }
    ];

    const useCases = [
        {
            title: "E-Commerce & Retail",
            desc: "Launch daily product promotions and recover abandoned carts with automated follow-ups.",
            icon: ShoppingBag
        },
        {
            title: "Real Estate Agencies",
            desc: "Automatically produce property video tours and listing descriptions to market homes faster.",
            icon: Home
        },
        {
            title: "Marketing Agencies",
            desc: "Scale content production for multiple clients and generate performance reports in minutes instead of hours.",
            icon: Briefcase
        },
        {
            title: "Education Providers",
            desc: "Automate course enrollment campaigns and nurture student inquiries from interest to sign-up.",
            icon: GraduationCap
        }
    ];

    return (
        <div className="pt-20 bg-white">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Turn Your Marketing into an <span className="text-blue-600">Always-On Growth Engine.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                            Launch campaigns 10x faster, reduce creative costs, and nurture leads automatically. Without increasing headcount.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: What We Do */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                What We Do
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We replace manual content creation and data reporting with intelligent automation. From a "Content Factory" that generates on-brand assets to automated lead nurturing and ad performance tracking, we streamline your entire marketing lifecycle so you can focus on strategy, not execution.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="absolute inset-0 bg-blue-200 blur-3xl rounded-full opacity-50" />
                                <img
                                    src="/images/marketing.webp"
                                    alt="Marketing Automation Dashboard"
                                    loading="lazy"
                                    className="relative w-full h-auto drop-shadow-2xl z-10 rounded-xl border border-gray-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Key Workflows */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Key Workflows</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {workflows.map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all bg-white">
                                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Real-World Use Cases */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Real-World Use Cases</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 text-gray-900">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Impact Metrics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {metrics.map((metric, index) => (
                            <div key={index} className="pt-8 md:pt-0 px-4">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{metric.value}</div>
                                <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Marketing;
