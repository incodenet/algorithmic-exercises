function generatePascalTriangle(num) {
  const triangle = [];
  const tree = [];
  const rows = Array.from({length: num}, (_, i) => i + 1)

  rows.map((v, i) => {
    const row = [];

    for(let j = 1; j <= v; j++) {
        row.push(1)
    }

    tree.push(row);
  });

  tree.reduce((prev, current) => {
    const row = current.map((item, i) => {    
      const isNotFirstOrLastItem = i !== 0 && i !== current.length - 1;

      if(isNotFirstOrLastItem) {
        const one = prev[i - 1];
        const two = prev[i];

        return one + two
      }

      return item
    })

    triangle.push(row)

    return row
  }, [])

  return triangle;
}

console.log(generatePascalTriangle(5));