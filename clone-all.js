const fs = require('fs');
var dir = './cloned-repos';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const { execSync } = require("child_process");

execSync("git clone -b desarrollo https://github.com/PracticaDS/pdes-tp-backend-grupo1.git cloned-repos/backend")
execSync("git clone -b desarrollo https://github.com/PracticaDS/pdes-tp-grupo1.git cloned-repos/frontend")