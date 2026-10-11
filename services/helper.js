export function addAccstats(objA, objB) {
  objA ??= {};
  objB ??= {};

  const result = {};
  const keys = new Set([
    ...Object.keys(objA),
    ...Object.keys(objB)
  ]);

  keys.delete("bonus");

  keys.forEach(key => {
    const valueA = objA[key];
    const valueB = objB[key];

    if (
      typeof valueA === "number" &&
      typeof valueB === "number"
    ) {
      result[key] = valueA + valueB;
    } else if (
      valueA !== null &&
      typeof valueA === "object" &&
      valueB !== null &&
      typeof valueB === "object"
    ) {
      result[key] = addAccstats(valueA, valueB);
    } else if (
      valueA !== null &&
      typeof valueA === "object"
    ) {
      result[key] = addAccstats(valueA, {});
    } else if (
      valueB !== null &&
      typeof valueB === "object"
    ) {
      result[key] = addAccstats({}, valueB);
    } else {
      result[key] = (valueA ?? 0) + (valueB ?? 0);
    }
  });

  return result;
}