let marks = [40, 55, 70, 85, 30];
let totalMarks = marks.reduce((total, mark) => total + mark, 0);
console.log("Total Marks:", totalMarks);
let first70OrMore = marks.find(mark => mark >= 70);
console.log("First 70 or more:", first70OrMore);
let indexOf85 = marks.findIndex(mark => mark === 85);
console.log("Index of 85:", indexOf85);