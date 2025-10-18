const fs = require("fs");

const data = fs.readFileSync("users.txt", "utf8");

const newData = data.replace(/timmy/gi, "Nerion");

fs.writeFileSync("usernames.txt", newData);
