import { format } from "date-fns";
import React, { FC, ReactElement } from "react";
import { TaskCounters } from "../taskCounters/taskCounters";

export const TaskArea: FC = (): ReactElement => {
  return (
    <div className="pt-12 pl-10 pr-10">
      <h1 className="text-3xl italic font-bold">
        Status Of Your Tasks on {format(new Date(), "PPPP")}{" "}
      </h1>
      <TaskCounters />
    </div>
  );
};
