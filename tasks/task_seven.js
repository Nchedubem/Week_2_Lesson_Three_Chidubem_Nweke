// Loop from 1 to 10
for (var i = 1; i <= 10; i++) {
    // Check if the current iteration is divisible by 2
    if (i % 2 === 0) {
      continue;
    }
    
    // Log the value of the current iteration
    console.log(i);
  }