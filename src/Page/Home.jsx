import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Common/Header";
import { useDispatch, useSelector } from "react-redux";
import ArrayContainer from "../Components/ArrayContainer";
import { FaPlay } from "react-icons/fa";
import { _bubbleSort, _handleAlgorithms } from "../Services/Algorithms";
import { _handleRandomArray } from "../util/utils";
import { FaPause } from "react-icons/fa6";

function Home() {
  const arrayRefs = useRef([]);
  const running = useSelector((state) => state.running);
  const dispatch = useDispatch();
  const currentAlgo = useSelector((state) => state.currentAlgo);
  const [inputArray, setInputArray] = useState("20, 30, 50, 89");
  const array = useSelector((state) => state.array);

  useEffect(() => {
    setInputArray(array.join(", "));
  }, [array]);

  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <div className="w-full h-full pt-16">
        <div className="flex items-center justify-center">
          <div className="flex items-end">
            {array.map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  ref={(el) => (arrayRefs.current[index] = el)}
                  className="flex items-end justify-center w-12 text-sm pb-2 bg-[#add8e6]"
                  style={{
                    height: `${value}px`,
                    border: "1px solid white",
                    margin: "10px 4px",
                  }}
                >
                  {/* {value} */}
                </div>
                <span className="text-white">{index}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 h-14 w-full left-0 flex items-center justify-between px-6">
        <div className="flex items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="text-white/80 mr-3">1.0x</div>
            {running ? (
              <div className="text-white cursor-pointer">
                <FaPause color="white" />
              </div>
            ) : (
              <div
                className="text-white cursor-pointer"
                onClick={() =>
                  _handleAlgorithms(currentAlgo, array, dispatch, arrayRefs)
                }
              >
                <FaPlay color="white" />
              </div>
            )}
          </div>
          <div
            className="bg-[#47aec3] py-2 px-6 text-sm font-bold mx-4 text-black cursor-pointer"
            onClick={() => {
              _handleRandomArray(dispatch);
            }}
          >
            Random
          </div>
          <div>
            <div className="w-72 h-9 flex items-center">
              <input
                type="text"
                className="w-full h-full px-4 outline-none"
                value={inputArray}
                onChange={(e) => setInputArray(e.target.value)}
              />
              <div className="bg-[#47aec3] h-full flex items-center justify-center px-6 cursor-pointer">
                Go
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-xs text-white/80 py-3">
          <div className="mx-4 cursor-pointer">ABOUT</div>
          <div className="mx-4 cursor-pointer">TERM OF USE</div>
          <div className="mx-4 cursor-pointer">PRIVACY POLICY</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
