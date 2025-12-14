import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-24 relative bg-white">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-r from-royal-blue to-purple-600 rounded-3xl p-12 md:p-20 text-center overflow-hidden shadow-2xl shadow-royal-blue/20"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white relative z-10">
                        Ready to Build Your <br />
                        <span className="text-electric-cyan">AI-Powered Future?</span>
                    </h2>

                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 relative z-10 font-light">
                        Let NeuraDyn automate your workflows, accelerate decision-making, and scale your operations effortlessly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Link to="/demo">
                            <button className="px-8 py-4 bg-white text-royal-blue font-bold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
                                Request Demo
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                                Book Strategy Call <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
