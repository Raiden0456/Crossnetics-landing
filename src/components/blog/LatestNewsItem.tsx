import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface News {
  date: string;
  title: string;
  text: string;
  tags: string[];
  image: any;
}

interface Props {
  height: string | number;
  rounded?: string | number;
  latest: News[];
}

const BlogItemSkeleton = ({ height, rounded, latest }: Props) => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Skeleton height={height} circle={!!rounded} />;
  }

  return (
    <>
      {latest.map((el, index) => (
        <div key={index} className="flex items-stretch flex-col lg:flex-row gap-6">
        <img 
          src={el.image.src} 
          alt={el.title} 
          className=" self-stretch object-cover max-w-[200px] h-full rounded-[40px]" 
        />
          <div className="flex flex-col h-full gap-4 justify-between">
            <p className="text-slate-300 text-2xs font-medium">{el.date}</p>
            <h2 className="text-blue-500 text-base lg:text-sm xl:text-base font-bold leading-tight">
              {el.title}
            </h2>
            <p className="text-gray-400 text-sm lg:text-xs xl:text-sm leading-tight">
              {el.text}
            </p>
            {el.tags && (
              <div className="flex flex-row gap-2 w-full flex-wrap bottom-0">
                {el.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="px-2 py-1 bg-green-200 rounded-xl justify-center items-center"
                  >
                    <div className="text-blue-500 text-2xs">{tag}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogItemSkeleton;
