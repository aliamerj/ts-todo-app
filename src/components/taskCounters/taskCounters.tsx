import React, { FC, ReactElement } from "react";
import { Ring, RingColors } from "./ring";

export const TaskCounters: FC = (): ReactElement => {
  return (
    <div className="flex justify-between pt-10">
      <div className="flex flex-col justify-center items-center">
        <Ring color={RingColors.red} count={10} />
        <h1 className="pt-5 font-mono text-lg ">Todo</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Ring color={RingColors.yellow} count={3} />
        <h1 className="pt-5 font-mono text-lg ">In Progress</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Ring color={RingColors.green} count={5} />
        <h1 className="pt-5 font-mono text-lg ">Completed</h1>
      </div>
    </div>
  );
};
