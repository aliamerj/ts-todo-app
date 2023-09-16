import React, { FC, ReactElement } from "react";
import { Dashboard } from "./pages/dashboard/dashboard";

const App: FC = (): ReactElement => {
  return (
    <div className="bg-gray-800 text-white h-screen">
      <Dashboard />
    </div>
  );
};

export default App;
