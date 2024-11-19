export function removeEmptyProperties(object: { [key: string]: any }) {
  const newObject = { ...object };
  for (let key in newObject) {
    if (newObject[key] === undefined || newObject[key] === null) {
      delete newObject[key];
    }
  }
  return newObject;
}
