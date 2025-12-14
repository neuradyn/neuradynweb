import { motion } from 'framer-motion';

const Page = ({ title }: { title: string }) => {
    return (
        <div className="min-h-screen pt-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-slate-900 mb-6"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-600 max-w-2xl"
                >
                    This is the {title} page. Content coming soon.
                </motion.p>
            </div>
        </div>
    );
};

export default Page;
