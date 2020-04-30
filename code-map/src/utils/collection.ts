const filterV1 = (obj:any, predicate:any) => {
	var result:any = {}, key

	for (key in obj) {
		if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
			result[key] = obj[key]
		}
	}

	return result
}

const filter = (obj:any, predicate:any) =>
	Object.keys(obj)
		.filter(key => predicate(obj[key]))
		// eslint-disable-next-line no-sequences
		.reduce((res:any, key:any) => (res[key] = obj[key], res), {})

const isEmpty = (val:any) => {
	if (typeof val === 'number') {
		return false
	} 

	if (!val) {
		return true
	}

	if (Array.isArray(val)) {
		return val.length === 0
	}

	return Object.keys(val).length === 0 && val.constructor === Object
}

const areValuesEmpty = (obj:any) => 
  Object.values(obj).every(v => isEmpty(v))

const areIntersected = (arr1:any, arr2:any) => 
	!isEmpty(arr1) && 
	!isEmpty(arr1) && 
	arr1.filter((val:any) => arr2.indexOf(val) !== -1).length > 0

const valsToString = 
  (obj:any) => obj ? Object.values(obj).toString() : ''

const copy = (src:any) => JSON.parse(JSON.stringify(src)) 

export default { copy,
	filter, isEmpty, areValuesEmpty, 
	areIntersected, valsToString
}