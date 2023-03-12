import app from './routes/app'
import './db'


const port = 3000

app.listen(port);
console.log(`server on port http://localhost:${port}/`);
