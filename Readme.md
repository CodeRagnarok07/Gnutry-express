
## dependencias

- https://expressjs.com/
- https://www.npmjs.com/package/bcryptjs
- https://www.npmjs.com/package/cors
- https://www.npmjs.com/package/jsonwebtoken
- https://www.npmjs.com/package/mongoose
- https://www.npmjs.com/package/morgan
- https://www.npmjs.com/package/helmet

### dependencias de desarrollo
- https://babeljs.io/docs/babel-node
- https://nodemon.io/

npm i @babel/core @babel/cli @babel/core @babel/node @babel/core @babel/preset-env nodemon -D


## comandos de npm

#### "run-babel": "babel-node src/index.js",
permite usar ECMAScript 6 en nuestro proyecto

#### "dev": "nodemon src/index.js --exec babel-node",
utiliza nodemon para ejecutar el proyecto en dev y actualizar durante la modificacion

#### "build": "babel src --out-dir build",

#### "start": "node build/index.js"