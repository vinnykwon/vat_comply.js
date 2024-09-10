# vat_comply.js
Web-API for [vatcomply.com](https://vatcomply.com/) an free API service for vat number validation, user ip geolocation and foreign exchange rates published by the European Central Bank

## Example
```JavaScript
async function main() {
	const { VatComply } = require("./vat_comply.js");
	const vatComply = new VatComply()
	const latestRates = await vatComply.getLatestRates()
	console.log(latestRates)
}

main()
```
