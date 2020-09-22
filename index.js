let Gpio = require('onoff').Gpio //node bs 
let relayInterval = setInterval(pumpRelay, 250) //runs pump
let relay = new Gpio(4, 'out') //relay output
let moist = new Gpio(17, 'in')//sensor input
 

function pumpRelay(){ //S
     if (relay.readsync() == 0){
         relay.writesync(1);
     } else {
         relay.writesync(0);
     }
 }

 function endRelay(){
     clearInterval(blinkInterval);
     relay.writeSync(0);
     relay.unexport();
 } 

 setTimeout(endRelay, 5000);

