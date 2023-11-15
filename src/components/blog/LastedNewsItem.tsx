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

interface NewsLatestProps {
  width?: string | number;
  height?: string | number;
  rounded?: string | number;
  latest: News[];
}

const BlogItemSkeleton = ({
  width,
  height,
  rounded,
  latest,
}: NewsLatestProps) => {
  const style = {
    width,
    height,
    borderRadius: rounded,
  };
  const [loading, setLoading] = useState(true);
  return <>{loading ? <Skeleton style={style} /> : <div>hello</div>}</>;
};

export default BlogItemSkeleton;
