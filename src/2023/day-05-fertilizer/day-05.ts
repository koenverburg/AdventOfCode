import { count } from "../../helpers";

function createGroups(stringArray: string[]): string[][] {
	const groups: string[][] = [];
	let currentGroup: string[] = [];

	for (const item of stringArray) {
		if (item.includes(":")) {
			// Create a new group when ':' is found
			if (currentGroup.length > 0) {
				groups.push([...currentGroup]);
			}
			currentGroup = [item];
		} else {
			// Add items without ':' to the current group
			currentGroup.push(item);
		}
	}

	// Add the last group
	if (currentGroup.length > 0) {
		groups.push([...currentGroup]);
	}

	return groups;
}

let MAX_VALUE = 0;
function createRange(line: string) {
	const items = line.split(" ");
	const range = {
		dest: +items[0],
		src: +items[1],
		range: +items[2],
	};

	MAX_VALUE = Math.max(
		MAX_VALUE,
		range.src + range.range,
		range.dest + range.range,
	);

  return range
}

export const part1 = (inputs: string[]) => {
	const seedValues = inputs.shift().split(":")[1].split(" ").filter(Boolean);
	console.log(seedValues);

	const rawMaps = createGroups(inputs);
	console.log(rawMaps);

  console.log(createRange(rawMaps[0][1]));
  

	return count([0]);
};

export const part2 = (inputs: string[]) => {
	const r = inputs.length;

	return count([]);
};
