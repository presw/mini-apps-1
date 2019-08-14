
// Converts an object to a CSV formatted string
const jsonToCsv = (string) => {
  let data = string.slice(0, -1);
  data = JSON.parse(data);
  console.log('DATA:', data);
  let csvArray = [];
  let csvKeys = [];
  csvArray.push(csvKeys);

  (Object.keys(data)).map((key) => {
    if (key !== 'children') {
      csvKeys.push(key);
    }
  });

  // Inner recursive function
  const recurseJsonToCsv = (node) => {
    let nodeKeys = Object.keys(node);
    let nodeValues = [];
    nodeKeys.forEach((key) => {
      if (!csvKeys.includes(key) && key !== 'children') {
        csvKeys.push(key);
      }
    })
    csvKeys.forEach((key) => {
      if (typeof node[key] !== undefined) {
        nodeValues.push(node[key]);
      } else {
        nodeValues.push('');
      }
    })
    csvArray.push(nodeValues);
    console.log('Children:', node);
    if (node.children) {
      node.children.forEach((childArray) => {
        recurseJsonToCsv(childArray);
      });
    }
  };

  recurseJsonToCsv(data);

  let csvString = csvArray.join('\n');
  return csvString;
};

module.exports.jsonToCsv = jsonToCsv;
