const net = require("net");
const host = '165.227.47.243';
const port = 50541;
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: host,
    port: port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("welcome to the snake game");
    conn.write(`Name: YS`)
    
})
return conn;
};

//console.log("Connecting ...");
//connect();

module.exports = {connect}