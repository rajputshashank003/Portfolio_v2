import { useRef, useState } from "react";
import type { FeedbackFormProps } from "./types"
import gsap from 'gsap';
import CustomBounce from "gsap/CustomBounce";
import { motion, useAnimate } from "framer-motion";

gsap.registerPlugin(CustomBounce);

const FeedbackForm = ({ 
    onSubmit,
}: FeedbackFormProps) => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const textBox = useRef<HTMLDivElement | null>(null);
    const redDot = useRef<HTMLDivElement | null>(null);
    const feedbackFooter = useRef<HTMLDivElement | null>(null);
    const textareaBox = useRef<HTMLTextAreaElement | null>(null);
    const submitButton = useRef<any | null>(null);
    const feedbackHeader = useRef<HTMLDivElement | null>(null);
    const tickContainerRef = useRef<any | null>(null);
    const tickRef = useRef<any | null>(null);
    const tickSvgRef = useRef<any | null>(null);
    const feedbackSubmittedText = useRef<any | null>(null);
    const escapeButton = useRef<any | null>(null);

    const [feedbackText, setFeedbackText] = useState("");
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [scope, animation] = useAnimate();

    const handleFeedbackClick = () => {
        if (feedbackSubmitted) return;
        const gtl = gsap.timeline({});
        gtl
            .to(textBox.current, {
                opacity: 0,
                duration: '0.2',
            }, 'a1')
            .to(escapeButton.current, {
                opacity: 1,
                display: 'flex',
                duration: '0.1',
            }, 'a1')
            .to(containerRef.current, {
                height: '200px',
                duration: '0.5',
                ease: 'power2.out',
                transformOrigin: 'top',
                width: "300px",
                borderRadius: '12px',
            }, 'a1')
            .to(redDot.current, {
                height: '8px',
                width: '8px',
                bottom: '89.5%',
                left: '12px',
                duration: '0.4',
                ease: 'bounce.out',
                delay: '0.04'
            }, 'a1')
            .to(feedbackFooter.current, {
                opacity: 0,
                duration: 0.1,
            }, 'a1')
            .to(feedbackHeader.current, {
                opacity: 1,
                duration: 0.1,
            }, 'a1')
            .to(submitButton.current, {
                opacity: 1,
                duration: 0.1,
                display: "flex",
            }, 'a1')
            .to(containerRef.current, {
                cursor: 'default',
            }, 'a1')
            .to(textareaBox.current, {
                height: 'calc(100% - 40px)',
                width: 'calc(100% - 15px)',
                opacity: 1,
                duration: "0.5",
                ease: 'ease.out',
                transformOrigin: 'top left',
            }, 'a1-=0.04')
    }

    const handleSubmitClick = async (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setFeedbackSubmitted(true);
        onSubmit(feedbackText);

        const gtl = gsap.timeline({});
        await gtl
            .to(textBox.current, {
                opacity: 0,
                duration: '0.1',
            }, 'a1')
            .to(escapeButton.current, {
                opacity: 0,
                display: 'hidden',
                duration: '0.1',
            }, 'a1')
            .to(feedbackSubmittedText.current, {
                opacity: 1,
                duration: '0.3',
            }, 'a1')
            .to(containerRef.current, {
                height: '34px',
                duration: '0.5',
                ease: 'power2.out',
                transformOrigin: 'top',
                width: "190px",
                borderRadius: '18px',
            }, 'a1')
            .to(redDot.current, {
                height: '14px',
                width: '14px',
                bottom: '9px',
                left: '8px',
                duration: '0.4',
                ease: 'bounce.out',
                delay: '0.04',
                backgroundColor: "green",
            }, 'a1')
            .to(feedbackFooter.current, {
                opacity: 0,
                duration: 0.1,
            }, 'a1')
            .to(feedbackHeader.current, {
                opacity: 0,
                duration: 0.1,
            }, 'a1')
            .to(submitButton.current, {
                opacity: 0,
                display: 'none',
                duration: 0.1,
            }, 'a1')
            .to(containerRef.current, {
                cursor: 'pointer',
            }, 'a1')
            .to(textareaBox.current, {
                height: '0px',
                opacity: 0,
                duration: "0.5",
                ease: 'ease.out',
                transformOrigin: 'bottom',
            }, 'a1-=0.04')
        handleTickAnimation();
    }

    const handleEscape = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        const gtl = gsap.timeline({});
        gtl
            .to(textBox.current, {
                opacity: 1,
                duration: '0.1',
            }, 'a1')
            .to(escapeButton.current, {
                opacity: 0,
                display: 'hidden',
                duration: '0.1',
            }, 'a1')
            .to(containerRef.current, {
                height: '34px',
                duration: '0.5',
                ease: 'power2.out',
                transformOrigin: 'top',
                width: "160px",
                borderRadius: '18px',
            }, 'a1')
            .to(redDot.current, {
                height: '14px',
                width: '14px',
                bottom: '9px',
                left: '8px',
                duration: '0.4',
                ease: 'bounce.out',
                delay: '0.04',
            }, 'a1')
            .to(feedbackFooter.current, {
                opacity: 1,
                duration: 0.1,
            }, 'a1')
            .to(feedbackHeader.current, {
                opacity: 0,
                duration: 0.1,
            }, 'a1')
            .to(submitButton.current, {
                opacity: 0,
                display: 'none',
                duration: 0.1,
            }, 'a1')
            .to(containerRef.current, {
                cursor: 'pointer',
            }, 'a1')
            .to(textareaBox.current, {
                height: '0px',
                opacity: 0,
                duration: "0.5",
                ease: 'ease.out',
                transformOrigin: 'bottom',
            }, 'a1-=0.04')
    }
    
    const handleTickAnimation = async () => {
        await animation(tickContainerRef.current,
            {
                opacity: 1,
            },
            {
                duration: 0.3,
                ease: 'easeOut',
            }
        )
        animation ( tickRef.current, 
            { 
                pathLength: 1,
            },
            {
                duration: 0.3,
                ease: 'easeOut',
            }
        )
    }

    const render_tick_svg = () => {
        return (
            <div ref={scope} className="text-neutral-200">
                <motion.svg ref={tickSvgRef} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <motion.path 
                        initial={{ pathLength: 0 }}
                        ref={tickRef} 
                        strokeWidth={3}
                        d="M5 12l5 5l10 -10" 
                    />
                </motion.svg>
            </div>
        );
    }

    return (
        <div 
            ref={containerRef}
            onClick={handleFeedbackClick}
            className="bg-zinc-900 border-[1px] border-neutral-600 shadow-[0px_0px_3px] shadow-zinc-950 cursor-pointer w-[160px] h-[34px] rounded-[18px] px-[8px] relative"
        >
            <div className="flex justify-between items-start pt-[8px] h-[32px]">
                <div className="flex gap-[6px] items-center h-full justify-start ">
                    <div ref={redDot} className="bg-red-600 bottom-[10px] absolute h-[14px] w-[14px] rounded-full" />
                    <span ref={textBox} className="mono absolute w-24 left-[28px] top-[8px] text-[12px] text-zinc-300 font-[600] ">
                        Text Box
                    </span>
                    <span ref={feedbackSubmittedText} className="mono absolute whitespace-nowrap opacity-0 w-24 left-[29px] top-[8px] text-[12px] text-zinc-300 font-[600] ">
                        Feedback Submitted
                    </span>
                    <span ref={feedbackHeader} className="mono opacity-0 absolute w-24 left-[26px] top-[8px] text-[12px] text-zinc-300 font-[600] ">
                        Feedback
                    </span>
                    <span ref={feedbackFooter} className="mono absolute w-24 right-[-34px] top-[8px] text-[12px] text-zinc-500 font-[600] ">
                        Feedback
                    </span>
                    <div ref={tickContainerRef} className="mono opacity-0 absolute w-fit p-[4px] rounded-full bg-neutral-600 right-[6px] top-[4.5px] text-[12px] text-zinc-500 font-[600] ">
                        { render_tick_svg() }
                    </div>
                    <button onClick={handleEscape} ref={escapeButton} className="mono hidden opacity-0 cursor-pointer absolute right-[80px] top-[8px] bg-zinc-800 rounded-[4px] shadow-zinc-400 shadow-[0px_0px_1px] px-[12px] text-[12px] text-zinc-400 font-[500] ">
                        X
                    </button>
                    <button onClick={handleSubmitClick} ref={submitButton} className="mono hidden cursor-pointer absolute right-[8px] top-[8px] bg-zinc-800 opacity-0 rounded-[4px] shadow-zinc-400 shadow-[0px_0px_1px] px-[12px] text-[12px] text-zinc-400 font-[500] ">
                        Submit
                    </button>
                </div>
            </div>
            <textarea 
                onChange={(e: any) => setFeedbackText(e.target.value)}
                ref={textareaBox}
                placeholder="Your feedback..."
                style={{
                    height: '0',
                    width: 'calc(100% - 15px)'
                }}
                className=" opacity-0 absolute overflow-hidden bottom-[6px] bg-zinc-800 border-[1px] border-neutral-600 rounded-[8px] px-[8px] py-[6px] text-zinc-300 resize-none focus:outline-none focus:border-zinc-500 font-mono text-[12px] "
            />
        </div>
    )
}

export default FeedbackForm;