import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                    Terms of Service
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 mb-12"
                >
                    Last Updated: December 15, 2025
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-slate max-w-none space-y-12"
                >
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Service Scope</h2>
                        <p className="text-slate-600 leading-relaxed">
                            NeuraDyn provides AI-powered business automation tools and services on an "as-is" and "as-available" basis. While we strive for high reliability and accuracy, we do not guarantee that our services will be uninterrupted, timely, secure, or error-free.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Limitation of Liability</h2>
                        <p className="text-slate-600 leading-relaxed">
                            To the fullest extent permitted by law, NeuraDyn shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-slate-600 space-y-2">
                            <li>Loss of profits, revenue, or business opportunities.</li>
                            <li>Data loss, corruption, or errors caused by AI "hallucinations" or model inaccuracies.</li>
                            <li>Interruptions caused by third-party API failures (e.g., OpenAI downtime).</li>
                        </ul>
                        <p className="text-slate-600 mt-4">
                            You acknowledge that AI models can produce incorrect or misleading outputs, and you are responsible for verifying critical automated decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibilities</h2>
                        <p className="text-slate-600 leading-relaxed">
                            By using our services, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-slate-600 space-y-2">
                            <li>You have the necessary rights and consents to upload and process any business data you provide to NeuraDyn.</li>
                            <li>You will not use our platform for any illegal, harmful, or unauthorized purposes.</li>
                            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Termination</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We reserve the right to suspend or terminate your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Governing Law</h2>
                        <p className="text-slate-600 leading-relaxed">
                            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which NeuraDyn operates, without regard to its conflict of law provisions.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
