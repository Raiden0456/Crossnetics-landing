import React from 'react'
import BlogItemSkeleton from './BlogItemSkeleton.tsx'
import useWindowDimensions from '../../../hooks/useWindowDimensions.tsx'

interface Posts {
  id: number
  date: string
  title: string
  text: string
  tags: string[]
  likes: number
  image: string
}

interface BlogLayoutProps {
  bgColor?: string
  posts: Posts[]
  title: string
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  bgColor,
  posts,
  title,
}) => {
  const { width } = useWindowDimensions()
  const vertical = width ? width <= 1024 : true
  bgColor = bgColor ? bgColor : 'bg-sky-50'
  return (
    <div className={bgColor}>
      <div className='w-10/12 lg:w-2/3 mx-auto pt-20'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-bold mb-4 text-[#484E5E]'>
            {title}
          </h2>
          <button className='text-[#0080FF]'>View All</button>
        </div>
        <div className='grid grid-cols-1 m-auto mt-6 lg:grid-cols-2 gap-4'>
          <BlogItemSkeleton
            post={posts[0]}
            vertical={vertical}
            height='300px'
            rounded='20px'
          />
          <BlogItemSkeleton
            post={posts[0]}
            vertical={vertical}
            height='300px'
            rounded='20px'
          />
        </div>

        <div className='grid grid-cols-1 m-auto mt-10 lg:grid-cols-3 gap-4'>
          <BlogItemSkeleton
            post={posts[0]}
            vertical={true}
            height='350px'
            rounded='20px'
          />
          <BlogItemSkeleton
            post={posts[0]}
            vertical={true}
            height='350px'
            rounded='20px'
          />
          <BlogItemSkeleton
            post={posts[0]}
            vertical={true}
            height='350px'
            rounded='20px'
          />
        </div>
      </div>
    </div>
  )
}

export default BlogLayout
