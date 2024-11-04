const fs = require('fs');

// Create "welcome.txt"
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
