import React, { FC, ReactElement } from "react";

export enum RingColors {
  red,
  green,
  yellow,
}

interface IRing {
  color: RingColors;
  count: number;
}
export const Ring: FC<IRing> = (props): ReactElement => {
  const { color, count } = props;
  if (color == RingColors.red) {
    return (
      <div className="relative">
        <div className="w-20 h-20 bg-transparent border-4 border-red-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-xl font-bold">
          {count}
        </div>
      </div>
    );
  }
  if (color === RingColors.green) {
    return (
      <div className="relative">
        <div className="w-20 h-20 bg-transparent border-4 border-green-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-xl font-bold">
          {count}
        </div>
      </div>
    );
  }
  if (color === RingColors.yellow) {
    return (
      <div className="relative">
        <div className="w-20 h-20 bg-transparent border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-xl font-bold">
          {count}
        </div>
      </div>
    );
  }
  return <></>;
};
