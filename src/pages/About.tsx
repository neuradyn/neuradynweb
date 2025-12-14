import { motion } from 'framer-motion';
import { Zap, Target, Brain } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Small Team.<br />
                        <span className="text-royal-blue">Massive Impact.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl text-slate-600 mb-12 font-light leading-relaxed"
                    >
                        We are a specialized trio of engineers and strategists building the future of work.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg prose-slate"
                    >
                        <p className="text-lg text-slate-600 leading-relaxed">
                            NeuraDyn was founded on a simple belief: you don't need a hundred employees to run a world-class operation, you just need the right intelligence.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mt-6">
                            We are a lean team of three experts dedicated to one mission: transforming manual business chaos into streamlined AI automation. We don't just build software; we architect the digital systems that allow your business to scale without limits.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-royal-blue mb-6 group-hover:bg-royal-blue group-hover:text-white transition-colors">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Agility</h3>
                        <p className="text-slate-600">We move fast so you can adapt faster.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-royal-blue mb-6 group-hover:bg-royal-blue group-hover:text-white transition-colors">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Precision</h3>
                        <p className="text-slate-600">Automation that works right the first time.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="group"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-royal-blue mb-6 group-hover:bg-royal-blue group-hover:text-white transition-colors">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Intelligence</h3>
                        <p className="text-slate-600">Systems that learn and grow with you.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
