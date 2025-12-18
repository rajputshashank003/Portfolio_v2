import { map, size } from 'lodash'
import gsap from 'gsap';
import BorderWrapper from '../../../components/BorderWrapper';
import { useRef, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { HoverChip } from '../../../components/HoverChip';

const ExperienceBox = ({
    company,
    companyIcon,
    roles,
}: {
    company: string;
    companyIcon: ReactElement;
    roles: any;
}) => {
    const navigate = useNavigate();
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
                <div className="overflow-hidden rounded-full">
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
                        className="w-full h-[48px] relative flex flex-col gap-[12px] "
                        style={{ overflow: "hidden" }}
                        data-expanded="false"
                    >
                        <div className="px-[10px] flex justify-between rounded-[8px] w-full cursor-pointer hover:bg-zinc-100">
                            <div>
                                <div className="text-[18px] whitespace-nowrap w-full text-zinc-950 ">{
                                    window.innerWidth < 400
                                        ? opt.title.slice(0, 26) + (size(opt.title) > 26 ? '...' : '')
                                        : opt.title
                                }
                                </div>
                                <div className="text-[14px] flex gap-[6px] text-zinc-500 ">
                                    {opt?.type && <div className='border-r pr-[6px] border-neutral-300'>
                                        {opt.type}
                                    </div>}
                                    <div className='flex gap-[2px] justify-center items-center'>
                                        {opt.from} - {opt.to === 'I'
                                            ? <div className='text-zinc-500'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-infinity"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" /></svg>
                                            </div>
                                            : opt.to
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={(el: any) => (infoBoxTextRefs.current[index] = el)} className="text-gray-800 opacity-0 text-[16px] leading-relaxed tracking-wide">
                            <ul className="list-disc ml-6 space-y-[4px] marker:text-zinc-300">
                                {
                                    map(opt.description, (point: string, idx: number) => (
                                        <li key={idx}>
                                            {point}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='flex flex-wrap gap-[12px] py-[8px] '>
                                {
                                    map(opt.techStack, (tech: string, idx: number) => (
                                        <div key={idx} className="inline-block bg-zinc-50 border-1 first-letter:uppercase border-zinc-200 text-zinc-700 text-[12px] px-[8px] py-[4px] rounded-full mr-[6px] mb-[6px]">
                                            {tech}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {opt?.projectLink
                        && <div 
                            className='absolute -right-[4px] top-[8px] md:top-[12px] '>
                            <HoverChip label='Project link'>
                                <div className='h-full cursor-pointer text-zinc-500 flex justify-center items-center' onClick={() => navigate(opt.projectLink)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                                </div>
                            </HoverChip>
                        </div>
                    }
                </div>
            ))}
        </BorderWrapper>
    );
};

export default ExperienceBox;