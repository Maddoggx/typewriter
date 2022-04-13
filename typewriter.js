const sentence = "hello there from lighthouse labs\n".split('');

let delay = 0;

  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      if (i === sentence.length - 1) {
        console.log("\n");
      }
    }, delay * 50);
    delay++
};

// Sydanny helped me with this code.