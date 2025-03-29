import React from "react";

const ReactionBar = ({ reactions }: { reactions: string[] }) => {
  return (
    <div className="w-full bg-[#0c2333] text-white text-sm tracking-wide px-4 py-2 flex justify-center items-center gap-4">
      {reactions.map((reaction, index) => (
        <span key={index} className="uppercase">
          {reaction}
        </span>
      ))}
    </div>
  );
};

export default ReactionBar;
