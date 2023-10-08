export interface WineData {
  Alcohol: number;
  MalicAcid: number;
  Ash: number;
  AlcalinityOfAsh: number;
  Magnesium: number;
  TotalPhenols: number;
  Flavanoids: number;
  NonflavanoidPhenols: number;
  Proanthocyanins: number;
  ColorIntensity: number;
  Hue: number;
  OD280OD315OfDilutedWines: number;
  Unknown: number;
  Gamma: number; // New property for Gamma
}

export interface WineClassData {
  className: string;
  data: WineData[];
}

export const wineData: WineClassData[] = [
  {
    className: "Class 1",
    data: [
      {
        Alcohol: 1,
        MalicAcid: 14.23,
        Ash: 1.71,
        AlcalinityOfAsh: 2.43,
        Magnesium: 15.6,
        TotalPhenols: 127,
        Flavanoids: 2.8,
        NonflavanoidPhenols: 3.06,
        Proanthocyanins: 0.28,
        ColorIntensity: 2.29,
        Hue: 5.64,
        OD280OD315OfDilutedWines: 1.04,
        Unknown: 3.92,
        Gamma:4.22
      },
    ],
  },
  {
    className: "Class 2",
    data: [
      {
        Alcohol: 1,
        MalicAcid: 13.2,
        Ash: 1.78,
        AlcalinityOfAsh: 2.14,
        Magnesium: 11.2,
        TotalPhenols: 100,
        Flavanoids: 2.65,
        NonflavanoidPhenols: 2.76,
        Proanthocyanins: 0.26,
        ColorIntensity: 1.28,
        Hue: 4.38,
        OD280OD315OfDilutedWines: 1.05,
        Unknown: 3.4,
        Gamma:5.23
      },
    ],
  },
  {
    className: "Class 3",
    data: [
      {
        Alcohol: 1,
        MalicAcid: 13.16,
        Ash: 2.36,
        AlcalinityOfAsh: 2.67,
        Magnesium: 18.6,
        TotalPhenols: 101,
        Flavanoids: 2.8,
        NonflavanoidPhenols: 3.24,
        Proanthocyanins: 0.3,
        ColorIntensity: 2.81,
        Hue: 5.68,
        OD280OD315OfDilutedWines: 1.03,
        Unknown: 3.17,
        Gamma:23.3
      },
    ],
  },
];
