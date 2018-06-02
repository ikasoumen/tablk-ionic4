function snakeToCamelString(str: string) {
  return str.replace(/_[a-zA-Z]/g, s => s.charAt(1).toUpperCase());
}

function camelToSnakeString(str: string) {
  return str.replace(/[A-Z]/g, s => `_${s.toLowerCase()}`);
}

export enum changeJSONObjectType {
  SnakeToCamel,
  CamelToSnake
}

export function changeJSONObject(obj: object, type: changeJSONObjectType) {
  let changeStringFunction: (str: string) => string;
  switch (type) {
    case changeJSONObjectType.CamelToSnake:
      changeStringFunction = camelToSnakeString;
      break;
    case changeJSONObjectType.SnakeToCamel:
      changeStringFunction = snakeToCamelString;
      break;
    default:
      return obj;
  }

  if (Array.isArray(obj)) {
    const ret: any[] = [];
    for (const value of obj) {
      ret.push(
        typeof value === "object" ? changeJSONObject(value, type) : value
      );
    }
    return ret;
  } else {
    const ret: any = {};
    for (const [key, value] of Object.entries(obj)) {
      ret[changeStringFunction(key)] =
        typeof value === "object" ? changeJSONObject(value, type) : value;
    }
    return ret;
  }
}
