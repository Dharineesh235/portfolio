'use client';

import React, { useState } from "react";

type props = { progress: number; skill: string; }

const ProgressBar: React.FC<props> = ({ progress, skill }) => {

  return (
    <div className="w-full">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <span className="text-sm md:text-lg font-semibold text-white">{skill}</span>
          <span className="text-sm md:text-lg font-semibold text-white">{progress}%</span>
        </div>
        <div className="flex mb-2">
          <div className="relative flex-1">
            <div className="flex mb-2">
              <div className="flex w-full bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full bg-yellow-500 transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;