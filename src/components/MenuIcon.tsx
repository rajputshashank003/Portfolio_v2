import gsap from 'gsap'
import { useEffect, useState } from 'react'

const MenuIcon = ({ onClick, triggerClose } : any ) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        const gsapTl = gsap.timeline();
        if (!isOpen) {
            gsapTl.to(".l1", {
                top: "0rem"
            }, "a1")
            gsapTl.to(".l1", {
                rotate: "45deg",
                duration: 0.3
            }, "a2")
            gsapTl.to(".l2", {
                top: "0rem"
            }, "a1")
            gsapTl.to(".l2", {
                rotate: "-45deg",
                duration: 0.3
            }, "a2")
        } else {
            gsapTl.to(".l1", {
                rotate: "0deg",
            }, "a2")
            gsapTl.to(".l1", {
                top: "-0.3rem"
            }, "a1")
            gsapTl.to(".l2", {
                rotate: "0deg",
            }, "a2")
            gsapTl.to(".l2", {
                top: "0.3rem"
            }, "a1")
        }

        setIsOpen(prev => !prev);
        onClick();
    }

    useEffect(() => {
        triggerClose.current = handleClick;
    }, [isOpen]);

    return (
        <div onClick={handleClick} className='relative mt-4 cursor-pointer h-full w-[30px]'>
            <div className='absolute l1 top-[-0.25rem] h-[0.2rem] rounded-xl w-[1.9rem] bg-zinc-950' />
            <div className='absolute l2 top-[0.25rem]  h-[0.2rem] rounded-xl w-[1.9rem] bg-zinc-950' />
        </div>
    )
}

export default MenuIcon;