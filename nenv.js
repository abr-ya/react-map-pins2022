const fs = require("fs");
// здесь необходимо перечислить ключи из файла ENV, а точнее - из ENV netlify
fs.writeFileSync("./.env", `API_URL=${process.env.API_URL}\n`);
fs.writeFileSync("./.env", `MAP_KEY=${process.env.MAP_KEY}\n`);
