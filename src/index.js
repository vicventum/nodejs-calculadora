import { INVALID_INPUT } from '#Constants/messages.js'
import { OPERATORS } from '#Constants/operators.js'
import { promptQuestion } from '#Lib/prompt-question.js'

// --- 1° - Capturar la entrada del usuario por consola
const userAnswer = await promptQuestion('Introduce tu operación: ')

// --- 2° - Validar la entrada y separar las partes de la misma en operandos y operador
// 5.1 - Quitando los espacios al inicio y al final de la entrada del usuario
const standardizeInput = userAnswer.trim()

// 5.6 - Declara variable que almacenará el operador
let operator = ''
// 5.2 - Validando que la entrada del usuario no esté vacía
if (standardizeInput === '') {
	console.log(INVALID_INPUT)
} else {
	for (const allowedOperator of OPERATORS) {
		// 5.5 - Valida que la entrada contiene alguno de los operadores establecidos
		if (standardizeInput.includes(allowedOperator)) {
			// 5.6 - Valida si ya hemos almacenado el operador o si en la entrada se repite el operador
			if (
				operator ||
				standardizeInput.indexOf(allowedOperator) !==
					standardizeInput.lastIndexOf(allowedOperator)
			) {
				console.log(INVALID_INPUT)
				break
			}
			// 5.8 - Almacena el operador encontrado del input
			operator = allowedOperator
		}
	}
}
// 5.9 - Valida si no se ha encontrado un operador
if (!operator) {
	console.log(INVALID_INPUT)
}

// 3° - Realizar la operación
// 4° - Mostrar resultados por consola
