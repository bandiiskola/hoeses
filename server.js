const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws =>{
  console.log("Új kapcsolat!");


  const sendSnowFlake = () => {
    const snowflake = {
      x : Math.random() * 800,
      y : -20,
      size : Math.random() *5 +5,
      speed : Math.random() *3 +1,
    };
    ws.send(JSON.stringify(snowflake));
  };

  const intervalId = setInterval(sendSnowFlake, 200);

  ws.on('close', () => {
    clearInterval(intervalId);
  });

});