import React, { useState } from "react";

import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

interface Post {
  id: number;
  date: string;
  title: string;
  text: string;
  tags: string[];
  likes: number;
  image: string;
}

interface BlogSkeletonProps {
  height?: string | number;
  cardBgColor?: string;
  cardShadow?: string;
  rounded?: string | number;
  vertical?: boolean;
  post: Post;
}

const BlogItemSkeleton = ({
  height,
  cardBgColor = "bg-white",
  cardShadow = "drop-shadow-lg",
  rounded,
  vertical,
  post,
}: BlogSkeletonProps) => {
  const style = {
    height,
    borderRadius: rounded,
  };
  const [loading, setLoading] = useState(false);

  const orientationClasses = vertical ? "flex-col" : "flex-row";
  const orientationImageClasses = vertical
    ? "w-full h-full object-cover"
    : "w-48 h-full object-cover";

  return (
    <>
      {loading ? (
        <Skeleton style={style} />
      ) : (
        <div
          className={`${cardBgColor} ${cardShadow} min-h-[300px] rounded-[40px] flex ${orientationClasses} overflow-hidden`}
        >
          <img
            src={post.image}
            alt={post.title}
            className={orientationImageClasses}
          />
          <div className="p-6 xl:p-8 flex flex-col gap-y-2 xl:gap-y-4 justify-between">
            <div className=" text-slate-400 text-2xs font-medium">
              {post.date}
            </div>
            <h1 className="text-blue-500 text-base lg:text-sm xl:text-base font-bold leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-400 text-sm lg:text-xs xl:text-sm leading-tight">
              {post.text}
            </p>
            <div className="flex flex-row justify-between justify-self-end">
              <div className="flex flex-row gap-1 items-center mr-2">
                <img src="/like.svg"></img>
                <p className="text-gray-400 text-xs mt-[4px]">{post.likes}</p>
              </div>
              {post.tags && (
                <div className="flex flex-row gap-2 w-full flex-wrap justify-end bottom-0">
                  {post.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="px-2 py-1 bg-sky-100 rounded-xl justify-center items-center"
                    >
                      <div className="text-blue-500 text-2xs">
                        {tag}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogItemSkeleton;
