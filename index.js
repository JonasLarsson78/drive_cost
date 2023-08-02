import promptSync from 'prompt-sync';
import chalk from 'chalk';
import { diriveCost } from './misc/calc.js'

const prompt = promptSync();

let distance = prompt(chalk.yellow('Hur lång har ni kört? (mil) '))
distance = distance.replace(',', '.')

let carConsumption = prompt(chalk.yellow('Hur mycket drar bilen? (liter/mil) '))
carConsumption = carConsumption.replace(',', '.')

let petrolPrice = prompt(chalk.yellow('Vad kostar bensinen? (kr/liter) '))
petrolPrice = petrolPrice.replace(',', '.')

const price = diriveCost(Number(distance), Number(carConsumption), Number(petrolPrice))

console.log()

console.log('Distance: ' + distance + ' mil')
console.log('Bilen drar: ' + carConsumption + ' liter/mil')
console.log('Bensinpris: ' + petrolPrice + ' kr/liter')
console.log()
console.log(chalk.blueBright('Din körkostnad blir: ') + chalk.red.bold.underline((Math.round(price) + ' kr')))
console.log()

