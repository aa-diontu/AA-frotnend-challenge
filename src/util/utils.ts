export const convertByptesToMegabytes = (byteSize: number): number => {
    const sizeMegabytes = byteSize / 1000000;
    return roundToNearestDecimal(sizeMegabytes);
}

/**
 * round number to nearest decimal.
 * @param value some number
 * @returns number rounded to nearest decimal
 */
export const roundToNearestDecimal = (value: number): number => {
    return Math.round(value * 10) / 10;
}