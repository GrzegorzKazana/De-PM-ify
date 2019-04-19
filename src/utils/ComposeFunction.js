//composes function left to right
export const composeF = (...functions) => x =>
  functions.reduce((accumulated, func) => func(accumulated), x);
