import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate sending
        setTimeout(() => {
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-32 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-slate-900 mb-6"
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-600 mb-12"
                >
                    Ready to transform your business with AI? Get in touch.
                </motion.p>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-green-900 mb-4">Message Sent Successfully</h3>
                        <p className="text-green-700 text-lg">
                            Thanks for reaching out! We'll be in touch at <span className="font-bold">neuradyn@gmail.com</span> shortly.
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <input required type="text" placeholder="Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                        <input required type="email" placeholder="Email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                        <input required type="text" placeholder="Subject" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                        <textarea required placeholder="Message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                        <button className="w-full bg-royal-blue text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors">
                            Send Message
                        </button>
                    </motion.form>
                )}
            </div>
        </div>
    );
};

export default Contact;
