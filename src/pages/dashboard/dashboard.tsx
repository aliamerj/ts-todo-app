import React, { FC, ReactElement } from "react";
import { SidBar } from "../../components/sidebar/sidebar";
import { TaskArea } from "../../components/taskArea/taskArea";

export const Dashboard: FC = (): ReactElement => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="flex w-3/4 h-3/4 shadow-lg">
        <div className="w-8/12 bg-gray-950">
          <TaskArea />
        </div>
        <div className="w-4/12 bg-gray-900">
          <SidBar />
        </div>
      </div>
    </div>
  );
};
