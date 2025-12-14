import BorderWrapper from '../../../components/BorderWrapper'
import ProjectBox from './ProjectBox'
import { fullstack } from '../../../components/projectData'
import { map, size, startsWith } from 'lodash'

const Projects = () => {

    return (
        <>
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500]">
                Projects
            </BorderWrapper>
            <BorderWrapper boxClass="">
                { map(fullstack, (opt: any, i : number) => (
                    <ProjectBox
                        project={opt.title}
                        logo={<img src={startsWith(opt?.img, 'https') ? opt.img : `/componentImages/${opt.img}`} className='h-[48px] w-[48px] rounded-[12px] ' />}
                        duration={opt.duration}
                        isLastBox={size(fullstack) === i + 1}
                    />
                ))}
            </BorderWrapper>
        </>
    )
}

export default Projects