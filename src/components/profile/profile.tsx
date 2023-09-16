import React, { FC, ReactElement } from "react";
interface IProfile {
  username: string;
}
export const Profile: FC<IProfile> = (props): ReactElement => {
  const { username } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-500 text-white mb-4">
        {username[0]}
      </div>
      <p className="text-2xl font-semibold text-gray-400 mb-2">
        Welcome , {username}
      </p>
      <p className="text-lg text-gray-500">
        This is your personal tasks manger
      </p>
    </div>
  );
};
