//let connection;
var KEY = {
  WASD_LEFT:  65,  //a
  WASD_RIGHT: 68,  //d
  WASD_UP:    87, //w
  WASD_DOWN:  83  //s
}
const setupInput = function (conn) {
  //connect = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    
      if (key === '\u0003') {
        process.exit();
      }
        if (key === 's') {
          
          conn.write("Move: down")
        }
        if (key === 'w') {
          conn.write("Move: up")
        }
        if (key === 'a') {
          conn.write("Move: left")
        }
        if (key === 'd') {           
          conn.write("Move: right")
        }
        process.stdout.write( key );
        
      });

  
    
  return stdin;
};
module.exports = {setupInput};