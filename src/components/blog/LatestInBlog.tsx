import React from "react";

import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

interface BlogSkeletonProps {
  width?: string | number;
  height?: string | number;
  rounded?: string | number;
}

const BlogItemSkeleton = ({ width, height, rounded }: BlogSkeletonProps) => {
  const style = {
    width,
    height,
    borderRadius: rounded,
  };
  return (
    <>
      <Skeleton style={style} />
    </>
  );
};

export default BlogItemSkeleton;
