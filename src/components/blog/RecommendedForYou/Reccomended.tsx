//components
import { MobileTags } from './MobileTags/MobileTags'
import { DesktopTags } from './DesktopTags/DesktopTags'

// hooks
import { useWindowDimensions } from '../../../hooks/useWindowDimensions.tsx'

export const Recommended = () => {
  const { width } = useWindowDimensions()
  const windowWidth = width > 768
  return (
    <div className='bg-white'>
      <div className='w-10/12 lg:w-2/3 mx-auto pt-20'>
        <div className='flex justify-start mx-auto'>
          <h2
            className={`text-3xl font-bold mb-10 text-[#484E5E] ${
              windowWidth ? 'w-full' : 'w-32'
            } `}
          >
            Recommended For You
          </h2>
        </div>

        {windowWidth ? <DesktopTags /> : <MobileTags />}
      </div>
    </div>
  )
}
