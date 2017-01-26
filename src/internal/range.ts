export const range = (start: number, length: number): number[] => {
    const result: number[] = [];
    for (let i = start, len = start + length; i < len; i++) {
        result.push(0);
    }
    return result;
};
