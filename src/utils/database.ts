// Farmers array 
const getCurrentDate = (): string => {
  const today = new Date();
  const year = today.getFullYear().toString().padStart(4, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
  
export const farmers = [
];

//MIlk Prod Array
export const milks = [
];
  