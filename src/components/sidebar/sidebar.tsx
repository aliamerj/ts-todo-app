import React, { FC, ReactElement } from "react";
import { CreateTaskForm } from "../createTaskForm/createTaskForm";
import { Profile } from "../profile/profile";

export const SidBar: FC = (): ReactElement => {
  return (
    <div className="flex justify-center flex-col pt-12">
      <Profile username="Ali" />
      <CreateTaskForm />
    </div>
  );
};
