import React from "react";
import { useSelector } from "react-redux";

function ArrayContainer() {
  const array = useSelector((state) => state.array);
  return (
    <div className="w-full h-full pt-16">
      <div className="flex items-center justify-center">
        <div className="flex items-end">
          {array.map((value, index) => (
            <div className="flex flex-col items-center">
              <div
                key={index}
                // ref={(el) => (arrayRefs.current[index] = el)}
                className="flex items-end justify-center w-12 text-sm pb-2 bg-[#add8e6]"
                style={{
                  height: `${value}px`,
                  border: "1px solid white",
                  margin: "10px 4px",
                  transition: "0.5s all ease-in",
                }}
              >
                {value}
              </div>
              <span className="text-white">{index}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArrayContainer;
