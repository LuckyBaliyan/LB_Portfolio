import React, { useEffect, useState } from "react";

const InitialLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white text-3xl z-[1000]">
      Loading your experience...
    </div>
  );
};

export default InitialLoader;