class Utils {
	static deepClone(value) {
		return JSON.parse(JSON.stringify(value))
	}
}

export default Utils
