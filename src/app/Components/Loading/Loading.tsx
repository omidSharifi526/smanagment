import React from "react";

type Props = {};

const Loading: React.FC<Props> = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center h-screen min-h-[400px] gap-4 ">
      <span
        className="text-center font-bold text-3xl bg-gradient-to-r from-red-500 via-[#FF0000] to-[#255D5F] bg-clip-text text-transparent"
      >
        فروش یار
      </span>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default Loading;
