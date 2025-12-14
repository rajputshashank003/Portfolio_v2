import { useRef } from "react";
import gsap from "gsap";

const ProjectBox = ({
    project,
    duration,
    logo,
    isLastBox = false,
}: {
    duration: any;
    isLastBox?: boolean;
    project: string;
    logo: any;
}) => {
    const descRef = useRef<HTMLDivElement | null>(null);

    const handleToggleDescription = () => {
        const el = descRef.current;
        if (!el) return;

        const isExpanded = el.getAttribute("data-expanded") === "true";
        const targetMaxHeight = isExpanded ? 0 : el.scrollHeight + 24;
        const padding = isExpanded ? 0 : 12;

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
                opacity: isExpanded ? 0 : 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "a"
        );

        el.setAttribute("data-expanded", (!isExpanded).toString());
    };

    return (
        <div>
            <div
                style={{ ...(isLastBox && { borderBottom: "0px" }) }}
                className="border-b-1 flex h-fit w-full border-zinc-300"
                onClick={handleToggleDescription}
            >
                <div className="min-w-[72px] border-r-1 flex justify-center items-center border-zinc-200 border-dashed min-h-full">
                    {logo}
                </div>
                <div className="py-[16px] pl-[16px] w-full pr-[8px]">
                    <div className="w-full text-[18px] text-zinc-950">
                        {project}
                    </div>
                    <div className="w-full text-[14px] text-zinc-500">
                        {duration}
                    </div>
                </div>
            </div>

            <div
                ref={descRef}
                data-expanded="false"
                style={{ maxHeight: 0, overflow: "hidden", opacity: 0 }}
                className="text-gray-800 py-0 px-[12px] opacity-0 text-[16px] border-b-1 border-zinc-300 leading-relaxed tracking-wide"
            >
                <ul className="list-disc ml-6 space-y-[4px] marker:text-zinc-300">
                    <li>
                        <span className="font-[600]">Software Engineer</span> with{" "}
                        <span className="font-semibold">1+ year of experience</span>, proficient in{" "}
                        <span className="font-semibold">full-stack development</span>, combining
                        pixel-perfect frontend design with reliable and efficient backend logic.
                    </li>
                    <li>
                        Experienced in crafting complex motion-based UI interactions using{" "}
                        <span className="font-semibold">Framer Motion</span> and{" "}
                        <span className="font-semibold">GSAP</span>, optimizing performance and
                        creating immersive animations across React applications.
                    </li>

                    <li>
                        Implemented{" "}
                        <span className="font-semibold">webhooks</span> and{" "}
                        <span className="font-semibold">payment gateways</span> for real-time order
                        tracking in Golang, secure transactions, and automated updates across distributed
                        microservices.
                    </li>

                    <li>
                        Solved over{" "}
                        <span className="font-semibold">
                            600+ Data Structures & Algorithms problems
                        </span>{" "}
                        on platform <span className="font-semibold">LeetCode</span>, achieving a{" "}
                        <span className="font-semibold">1550+ contest rating</span> and continuously
                        improving problem-solving and algorithmic thinking.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectBox;