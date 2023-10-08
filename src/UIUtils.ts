import { WineData } from "./WineDataSet";

// Calculate the mean
export const calculateMean = (data: number[]): number => {
  // Calculate the sum of all numbers in the array using the reduce method
  const sum = data.reduce((acc, value) => acc + value, 0);
  // Divide the sum by the number of elements to get the mean
  return sum / data.length;
};

// Calculate the median
export const calculateMedian = (data: number[]): number => {
  // Sort the input data in ascending order
  const sortedData = data.sort((a, b) => a - b);
  // Find the middle index of the sorted data
  const middle = Math.floor(sortedData.length / 2);
  // Check if the array has an even number of elements
  if (sortedData.length % 2 === 0) {
    // If even, return the average of the two middle values
    return (sortedData[middle - 1] + sortedData[middle]) / 2;
  } else {
    // If odd, return the middle value
    return sortedData[middle];
  }
};

// Calculate the mode
export const calculateMode = (data: number[]): number | undefined => {
  // Create a map to store the frequency of each unique value in the array
  const frequencyMap = new Map<number, number>();
  // Iterate through the input data to count the frequency of each value
  data.forEach((value) => {
    frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
  });

  let mode: number | undefined;
  let maxFrequency = 0;

  // Iterate through the frequency map to find the mode
  frequencyMap.forEach((frequency, value) => {
    if (frequency > maxFrequency) {
      // Update the mode and maximum frequency when a higher frequency is found
      mode = value;
      maxFrequency = frequency;
    }
  });
  // Return the mode or undefined if no mode exists
  return mode;
};

export const calculateGamma = (data: WineData): number => {
  return (data.Ash * data.Hue) / data.Magnesium;
};