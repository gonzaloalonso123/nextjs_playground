export const sleep = async (miliseconds: number) =>
  new Promise((resolve) => setTimeout(() => resolve(true), miliseconds));
