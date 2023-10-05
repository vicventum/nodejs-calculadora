// 6.3 - Crea un nueva clase para un error personalizado cuando la entrada no sea válida
export class InvalidInputError extends Error {
	constructor() {
		super('ENTRADA NO VÁLIDA')
	}
}
