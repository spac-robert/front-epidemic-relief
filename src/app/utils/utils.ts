export function generateLotId(): string {
  const currentDate = new Date();
  const randomNumber = Math.floor(Math.random());
  return currentDate.getTime().toString() + randomNumber.toString();
}
