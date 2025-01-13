import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { HiShare } from "react-icons/hi";

function MemeLike() {
  const [Liked, SetLiked] = useState(false);
  return (
    <div className="flex gap-2 scale-125">
      <div onClick={() => SetLiked(!Liked)}>
        {Liked ? <FcLike /> : <FcLikePlaceholder />}
      </div>
      <HiShare />
    </div>
  );
}

export default MemeLike;
