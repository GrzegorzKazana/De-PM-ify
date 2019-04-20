import AvailableParameters from "../config/AvailableParameters";

//maps air quality parameter and value to color
//red -> >200% norm
//green -> <100% norm
//linear gradient in between
export const parameterToColor = (value, parameter) => {
  const param = AvailableParameters.find(x => x.value === parameter);
  if (!param) return "#000";
  const color = Math.max(
    120 * (1 - Math.max(value - param.norm, 0) / param.norm),
    0
  );
  return `hsl(${color}, 100%, 40%)`;
};
