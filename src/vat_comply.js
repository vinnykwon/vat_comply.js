class VatComply {
	constructor() {
		this.api = "https://api.vatcomply.com"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async validateVat(vatNumber) {
		const response = await fetch(
			`${this.api}/vat?vat_number=${vatNumber}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getLatestRates() {
		const response = await fetch(
			`${this.api}/rates`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBaseRate(currency = "USD") {
		const response = await fetch(
			`${this.api}/rates?base=${currency}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getHistoricalRates(date = "1999-01-04") {
		const response = await fetch(
			`${this.api}/rates?date=${date}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCurrencies() {
		const response = await fetch(
			`${this.api}/currencies`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getGeoLocation() {
		const response = await fetch(
			`${this.api}/geolocate`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {VatComply}
