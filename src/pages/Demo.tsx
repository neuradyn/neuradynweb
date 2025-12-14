import { motion } from 'framer-motion';
import { useState } from 'react';

const Demo = () => {
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
                    See NeuraDyn in Action.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-600 mb-12"
                >
                    Book a personalized walkthrough of our automation suites. Tell us about your needs, and we'll tailor the demo for you.
                </motion.p>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-green-900 mb-4">Request Sent Successfully</h3>
                        <p className="text-green-700 text-lg">
                            Thanks for your interest! We'll act on your demo request and contact you at <span className="font-bold">neuradyn@gmail.com</span> shortly.
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                                <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Job Title</label>
                                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
                            <select required className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors appearance-none">
                                <option value="">Select a service...</option>
                                <option value="marketing">Marketing Automation</option>
                                <option value="finance">Finance Operation</option>
                                <option value="chatbot">Chatbot Customization</option>
                                <option value="hr">HR Automation</option>
                                <option value="unsure">Not Sure Yet</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number (Optional)</label>
                            <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 focus:border-royal-blue outline-none transition-colors" />
                        </div>

                        <button className="w-full bg-royal-blue text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors mt-4">
                            Request Demo
                        </button>
                    </motion.form>
                )}
            </div>
        </div>
    );
};

export default Demo;
