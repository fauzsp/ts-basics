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
