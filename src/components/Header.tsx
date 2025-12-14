import { includes, map } from "lodash"
import { useLocation, useNavigate } from 'react-router-dom';
import { ScreensOptions } from "./utils.tsx";
import BorderWrapper from "./BorderWrapper";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <BorderWrapper boxClass={'flex text-[18px] justify-end gap-[12px] px-[12px] py-[8px]'}>
            {
                map(ScreensOptions, (opt: string) => (
                    <div
                        style={{
                            ...(
                                ((location.pathname === '/' && opt === 'portfolio')
                                    || includes(location.pathname, opt.toLowerCase()))
                                && { color: 'black' }
                            ),
                        }}
                        onClick={() => navigate(`/${opt}`)}
                        className="text-neutral-400 cursor-pointer first-letter:uppercase" >
                        {opt}
                    </div>
                ))
            }
        </BorderWrapper>
    )
}

export default Header