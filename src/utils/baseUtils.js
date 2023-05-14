export const BASE_UTILS = {
	getRandomIntInclusive: (min, max = 100) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		const bottomOffset = Math.floor(Math.random() * (max - min + 1) + min);
		return bottomOffset >= 100 ? 100 : bottomOffset;
	},
};
