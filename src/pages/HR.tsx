import { motion } from 'framer-motion';
import { Clock, UserPlus, FileText, Award, Calendar, CheckSquare, AlertCircle, LogOut } from 'lucide-react';

const HR = () => {
    const metrics = [
        { label: "Time Saved", value: "75-90% Less Admin" },
        { label: "Documentation", value: "95% Error Reduction" },
        { label: "Onboarding Time", value: "3-5 Days" }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-deep-void overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            The Employee Lifecycle, <span className="text-royal-blue">Automated.</span>
                        </h1>
                        <p className="text-xl text-mist-grey mb-8 leading-relaxed">
                            Streamline every stage of your workforce management—from recruitment to offboarding—without the paperwork.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Section 1: Recruitment & Onboarding */}
            <section id="recruitment" className="py-24 bg-[#0B0F29]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Acquire Talent, <span className="text-emerald-400">Faster.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: UserPlus, title: "Resume Screening", desc: "Auto-filter 1,000+ resumes daily based on objective criteria." },
                            { icon: FileText, title: "Smart Onboarding", desc: "Automate document collection and task assignment, reducing setup time from weeks to 3-5 days." },
                            { icon: Award, title: "Referral Program", desc: "Track employee referrals and automate bonus calculations transparently." }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-8 rounded-2xl hover:border-emerald-400/30 transition-all group">
                                <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-mist-grey leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Workforce Operations */}
            <section className="py-24 bg-deep-void">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Streamline <span className="text-royal-blue">Daily Management.</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { icon: Calendar, title: "Leave Automation", desc: "Instant routing and approval for leave requests with real-time balance tracking." },
                                    { icon: Clock, title: "Smart Timesheets", desc: "Auto-capture attendance and work hours to eliminate payroll errors." },
                                    { icon: CheckSquare, title: "Performance Reviews", desc: "Structured, automated review cycles that ensure on-time completion." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 bg-royal-blue/10 rounded-full flex items-center justify-center flex-shrink-0 text-royal-blue">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-mist-grey">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-royal-blue/20 blur-3xl rounded-full" />
                                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 flex items-center justify-center aspect-square">
                                    <Clock className="w-32 h-32 text-royal-blue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Compliance & Offboarding */}
            <section className="py-24 bg-[#0B0F29]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Protect Your Organization</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="glass-card p-10 rounded-3xl hover:border-red-500/30 transition-all text-center">
                            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500">
                                <AlertCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Training Tracker</h3>
                            <p className="text-mist-grey leading-relaxed">
                                Monitor certification expiries and assign mandatory compliance courses automatically.
                            </p>
                        </div>
                        <div className="glass-card p-10 rounded-3xl hover:border-red-500/30 transition-all text-center">
                            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500">
                                <LogOut className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Secure Offboarding</h3>
                            <p className="text-mist-grey leading-relaxed">
                                Systematically revoke access and track asset recovery when an employee leaves.
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

export default HR;
