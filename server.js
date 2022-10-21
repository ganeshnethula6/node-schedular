const app = require('./app');
const config = require('./config.json');
app.listen(config.dev.env.port,()=>{
console.log(`The server is running in the port ${config.dev.env.port}`);
})