function formatStringOfObject(obj: object): string {
  return JSON.stringify(obj, undefined, 4);
}

export default formatStringOfObject;
