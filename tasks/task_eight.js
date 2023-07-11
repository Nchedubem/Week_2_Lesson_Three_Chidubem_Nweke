// Generate a multiplication table
for (let i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      // Calculate the product
      let product = i * j;
      
      // Log the product to the console
      console.log(i + " * " + j + " = " + product);
    }
  }