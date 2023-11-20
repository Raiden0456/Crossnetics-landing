import React from 'react'
import '../../../../styles/scroll-bar.css'

export const DesktopTags = ({ searchFlag = false }) => {
  const categories = [
    'Social Networking',
    'Youtube',
    'Marketing',
    'Influencing',
    'AI',
    'Advertising',
    'CRIPY',
    'Social Networking',
    'Youtube',
    'Marketing',
    'Influencing',
    'AI',
    'Advertising',
    'CRIPY',
  ]
  return (
    <div className='justify-between space-x-2 items-center flex w-full'>
      <div className='relative w-44 flex-shrink-0 mb-3'>
        <label>
          <select className='block w-full text-slate-400 bg-[#F1F8FF] font-semibold rounded-lg px-4 py-2 text-xs focus:outline-0'>
            <option value='' disabled selected>
              {' '}
              Popular
            </option>
            {categories.map((category, index) => (
              <option
                value={category.toLowerCase()}
                className='text-xs font-semibold text-gray-600'
                key={index}
              >
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className='flex-grow flex-shrink min-w-0'>
        <div className='flex space-x-2 justify-start scroll'>
          {categories.map((tag, index) => (
            <button
              className='bg-[#F1F8FF] text-gray-600 capitalize font-semibold px-4 py-2 rounded-lg text-xs whitespace-nowrap'
              key={index}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      {!searchFlag && (
        <div className='bg-[#F1F8FF] text-slate-300 capitalize font-semibold px-4 py-2 rounded-xl text-xs flex justify-between w-44 fill-current flex-shrink-0 mb-3'>
          <label>
            <input
              type='text'
              placeholder='Search'
              className='w-full text-gray-600 bg-[#F1F8FF] focus:outline-0'
            />
          </label>
          <a href='/blog/search'>
            <svg
              width='25'
              height='18'
              viewBox='0 0 17 16'
              fill='#BEC7E1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.9654 10.532L14.9654 13.532C15.232 13.7987 15.232 14.1987 14.9654 14.4654C14.832 14.5987 14.632 14.6654 14.4987 14.6654C14.3654 14.6654 14.1654 14.5987 14.032 14.4654L11.032 11.4654C10.032 12.1987 8.83203 12.6654 7.4987 12.6654C4.36536 12.6654 1.83203 10.132 1.83203 6.9987C1.83203 3.86536 4.36536 1.33203 7.4987 1.33203C10.632 1.33203 13.1654 3.86536 13.1654 6.9987C13.1654 8.33203 12.6987 9.5987 11.9654 10.532ZM7.49874 2.66406C5.09874 2.66406 3.16541 4.5974 3.16541 6.9974C3.16541 9.3974 5.09874 11.3307 7.49874 11.3307C8.69874 11.3307 9.76541 10.8641 10.5654 10.0641C11.3654 9.26406 11.8321 8.1974 11.8321 6.9974C11.8321 4.5974 9.89874 2.66406 7.49874 2.66406Z'
                fill='#CBD5E1'
              />
              <mask
                id='mask0_966_14457'
                mask-type='luminance'
                maskUnits='userSpaceOnUse'
                x='1'
                y='1'
                width='15'
                height='14'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M11.9654 10.532L14.9654 13.532C15.232 13.7987 15.232 14.1987 14.9654 14.4654C14.832 14.5987 14.632 14.6654 14.4987 14.6654C14.3654 14.6654 14.1654 14.5987 14.032 14.4654L11.032 11.4654C10.032 12.1987 8.83203 12.6654 7.4987 12.6654C4.36536 12.6654 1.83203 10.132 1.83203 6.9987C1.83203 3.86536 4.36536 1.33203 7.4987 1.33203C10.632 1.33203 13.1654 3.86536 13.1654 6.9987C13.1654 8.33203 12.6987 9.5987 11.9654 10.532ZM7.49874 2.66406C5.09874 2.66406 3.16541 4.5974 3.16541 6.9974C3.16541 9.3974 5.09874 11.3307 7.49874 11.3307C8.69874 11.3307 9.76541 10.8641 10.5654 10.0641C11.3654 9.26406 11.8321 8.1974 11.8321 6.9974C11.8321 4.5974 9.89874 2.66406 7.49874 2.66406Z'
                  fill='#BEC7E1'
                />
              </mask>
              <g mask='url(#mask0_966_14457)'>
                <rect x='0.5' width='16' height='16' fill='#BEC7E1' />
              </g>
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}
