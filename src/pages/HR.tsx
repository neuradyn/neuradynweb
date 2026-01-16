import { motion } from 'framer-motion';
import { Clock, UserPlus, FileText, Award, Calendar, CheckSquare, AlertCircle, LogOut, Users, Building2, Briefcase, ShieldCheck } from 'lucide-react';

const HR = () => {
    const metrics = [
        { label: "Faster Onboarding", value: "60-80%" },
        { label: "Screening Capacity", value: "10x" },
        { label: "Fewer Errors", value: "95%" },
        { label: "Less Admin Time", value: "85-95%" }
    ];

    const workflows = [
        {
            title: "Onboarding & Offboarding",
            desc: "A seamless flow that manages offer acceptance, document collection, and asset recovery. It ensures new hires are ready on Day 1 and departures are secure and organized.",
            icon: UserPlus,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Talent Acquisition",
            desc: "Intelligent resume screening that parses and ranks candidates against job requirements, plus automated tracking for employee referral programs.",
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Daily Operations",
            desc: "Automated leave requests, approval routing, and payroll-ready timesheet tracking that eliminates spreadsheet confusion and calculation errors.",
            icon: Clock,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Performance & Development",
            desc: "Structured performance review cycles with automated reminders, alongside a system to track mandatory training and certification expiries.",
            icon: Award,
            color: "text-orange-600",
            bg: "bg-orange-50"
        }
    ];

    const useCases = [
        {
            title: "High-Growth Startups",
            desc: "Rapidly onboard new employees with consistent documentation and zero manual coordination during hiring peaks.",
            icon: Building2
        },
        {
            title: "Recruitment Teams",
            desc: "Handle high-volume hiring by screening hundreds of resumes per day to identify the best fit instantly.",
            icon: Briefcase
        },
        {
            title: "Field & Remote Operations",
            desc: "Track attendance and timesheets for distributed teams or shift-based workers without \"buddy punching\" or time theft.",
            icon: Calendar
        },
        {
            title: "Regulated Industries",
            desc: "Ensure audit-ready compliance by automatically tracking certification renewals and required safety training.",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="pt-20 bg-white">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Build a Better Employee Experience, <span className="text-emerald-600">From Offer Letter to Exit.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                            Automate onboarding, eliminate manual compliance tracking, and screen talent 10x faster so you can focus on people, not paperwork.
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
                                We automate the administrative heavy lifting of Human Resources. Our systems handle the entire employee lifecycle. Onboarding, daily operations, talent acquisition, and offboarding. Ensuring compliance and a professional experience without the manual coordination.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="absolute inset-0 bg-emerald-200 blur-3xl rounded-full opacity-50" />
                                <img
                                    src="/images/hr.png"
                                    alt="HR Automation Dashboard"
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
                            <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-emerald-100 hover:shadow-lg transition-all bg-white">
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
                                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                                <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HR;
