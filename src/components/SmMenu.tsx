// @ts-nocheck
import { useEffect, useRef } from 'react'
import { motion } from "motion/react";
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { map } from 'lodash';

gsap.registerPlugin(useGSAP);

const SmMenu = ({ onClose, menuOpen, setMenuOpen }: any) => {
    const navigate = useNavigate();
    const isFirstRender = useRef(true);
    const optionsContainer = useRef<any>(null);

    const menu_options =
        [
            {
                type: 'navigate',
                link: '/portfolio',
                label: () => {
                    return (
                        <div className='flex flex-row gap-2 justify-start items-center text-start' >
                            <div className='h-[25px] w-[25px] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='black' x="0px" y="0px" width="currentHeight" height="currentHeight" viewBox="0 0 48 48">
                                    <path d="M43.47,25.71l-2.6-4.26l1.29-4.82c0.19-0.7-0.15-1.42-0.79-1.74l-4.49-2.18l-1.52-4.75c-0.22-0.68-0.89-1.11-1.61-1.03	L28.8,7.52l-3.84-3.18c-0.56-0.46-1.36-0.46-1.92,0L19.2,7.52l-4.95-0.59c-0.72-0.08-1.39,0.35-1.61,1.03l-1.52,4.75l-4.49,2.18	c-0.64,0.32-0.98,1.04-0.79,1.74l1.29,4.82l-2.6,4.26c-0.37,0.61-0.26,1.4,0.28,1.89l3.69,3.35l0.12,4.99	c0.01,0.72,0.54,1.32,1.25,1.44l4.92,0.83l2.79,4.13c0.41,0.6,1.17,0.82,1.84,0.54L24,40.91l4.58,1.97c0.2,0.08,0.4,0.12,0.59,0.12	c0.49,0,0.96-0.24,1.25-0.66l2.79-4.13l4.92-0.83c0.71-0.12,1.24-0.72,1.25-1.44l0.12-4.99l3.69-3.35	C43.73,27.11,43.84,26.32,43.47,25.71z M30.968,21.192l-8.017,9.289C22.655,30.822,22.236,31,21.814,31	c-0.322,0-0.646-0.104-0.92-0.316l-4.706-3.66c-0.436-0.339-0.514-0.967-0.175-1.403l0.614-0.789	c0.339-0.436,0.967-0.514,1.403-0.175l3.581,2.785l7.086-8.209c0.361-0.418,0.992-0.464,1.41-0.104l0.757,0.653	C31.282,20.142,31.329,20.773,30.968,21.192z"></path>
                                </svg>
                            </div>
                            <span>Portfolio</span>
                        </div>
                    )
                }
            },
            {
                type: 'navigate',
                link: '/designs',
                label: () => {
                    return (<div className='flex flex-row gap-2 justify-start items-center text-start' >
                        <div className='h-[25px] text-[14px] font-bold flex justify-center items-center text-white bg-zinc-950 rounded-full w-[25px] '>
                            D
                        </div>
                        <span>Designs</span>
                    </div>
                    )
                }
            },
            {
                type: 'navigate',
                link: '/components',
                label: () => {
                    return (
                        <div className='flex flex-row gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-components"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12l3 3l3 -3l-3 -3z" /><path d="M15 12l3 3l3 -3l-3 -3z" /><path d="M9 6l3 3l3 -3l-3 -3z" /><path d="M9 18l3 3l3 -3l-3 -3z" /></svg>                            <span>Components</span>
                        </div>
                    )
                }
            },
            {
                type: 'navigate',
                link: '/blockchain',
                label: () => {
                    return (
                        <div className='flex flex-row gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-currency-bitcoin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" /><path d="M8 6l0 12" /><path d="M8 12l6 0" /><path d="M9 3l0 3" /><path d="M13 3l0 3" /><path d="M9 18l0 3" /><path d="M13 18l0 3" /></svg>                            <span>Blockchain</span>
                        </div>
                    )
                }
            }
        ]

    const handleMenuOpen = () => {
        const gtl = gsap.timeline();
        gtl
            .to(".menu_screen", {
                display: 'flex',
                opacity: 1,
                duration: 0.2,
                ease: 'linear'
            })
            .fromTo(".menu_par", {
                height: 0,
                opacity: 0,
            }, {
                height: optionsContainer.current.scrollHeight,
                opacity: 1,
            }, {
                duration: 2,
                ease: 'linear',
            })
    }
    const handleMenuClose = () => {

        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const gtl = gsap.timeline();
        gtl.fromTo(".menu_par", {
            height: optionsContainer.current.scrollHeight,
            opacity: 1,
        }, {
            height: 0,
            opacity: 0,
        }, {
            duration: 2,
            ease: 'linear',
        })
            .to(".menu_screen", {
                display: 'none',
                opacity: 0,
                duration: 0.2,
                ease: "circ.in"
            })
    }

    useEffect(() => {
        if (menuOpen) {
            handleMenuOpen();
        } else {
            handleMenuClose();
        }
    }, [menuOpen]);

    // if ( !menuOpen ) return ;

    return (
        <>
            <div onClick={() => {
                onClose();
                setMenuOpen(false);
            }} className="h-screen hidden opacity-0 menu_screen w-screen z-[999] bg-black/20 backdrop-blur-[7px] fixed top-0 right-0"></div>
            <div className=' menu_par h-[0px] opacity-0 overflow-hidden shadow-[0px_0px_12px] shadow-gray-700 flex flex-col w-[230px] bg-white z-[99999] backdrop-blur-[5px] text-zinc-900 absolute top-[10px] right-[70px] rounded-[12px] border-[1px] border-white'>
                <div ref={optionsContainer} className='flex m-2 pb-[16px] flex-col gap-2'>
                    {
                        map(menu_options, (label, ind) => (
                            <Option onClose={onClose} setMenuOpen={setMenuOpen} key={ind} label={label} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

const Option = ({ label, setMenuOpen, onClose }: any) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        onClose();
        setMenuOpen(false);
        navigate(label.link);
    }

    return (
        <>
            {
                label.type === 'navigate' ?
                    <motion.div
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            backgroundColor: '#d4d4da'
                        }}
                        onClick={handleNavigate}
                        transition={{
                            duration: 0.2,
                            ease: 'easeIn'
                        }}
                        className="text-[18px] border border-gray-200/50 rounded-[8px] p-2 py-1 text-start font-semibold cursor-pointer"
                    >
                        {label.label()}
                    </motion.div>
                    :
                    <motion.div
                        onClick={() => { setMenuOpen(false) }}
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            backgroundColor: '#d4d4da'
                        }}
                        transition={{
                            duration: 0.2,
                            ease: 'easeIn'
                        }}
                        className="text-[18px] border border-gray-200/50 rounded-[8px] p-2 py-1 text-start font-semibold cursor-pointer"
                    >
                        {label.label()}
                    </motion.div>
            }
        </>
    )
}

export default SmMenu;