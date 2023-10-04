import { promptQuestion } from '#Lib/prompt-question.js'

// --- 1° - Capturar la entrada del usuario por consola
// 4.3 - Obtiene la entrada por consola
const userInput = await promptQuestion('Introduce tu operación: ')
console.log(userInput)

// 2° - Validar la entrada y separar las partes de la misma en operandos y operador
// 3° - Realizar la operación
// 4° - Mostrar resultados por consola
