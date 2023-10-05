import { OPERATORS } from '#Constants/operators.js'
import { InvalidInputError } from '#Errors/invalid-input-error.js'

// 6.1 Crea y exporta la lógica de la validación y obtención del operador en una función
export function getOperator(standardizeInput) {
	// 5.6 - Declara variable que almacenará el operador
	let operator = ''
	for (const allowedOperator of OPERATORS) {
		// 5.5 - Valida que la entrada contiene alguno de los operadores establecidos
		if (standardizeInput.includes(allowedOperator)) {
			// 5.6 - Valida si ya hemos almacenado el operador o si en la entrada se repite el operador
			if (
				operator ||
				standardizeInput.indexOf(allowedOperator) !==
					standardizeInput.lastIndexOf(allowedOperator)
			) {
				// 6.4 - Creando una nueva instancia del error personalizado
				throw new InvalidInputError()
			}
			// 5.8 - Almacena el operador encontrado del input
			operator = allowedOperator
		}
	}

	return operator
}
