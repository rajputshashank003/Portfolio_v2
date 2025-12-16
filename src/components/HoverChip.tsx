import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HoverChipProps {
    label: string;
    children: React.ReactNode;
}

export const HoverChip = ({ label, children }: HoverChipProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative inline-flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute -top-10 z-50 whitespace-nowrap rounded-full bg-black px-3 py-1 text-xs font-[24px] text-white shadow-lg"
                    >
                        {label}
                        <div className="absolute left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-black" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};