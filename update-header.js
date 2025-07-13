const fs = require('fs');
const path = process.argv[2];

if (!path || !fs.existsSync(path)) {
  console.error('File not found.');
  process.exit(1);
}

const now = new Date();
const pad = (n) => n.toString().padStart(2, '0');

const timestamp = `${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(now.getDate())} `
  + `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

fs.readFile(path, 'utf8', (err, data) => {
  if (err) throw err;

  const updatedLine = `/*  Updated:    ${timestamp}                                           */`;

  const newData = data.replace(
    /^\/\*\s+Updated:.*\*\/$/m,
    updatedLine
  );

  fs.writeFile(path, newData, 'utf8', (err) => {
    if (err) throw err;
    console.log(`Updated timestamp in ${path}`);
  });
});
