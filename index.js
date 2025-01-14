const height = 5;

for (let num = 1; num <= height; num++) {
  let row = ""; 

  for (let space = 1; space <= height - num; space++) {
    row += " ";
  }

  for (let star = 1; star <= 2 * num - 1; star++) {
    row += "*";
  }

  console.log(row);
}

for (let num = height; num >= 1; num--) {
    let row = ""; 
  
    for (let space = 1; space <= height - num; space++) {
      row += " ";
    }
  
    for (let star = 1; star <= 2 * num - 1; star++) {
      row += "*";
    }
  
    console.log(row);
  }