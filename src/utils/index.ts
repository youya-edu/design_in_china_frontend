export function noChangeStrEnum<T extends string>(
  ...o: Array<T>
): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

export function strEnum<T extends string>(
  cb: (s: string) => string,
  ...o: Array<T>
): { [K in T]: string } {
  return o.reduce((res, key) => {
    res[key] = cb(key);
    return res;
  }, Object.create(null));
}

export function upperSnakeToCamelStrEnum<T extends string>(
  ...o: Array<T>
): { [K in T]: string } {
  return strEnum(upperSnakeCaseToCamelCase, ...o);
}

export function camelToUpperSnakeStrEnum<T extends string>(
  ...o: Array<T>
): { [K in T]: string } {
  return strEnum(camelCaseToUpperSnakeCase, ...o);
}

function upperSnakeCaseToCamelCase(s: string) {
  const temp: string = s
    .split("_")
    .map((each) => `${each[0]}${each.slice(1).toLowerCase()}`)
    .join("");
  return `${temp[0].toLowerCase()}${temp.slice(1)}`;
}

function camelCaseToUpperSnakeCase(s: string) {
  return s
    .split(/([A-Z][a-z]+)/)
    .filter(function (e) {
      return e;
    })
    .join("_")
    .toUpperCase();
}

export function toLowerCaseStrEnum<T extends string>(
  ...o: Array<T>
): { [K in T]: string } {
  return strEnum((s) => s.toLocaleLowerCase(), ...o);
}

// Vue will add proxy to some object, which is not the original one.
// Some operations like save in IndexedDB need this function.
// eslint-disable-next-line
export function purifyData(data: any): any {
  return JSON.parse(JSON.stringify(data));
}
