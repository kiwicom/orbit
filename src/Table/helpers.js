// @flow

export function getChidlName(child: ?React.Element<any>): string {
  if (!child) return "unknown";
  if (typeof child.type === "string") {
    return child.type;
  }
  return child.type.name;
}

export function isOdd(num: number): boolean {
  return num % 2 === 1;
}
