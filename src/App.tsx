import React from "react";
import { wineData } from "./WineDataSet"; // Import the wine dataset
import {
  calculateGamma,
  calculateMean,
  calculateMedian,
  calculateMode,
} from "./UIUtils"; // Import utility functions

export const App = (): React.ReactElement => {
  // Calculate Gamma for each data point
  wineData.forEach((wineClass) => {
    wineClass.data.forEach((data) => {
      data.Gamma = calculateGamma(data);
    });
  });

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Measure</th>
            {/* Render table headers with class names */}
            {wineData.map((wineClass) => (
              <th
                style={{ border: "1px solid black" }}
                key={wineClass.className}
              >
                {wineClass.className}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>Flavanoids Mean</td>
            {/* Calculate and render Flavanoids mean*/}
            {wineData.map((wineClass) => (
              <td
                style={{ border: "1px solid black", textAlign: "center" }}
                key={`${wineClass.className}-mean`}
              >
                {calculateMean(
                  wineClass.data.map((data) => data.Flavanoids)
                ).toFixed(3)}
              </td>
            ))}
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>Flavanoids Median</td>
            {/* Calculate and render Flavanoids median*/}
            {wineData.map((wineClass) => (
              <td
                style={{ border: "1px solid black", textAlign: "center" }}
                key={`${wineClass.className}-median`}
              >
                {calculateMedian(
                  wineClass.data.map((data) => data.Flavanoids)
                ).toFixed(3)}
              </td>
            ))}
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>Flavanoids Mode</td>
            {/* Calculate and render Flavanoids mode*/}
            {wineData.map((wineClass) => (
              <td
                style={{ border: "1px solid black", textAlign: "center" }}
                key={`${wineClass.className}-mode`}
              >
                {calculateMode(wineClass.data.map((data) => data.Flavanoids))
                  ? calculateMode(
                      wineClass.data.map((data) => data.Flavanoids)
                    )?.toFixed(3)
                  : "0"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Measure</th>
            {/* Render table headers with class names */}
            {wineData.map((wineClass) => (
              <th
                style={{ border: "1px solid black" }}
                key={wineClass.className}
              >
                {wineClass.className}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>Gamma Mean</td>
            {/* Calculate and render Gamma mean*/}
            {wineData.map((wineClass) => (
              <td
                style={{ border: "1px solid black", textAlign: "center" }}
                key={`${wineClass.className}-mean`}
              >
                {calculateMean(
                  wineClass.data.map((data) => data.Gamma)
                ).toFixed(3) || 0}
              </td>
            ))}
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>Gamma Median</td>
            {/* Calculate and render Gamma median*/}
            {wineData.map((wineClass) => (
              <td
                style={{ border: "1px solid black", textAlign: "center" }}
                key={`${wineClass.className}-median`}
              >
                {calculateMedian(
                  wineClass.data.map((data) => data.Gamma)
                ).toFixed(3) || 0}
              </td>
            ))}
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>Gamma Mode</td>
            {/* Calculate and render Gamma mode*/}
            {wineData.map((wineClass) => (
              <td
                style={{ border: "1px solid black", textAlign: "center" }}
                key={`${wineClass.className}-mode`}
              >
                {calculateMode(wineClass.data.map((data) => data.Gamma))
                  ? calculateMode(
                      wineClass.data.map((data) => data.Gamma)
                    )?.toFixed(3)
                  : 0}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
