import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["香り", "コク", "酸味", "苦味", "甘み"],
  datasets: [
    {
      label: "テイスティング評",
      data: ["4", "2", "2", "2", "5"],
      fill: true,
      backgroundColor: "#A79FA7",
      borderColor: "#EDEBE9",
      borderWidth: 2,
      pointBackgroundColor: "#000",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#000",
      innerHeight: "200px",
    },
  ],
};

export const Graph = (props: any) => {
  return <Radar data={data} />;
};
