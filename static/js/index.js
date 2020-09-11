//https://www.eclipse.org/paho/clients/js/

function LED1() {
	alert("led on");
	console.log("led on");
	document.getElementById("LED1").innerHTML="LED1";
	message =new Paho.MQTT.Message("LED1"+" ");
	message.destinationName ="jtenoriodelgado756@gmail.com/test2";
	client.send(message);
  
}
function LED1(){	
	alert("led off");
	console.log("led off");
	document.getElementById("LED2").innerHTML="LED2";
	message =new Paho.MQTT.Message("LED2"+" ");
	message.destinationName ="jtenoriodelgado756@gmail.com/test2";
	client.send(message);
}

function ingreso(){
	alert("posible ingreso");
	console.log("ingreso");
	document.getElementById("ingresar").innerHTML="ingreso";
	message =new Paho.MQTT.Message("ingreso"+" ");
	message.destinationName ="jtenoriodelgado756@gmail.com/test2";
	client.send(message);
}




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jtenoriodelgado756@gmail.com",
    password: "teno201293",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jtenoriodelgado756@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jtenoriodelgado756@gmail.comtest1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  
