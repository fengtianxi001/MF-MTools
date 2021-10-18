export const arrayChunk = (array, size) => {
	//把一个一维数组拆成二维数组
	const target = []
	for (let col = 0; col < size; col++) {
		const cache = []
		for (let row = col; row < array.length; row += size) {
			cache.push(array[row])
		}
		target.push(cache)
	}
	return target
}

export const arrayConcat = array => {
	//把二维数组拆成一维数组

	const max_length = array.reduce((prev, cur) => {
		return cur.length > prev ? cur.length : prev
	}, 0)

	let arr = []
	for (let row = 0; row < max_length; row++) {
		const cache = []
		for (let col = 0; col < array.length; col++) {
			if (array[col][row]) {
				cache.push(array[col][row])
			}
		}
		arr = arr.concat(cache)
	}
	return arr
}
