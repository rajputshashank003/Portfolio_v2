import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface HoverChipProps {
    label: string;
    children: React.ReactNode;
}

export const HoverChip = ({ label, children }: HoverChipProps) => {
    const [hovered, setHovered] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setPos({
                x: rect.left + rect.width / 2,
                y: rect.top,
            });
        }
        setHovered(true);
    };

    return (
        <div
            ref={ref}
            className="relative inline-flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
            {createPortal(
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="fixed z-50 whitespace-nowrap rounded-full bg-black px-3 py-1 text-xs font-[24px] text-white shadow-lg -translate-x-1/2 -translate-y-full"
                            style={{ left: pos.x, top: pos.y - 8 }}
                        >
                            {label}
                            <div className="absolute left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-black" />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};