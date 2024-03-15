export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	get code() {
		return this._code;
	}

	set name(newCode) {
		this._code = newwCode;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}

	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}
