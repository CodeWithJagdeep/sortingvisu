import React, { useEffect, useState } from "react";
import Logo from "../../images/assets/logo.png";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("BUBBLE SORT");

  const [availableAlgo, setAvailableAlgo] = useState([
    "BUBBLE SORT",
    "SELECTION SORT",
    "INSERTION SORT",
    "MERGE SORT",
    "QUICK SORT",
  ]);

  useEffect(() => {
    dispatch({
      type: "currentAlgo",
      payload: activeTab,
    });
  }, [activeTab]);

  return (
    <>
      <div className="flex items-center justify-between w-full pb-3 pt-5 px-16">
        <div className="flex items-center">
          <div className="mr-10">
            <img src={Logo} alt="app_logo" className="w-10" />
          </div>
          <div className="text-white/70 font-bold text-sm flex items-center">
            {availableAlgo.map((algos, index) => {
              return (
                <div
                  onClick={() => {
                    setActiveTab(algos);
                  }}
                  className={`${
                    algos === activeTab
                      ? "text-[#47aec3]"
                      : "text-white/80 hover:underline hover:decoration-slate-50"
                  } mx-4 cursor-pointer `}
                >
                  {activeTab === algos ? algos : algos.slice(0, 3)}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {/* <div className="text-white/70 font-bold text-sm flex items-center py-2 px-6 border-white/70 rounded-md border">
            Login
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
