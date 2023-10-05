import { InvalidInputError } from '#Errors/invalid-input-error.js'
import { getOperator } from '#Lib/get-operator.js'
import { promptQuestion } from '#Lib/prompt-question.js'

try {
	// --- 1° - Capturar la entrada del usuario por consola
	const userAnswer = await promptQuestion('Introduce tu operación: ')

	// --- 2° - Validar la entrada y separar las partes de la misma en operandos y operador
	// 5.1 - Quitando los espacios al inicio y al final de la entrada del usuario
	const standardizeInput = userAnswer.trim()
	// 6.5 - Creando `try/catch` para capturar los errores
	// 5.2 - Validando que la entrada del usuario no esté vacía
	if (standardizeInput === '') {
		// 6.4 - Creando una nueva instancia del error personalizado
		throw new InvalidInputError()
	}

	// 6.2 - Obteniendo el operador desde la función
	const operator = getOperator(standardizeInput)

	// 5.9 - Valida si no se ha encontrado un operador
	if (!operator) {
		// 6.4 - Creando una nueva instancia del error personalizado
		throw new InvalidInputError()
	}
} catch (error) {
	// 6.6 - Comprobando si el error lanzado es del tipo error de error personalizado y lo muestra
	if (error instanceof InvalidInputError) console.error(error)
	// 6.7 - En cambio, si es un tipo de error diferente, lo muestra junto las lineas que lo produjeron
	else
		console.error(
			`Error no controlado: ${error.message}\n Stack: ${error.stack}`,
		)
}

// 3° - Realizar la operación
// 4° - Mostrar resultados por consola
