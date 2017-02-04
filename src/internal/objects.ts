export const flipLookup = (obj: { [key: string]: number }): { [key: number]: string } => {
  const result = {};
  for (let name in obj) {
    result[obj[name]] = name;
  }
  return result;
};

