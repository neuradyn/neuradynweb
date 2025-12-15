import { motion } from 'framer-motion';
import { ShieldCheck, ScanLine, Database, AlertTriangle, CalendarCheck } from 'lucide-react';

const Finance = () => {
    const metrics = [
        { label: "Data Entry", value: "85% Time Saved" },
        { label: "Goal", value: "0 Late Fees" },
        { label: "Cash Flow Visibility", value: "Real-Time" }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-deep-void overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Zero-Touch <span className="text-royal-blue">Financial Operations.</span>
                        </h1>
                        <p className="text-xl text-mist-grey mb-8 leading-relaxed">
                            Eliminate manual data entry and safeguard your cash flow with intelligent invoice processing and tracking.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Block 1: Intelligent Invoice Processing */}
            <section id="invoice-ocr" className="py-24 bg-[#0B0F29]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-royal-blue/20 blur-3xl rounded-full" />
                                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 flex items-center justify-center aspect-square">
                                    <ScanLine className="w-32 h-32 text-royal-blue" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Never Type an <span className="text-royal-blue">Invoice Data Point Again.</span>
                            </h2>
                            <p className="text-lg text-mist-grey mb-8 leading-relaxed">
                                Our OCR engine captures invoices from emails, portals, or scans, extracts key payment details, and pushes them directly to your ERP.
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <Database className="w-8 h-8 text-royal-blue mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">90% Error Reduction</h4>
                                        <p className="text-mist-grey">Reduces manual entry errors by 90% and frees your finance team from data drudgery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: The Payment Safeguard */}
            <section className="py-24 bg-deep-void">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
                                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 flex items-center justify-center aspect-square">
                                    <ShieldCheck className="w-32 h-32 text-emerald-500" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Cash Flow <span className="text-emerald-500">Protection.</span>
                            </h2>
                            <p className="text-lg text-mist-grey mb-8 leading-relaxed">
                                A proactive system that monitors due dates and sends structured reminders to vendors.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <AlertTriangle className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Eliminate Late Fees</h4>
                                        <p className="text-sm text-mist-grey">Never miss a payment deadline again.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <CalendarCheck className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Real-Time Visibility</h4>
                                        <p className="text-sm text-mist-grey">Always know your exact cash position.</p>
                                    </div>
                                </div>
                            </div>
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

export default Finance;
