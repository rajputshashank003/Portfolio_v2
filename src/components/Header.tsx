import BorderWrapper from "./BorderWrapper";
import SmMenu from "./SmMenu.tsx";
import { useRef, useState } from "react";
import MenuIcon from "./MenuIcon.tsx";
import { map } from "lodash";
import { ScreensOptions } from "./utils.tsx";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const triggerClose = useRef<any>(null);

    const handleNavClick = (opt: string) => {
        if (opt === 'contact') {
            if (location.pathname === '/' || location.pathname === '/portfolio') {
                const el = document.getElementById('contact');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#contact');
                }
            } else {
                navigate('/portfolio#contact');
            }
        } else {
            navigate(`/${opt}`);
        }
    };

    const isOptionActive = (opt: string) => {
        if (opt === 'contact') {
            return location.hash === '#contact';
        }
        if (opt === 'portfolio') {
            return (location.pathname === '/' || location.pathname === '/portfolio') && location.hash !== '#contact';
        }
        return location.pathname.toLowerCase().includes(opt.toLowerCase());
    };

    const renderSmallDisplayMenu = () => {
        return (
            <div className="w-full md:hidden">
                <div className="w-full flex relative justify-end z-[9999]">
                    <div className="w-[30px] h-[30px] rounded-full p-[4px] flex justify-center items-center scale-[0.9]">
                        <MenuIcon triggerClose={triggerClose} onClick={() => setMenuOpen(prev => !prev)} />
                    </div>
                </div>
                <SmMenu onClose={() => triggerClose.current?.()} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
        )
    };

    return (
        <BorderWrapper boxClass={'flex text-[18px] justify-end gap-[12px] px-[12px] py-[8px]'}>
            {renderSmallDisplayMenu()}
            {
                map(ScreensOptions, (opt: string) => (
                    <div
                        key={opt}
                        style={{
                            ...(isOptionActive(opt) && { color: 'black' }),
                        }}
                        onClick={() => handleNavClick(opt)}
                        className="text-neutral-400 max-md:hidden cursor-pointer first-letter:uppercase hover:text-neutral-700 transition-colors" >
                        {opt}
                    </div>
                ))
            }
        </BorderWrapper>
    )
}

export default Header