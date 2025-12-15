import { motion } from 'framer-motion';
import {
    Image as LucideImage,
    Mail,
    BarChart,
    PenTool,
    Share2,
    Target,
    TrendingUp,
    Zap,
    Clock
} from 'lucide-react';

const Marketing = () => {
    const metrics = [
        { label: "Campaign Deployment Speed", value: "Same-Day Launch" },
        { label: "Content Production Time", value: "90-98% Faster" },
        { label: "Reporting Speed", value: "10x Faster" }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-deep-void overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-royal-blue/20 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            The <span className="text-royal-blue">Always-On</span> Marketing Engine.
                        </h1>
                        <p className="text-xl text-mist-grey mb-8 leading-relaxed">
                            From instant content generation to real-time ad intelligence. Automate the repetitive work so you can focus on strategy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: The AI Content Factory (Text Left, Image Right) */}
            <section id="content-factory" className="py-24 bg-[#0B0F29]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: Content */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Production at the <span className="text-royal-blue">Speed of AI.</span>
                            </h2>
                            <p className="text-lg text-mist-grey mb-8 leading-relaxed">
                                Stop bottlenecking your growth with manual creative production. Our Content Management workflow automates the creation of on-brand assets.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { icon: LucideImage, title: "Image & Video Generation", desc: "Transform raw product inputs into marketing-ready visuals instantly." },
                                    { icon: PenTool, title: "Auto-Copywriting", desc: "Generate high-converting copy for emails and landing pages that matches your brand voice." },
                                    { icon: Share2, title: "Automated Posting", desc: "Schedule and publish across all channels from a single control point." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <item.icon className="w-6 h-6 text-royal-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                            <p className="text-sm text-mist-grey">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Right: Visual/Icon */}
                        <div className="lg:w-1/2 flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="absolute inset-0 bg-royal-blue/20 blur-3xl rounded-full" />
                                <img
                                    src="/images/content-dashboard.png"
                                    alt="Content Calendar Dashboard"
                                    className="relative w-full h-auto drop-shadow-[0_0_30px_rgba(37,99,235,0.5)] z-10 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-deep-void">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: Visual/Icon */}
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full" />
                                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 flex items-center justify-center aspect-square">
                                    <BarChart className="w-32 h-32 text-purple-500" />
                                </div>
                            </div>
                        </div>
                        {/* Right: Content */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Real-Time <span className="text-purple-500">ROI Visibility.</span>
                            </h2>
                            <p className="text-lg text-mist-grey mb-8 leading-relaxed">
                                Eliminate the 8-12 hours spent weekly on spreadsheets. Get instant, automated reporting for your paid channels.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <Target className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Multi-Platform</h4>
                                        <p className="text-sm text-mist-grey">Instant insights for Meta, TikTok, and Google Ads.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <Clock className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Speed</h4>
                                        <p className="text-sm text-mist-grey">Reduce reporting time from days to minutes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <Zap className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Optimization</h4>
                                        <p className="text-sm text-mist-grey">Identify high-performing creatives and kill losing ads faster.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Automated Growth & Nurturing */}
            <section className="py-24 bg-[#0B0F29]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Never Lose a Lead Again.</h2>
                        <p className="text-xl text-mist-grey max-w-2xl mx-auto">
                            Turn passive traffic into active revenue with intelligent background automation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card A: Lead Nurturing */}
                        <div className="glass-card p-10 rounded-3xl hover:border-royal-blue/30 transition-all text-center">
                            <div className="w-16 h-16 bg-royal-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-royal-blue">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Lead Nurturing</h3>
                            <p className="text-mist-grey leading-relaxed">
                                Multi-stage email sequences to recover abandoned carts and re-engage cold leads.
                            </p>
                        </div>
                        {/* Card B: Competitor Monitor */}
                        <div className="glass-card p-10 rounded-3xl hover:border-purple-500/30 transition-all text-center">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-500">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Competitor Monitoring</h3>
                            <p className="text-mist-grey leading-relaxed">
                                Track rival pricing, strategies, and social sentiment in real-time.
                            </p>
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

export default Marketing;
