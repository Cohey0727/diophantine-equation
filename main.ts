const MAX = 2000;
const RANGE = [1, 100];

const elements = [
  ...[...Array(MAX)].map((_, i) => -i),
  ...[...Array(MAX)].map((_, i) => i),
].slice(1);

const result = {};

elements.forEach((x) => {
  elements.forEach((y) => {
    elements.forEach((z) => {
      const diophantine = Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3);
      if (RANGE[0] <= diophantine && diophantine <= RANGE[1]) {
        result[diophantine] = `x=${x}, y=${y}, z=${z}`;
      }
    });
  });
});

for (let i = RANGE[0]; i <= RANGE[1]; i++) {
  if (!result[i]) {
    console.log(`${i} is not found`);
  }
}
