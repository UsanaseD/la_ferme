
export interface Farmer {
  id: number;
  name: string;
  surname: string;
  salary: number;
  workerType: 'casual' | 'monthly'; 
  timeRecorded: string;
  balanceTime: string | null;
}

export type FarmersArray = Farmer[];
