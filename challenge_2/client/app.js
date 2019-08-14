
// Converts an object to a CSV formatted string
const jsonToCsv = (data) => {
  let csvArray = [];
  let csvKeys = [];
  csvArray.push(csvKeys);

  (Object.keys(data)).map((key) => {
    if (key !== 'children') {
      csvKeys.push(key);
    }
  });

  // Inner recursive function
  const recurseJsonToCsv = (child) => {
    let childKeys = Object.keys(child);
    let childValues = [];
    childKeys.forEach((key) => {
      if (!csvKeys.includes(key) && key !== 'children') {
        csvKeys.push(key);
      }
    })
    csvKeys.forEach((key) => {
      if (typeof child[key] !== undefined) {
        childValues.push(child[key]);
      } else {
        childValues.push('');
      }
    })
    csvArray.push(childValues);
    if (child.children.length) {
      child.children.forEach((childArray) => {
        recurseJsonToCsv(childArray);
      });
    }
  };

  recurseJsonToCsv(data);

  let csvString = csvArray.join('\n');
  return csvString;
};
