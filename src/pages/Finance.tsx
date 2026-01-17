import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Truck, Users, ScanLine } from 'lucide-react';

const Finance = () => {
    const metrics = [
        { label: "Less Time", value: "70-85%" },
        { label: "Lower Error Rate", value: "90%" },
        { label: "Late Fees", value: "Zero" },
        { label: "Cost Savings", value: "30-50%" }
    ];

    const workflows = [
        {
            title: "Automated Invoice OCR & Tracking",
            desc: "A centralized workflow that captures invoices from any source, automatically extracts key payment details (like amount and due date), and organizes them for payment without manual data entry.",
            icon: ScanLine,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Vendor Payment Safeguard",
            desc: "An automated monitor that tracks outstanding payables and sends structured reminders to ensure every bill is paid on time, preventing penalties and protecting supplier relationships.",
            icon: ShieldCheck,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    const useCases = [
        {
            title: "SMEs & Agencies",
            desc: "Manage high volumes of vendor and supplier invoices efficiently without needing a large finance department.",
            icon: Building2
        },
        {
            title: "Logistics & E-commerce",
            desc: "Automatically track supplier payments to avoid service disruptions and late fees.",
            icon: Truck
        },
        {
            title: "Procurement Teams",
            desc: "Gain real-time visibility into outstanding liabilities to strengthen vendor trust and negotiation power.",
            icon: Users
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
                            Stop Chasing Invoices. <span className="text-blue-600">Automate Your Financial Operations.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                            Eliminate data entry errors, never miss a payment, and gain real-time cash flow visibility. Without the spreadsheet chaos.
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
                                We turn manual finance management into a streamlined, automated operation. By using OCR technology to instantly capture invoice data and intelligent workflows to track payment schedules, we ensure your vendors get paid on time and your financial records remain 100% accurate.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="absolute inset-0 bg-blue-200 blur-3xl rounded-full opacity-50" />
                                <img
                                    src="/images/finance1.webp"
                                    alt="Finance Automation Dashboard"
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

export default Finance;
