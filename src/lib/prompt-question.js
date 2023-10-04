import readline from 'node:readline/promises'
// import { promisify } from 'node:util'

// 4.1 - Crea la interfaz para obtener un input por consola
const consoleInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

// Versión usando `promisify`
/* const promptQuestion = promisify(consoleInterface.question).bind(consoleInterface,)
const userInput = await promptQuestion('Introduce tu operación: ')
console.log(userInput) */

// 4.2 - Exportando `consoleInterface.question` en `promptQuestion` pero manteniendo su contexto con `bind`
export const promptQuestion = consoleInterface.question.bind(consoleInterface)
