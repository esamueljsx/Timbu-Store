"use client";
import { AnimatePresence, motion } from "framer-motion";

export const PageWrapper = ({ children }) => (
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
);
