import { map, size } from 'lodash'
import gsap from 'gsap';
import BorderWrapper from '../../../components/BorderWrapper';
import { useRef, type ReactElement } from 'react';

const ExperienceBox = ({
    company,
    companyIcon,
    roles,
}: {
    company: string;
    companyIcon: ReactElement;
    roles: any;
}) => {
    const infoBoxRefs = useRef<any>([]);
    const infoBoxTextRefs = useRef<any>([]);

    const handleInfoBoxClick = (index: number) => {
        const el = infoBoxRefs.current[index];
        const el2 = infoBoxTextRefs.current[index];

        if (!el) return;

        const isExpanded = el.getAttribute("data-expanded") === "true";
        const targetHeight = isExpanded ? 48 : el.scrollHeight;

        const gtl = gsap.timeline();
        gtl.to(el, {
            height: targetHeight,
            duration: 0.8,
            ease: "power2.out",
        }, 'a')
            .to(el2, {
                opacity: isExpanded ? 0 : 1,
                duration: 0.8,
                ease: "power2.out",
            }, 'a');

        el.setAttribute("data-expanded", (!isExpanded).toString());
    };

    return (
        <BorderWrapper boxClass="px-[12px] py-[12px] w-full flex flex-col gap-[16px] ">
            <div className="flex flex-row gap-[12px] items-center">
                <div className="overflow-hidden bg-zinc-200 rounded-full">
                    {companyIcon}
                </div>
                <div className="text-[22px] text-zinc-950 ">{company}</div>
            </div>
            {map(roles, (opt: any, index: number) => (
                <div key={index} className="flex flex-row gap-[4px] relative">
                    {index + 1 < size(roles) && (
                        <div
                            style={{ height: "calc(100% + 24px)" }}
                            className="absolute w-[1px] bg-zinc-300 left-[11px] z-[0]"
                        />
                    )}
                    {opt?.icon
                        ? opt.icon
                        : <div className="flex z-[1] mt-[2px] size-6 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 border border-zinc-300 ring-1 ring-edge ring-offset-1 ring-offset-background" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml size-4" aria-hidden="true">
                                <path d="m18 16 4-4-4-4"></path>
                                <path d="m6 8-4 4 4 4"></path>
                                <path d="m14.5 4-5 16"></path>
                            </svg>
                        </div>
                    }

                    <div
                        onClick={() => handleInfoBoxClick(index)}
                        ref={(el: any) => (infoBoxRefs.current[index] = el)}
                        className="w-full h-[48px] flex flex-col gap-[12px] "
                        style={{ overflow: "hidden" }}
                        data-expanded="false"
                    >
                        <div className="px-[10px] rounded-[8px] w-full cursor-pointer hover:bg-zinc-100">
                            <div className="text-[18px]  text-zinc-950 ">
                                {opt.title}
                            </div>
                            <div className="text-[14px] text-zinc-500 ">
                                {opt.duration}
                            </div>
                        </div>

                        <div ref={(el: any) => (infoBoxTextRefs.current[index] = el)} className="text-gray-800 opacity-0 text-[16px] leading-relaxed tracking-wide">
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
                </div>
            ))}
        </BorderWrapper>
    );
};

export default ExperienceBox;