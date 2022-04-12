interface Coordinates {
  x: number;
  y: number;
}

function parseCoordinatesFromObject(obj: Coordinates): Coordinates {
  return { ...obj };
}

function parseCoordinatesFromNumbers(x: number, y: number): Coordinates {
  return { x, y };
}
function parseCoordinate(obj: Coordinates): Coordinates;
function parseCoordinate(x: number, y: number): Coordinates;
function parseCoordinate(x: string, y: string): Coordinates;
function parseCoordinate(args1: unknown, args2?: unknown): Coordinates {
  let coord: Coordinates = {
    x: 0,
    y: 0,
  };
  if (typeof args1 === "object") {
    coord = {
      ...(args1 as Coordinates),
    };
  } else if (typeof args1 === "string") {
    (args1 as string).split(",").forEach((element) => {
      const [key, value] = element.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    coord = {
      x: args1 as number,
      y: args2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 45, y: 55 }));
console.log(parseCoordinate("x: 52", "y: 32"));
