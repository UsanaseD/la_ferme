// types.ts or any other file where you define types
export type Milk = {
  id: number;
  dateProd: string;
  quantity: number;
  description: string | null;
};

export type MilksArray = Milk[];
