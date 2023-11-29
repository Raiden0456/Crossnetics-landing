import React from 'react'

import useWindowDimensions from '../../../../hooks/useWindowDimensions.tsx'

import BlogItemSkeleton from '../../LatestBlog/BlogItemSkeleton.tsx'


interface Post {
  id: number;
  date: string;
  title: string;
  text: string;
  tags: string[];
  likes: number;
  image: string;
}

interface Props {
  prevPost: Post;
  nextPost: Post;
}

const PrevNext: React.FC<Props> = ({ prevPost, nextPost }) => {
  const { width } = useWindowDimensions()
  const vertical = width ? width <= 1024 : true
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className='flex flex-col gap-6'>
        <h2 className="text-2xl font-bold text-[#484E5E]">
          Previous
        </h2>
        <BlogItemSkeleton post={prevPost} vertical={vertical} rounded='20px' cardBgColor='bg-sky-50' cardShadow=''/>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className="text-2xl font-bold text-[#484E5E]">
          Next
        </h2>
        <BlogItemSkeleton post={nextPost} vertical={vertical} rounded='20px' cardBgColor='bg-sky-50' cardShadow=''/>
      </div>
    </div>
  );
};

export default PrevNext;

