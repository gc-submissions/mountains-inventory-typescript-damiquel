import Mountain from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

export const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  if (mountains.length) {
    let currentTallestMountain = mountains[0];
    mountains.forEach((item) => {
      if (item.height > currentTallestMountain.height) {
        currentTallestMountain = item;
      }
    });
    return currentTallestMountain.name;
  } else {
    return "";
  }
};
