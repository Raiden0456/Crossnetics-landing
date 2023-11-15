import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface News {
  date: string;
  title: string;
  text: string;
  tags: string[];
  image: string;
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
        <div key={index} className="flex items-start">
          <img src={el.image.src} alt={el.title} className="w-40" />
          <div className="ml-2 space-y-2.5">
            <p className="text-slate-300 text-2xs font-medium">{el.date}</p>
            <h2 className="text-blue-500 text-base lg:text-sm xl:text-base font-bold leading-tight">
              {el.title}
            </h2>
            <p className="text-gray-400 text-sm lg:text-xs xl:text-sm leading-tight">
              {el.text}
            </p>
            <span className="px-2 py-1 bg-green-200 rounded-xl justify-center items-center text-2xs text-[#0080FF]">
              {el.tags.join(", ")}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogItemSkeleton;
