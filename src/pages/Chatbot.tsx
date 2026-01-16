import { motion } from 'framer-motion';
import { Network, Calendar, ShoppingBag, Headphones, Globe, UserCheck, Zap, Layers } from 'lucide-react';

const Chatbot = () => {
    const metrics = [
        { label: "Faster Response", value: "90-100%" },
        { label: "Less Workload", value: "60-80%" },
        { label: "More Conversions", value: "20-40%" },
        { label: "Scalability", value: "Infinite" }
    ];

    const workflows = [
        {
            title: "Deep System Integration",
            desc: "Connects seamlessly with your CRM, Booking Platforms, Inventory Databases, and Payment Gateways to perform real tasks, not just answer FAQs.",
            icon: Network,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Customer Service Automation",
            desc: "Instantly handles routine inquiries like order tracking, returns processing, and account updates, freeing your human team for complex issues.",
            icon: Headphones,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Lead Qualification & Sales",
            desc: "Engages visitors 24/7, qualifies leads based on your criteria, and routes high-value prospects directly to your sales team.",
            icon: UserCheck,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Multi-Channel Deployment",
            desc: "Works uniformly across your Website, WhatsApp, Facebook Messenger, and Instagram to ensure a consistent brand voice everywhere.",
            icon: Layers,
            color: "text-orange-600",
            bg: "bg-orange-50"
        }
    ];

    const useCases = [
        {
            title: "Retail & E-Commerce",
            desc: "Customers can check stock availability, track shipments, and process returns instantly without waiting for an agent.",
            icon: ShoppingBag
        },
        {
            title: "Healthcare & Wellness",
            desc: "Patients can book, reschedule, or cancel appointments and receive automated reminders 24/7.",
            icon: Calendar
        },
        {
            title: "Service Businesses",
            desc: "Automate price quotes, service explanations, and booking confirmations for salons, consultancies, or repair services.",
            icon: Zap
        },
        {
            title: "Education & Training",
            desc: "Guide students through course enrollments, answer application FAQs, and provide schedule details automatically.",
            icon: Globe
        }
    ];

    return (
        <div className="pt-20 bg-white">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Not Just a Bot. <span className="text-purple-600">A Fully Integrated Business Assistant.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                            Deeply integrated with your CRM, inventory, and booking systems. Delivering instant 24/7 support that mirrors your best agents.
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
                                We don't just deploy generic bots. We consult with you to understand your specific customer journey, then build a custom solution that fits your existing workflow. Our chatbots connect directly to your backend systems. Checking stock, booking appointments, and processing payments in real-time. Without disrupting your operations.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="absolute inset-0 bg-purple-200 blur-3xl rounded-full opacity-50" />
                                <img
                                    src="/images/chatbot2.png"
                                    alt="Chatbot Integration Dashboard"
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
                            <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-purple-100 hover:shadow-lg transition-all bg-white">
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
                                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{metric.value}</div>
                                <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chatbot;
