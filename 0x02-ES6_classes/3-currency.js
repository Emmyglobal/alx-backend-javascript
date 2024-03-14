export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	//Getter and setter for 'code'
	get code() {
		return this._code;
	}

	set name(newCode) {
		if (typeof newCode === 'string') {
			this._code = newwCode;
		}
	}

	// Getter and setter for 'name'
	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof newName === 'string') {
			this._name = newName;
		}
	}
	
	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}
