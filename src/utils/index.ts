export const padZero = (num: number): string => {
  return num.toString().padStart(2, "0");
};

export const strip = (no: string) => no?.replace(/\D/g, "");
