import { useRef, useState } from "react";
import gsap from "gsap";
import { map } from "lodash";
import { HoverChip } from "../../../components/HoverChip";
import { useNavigate } from "react-router-dom";

const ProjectBox = ({
    project,
    duration,
    logo,
    isLastBox = false,
    description,
    techStack = [],
    projectLink,
}: {
    duration: any;
    isLastBox?: boolean;
    project: string;
    logo: any;
    description: string;
    techStack: string[];
    projectLink: string;
}) => {
    const navigate = useNavigate();
    const descRef = useRef<HTMLDivElement | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleDescription = () => {
        const el = descRef.current;
        if (!el) return;

        const isExp = el.getAttribute("data-expanded") === "true";
        const targetMaxHeight = isExp ? 0 : el.scrollHeight + 24;
        const padding = isExp ? 0 : 12;

        const gtl = gsap.timeline();
        gtl.to(
            el,
            {
                maxHeight: targetMaxHeight,
                duration: 0.4,
                paddingTop: padding,
                paddingBottom: padding,
                ease: "circ.out",
            },
            "a"
        ).to(
            el,
            {
                opacity: isExp ? 0 : 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "a"
        );

        el.setAttribute("data-expanded", (!isExp).toString());
        setIsExpanded(!isExp);
    };

    return (
        <div>
            <div
                style={{ ...(isExpanded && { boxShadow: '0px 1px 3px #71717A' }) }}
                className="border-b-1 flex h-fit w-full border-zinc-300"
                onClick={handleToggleDescription}
            >
                <div className="min-w-[72px] border-r-1 flex justify-center items-center border-zinc-200 border-dashed min-h-full">
                    {logo}
                </div>
                <div className="py-[16px] flex justify-between pl-[16px] w-full pr-[8px]">
                    <div>
                        <div className="w-full text-[18px] text-zinc-950">
                            {project}
                        </div>
                        <div className="w-full text-[14px] text-zinc-500">
                            {duration}
                        </div>
                    </div>
                    {projectLink
                        && <HoverChip label='Project link'>
                            <div className='h-full cursor-pointer text-zinc-500 flex justify-center items-center' onClick={() => navigate(projectLink)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                            </div>
                        </HoverChip>
                    }
                </div>
            </div>

            <div
                ref={descRef}
                data-expanded="false"
                style={{ maxHeight: 0, overflow: "hidden", opacity: 0, ...(isLastBox && { borderBottom: "0px" }) }}
                className="text-gray-800 py-0 px-[12px] opacity-0 text-[16px] border-b-1 border-zinc-300 leading-relaxed tracking-wide"
            >
                <ul className="list-disc ml-6 space-y-[4px] marker:text-zinc-300">
                    <ul className="list-disc ml-6 space-y-[4px] marker:text-zinc-300">
                        {
                            map(description, (point: string, idx: number) => (
                                <li key={idx}>
                                    {point}
                                </li>
                            ))
                        }
                    </ul>
                </ul>
                <div className='flex ml-[24px] flex-wrap gap-[12px] py-[8px] '>
                    {
                        map(techStack, (tech: string, idx: number) => (
                            <div key={idx} className="inline-block bg-zinc-50 border-1 first-letter:uppercase border-zinc-200 text-zinc-700 text-[12px] px-[8px] py-[4px] rounded-full mr-[6px] mb-[6px]">
                                {tech}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;