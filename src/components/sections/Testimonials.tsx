import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-deep-void">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 rounded-3xl max-w-4xl mx-auto text-center relative"
                >
                    <Quote className="w-12 h-12 text-electric-cyan/20 absolute top-8 left-8" />

                    <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-starlight-white font-heading">
                        "NeuraDyn transformed our support workflow overnight. We reduced response times by 80% while maintaining a human touch. It's not just automation; it's intelligence."
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-glow">S</div>
                        <div className="text-left">
                            <div className="font-bold text-starlight-white">Sarah Jenkins</div>
                            <div className="text-sm text-electric-cyan font-medium">CTO at TechCorp</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
