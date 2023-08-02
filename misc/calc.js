export const diriveCost = (distance = 0, carConsumption = 0, petrolPrice = 0) => {
  return carConsumption * distance * petrolPrice
}