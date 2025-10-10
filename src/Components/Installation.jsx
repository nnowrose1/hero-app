import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getAppFromLS } from "../utility/localStorage";
import InstalledApp from "./InstalledApp";
import { removeAppfromLS } from "../utility/localStorage";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sorted, setSorted] = useState("Sort By Downloads ⬇️");
  const appData = useLoaderData();
  // console.log(appData);

  const handleUninstall = (id) => {
    const updatedInstalledApps = installedApps.filter((a) => a.id !== id);
    toast("App Uninstalled Successfully!");
    setInstalledApps(updatedInstalledApps);
    removeAppfromLS(id);
  };

  useEffect(() => {
    const storedAppIds = getAppFromLS();
    // console.log(storedAppIds);
    const storedApps = [];
    for (const id of storedAppIds) {
      const app = appData.find((app) => app.id === id);
      if (app) {
        storedApps.push(app);
      }
    }
    // console.log(storedApps);
    setInstalledApps(storedApps);
  }, [appData]);

  const handleAscendingSort = () => {
        const sortedApps = [...installedApps].sort(function(a,b) {return a.downloads - b.downloads});
    setInstalledApps(sortedApps);
    setSorted("Low-High ⬇️");
  }

  const handleDescendingSort = () => {
    const descendingSortedApps = [...installedApps].sort(function(a,b){
        return b.downloads - a.downloads
    });
    setInstalledApps(descendingSortedApps);
    setSorted("High-Low ⬇️");
  }

  return (
    <div className="bg-[#D9D9D9] pt-20">
      <div className="text-center">
        <h3 className="font-bold text-5xl text-[#001931]">
          Your Installed Apps
        </h3>
        <p className="text-[#627382] text-xl mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="container mx-auto flex flex-col  md:flex-row gap-4 justify-between items-center mt-11 mb-6">
        <p className="font-semibold text-2xl text-black">
          ({installedApps.length}) Apps Found
        </p>
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-[#627382] bg-transparent border-gray-400 border-1"
          >
            {sorted}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
             <li onClick={() => setSorted("Sort By Downloads ⬇️")}>
              <a>Sort By Downloads ⬇️</a>
            </li>
            <li onClick={handleAscendingSort}>
              <a>Low-High </a>
            </li>
            <li onClick={handleDescendingSort}>
              <a>High-Low </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto pb-20">
        {installedApps.map((installedApp) => (
          <InstalledApp
            key={installedApp.id}
            installedApp={installedApp}
            handleUninstall={handleUninstall}
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
