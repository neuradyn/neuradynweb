import { motion } from 'framer-motion';
import { ShoppingCart, Home, Briefcase, Stethoscope, GraduationCap, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
    {
        title: "E-Commerce & Retail",
        desc: "Automate abandoned cart recovery emails, track TikTok ad ROI instantly, and handle order status queries 24/7 with chatbots.",
        icon: ShoppingCart
    },
    {
        title: "Real Estate",
        desc: "Generate property listing visuals in minutes, automate viewing follow-ups, and monitor competitor pricing strategies.",
        icon: Home
    },
    {
        title: "Professional Services",
        desc: "Streamline client invoicing with OCR, track billable hours, and automate contract renewal reminders.",
        icon: Briefcase
    },
    {
        title: "Healthcare & Clinics",
        desc: "Reduce reception workload with appointment-setting chatbots and automate supplier payment tracking for medical inventory.",
        icon: Stethoscope
    },
    {
        title: "Education & Training",
        desc: "Nurture student enrollments with automated email sequences and generate course promotional content instantly.",
        icon: GraduationCap
    },
    {
        title: "F&B and Hospitality",
        desc: "Manage reservation inquiries automatically and monitor social media sentiment and competitor offers in real-time.",
        icon: Utensils
    }
];

const Industries = () => {
    return (
        <section className="py-24 bg-deep-void" id="industries">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-starlight-white">
                        Built for <span className="text-electric-cyan">Every Industry</span>
                    </h2>
                    <p className="text-mist-grey max-w-2xl mx-auto text-lg font-light">
                        NeuraDyn adapts to your specific sector requirements with specialized models and compliance controls.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-xl hover:border-electric-cyan/50 hover:bg-white/5 transition-all group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-mist-grey group-hover:bg-electric-cyan/10 group-hover:text-electric-cyan transition-all">
                                <industry.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-starlight-white">
                                {industry.title}
                            </h3>
                            <p className="text-mist-grey">
                                {industry.desc}
                            </p>
                        </motion.div>
                    ))}

                    {/* "Your Industry" Card */}
                    <Link to="/contact">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-transparent border-2 border-dashed border-white/20 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:border-electric-cyan/50 hover:bg-white/5 transition-colors cursor-pointer h-full"
                        >
                            <h3 className="text-xl font-bold mb-2 text-starlight-white">
                                Your Industry?
                            </h3>
                            <p className="text-mist-grey mb-4">
                                We build custom solutions for unique challenges.
                            </p>
                            <span className="text-electric-cyan font-medium text-sm">Let's talk →</span>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Industries;
