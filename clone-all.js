const fs = require('fs');
var dir = './cloned-repos';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const { execSync } = require("child_process");

execSync("git clone https://github.com/PracticaDS/2019-todos-backend cloned-repos/todos-backend")
execSync("git clone https://github.com/pablitar/2019-react-redux-todo-list cloned-repos/todos-frontend")