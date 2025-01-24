export const addToFrontAndEnd: {
  (numberOfElementsAtFront: number, array: any[]): any[];
  (
    numberOfElementsAtFront: number,
    numberOfElementsAtEnd: number,
    array: any[]
  ): any[];
} = (
  numberOfElementsAtFront: number,
  numberOfElementsAtEnd: number | any[],
  array?: any[]
): any[] => {
  // If the second argument is an array
  if (Array.isArray(numberOfElementsAtEnd)) {
    if (
      numberOfElementsAtFront <= 0 ||
      numberOfElementsAtFront > numberOfElementsAtEnd.length
    )
      return numberOfElementsAtEnd; // Return the original array if conditions are not met
    const firstElements = numberOfElementsAtEnd.slice(
      0,
      numberOfElementsAtFront
    );
    const lastElements = numberOfElementsAtEnd.slice(-numberOfElementsAtFront);
    return lastElements.concat(numberOfElementsAtEnd, firstElements);
  }

  // If the second argument is a number
  if (array && typeof numberOfElementsAtEnd === "number") {
    if (
      numberOfElementsAtFront <= 0 ||
      numberOfElementsAtFront > array.length ||
      numberOfElementsAtEnd <= 0 ||
      numberOfElementsAtEnd > array.length
    ) {
      return array; // Return the original array if conditions are not met
    }
    const firstElements = array.slice(0, numberOfElementsAtEnd);
    const lastElements = array.slice(-numberOfElementsAtFront);
    return lastElements.concat(array, firstElements);
  }

  return []; // Default return if no conditions are met
};
