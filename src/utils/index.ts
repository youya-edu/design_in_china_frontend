// Vue will add proxy to some object, which is not the original one.
// Some operations like save in IndexedDB need this function.
// eslint-disable-next-line
export function purifyData(data: any): any {
  return JSON.parse(JSON.stringify(data));
}
