const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
      
    }, 301);
  });
  
  promise1.then((value) => {
    console.log("This will execute later",value);
    // Expected output: "foo"
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
      
    }, 300);
  });
  
  promise2.then((value2) => {
    console.log("This will execute first",value2);
    // Expected output: "foo"
  });
  
  
  
  // Expected output: [object Promise]
  