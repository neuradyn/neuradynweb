import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                    Privacy Policy
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
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Collection</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We collect information necessary to provide our automation services, including:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-slate-600 space-y-2">
                            <li><strong>Contact Information:</strong> Name, email address, company name, and job title used for account creation and communication.</li>
                            <li><strong>Operational Data:</strong> Invoices, marketing assets, customer queries, and other business documents you upload or connect via API for automation workflows.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our platform to help us improve performance and security.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Usage of Data</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Your data is used strictly to:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-slate-600 space-y-2">
                            <li>Train and fine-tune specific AI models tailored to your business needs.</li>
                            <li>Execute the automation workflows you have configured (e.g., sending emails, processing invoices).</li>
                            <li>Provide customer support and resolve technical issues.</li>
                        </ul>
                        <p className="text-slate-600 mt-4">
                            We do <strong>not</strong> sell your data to third parties or use your proprietary business data to train our foundational models for other customers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Security</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We employ enterprise-grade security measures to protect your information, including:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-slate-600 space-y-2">
                            <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit.</li>
                            <li><strong>Access Control:</strong> Strict role-based access controls (RBAC) to ensure only authorized personnel and systems can access your data.</li>
                            <li><strong>SOC2 Compliance:</strong> Our technology stack is built on SOC2 Type II compliant infrastructure providers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third Parties</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may utilize trusted third-party Large Language Model (LLM) providers (e.g., OpenAI, Anthropic, Google) to process specific data points required for your automation. We ensure these providers adhere to strict data privacy standards and do not use your API data for their model training.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
                        <p className="text-slate-600 leading-relaxed">
                            If you have questions about this policy or your data, please contact us at <a href="mailto:neuradyn@gmail.com" className="text-royal-blue font-semibold hover:underline">neuradyn@gmail.com</a>.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
