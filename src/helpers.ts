import fs from "fs";

export function toDict(numbers: number[]) {
	return numbers.reduce((acc, x) => {
		acc[x] = true
		return acc
	}, {})
}
export const sortHighest = (a: number, b: number) => {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
};

export function count(list: number[]) {
	return list.reduce((total, current) => total + current, 0);
}

export const prepareInput = (path: string) => {
	return fs
		.readFileSync(path, { encoding: "utf8" })
		.replace(/(\n)|(\r)|(\r\n)/g, "\n")
		.split("\n")
    .filter(Boolean)
};

export const getLines = (path: string) => {
	return fs
		.readFileSync(path, { encoding: "utf8" })
		.replace(/(\n)|(\r)|(\r\n)/g, "\n");
	// .split('\n')
};

// prepareInput('./src/2022/day-01-calorie-counting/data-part-1.txt')
