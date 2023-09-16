import React, { FC, ReactElement } from "react";
import { Dashbord } from "./pages/dashbord/dashbodrd";

const App: FC = (): ReactElement => {
  return (
    <div className="bg-gray-800 text-white h-screen">
      <Dashbord />
    </div>
  );
};

export default App;
