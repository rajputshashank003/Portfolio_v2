import { map, size } from 'lodash'
import gsap from 'gsap';
import BorderWrapper from '../../../components/BorderWrapper';
import { useRef, useState, type ReactElement } from 'react';
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
    const infoBoxHeaderRefs = useRef<any>([]);
    const infoBoxTextRefs = useRef<any>([]);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    
    const handleInfoBoxClick = (index: number) => {
        const el = infoBoxRefs.current[index];
        const el2 = infoBoxTextRefs.current[index];
        const headerEl = infoBoxHeaderRefs.current[index];
        if (!el || !el2) return;

        const isExpanded = expandedIndex === index;
        const gtl = gsap.timeline();

        if (expandedIndex !== null && expandedIndex !== index) {
            const prevEl = infoBoxRefs.current[expandedIndex];
            const prevEl2 = infoBoxTextRefs.current[expandedIndex];
            const prevHeaderEl = infoBoxHeaderRefs.current[expandedIndex];
            const prevCollapsedHeight = prevHeaderEl ? prevHeaderEl.offsetHeight : 48;
            if (prevEl && prevEl2) {
                gtl.to(prevEl, {
                    height: prevCollapsedHeight,
                    duration: 0.5,
                    ease: 'power2.out',
                }, 'a')
                    .to(prevEl2, {
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                    }, 'a');
            }
        }

        const collapsedHeight = headerEl ? headerEl.offsetHeight : 48;
        const targetHeight = isExpanded ? collapsedHeight : el.scrollHeight;

        gtl.to(el, {
            height: targetHeight,
            duration: 0.8,
            ease: 'power2.out',
        }, 'a')
            .to(el2, {
                opacity: isExpanded ? 0 : 1,
                duration: 0.8,
                ease: 'power2.out',
            }, 'a');

        setExpandedIndex(isExpanded ? null : index);
    };

    return (
        <BorderWrapper boxClass="px-[10px] sm:px-[12px] py-[12px] w-full flex flex-col gap-[16px]">
            <div className="flex flex-row gap-[12px] items-center">
                <div className="overflow-hidden rounded-full shrink-0">
                    {companyIcon}
                </div>
                <div className="text-[20px] sm:text-[22px] font-medium text-zinc-950">{company}</div>
            </div>
            {map(roles, (opt: any, index: number) => (
                <div key={index} className="flex flex-row gap-[6px] sm:gap-[8px] relative items-start">
                    {index + 1 < size(roles) && (
                        <div
                            style={{ height: 'calc(100% + 24px)' }}
                            className="absolute w-[1px] bg-zinc-300 left-[11px] z-[0]"
                        />
                    )}
                    {opt?.icon
                        ? opt.icon
                        : <div className="flex z-[1] mt-[2px] size-6 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 border border-zinc-300 ring-1 ring-edge ring-offset-1 ring-offset-background" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml size-4" aria-hidden="true">
                                <path d="m18 16 4-4-4-4"></path>
                                <path d="m6 8-4 4 4 4"></path>
                                <path d="m14.5 4-5 16"></path>
                            </svg>
                        </div>
                    }
                    <div
                        onClick={() => handleInfoBoxClick(index)}
                        ref={(el: any) => (infoBoxRefs.current[index] = el)}
                        className="w-full h-[48px] relative flex flex-col gap-[12px] min-w-0"
                        style={{ overflow: 'hidden' }}
                    >
                        <div
                            ref={(el: any) => (infoBoxHeaderRefs.current[index] = el)}
                            className={`px-[8px] sm:px-[10px] py-[2px] flex justify-between rounded-[8px] w-full cursor-pointer hover:bg-zinc-100 transition-colors ${opt?.projectLink ? 'pr-[70px] sm:pr-[76px]' : 'pr-[38px] sm:pr-[42px]'}`}
                        >
                            <div className="min-w-0 w-full">
                                <div className="text-[16px] sm:text-[18px] font-medium truncate w-full text-zinc-950">
                                    {opt.title}
                                </div>
                                <div className="text-[13px] sm:text-[14px] flex flex-wrap items-center gap-[4px] sm:gap-[6px] text-zinc-500">
                                    {opt?.type && <div className="border-r pr-[6px] border-neutral-300 font-medium text-zinc-700">{opt.type}</div>}
                                    <div className="flex gap-[2px] justify-center items-center">
                                        {opt.from}
                                        {opt.to && opt.to !== opt.from && (
                                            <>
                                                {' - '}
                                                {opt.to === 'I' ? (
                                                    <div className="text-zinc-500 inline-flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-infinity">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828" />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    opt.to
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={(el: any) => (infoBoxTextRefs.current[index] = el)} className="text-gray-800 opacity-0 text-[14px] sm:text-[16px] leading-relaxed tracking-wide px-[4px] sm:px-[8px]">
                            <ul className="list-disc ml-4 sm:ml-6 space-y-[4px] marker:text-zinc-300">
                                {map(opt.description, (point: string, idx: number) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-[6px] sm:gap-[8px] py-[8px]">
                                {map(opt.techStack, (tech: string, idx: number) => (
                                    <div key={idx} className="inline-block bg-zinc-50 border-1 first-letter:uppercase border-zinc-200 text-zinc-700 text-[11px] sm:text-[12px] px-[8px] py-[3px] sm:py-[4px] rounded-full mr-[4px] sm:mr-[6px] mb-[4px] sm:mb-[6px]">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            transform: expandedIndex === index ? 'rotate(0deg)' : 'rotate(90deg)',
                        }}
                        className={`absolute duration-400 top-[6px] sm:top-[10px] ${opt?.projectLink ? 'right-[36px] sm:right-[40px]' : 'right-[8px] sm:right-[12px]'}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-zinc-600"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                    {opt?.projectLink && (
                        <div className="absolute right-[4px] sm:right-[8px] top-[4px] sm:top-[8px]">
                            <HoverChip label="Project link">
                                <div
                                    className="h-full cursor-pointer text-zinc-500 hover:text-zinc-900 transition-colors flex justify-center items-center"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (opt.projectLink.startsWith('http')) {
                                            window.open(opt.projectLink, '_blank', 'noopener,noreferrer');
                                        } else {
                                            navigate(opt.projectLink);
                                        }
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 15l6 -6" />
                                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                    </svg>
                                </div>
                            </HoverChip>
                        </div>
                    )}
                </div>
            ))}
        </BorderWrapper>
    );
};

export default ExperienceBox;