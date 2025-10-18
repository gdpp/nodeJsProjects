const buildLegend = ({ name, isLegend }) => {
  return {
    id: new Date().getTime(),
    name,
    isLegend,
    description: isLegend ? "Legendary" : "Awesome",
  };
};

const obj = { name: "canserbero", isLegend: true };
const can = buildLegend(obj);

console.log(can);
