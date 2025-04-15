"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const ChartsDoughnut = ({ datasets = [], labels = [] }) => {
   /** @type {import('react-chartjs-2').Doughnut} */
   const data = {
      labels,
      datasets,
      rotation: 180,
   };

return (
    <div className="my-4 pt-[100%] relative">
        <b className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{Math.round(datasets[0].data[1])}%</b>
        <div className="p-4 absolute inset-0">
            <Doughnut data={data} />
        </div>
    </div>
);
};

export default ChartsDoughnut;
