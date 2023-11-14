import React from "react";

import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

interface NewsItemProps {
  title?: string;
  summary?: string;
  loading: boolean;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, summary, loading }) => {
  return (
    <div className="border border-gray-200 shadow rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse flex">
        <div className="rounded-[20%] bg-slate-400 h-32 w-32 mx-4"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-4 bg-slate-400 rounded"></div>
          <div className="h-20 bg-slate-400 rounded"></div>
          {loading ? (
            <>
              <Skeleton height={24} />
              <Skeleton count={3} />
            </>
          ) : (
            <>
              <h4 className="text-lg font-bold">{title}</h4>
              <p>{summary}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
