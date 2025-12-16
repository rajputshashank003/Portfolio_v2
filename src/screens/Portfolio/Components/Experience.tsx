import BorderWrapper from '../../../components/BorderWrapper'
import { education_roles, freelance_roles, wizcommerce_roles } from './utils'
import ExperienceBox from './ExperienceBox'

const Experience = () => {

    return (
        <>
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500]">
                Experience
            </BorderWrapper>
            <ExperienceBox
                company={'WizCommerce'}
                companyIcon={<img src='/Logo/wizcommerce_logo.jpg' className='h-[24px] w-[24px] ' />}
                roles={wizcommerce_roles}
            />
            <ExperienceBox
                company={'Freelance'}
                companyIcon={
                    <div className='h-[24px] w-[24px] flex justify-center items-center'>
                        <div className='bg-zinc-200 h-[12px] w-[12px] rounded-full' />
                    </div>
                }
                roles={freelance_roles}
            />
            <ExperienceBox
                company={'Education'}
                companyIcon={
                    <div className='h-[24px] w-[24px] flex justify-center items-center'>
                        <div className='bg-zinc-200 h-[12px] w-[12px] rounded-full' />
                    </div>
                }
                roles={education_roles}
            />
        </>
    )
}

export default Experience